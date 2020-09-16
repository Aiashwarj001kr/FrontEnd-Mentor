const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("btn-submit");

function checkRequired(input) {
    if (input.value.trim() == '')
        setError(input,`* ${input.placeholder} required`);
    else
        setSuccess(input);
}

function setError(input,message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	small.innerText = message;
	formControl.className = "form-controls error";
}

function setSuccess(input){
	const formControl = input.parentElement;
	formControl.className = "form-controls success";
}

function isEmail(email){
	return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

firstname.addEventListener("input", ()=>{
    checkRequired(firstname);
});

lastname.addEventListener("input", ()=>{
    checkRequired(lastname);
});

email.addEventListener("input", ()=>{
    const emailValue = email.value.trim();
    if(emailValue == ''){
        setError(email,"* Email required");
    }else if(!isEmail(emailValue)) {
        setError(email,"* Invalid Email");
    } else {
        setSuccess(email);
    }
});

password.addEventListener("input", ()=>{
    checkRequired(password);
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    checkRequired(firstname);
    checkRequired(lastname);
    checkRequired(email);
    checkRequired(password);
});

