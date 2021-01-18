class Stone{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,60,options);
        this.diameter=60;
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        ellipseMode(CENTER);
        fill(51,52,49)
       imageMode(CENTER);
        image(this.image,pos.x,pos.y,100,100);
        ellipse(pos.x,pos.y,this.width,this.height);
    }
}