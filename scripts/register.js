class User {
    constructor(fname, lname, email, password, gender, age, phone, address, payment) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.age = age;
        this.phone = phone;
        this.address = address;
        this.payment = payment;
    }
}

function isValid(user){
    let valid=true;
    $("input").removeClass("input-error");
    if(user.email.length==0){
        valid=false;
        console.log("Add an email");
        $("#txtEmail").addClass("input-error");
    }
    if(user.password.length==0){
        valid=false;
        console.log("Add a password");
        $("#txtPassword").addClass("input-error");
    }
    return valid;
}

//good up to here//

function validatePass(){
    console.log("validating pass");
    //get the value from the input
    let txtPass=$("#txtPassword");
    let password=txtPass.val();
    if(password.length<6){
        txtPass.css("background","#ff9898");
    }
    else{
        txtPass.css("background","#64ce66");
    }
}

function register(){
    let inputfName = $("#txtFirstName").val();
    let inputlName = $("#txtLastName").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputGender = $("#txtGender").val();
    let inputAge = $("#txtAge").val();
    let inputPhone = $("#txtPhone").val();
    let inputAddress = $("#txtAddress").val();
    let inputPayment = $("#txtPayment").val();
    let inputColor = $("#txtColor").val();

    let newUser = new User(inputfName,inputlName,inputEmail,inputPassword,inputGender,inputAge,inputPhone,inputAddress,inputPayment,inputColor);

    console.log(newUser);

    if(isValid(newUser)){
        console.log(newUser);
        saveUser(newUser);
    }
}

function init(){
    console.log("Register");
    $("#txtPassword").keyup(validatePass);
}

window.onload=init;

