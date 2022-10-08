from fastapi import APIRouter

router = APIRouter(prefix="/stats")

@router.get('/{name}')
async def get_stats():
    # should return stats about the player
    return