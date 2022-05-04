function login(){
    //get the values from the form
    let inputEmail=$("#txtEmail").val();
    let inputPassword=$("#txtPassword").val();
    //get the users from LS
    let flag=false;
    //use a flag
    let userList=readUsers();//this fn is on storeManager
    for(let i=0;i<userList.length;i++){
        let user=userList[i];
        if(user.email===inputEmail && user.password===inputPassword){
            flag=true;
            window.location="users.html";
        }
        if(!flag){
            $("#alertError").removeClass("hide");
            setTimeout(function(){
                $("#alertError").addClass("hide");
            },3000);
        }
    }
}

function init(){
    $("#loginBtn").click(login);
}

window.onload=init;