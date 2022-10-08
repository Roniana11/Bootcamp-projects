from fastapi import APIRouter

router = APIRouter(prefix="/dreamteam")

@router.get('/')
async def get_dream_team():
    return

@router.post('/{name}')
async def add_players():
    return

@router.delete('/{name}')
async def delete_players():
    return

#========= an option for multiple operation==============
# @router.post('/')
# async def add_players():
#     return

# @router.delete('/')
# async def delete_players():
#     return