
class DreamTeam:
    def __init__(self):
        self.team={}

    def getDreamTeam(self):
        return self.team
    
    def addPlayer(self,player_data):
        id= player_data["id"]
        if self.team.get(id) is not None:
            raise KeyError(f"A player with id {id} is already in the dream team")
        self.team[id] = player_data

    def removePlayer(self,id):
        if self.team.get(id) is None:
            raise KeyError(f"A player with id {id} does not exists")
        self.team.pop(id,None)
