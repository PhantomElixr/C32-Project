class Ball{
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      push();
      ellipseMode(RADIUS);
      strokeWeight(3);
        stroke("black");
      ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
  };
  