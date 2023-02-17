const footer=document.querySelector("footer") as HTMLElement

const showPsd=document.querySelector(".show-password") as HTMLImageElement
const password=document.querySelector("#password") as HTMLInputElement
const username=document.querySelector("#username") as HTMLInputElement
const loginBtn=document.querySelector(".login-btn") as HTMLInputElement

showPsd.addEventListener("click",()=>{
    if(password.type==="text"){
        password.type="password";
    }
    else{
        password.type="text";
    }
});
loginBtn.addEventListener("click",()=>{
    if(username.value==="admin" && password.value==="admin"){
        window.location.href="teacher_dashboard.html"
        // alert("password must have atleast\n 1.One uppercase \n 2. One lowercase \n 3. One special character \n 4. One numeric character");
    }
    else{
        alert("Enter valid Username and Password")
    }
});