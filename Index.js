
var name_error=document.getElementById(`name_error`);
var email_error=document.getElementById(`email_error`);
var password_error=document.getElementById(`password_error`);
var cpassword_error=document.getElementById(`cpassword_error`);
var phone_error=document.getElementById(`phone_error`);
var dob_error=document.getElementById(`dob_error`);
var sub_error=document.getElementById(`sub_error`);



function validatename(){

    var name=document.getElementById(`username`).value;

    if(name.length==0){
        name_error.innerHTML=`name is required`;
        return false;
    }

    else if(!name.match(/^[A-Za-z]+(?: [A-Za-z]+)?$/)){
        name_error.innerHTML=`invalid name !`;
        return false;
    }

    else if(name.length<3 || name.length >20){
        name_error.innerHTML=`name  must contain between 3 and 20 letters`;
        return false;
    }
    
    else {
        name_error.innerHTML=`<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }

}

function validateemail(){

    var email=document.getElementById(`email`).value;

    if(email.length==0){

        email_error.innerHTML=`email is required`;
        return false;
    }

    else if(!email.match( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/)){
        email_error.innerHTML=`invalid email !`;
        return false;
    }

    else{
        email_error.innerHTML=`<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
}

function validatepassword(){

    var password=document.getElementById(`password`).value;

    if(password.length==0){
        password_error.innerHTML=`password required`;
        return false;
    }

    else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8}$/)){
        password_error.innerHTML=`Password must Be at least 8 characters long \n- Contain at least one lowercase letter \n- Contain at least one uppercase letter \n- Contain at least one digit \n- Contain at least one special character`;
        return false;
    }

    else{
        password_error.innerHTML=`<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
    
}

function validatecpassword(){

    var cpassword=document.getElementById(`cpassword`).value;
    var password=document.getElementById('password').value;

    if(cpassword!=password){
        cpassword_error.innerHTML=`password dont match !`;
        return false;

    }
    else if(cpassword==password){
        cpassword_error.innerHTML=`<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
}


function validatephone(){
    var phone=document.getElementById(`phone`).value;

    if(!phone.match( /^[0-9]{10}$/)){
        phone_error.innerHTML=`invalid number !`;
        return false;
    }
    else{
        phone_error.innerHTML=`<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
}

function validatedob(){

    var dob=document.getElementById(`dob`).value;
    var inputdate=new Date(dob);

    currentdate=new Date;


    if(inputdate>currentdate){
        dob_error.innerHTML=`invalid date !`;
        return false;
    }

    else{
        dob_error.innerHTML=`<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }

}

function validateform(){

    if(! validatename() || !validateemail() ||!validatepassword() ||!validatecpassword() || !validatephone() || !validatedob()){
            sub_error.style.display='block';
            sub_error.innerHTML=`check the input fields`;
            setTimeout(() => {
                sub_error.style.display='none';
            }, 4000);
            return false;
    }
    else{
        alert('successfull');
        
    }
}

var showpassword = document.getElementById('show1');
var passwordfield = document.getElementById('password');

showpassword.addEventListener('click', function() {
        
    // check the current attribute
    const type = passwordfield.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordfield.setAttribute('type', type); 

    // this.classList.toggle('fa-eye-slash');
});

var showcpassword=document.getElementById(`show2`);
var cpasswordfield=document.getElementById('cpassword');


showcpassword.addEventListener('click',function(){

    // check current attribute
    const type = cpasswordfield.getAttribute('type') === 'password' ? 'text' : 'password';
    cpasswordfield.setAttribute('type', type);

})



