var showPsd = document.querySelector(".show-password");
var password = document.querySelector("#password");
var username = document.querySelector("#username");
var loginBtn = document.querySelector(".login-btn");
var psdPattern = /\d/;
console.log("eefrefref");
showPsd.addEventListener("click", function () {
    if (password.type === "text") {
        password.type = "password";
    }
    else {
        password.type = "text";
    }
});
loginBtn.addEventListener("click", function () {
    if (username.value === "admin" && password.value === "admin") {
        window.location.href = "teacher_dashboard.html";
        // alert("password must have atleast\n 1.One uppercase \n 2. One lowercase \n 3. One special character \n 4. One numeric character");
    }
    else {
        alert("Enter valid Username and Password");
    }
});
