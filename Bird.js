class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.fifa = loadImage('sprites/smoke.png');
    this.sima = []
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var pos = [this.body.position.x,this.body.position.y]
    this.sima.push(pos)
    for(var i = 0;i<this.sima.length;i++){
      image(this.fifa,this.sima[i][0],this.sima[i][1]);
    }



  }
}
