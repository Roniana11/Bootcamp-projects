
class DreamTeam:
    def __init__(self):
        self.team={}

    def get(self) -> dict:
        return self.team
    
    def add_player(self,player_data: dict) -> None:
        if player_data.get("id") is None:
            raise KeyError("id does not exists")
        id= player_data["id"]
        if self.team.get(id) is not None:
            raise KeyError(f"A player with id {id} is already in the dream team")
        self.team[id] = player_data

    def remove_player(self,id: str) -> None:
        if self.team.get(id) is None:
            raise KeyError(f"A player with id {id} does not exists")
        self.team.pop(id,None)
