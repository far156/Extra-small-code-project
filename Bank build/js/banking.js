//handle deposite button handler
document.getElementById('deposit-button').addEventListener
('click',function(){

    //amount deposited
    const depositInput=document.getElementById('deposite-input');
    const newdepositAmountText=depositInput.value;
    const newdepositAmount=parseFloat(newdepositAmountText);
    const depositTotal=document.getElementById('deposit-total');
    const previousDepositText=depositTotal.innerText;
    const previousDepositAmount=parseFloat(previousDepositText);
    const newDepositTotal=parseFloat(previousDepositAmount+newdepositAmount);
    depositTotal.innerText=newDepositTotal;
    //update account blance
    const blanceTotal=document.getElementById('blance-total');
    const blanceTotalText=blanceTotal.innerText;
    const previousBlanceTotal=
    parseFloat(blanceTotal);
    const newBlanceTotal=previousBlanceTotal+newdepositAmount;












    //clear deposit input feild
    

depositInput.value='';

});
//handle withdraw event
ocument.getElementById('withdraw-button').addEventListener
('click',function(){

    
    const withdrwInput=document.getElementById('withdraw-input');
    const withdrawText=withdrawInput.value;
    const newwithdrawAmount=parseFloat(newdepositAmountText);
    console.log(newWidthDrawAmount);
    
    //set withdraw total
    const withdrawTotal=document.getElementById('withdraw-total');
    const previousWithdrawText=withdrawTotal.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawText);
    const newWidthDrawTotal=previousWithdrawTotal+newwithdrawAmount;
    withdrawTotal.innerText=newWidthDrawTotal;

    //update
    const blanceTotal=document.getElementById('blance-total');
    const previousBlanceText=blanceTotal.innerText;
    const previousBlanceTotal=
    parseFloat(blanceTotal);
    const newBlanceTotal=previousBlanceTotal-newdepositAmount;


blanceTotal.innerText=newBlanceTotal;
   

widthdrawtInput.value='';


})