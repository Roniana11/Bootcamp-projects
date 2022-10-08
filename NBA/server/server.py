from fastapi import FastAPI,HTTPException
import uvicorn

from routes import dream_team,stats
from services.nba_api import get_players 


app = FastAPI()

app.include_router(dream_team.router)
app.include_router(stats.router)

@app.get('/')
async def get_team(year: int, team: str):
    players = await get_players(year,team)
    if not players:
        raise HTTPException(status_code=404, detail="could not find players")
    return players

if __name__ =="__main__":
      uvicorn.run(app, host="0.0.0.0", port=8000)