let email = document.querySelector(".email")
let submit = document.querySelector(".button")
let notice = document.querySelector(".red")
let success = document.querySelector(".success")
let main = document.querySelector(".main")
email.addEventListener("input", () => {
    let userEmail = email.value
    if(userEmail.length < 5){
        email.style.border = "2px solid red";
    }
    else{
        email.style.border = "1px solid black";
    }
});
// event listerner for submitting
submit.addEventListener("click", (e) =>{
    let userEmail = email.value
    const regex = /@gmail\.com$/;
    if(regex.test(userEmail)){
        email.style.border = "1px solid black";
        notice.style.display = "none"
        success.style.display = "block"
        main.style.display = "none";
    }
    else{
        email.style.border = "1px solid red";
        notice.style.display = "block"
        e.preventDefault();
    }
})