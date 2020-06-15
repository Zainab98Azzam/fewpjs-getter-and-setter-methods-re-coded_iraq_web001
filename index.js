// Add your Circle class here
 class Circle{
   constructor(radius){
     this.radius = radius
   }
   
   set diameter() {
     return this.radius * Math.PI
   }
   set area (){
     return this.radius *this.radius * Math.PI
   }
 }
 
 set 