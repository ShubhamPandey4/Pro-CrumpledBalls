class Dustbin{
      constructor(x,y,width,height){
      var options={

          isStatic:true
        
      }
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options);
      World.add(world, this.body);
    }
      display()
      { 
     var dustbinpos=this.body.position;
     push()
     rectMode(CENTER);
     strokeWeight(0);
     fill(200,0,200);
     rect(dustbinpos.x, dustbinpos.y, this.width, this.height);
     pop()
 }
}