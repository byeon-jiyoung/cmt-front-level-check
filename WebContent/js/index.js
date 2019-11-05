/**
 * 
 */
function displayNone(style) {
	document.getElementById("fName").style.display = style;
	document.getElementById("lName").style.display = style;
	document.getElementById("uName").style.display = style;
	document.getElementById("country").style.display = style;
	document.getElementById("state").style.display = style;
	document.getElementById("zip").style.display = style;
	document.getElementById("check").style.display = style;
	document.getElementById("noc").style.display = style;
	document.getElementById("ccn").style.display = style;
	document.getElementById("exp").style.display = style;
	document.getElementById("cvv").style.display = style;
	for(var i=0; i<document.getElementsByClassName("pass").length; i++) {
		document.getElementsByClassName("pass")[i].style.borderColor="#28a745";
		document.getElementsByClassName("pass")[i].style.color="#28a745";
	}
}

function resetForm() {
	document.baForm.fName.value = "";
	document.baForm.lName.value = "";
	document.baForm.uName.value = "";
	document.baForm.email.value = "";
	document.baForm.address.value = "";
	document.baForm.address2.value = "";
	document.baForm.country.selectedIndex = 0; //select
	document.baForm.state.selectedIndex = 0; //select
	document.baForm.zip.value = "";
	document.baForm.noc.value = "";
	document.baForm.ccn.value = "";
	document.baForm.exp.value = "";
	document.baForm.cvv.value = "";
	for(var i=0; i<document.baForm.check.length; i++) { //check
		document.baForm.check[i].checked == false;
	}
}


function formCheck() {
	var check = true;
	
	document.getElementById("email").style.display = "none";
	
	displayNone("none");
	
	var fName = document.baForm.fName.value;
	var lName = document.baForm.lName.value;
	var uName = document.baForm.uName.value;
	var email = document.baForm.email.value;
	var address = document.baForm.address.value;
	var address2 = document.baForm.address2.value;
	var country = document.baForm.country.selectedIndex; //select
	var state = document.baForm.state.selectedIndex; //select
	var zip = document.baForm.zip.value;

	var checkCount = 0; //check
	for(var i=0; i<document.baForm.check.length; i++) {
		if(document.baForm.check[i].checked == true) {
			checkCount++;
		}
	}
	
	var noc = document.baForm.noc.value;
	var ccn = document.baForm.ccn.value;
	var exp = document.baForm.exp.value;
	var cvv = document.baForm.cvv.value;
	
	
	//First name 입력하지 않은 경우
	if(!fName) {
		document.getElementById("fName").style.display = "block";
		document.baForm.fName.focus();
		check = false;
	}
	
	//Last name 입력하지 않은 경우
	if(!lName) {
		document.getElementById("lName").style.display = "block";
		check = false;
	}
	
	//Username 입력하지 않은 경우
	if(!uName) {
		document.getElementById("uName").style.display = "block";
		check = false;
	}
	
	//email형식이 틀린 경우
	if(email) {
		var emailReg = /^\w{5,20}@[a-z]{2,10}[\.][a-z]{2,3}[\.]?[a-z]{0,2}$/i;
		var result = emailReg.test(email);
		if(result == false) {
			document.getElementById("email").style.display = "block";
			check = false;
		}
	}
	
	//Country 선택하지 않은 경우
	if(country == 0) {
		document.getElementById("country").style.display = "block";
		check = false;
	}
	
	//State 선택하지 않은 경우
	if(state == 0) {
		document.getElementById("state").style.display = "block";
		check = false;
	}
	
	//Zip 입력하지 않은 경우
	if(!zip) {
		document.getElementById("zip").style.display = "block";
		check = false;
	}
	
	//체크박스 선택하지 않은 경우
	if(checkCount == 0) {
		document.getElementById("check").style.display = "block";
		check = false;
	}
	
	//Name on card 입력하지 않은 경우
	if(!noc) {
		document.getElementById("noc").style.display = "block";
		check = false;
	}
	
	//Credit card number 입력하지 않은 경우
	if(!ccn) {
		document.getElementById("ccn").style.display = "block";
		check = false;
	}
	
	//Expiration 입력하지 않은 경우
	if(!exp) {
		document.getElementById("exp").style.display = "block";
		check = false;
	}
	
	//CVV 입력하지 않은 경우
	if(!cvv) {
		document.getElementById("cvv").style.display = "block";
		check = false;
	}
	
	if(check == false) {
		return false;
	}else {
		resetForm();
		return true;
	}
}
