class Box{
 constructor(x,y,width,height){
    this.box=Bodies.rectangle(x,y,width,height,{isStatic:true});
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    World.add(world,this.box);
}   


display(){
   
    rectMode(CENTER);
    fill("red");
    rect(this.box.position.x,this.box.position.y,this.width,this.height);
    console.log(this.box.position.x, this.box.position.y,this.width,this.height);
}
}