class Parent{
    constructor(x, y, width, height, angle){

        var holder = {
            restitution: 1,
            friction: 0.7
        }

        this.body = B.rectangle(x, y, width, height, angle, holder);
        
        this.bodyImg = loadImage("sprites/base.png");

        W.add(world, this.body);
        this.width = width;
        this.height = height;

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("green");
        //rect(0,0, this.width, this.height);
        image(this.bodyImg, 0, 0, this.width, this.height);
        pop();
    }
}