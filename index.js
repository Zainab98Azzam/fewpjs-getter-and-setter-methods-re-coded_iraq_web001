// Add your Circle class here
 class Circle{
   constructor(radius){
     this.radius = radius
   }
   
   get diameter (){
     return this.radius * Math.PI
   }
   get area (){
     return this.radius *this.radius * Math.PI
   }
   get circumference (){
   return this.diameter * Math.PI
 }
  set diameter(dia) {
    this.radius = dia/2
  }

  set circumference(num) {
    this.radius =  (num/3.14)/2
  }
 }
 
 