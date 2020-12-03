var arr=[];
arr[0]='0';
arr[1]='+';
arr[2]='';
var result=0;
var reset=0;
var temp2;
var temp1;
var flag=0;

function getvalue(operand)
{
  if(reset==1)
  { 
    arr[2]="";
    arr[0]=0;
    arr[1]='+';
    reset=0;
  }
    arr[2]+=operand;
    console.log(arr[2]);
	  document.getElementById('res').value=arr[2];
 
}
function solve(operator)
{ 
  
  
    var result1;
    results();
    arr[2]=''; 
    arr[0]=result;  
    arr[1]=operator;
    document.getElementById('res').value=arr[0]+arr[1];
    reset=0;
    
}

function results()
{ 
    temp1=parseFloat(arr[0]);
    console.log(temp1);
    temp2=parseFloat(arr[2]);
    console.log(temp2);
    console.log(arr[1]);
	  switch(arr[1])
	    {

       case "+":
             result=temp1+temp2;
              console.log(result);
             break;
       case "-":
             result=temp1-temp2;
          
             break;
        case "*":
             result=temp1*temp2;
           
             break;
         case "/":
             result=temp1/temp2;
             
             break;

         default:
            break;
        }

     
 }
 function clears()
{ 
  document.getElementById('res').value="";
  arr[0]=0;
  arr[1]='+';
  arr[2]='';

}

 function equal()
 {
    results();
    arr[2]=result; 
    document.getElementById('res').value=arr[2];
    arr[0]=0;
    reset=1;
    arr[1]='+';

 }
function back()
{
  // debugger;
  if(arr[2]!=="")
  { 
    arr[2]=arr[2].toString();
    arr[2]=arr[2].slice(0,-1);
    document.getElementById('res').value=arr[2];
    reset=0;
    
  }
  else if (arr[2].length==1)
  {
    arr[2]="";
    document.getElementById('res').value=arr[2];
  }
  else if(arr[1]!=="")
  {
    arr[1]=arr[1].slice(0,-1);
    document.getElementById('res').value=arr[0];
    arr[2]=arr[0];
    arr[0]=0;
    arr[1]=operator;
  
  }
  else if(arr[0]!=="")
  {
    arr[0]=arr[0].slice(0,-1);
    document.getElementById('res').value=arr[0];
    arr[2]=arr[0];
  }
  else if(arr[0].length=1)
  {
    arr[0]=0;
    document.getElementById('res').value=arr[0];
  }
}	

