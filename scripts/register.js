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
}

function init(){
    console.log("Init function");

    let user1 = new User("Ben","Vance","ben@gmail.com","test1234");
    let user2 = new User("Jason","Cerelli","jason@gmail.com","test7890");
}

window.onload=init;
