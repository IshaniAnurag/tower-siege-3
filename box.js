class box extends baseClass{
    constructor(x,y) {
        super(x,y,30,40);
       
      }

      
      display(){
        console.log(this.visibility);
        if(this.body.speed < 3){
          super.display();
         }
         else{
           World.remove(world, this.body);
           push();
           this.visibility = this.visibility - 5;
           //tint(255,this.visibility);
           
           pop();
         }
        }
        score(){
          if(this.visibility<255 && this.visibility>0){
            score=score+10;
          
          }
        }
  
       
      }
