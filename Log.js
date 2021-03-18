class Log extends Parent{
    constructor(x, y, width, height, angle){
        super(x, y, width, height, angle);

        this.bodyImg = loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body, angle);
    }

}