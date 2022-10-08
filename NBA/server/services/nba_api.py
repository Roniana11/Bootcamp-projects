import requests

async def get_players(year,team):
    teams = await fetch_data(year,'teams')
    players = await fetch_data(year,'players')

    if not (players or teams):
        return {"Message": "Object not found."}
    else:
        team_id = get_team_id(teams,team)
        team_players = [player for player in players if player["teamId"] == team_id]
        
        return team_players

async def fetch_data(year,data):
    try:
        res = requests.get(url= f'https://data.nba.net/10s/prod/v1/{year}/{data}.json')
        return res.json()["league"]["standard"]
    except Exception as e:
        #check what kind of error and return the message
        print(e)

def get_team_id(teams,team_name):
    id = next((team["teamId"] for team in teams if team["teamShortName"] == team_name), None)
    if id is None:
        raise NameError("team does not exists")
    
    return id
