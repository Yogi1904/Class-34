class Box {
    constructor(x,y,width,height) {
      
      this.body = Bodies.rectangle(x,y,50,50);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle

      push()
      translate(pos.x, pos.y);
      rotateAngle(angle);
      pop()

      rectMode(CENTER);
      fill("green");
      rect(0, 0, 50, 50);
    }
  };