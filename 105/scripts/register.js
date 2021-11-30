console.log("User register");

class User{
    constructor(email,password,fname,lname,age,address,phone,selPayment,color){
        this.email=email;
        this.password=password;
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.selPayment=selPayment;
        this.color=color;
    }
}



function isValid(user){
    // return false when the user is not valid
    // return true when the user is valid
    let valid = true;
    //We reset the original apperance all inputs
    //  by removing the error class (see style.css) 
    $('input').removeClass('error');
    if(user.fname.length == 0){
       //if we get here then the first name has not a valid value
       valid = false;
       //We add this error class (check css file) if the first name is not valid
       $("#fname").addClass('error');
    }
    if(user.lname.length == 0){
        //is not a valid value
        $("#lname").addClass('error');
        valid = false;
    }
    if(user.password.length == 0){
        //is not a valid value
        $("#password").addClass('error');
        valid = false;
     }
     if(user.email.length == 0){
         //is not a valid value
         $("#email").addClass('error');
         valid = false;
    }
    return valid;
}



function registerUser(){
    let email = $("#email").val();
    let password = $("#password").val();
    let fname = $("#fname").val();
    let lname = $("#lname").val();
    let age = $("#age").val();
    let address = $("#address").val();
    let phone = $("#phone").val();
    let selPayment = $("#selPayment").val();
    let color = $("#color").val();
    console.log(email,password,fname,lname,age,address,phone,selPayment,color);

    let user = new User (email,password,fname,lname,age,address,phone,selPayment,color);
    console.log(user);
    if(isValid(user)){
        //$('#usersTable').append(createRow(user));
        console.log(user);
        saveUser(user);
    }
    clearInputs();
}

function clearInputs(){
    $('#fname').val("");
    $('#lname').val("");
    $('#age').val("");
    $('#address').val("");
    $('#phone').val("");
    $('#selPayment').val("");
    $('#color').val("");
    $('#email').val("");
    $('#password').val("");
}

function init(){
    console.log("Init function");

}

window.onload = init;