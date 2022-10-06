const header = document.querySelector(".header")
const text = document.querySelector(".header h1")
const form = document.querySelector(".form")
const input = document.querySelector("input")
const inputusername = document.querySelector(" .username")
const inputpassword = document.querySelector(".password")
const logInBtn = document.querySelector(".logInBtn")
const logOutBtn = document.querySelector(".logOutBtn")

logOutBtn.style.display = "none";

const users = [
 {
  username: "Fredrik",
  password: "12345",
 },
 
 {
  username: "Isabella",
  password: "23456",
 }
]

 //Hämta från LS och kolla om man är inloggad
function init(){
if (localStorage.getItem("username")){
renderSuccsessfulUL();
 }
}

init();

//All users saved in localStorage
if (!localStorage.getItem("users")){
localStorage.setItem ("users", JSON.stringify(users))
}

//
logInBtn.addEventListener("click", checkUser);
logOutBtn.addEventListener("click", logout);

//Function to check if user and password is correct
function checkUser (){

for(const user of users){

if (inputusername.value  === user.username && inputpassword.value === user.password ){
  localStorage.setItem ("username",user.username)
  renderSuccsessfulUL()

 return
 } 
}
renderFailUI();
}

//Function loginpage
function logInPage(){
logOutBtn.style.display = "none";
}

//Function render successful UI
function renderSuccsessfulUL(){
 const loggedInUser = localStorage.getItem ("username")
 text.innerText = "Välkommen " + loggedInUser + " !"
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
 localStorage.removeItem ("username")
}
