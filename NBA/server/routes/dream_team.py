from fastapi import Request,HTTPException
from fastapi import APIRouter
import json

router = APIRouter()

from models.dream_team_model import DreamTeam 
team = DreamTeam()

@router.get('/',status_code=200)
def get_dream_team():
    team_dict = team.getDreamTeam()
    return json.dumps(list(team_dict.values()))

@router.post('/', status_code=201)
async def add_player(request: Request):
    try:
        player_data = await request.json()
        team.addPlayer(player_data)
        return {"player": player_data}
    except KeyError as e:
        raise HTTPException(status_code=400, detail= e.args[0])
    except:
        raise HTTPException(status_code=500, detail="something went wrong")


@router.delete('/{id}',status_code=204)
def delete_player(id):
    try:
        team.removePlayer(id)
    except KeyError as e:
        raise HTTPException(status_code=404, detail= e.args[0])
    except:
        raise HTTPException(status_code=500, detail="something went wrong")
