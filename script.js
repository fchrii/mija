const loginFrom = document.getElementById("login-from");
const loginSubmit = document.getElementById("login-submit");
const loginMsg = document.getElementById("login-eror");

loginSubmit.addEventListener("click", (e) =>
{
    e.preventDefault();
    const username = loginFrom.username.value;
    const password = loginFrom.password.value;

        if (usernam === "mija gemes" && password === "mijacantik"){
            alert("Kamu telah sukses login");
            location.reload();
        } else {
            loginMsg.style.opacity = 1;

        }
})