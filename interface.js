class Interface{
    getState(){
     var positionX = database.ref('gameState')
     positionX.on("value",function(data){
         positionX = data.val()
     })
    }
    update(state){
         database.ref('/').update({
             gameState : state
         })
    }
    async start(){
        player = new Player;
        player.getCount();
        var playerCountref = await database.ref('playerCount').once("value")
        if(playerCountref.exists()){
            playerCount = playerCountref.val()
            player.getCount()
        }
        quest = new Question()
        quest.display()
    }
    play(){
        player.getPlayerInfo()
        if(allPlayers!==undefined){
            var positions = 100;
            for(var i in allPlayers){
                positions = positions+20
                fill("blue")
                textSize(20)
                text("Anwers given by others and you: ",300,100)
                fill("black")
                stroke("black")
                textSize(13);
                text(allPlayers[i].name+" : "+allPlayers[i].answer,300,positions)
            }
    }
}

}