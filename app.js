//Sign up form



document.querySelector(".closeBtn").addEventListener("click", function(){
	document.querySelector(".signup").style.display = "none";
})

function showSignUpForm() {
	const signUpForm = document.querySelector('.signup');
	signUpForm.style.display = 'flex';
}

function validate() {
	var name = document.getElementsByName('name')[0].value;
	var email = document.getElementsByName('email')[0].value;
	var password = document.getElementsByName('password')[0].value;
	
	if (name == "" || email == "" || password == "") {
		alert("All fields must be filled out");
		return false;
	}
	else {
		alert("Thank you for signing up");
	}
}





