function doubleIt(num){
    const result=num*2;
    return result;

}


const fiveDouble=doubleIt(5);
const severDouble=doubleIt(7);





function getInputValue(inputId){
    const inputField=document.getElementById(inputId);
    const inputAmountText=depositInput.value;
    const amountValue=parseFloat(depositAmountText);
     //clear field
    depositInput.value='';
    
    return amountValue;



    
    
}

function updateTotalField(toatalFeildId,amount){
    const totalElement=document.getElementById(toatalFeildId);
    const totalText=totalElement.innerText;
    const previousDepositTotal=parseFloat(depositTotalText);
    

   
    totalElement.innerText=previousTotal+amount;




}


function getCurrentBlance{
   const blanceTotal=document.getElementById('blance-total');
    const blanceTotalText=blanceTotal.innerText;
    const previousBlanceTotal=parseFloat(blanceTotalText);
    return previousBlanceTotal;
}
function updateBlance(depositAmount,isAdd){
    //const blanceTotal=document.getElementById('blance-total');
    //const blanceTotalText=blanceTotal.innerText;
    //const previousBlanceTotal=parseFloat(blanceTotalText);
   // blanceTotal.innerText=previousBlanceTotal+depositAmount;
   const previousBlanceTotal=getCurrentBlance();
    if(isAdd==true){
        blanceTotal.innerText=previousBlanceTotal+depositAmount;
    }
    else{
        blanceTotal.innerText=previousBlanceTotal-depositAmount;

    }

}

















document.getElementById('deposit-button').addEventListener('click',function(){
    /*const depositInput=document.getElementById('deposit-input');
    const depositAmountText=depositInput.value;
   const depositAmount=parseFloat(depositAmountText);*/
   updateTotalField('deposit-total',depositAmount);


   //get deposit
    /*  const depositTotal=document.getElementById('deposit-total');
    const depositTotlText=depositTotal.innerText;*/

    const depositAmount=getInputValue('deposit-input');
    //get and update deposit total
    

    //const previousDepositTotal=parseFloat(depositTotal);

    //const depositTotalText=depositTotal.innerText;
    //depositTotal.innerText= depositTotalText+depositAmount;*/
    //update blance
    const blanceTotal=document.getElementById('balance-total');
    
    const blanceTotalText=blanceTotal.innerText;
    const previousBlanceTotal=parseFloat(blanceTotalText);

    depositTotal.innerText=previousDepositTotal+depositAmount;
    

});
//handle withdraw button

document.getElementById('withdraw-button').addEventListener('click',function(){


    //const withdrawAmountText=withdrawInput.value;
   // const withdrawAmount=parseFloat(withdrawAmountText);

  

    //update withdraw total
   // const withdrawTotal=document.getElementById('withdraw-total');
    //const withdrawTotalText=withdrawTotal.innerText;
    //const previousWithdrawTotal=parseFloat(previousWithdrawTotalText);
    updateBlance(depositAmount,true);


    ///withdrawTotal.innerText=previousWithdrawTotal+withdrawAmount;
   
    //update blance after withdraw
   // const blanceTotal=document.getElementById('blance-toatal');
   //const  blanceTotalText=blanceTotal.innerText;
   //const previousBlanceTotal=parseFloat(blanceTotalText);
   //blanceTotal.innerText=previousBlanceTotal-withdrawAmount;
   const withdrawAmount=getInputValue('withdraw-input');
   const currentBlance=getCurrentBlance();
   if(depositAmount>0&&withdrawAmount<currentBlance){

    updateTotalField('withdraw-total',withdrawAmount);

    updateBlance(withdrawAmount,false);
 
   
   }
   if(withdrawAmount>currentBlance){
    console.log('not enough money')

   }
  




    //clear field
    withdrawInput.value='';



});

