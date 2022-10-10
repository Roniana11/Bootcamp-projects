from msilib.schema import Error
import requests

async def get_players(year,team):
    # try:
    teams = await fetch_data(year,'teams')
    players = await fetch_data(year,'players')
    team_id = get_team_id(teams,team)
    team_players = [player for player in players if player["teamId"] == team_id]
    
    return team_players
    # except KeyError:

    # except Exception as e:
    #     print(e["message"])
    #     raise e


async def fetch_data(year,data):
        res = requests.get(url= f'https://data.nba.net/10s/prod/v1/{year}/{data}.json')
        if res.status_code == 404:
            raise Exception("There is no information for that specific year")
        return res.json()["league"]["standard"]


def get_team_id(teams,team_name):
    id = next((team["teamId"] for team in teams if team["urlName"] == team_name), None)
    if id is None:
        raise KeyError("Team does not exists")
    
    return id
