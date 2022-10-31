from fastapi import FastAPI,HTTPException
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from typing import Union
from fastapi.staticfiles import StaticFiles

from routes import dream_team,stats
from services.nba_api import get_players 


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(dream_team.router, prefix="/dreamteam")
app.include_router(stats.router,prefix="/stats")

@app.get('/',status_code=200)
async def get_team(year: int, team: str,filter: Union[str, None] = None) -> list:
    try:
        players = await get_players(year,team)
        if filter:
            players = [player for player in players if player[filter]] 
        return players
    except KeyError as e:
        raise HTTPException(status_code=400, detail= e.args[0])
    except Exception as e:
        raise HTTPException(status_code=404, detail=e.args[0])
    except:
        raise HTTPException(status_code=500, detail="something went wrong")

# app.mount("/", StaticFiles(directory="client", html=True), name="client")

if __name__ =="__main__":
      uvicorn.run(app, host="0.0.0.0", port=8000)