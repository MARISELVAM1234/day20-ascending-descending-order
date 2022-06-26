let a = parseInt(window.prompt());
let b = parseInt(window.prompt());
let c = parseInt(window.prompt());
console.log("a is" , a ,"b is" ,b ,"c is", c);
if (a<b){
   if(a<c){
       if(b<c){
          console.log(a,b,c);
       }
       else{
          console.log(a,c,b);
       }
      }
   else{
      console.log(c,a,b);
   
   }
}
else if(b<c){
    if(c<a){
     console.log(b,c,a);
   }
   else{
      console.log(b,a,c);
   }
}
else {
   console.log(c,b,a);
}


   
   


     
