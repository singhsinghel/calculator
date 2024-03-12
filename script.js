let input=document.querySelector('input');
let nums=document.querySelectorAll('.num');
let ac=document.querySelector('#Ac');
let del=document.querySelector('#Del');
let operator=document.querySelectorAll('.operation');
let equal=document.querySelector('.equal');

let operand1=0;
let operand2=0;
let operat=0;
let result=0;

ac.addEventListener('click',()=>{input.value='';
reset;});

del.addEventListener('click',()=>(input.value=input.value.slice(0,-1)));

function reset(){
    operand2=0;
    operat=0;
    operand1=result;
}


function sum(){
        operand2=input.value;
        if(operat=='*'){
            result=parseFloat(operand1) * parseFloat(operand2);

        input.value=result;
        reset;
        }
        else if(operat=='/'){
            result=parseFloat(operand1) / parseFloat(operand2);            input.value=result;
            reset;
        }
        else if(operat=='+'){
           result=parseFloat(operand1) + parseFloat(operand2);
           input.value=result;
           reset;
        }
        else if(operat=='-'){
        result=parseFloat(operand1) - parseFloat(operand2);
          input.value=result;
        reset;
        }
    
        else if(operat=='%'){
            result=(parseFloat(operand1)/parseFloat(operand2))*100;
           input.value=result;
           reset;
           }      
    }
equal.addEventListener('click',sum);
input.addEventListener('keydown',(event)=>{
    if(event.code=='Enter')
    sum();
});


for(let i=0;i<nums.length;i++){
    nums[i].addEventListener('click',function(){
      let id=  this.getAttribute('id');
        input.value+=id;                                        // to add a number directly in string
    })
    
}
for(let i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
    operand1=input.value;
    console.log(operand1);
    operat=this.getAttribute('id');
    console.log(operat);
    if(operand1==''&&this.getAttribute('id')=='-')          // to operate a minus number
    input.value=operat
    else
    input.value='';
    });
}
 
document.addEventListener('keyup', function(event) {
    
    if( event.key=='-'||event.key=='+'||event.key=='*'||event.key=='/' || event.key == '%')
    {
    console.log(event.key);
    console.log(input.value);
    operand1=input.value;
    console.log(operand1);
    input.value='';
    operat=event.key;
    console.log(operat);
}
});

   