class Ground{
    constructor(x, y, width, height){

        var holder = {
            restitution: 1,
            friction: 0.7,
            isStatic: true
        }

        this.body = B.rectangle(x, y, width, height, holder);
        
        this.bodyImg = loadImage("sprites/ground.png");

        W.add(world, this.body);
        this.width = width;
        this.height = height;

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("brown");
        //rect(0,0, this.width, this.height);
        image(this.bodyImg, 0, 0, this.width, this.height);
        pop();
    }
}