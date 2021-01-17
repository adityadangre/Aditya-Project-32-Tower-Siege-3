class Polygon{
    constructor(x,y){
       var options={
         isStatic:false,
         restitution:1.0,
         friction:1.0,
         density:0.5
       }
       this.body = Matter.Bodies.polygon(x, y, 20, 20, options);
       this.width=width;
       this.height=height;
       this.polygon = loadImage("polygon.png");
       World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.polygon,pos.x,pos.y,50,50);
        pop();
    }
}
