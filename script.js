const header = document.querySelector(".header")
const text = document.querySelector(".header h1")
const form = document.querySelector(".form")
const input = document.querySelector("input")
const inputusername = document.querySelector(" .username")
const inputpassword = document.querySelector(".password")
const logInBtn = document.querySelector(".logInBtn")
const logOutBtn = document.querySelector(".logOutBtn")


logOutBtn.style.display = "none";

// fler användare lägg till fler användare?

const username ="fredrik";
const password ="12345";
//const username ="isabella";
//const password ="23456";



logInBtn.addEventListener("click", checkUser);
logOutBtn.addEventListener("click", logout);


logInPage

//Function to check if user and password is correct
function checkUser (){

if (inputusername.value  === username && inputpassword.value === password ){
 renderSuccsessfulUL()

}else{
 renderFailUI();
}
}




//Function loginpage
function logInPage(){
logOutBtn.style.display = "none";
}

//Function render successful UI
function renderSuccsessfulUL(){
 text.innerText = "Välkommen!"; //+användarnamn
 form.style.display = "none";
logOutBtn.style.display = "block";
}

//Function render fail UL

function renderFailUI (){
 text.innerText = "Fel användarnamn eller lösenord, försök igen!";
 input.value = "";
}

//Function to reset everything
function logout(){ //return to log in sidan 
 text.innerText = "Logga in igen!";
 logOutBtn.style.display = "none";
 form.style.display = "block"

}

console.log ("tjena")