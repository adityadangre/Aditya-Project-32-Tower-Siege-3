class Block{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:0.1
        }
        this.body=Bodies.rectangle(x,y,30,40,options);
        this.width=width;
        this.height=height;
        this.visiblity=225;
  
        World.add(world,this.body);
    }

    display(){
        if(this.body.speed<3){
          var pos =this.body.position;
          push();
          rectMode(CENTER);
          stroke ("white");
          strokeWeight(4);
          rect(pos.x, pos.y, 30, 40);
          pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.visiblity=this.visiblity-5;
          tint(255,this.visiblity);
          rect(this.body,this.body.position.x,this.body.position.y,50,50);
          pop();
        }
      }

      score(){
        if(this.visiblity<0 && this.visiblity>-105){
          score++;
        }
      
      }
  }