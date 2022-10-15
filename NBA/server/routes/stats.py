from fastapi import APIRouter,HTTPException
from services.nba_api import fetch_stats

router = APIRouter()

@router.get('/',status_code=200)
async def get_stats(last_name: str, first_name: str):
    try:
        stats = await fetch_stats(last_name,first_name)
        return {"stats": stats}
    except Exception as e:
        raise HTTPException(status_code=404, detail= e.args[0])
    except:
        raise HTTPException(status_code=500, detail="something went wrong")
