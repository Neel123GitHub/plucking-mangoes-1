class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body=Bodies.circle(x,y,30,options);
        this.diameter=30;
        this.image=loadImage("mango.png")
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        imageMode(CENTER);
        fill(244,187,70)
        stroke(244,187,70)
        image(this.image,pos.x+20,pos.y,60,60)
        circle(pos.x,pos.y,this.diameter);
    }
}