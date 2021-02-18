class Paper extends BaseClass{
    constructor(x,y){
      var options = {
         restitution:0.3,
         friction:0.5,
         density:1.2
     }
      super(x,y,50,50);
      this.image = loadImage("paper.png");
    }
}