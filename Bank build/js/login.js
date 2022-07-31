document.getElementById('login-submit').addEventListener('click',function(){
    const emailFeild=document.getElementById('user-email');
    const userEmail=emailFeild.value;
    //user password
    const passwordFeild=document.getElementById('user-password');
    const userpassword=passwordFeild.value;
    //user password
    //sorto
    if(userEmail=='sontan@baap.com'&& userpassword=='secret'){
        window.location.href = 'banking.html';
    }
   
    //onno page nibey js
});
