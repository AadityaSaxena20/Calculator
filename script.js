let string= "";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
         console.log(e.target); 
         if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
         }
         else if(e.target.innerHTML=='AC'){
            string=""
            document.querySelector('input').value=string;
         }
         else if(e.target.innerHTML=='+/-'){
            if (document.querySelector('input').value !== "" && !isNaN(document.querySelector('input').value)) {
                string= (-parseFloat(document.querySelector('input').value)).toString();
                document.querySelector('input').value=string;
            }
        }
        else if(e.target.innerHTML=='%'){
            string=  document.querySelector('input').value/100;
            document.querySelector('input').value=string;
         }
         else{
         string = string + e.target.innerHTML;
         document.querySelector('input').value=string;
         }
    })
})