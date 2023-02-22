

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  

function clearTextField(){
    event.preventDefault();

    let name = document.getElementById("name");
    let surname = document.getElementById("sirname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmP = document.getElementById("confirm");
    name.value  = "";
    surname.value  = "";
    email.value  = "";
    password.value  = "";
    confirmP.value  = "";
}

function  validate(){
    event.preventDefault();

  
    let indicators = document.getElementById("validatorIndicator").getElementsByTagName('p');
    let name = document.getElementById("name").value;
    let surname = document.getElementById("sirname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmP = document.getElementById("confirm").value;

    indicators[0].textContent = "";
    indicators[1].textContent = "";
    indicators[2].textContent = "";
    indicators[3].textContent = "";
    indicators[4].textContent = "";
      
    let temp = true;;


    console.log("hello console");
    console.log(indicators[0]);
    if(name === "" || name === null){
        indicators[0].textContent = "* please enter name"
        indicators[0].focus;
        temp = false;
    }
    if(surname === "" || surname === null){
        indicators[1].textContent = "* please enter surname"
        temp = false;
    }

    if(email === null || email === ""){
        indicators[2].textContent = "* please enter email address"
        temp = false;
    }
    else if(!validateEmail(email)){
        indicators[2].textContent = "* please enter valid email address"
        temp = false;
    }

    if(password == null || password == ""){
        indicators[3].textContent = "* please enter password";
        temp = false;
    }

    
    if(confirmP == null || confirmP == ""){
        indicators[4].textContent = "* please enter password";
        temp = false;
    }

    if((password != null && confirmP != null) && password != confirmP){
        indicators[4].textContent = "* passwords doesnot match"
        temp = false;
    }
    if(temp){
        alert('form submitted');
    }

  

}