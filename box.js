class Box{

    constructor(x,y,width,height){
       
       
       this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.alpha = 255
        }
       
       display(){

       
       
       if(this.body.speed<3){
        var pos = this.body.position;
        rectMode(CENTER);

        rect(pos.x,pos.y,this.width,this.height);
       }else{

       World.remove(world,this.body);
       push()
       tint (255,this.alpha);
       this.alpha = this.alpha-3;
       
       pop ()
       }
       

       
       
       }
       
        }   