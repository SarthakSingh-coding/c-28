class SlingShot{
   constructor(bodyA, pointB){

    var options={
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.5,
        length: 15
    }

    this.pointB = pointB;
    this.sling = C.create(options);
    W.add(world, this.sling);
   
   }

   displaySling(){
       if(this.sling.bodyA){
        var posA = this.sling.bodyA.position;
        var posB = this.pointB;
    
        strokeWeight(4);
        line(posA.x, posA.y, posB.x, posB.y);
       }
    
   }
   fly(){
       this.sling.bodyA = null;
   }
}