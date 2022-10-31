import json
import requests

data_types_for_api = {"TEAMS": "teams", "PLAYERS":"players"}

async def get_players(year:str,team_name:str) -> list:
    teams = await fetch_data(year,data_types_for_api["TEAMS"])
    players = await fetch_data(year,data_types_for_api["PLAYERS"])
    team_id = get_team_id(teams,team_name)
    team_players = [player for player in players if player["teamId"] == team_id]
    
    return team_players

async def fetch_data(year:str,data:str) -> list:
        res = requests.get(url= f'https://data.nba.net/10s/prod/v1/{year}/{data}.json')
        if res.status_code == 404:
            raise Exception("There is no information for that specific year")
        data = res.json()
        if data.get("league") is None or data.get("league").get("standard") is None:
            raise Exception("Something went wrong")
        
        return data["league"]["standard"]


def get_team_id(teams: list,team_name: str) ->str:
    id = next((team["teamId"] for team in teams if team["urlName"] == team_name), None)
    if id is None:
        raise KeyError("Team does not exists")
    
    return id

async def fetch_stats(last_name: str,first_name: str) -> dict:
        res = requests.get(url= f'https://nba-players.herokuapp.com/players-stats/{last_name}/{first_name}')
        try:
            data = json.loads(res.text)
            return data
        except:
            raise Exception("There is no information for that specific player")
        