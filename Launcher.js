class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stifness:0.004,
            length:10
        }
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }
    release(){
        this.launcher.bodyA=null
    }
    
    attach(body){
        this.launcher.bodyA=body;
    }
    display(){
        if(this.launcher.bodyA){
            var pointA=this.launcher.bodyA.position
            var pointB=this.launcher.pointB
            stroke(0)
            strokeWeight("grey");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}
