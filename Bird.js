class Bird extends Parent{
    constructor(x, y, width, height){
        super(x, y, width, height);

        this.bodyImg = loadImage("sprites/bird.png")
    }

    displayBird(){
        // this.body.position.x = mouseX;
        // this.body.position.y = mouseY;
        super.display();
    }
}