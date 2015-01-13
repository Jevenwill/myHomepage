// form validation
function validateForm(form) {
	var fail = validateName(form.name.value);
	fail += validateSID(form.sid.value);
	fail += validateEmail(form.email.value);

	if (fail == "") {
	 	return true;
	 } else {
	 	alert(fail);
	 	return false;
	 }
}

function validateName(field) {
	if (field == "") {
		return "No name was entered.\n";
	} 
	return "";
}

function validateSID(field) {
	if (isNaN(field)) {
		return "Invalid student ID.\n";
	}
	return "";
}

function validateEmail(field) {
	if (field == "") {
		return "No email was entered.\n";
	} else if (!((field.indexOf(".") > 0) && (field.indexOf("@") > 0) || /[^a-zA-Z0-9.@_-]/.test(field))) 
		return "Invalid email address.\n";
	return "";
}

