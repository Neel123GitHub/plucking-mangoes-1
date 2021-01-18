class Tree{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,25,300,options);
        this.width=25;
        this.height=300;
        this.image=loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER);
        image(this.image,350,120,500,600);
        rect(pos.x,pos.y,this.width,this.height);
    }
}