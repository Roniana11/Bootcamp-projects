

class players{

    async fetchPlayers(teamName: string, year: number){
        $.ajax({
            method:"GET",
            url: `http://localhost:8000/images/?year=${year}&team=${teamName}`,
            success: function (data) {
     //continue here!!!!!!!!!!!!!!!!
                }
        })
    }
}