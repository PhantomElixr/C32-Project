class Brick{
    constructor(x,y){
        var Options = {
            restitution: 0.5,
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,50,50,Options);
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }

    display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,50,50);
        pop();

        if(this.body.velocity.x > 1 && this.body.velocity.x < 10){
            score++
        }
    }
}