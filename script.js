let frName = document.getElementById("frname");
let lName = document.getElementById("lname");
let email = document.getElementById("email");
let messages = document.getElementById("messages");
let submit = document.getElementById("submit");
let enquiry = document.getElementById("enquiry").checked;
let request = document.getElementById("request").checked;
let check = document.getElementById("check");


// let form = document.getElementsById("form").value;
// console.log( submit );

// let form = frName + lName + email + messages;
// console.log(form);
// function submitData(frName, lName, email, messages, enquiry, request, check){
//     let firstName = frName.value
// }
// submit.onclick = function submitData(){
//     let form = {
//         frName: frName.value,
//         lName: lName.value,
//         email: email.value,
//         messages: messages.value,
//         enquiry: enquiry.value,
//         request: request.value,
//         check: check.value,
//     }
//     console.log(form);
// }

let formData = [];
// submit.onclick = function() {
//     let newForm = {
//         frName:frName.value,
//         lName:lName.value,
//         email:email.value,
//         messages:messages.value,
//         enquiry:enquiry.value,
//         request:request.value,
//         check:check.value,
//     }
//     console.log('test');
//     // formData.push(newForm);
// }

console.log(formData);
function saveData(e){
    e.preventDefault();
console.log(enquiry, request);
        let newForm = {
            frName:frName.value,
            lName:lName.value,
            email:email.value,
            messages:messages.value,
            enquiry:enquiry.value,
            request:request.value,
            check:check.value,
        }
        console.log(newForm);
        formData.push(newForm);
    }
submit.addEventListener('click' , saveData)