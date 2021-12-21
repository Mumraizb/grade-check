function calculate(){
   let obtmarks= document.getElementById("obtained-marks").value;
         let totalmarks= document.getElementById("total-marks").value;
         let total= +obtmarks/+totalmarks*100 +"%";
         //document.getElementById("result").innerText= parseInt(total);
         if(parseInt(total) >100){
         alert("invalid");
         }
      
       else if(parseInt(total) >=85){
         let b= "Your percentage is"+ total; 
        let a= "Your CGPA is 4.0 with grade A+"
        document.getElementById("result").innerText= b;
         document.getElementById("grade").innerText= a;
    }
    else if(parseInt(total) >=80){
      let b= "Your percentage is"+ total; 
        let a= "Your CGPA is 3.5 with grade A"
        document.getElementById("result").innerText= b;
         document.getElementById("grade").innerText= a;
    }
    else if(parseInt(total) >=75){
      let b= "Your percentage is"+ total; 
        let a= "Your CGPA is 3.0 with grade B+"
        document.getElementById("result").innerText= b;
         document.getElementById("grade").innerText= a;
   }
   else if(parseInt(total) >=70){
      let b= "Your percentage is"+ total; 
        let a= "Your CGPA is 2.5 with grade B"
        document.getElementById("result").innerText= b;
         document.getElementById("grade").innerText= a;
   }
   else if(parseInt(total) >=65){
      let b= "Your percentage is"+ total; 
        let a= "Your CGPA is 2.0 with grade B-"
        document.getElementById("result").innerText= b;
         document.getElementById("grade").innerText= a;
   }
   else if(parseInt(total) >=60){
      let b= "Your percentage is"+ total; 
        let a= "Your CGPA is 1.5 with grade C+"
        document.getElementById("result").innerText= b;
         document.getElementById("grade").innerText= a;
   }
   else if(parseInt(total) >=55){
      let b= "Your percentage is"+ total; 
        let a= "Your CGPA is 1.25 with grade C"
        document.getElementById("result").innerText= b;
         document.getElementById("grade").innerText= a;
   }
   else if(parseInt(total) >=50){
      let b= "Your percentage is"+ total; 
        let a= "Your CGPA is 1.0 with grade D"
        document.getElementById("result").innerText= b;
         document.getElementById("grade").innerText= a;
   }
   else if(parseInt(total) <49){
       let a= "You are FAIL";
       document.getElementById("grade").innerText= a;
   }else{
      alert("Entery");
   }
  
}
