/**
 * 
 */
function formCheck() {
	document.getElementById("fName").style.display = "none";
	document.getElementById("lName").style.display = "none";
	document.getElementById("uName").style.display = "none";
	document.getElementById("email").style.display = "none";
	document.getElementById("country").style.display = "none";
	document.getElementById("state").style.display = "none";
	document.getElementById("zip").style.display = "none";
	document.getElementById("noc").style.display = "none";
	document.getElementById("ccn").style.display = "none";
	document.getElementById("exp").style.display = "none";
	document.getElementById("cvv").style.display = "none";
	
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
		return false;
	}
	
	//Last name 입력하지 않은 경우
	if(!lName) {
		document.getElementById("lName").style.display = "block";
		return false;
	}
	
	//Username 입력하지 않은 경우
	if(!uName) {
		document.getElementById("uName").style.display = "block";
		return false;
	}
	
	//email형식이 틀린 경우
	if(email) {
		var emailReg = /^\w{5,20}@[a-z]{2,10}[\.][a-z]{2,3}[\.]?[a-z]{0,2}$/i;
		var result = emailReg.test(email);
		if(result == false) {
			document.getElementById("email").style.display = "block";
			return false;
		}
	}
	
	//Country 선택하지 않은 경우
	if(country == 0) {
		document.getElementById("country").style.display = "block";
		return false;
	}
	
	//State 선택하지 않은 경우
	if(state == 0) {
		document.getElementById("state").style.display = "block";
		return false;
	}
	
	//Zip 입력하지 않은 경우
	if(!zip) {
		document.getElementById("zip").style.display = "block";
		return false;
	}
	
	//체크박스 선택하지 않은 경우
	if(checkCount == 0) {
		document.getElementById("check").style.display = "block";
		return false;
	}
	
	//Name on card 입력하지 않은 경우
	if(!noc) {
		document.getElementById("noc").style.display = "block";
		return false;
	}
	
	//Credit card number 입력하지 않은 경우
	if(!ccn) {
		document.getElementById("ccn").style.display = "block";
		return false;
	}
	
	//Expiration 입력하지 않은 경우
	if(!exp) {
		document.getElementById("exp").style.display = "block";
		return false;
	}
	
	//CVV 입력하지 않은 경우
	if(!cvv) {
		document.getElementById("cvv").style.display = "block";
		return false;
	}
}
