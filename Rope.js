class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.rope = Matter.Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.rope);
       }

       attach(body){
        this.rope.bodyA=body;
    }
    
       fly(){
        this.rope.bodyA=null;
    }

    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(5);
        stroke("red");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }  
}