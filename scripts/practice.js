// //bad practice
// document.getElementById("txtEmail");

// document.getElementById("txtEmail").value="";

// //best practice
// let email=document.getElementById("txtEmail");

// email.value="hello";
// console.log(email);

email=$("#txtEmail").val();
console.log(email);

// let formControl = document.getElementsByClassName("form-control");
// for(let i=0;i<formControl.length;i++){
//     formControl[i].style.display="none";
// }

let formControl = $(".form-control");
formControl.hide();

// let inputs = document.getElementsByTagName("label");
// console.log(labels);
let labels = $("label");
console.log(labels);