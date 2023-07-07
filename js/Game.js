class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;
    cars = [car1, car2]
  }

  play() {
    this.handleElements();
    Player.getPlayersInfo();
    if (allPlayers !== undefined) {
      image(track,0,-height*5,width,height*6)

      console.log(allPlayers)



      this.handlePlayerControls();
      drawSprites();

    }
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  handlePlayerControls(){
    if(keyIsDown(UP_ARROW)){
      player.positionY+= 10
      player.update()
    }

  }
}