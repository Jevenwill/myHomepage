
function convert() {
// tricked when one of the currency fields is not empty 
// current exchange rates are the same as the given table
	var GBP = document.getElementById("GBP");
	var CAD = document.getElementById("CAD");
	var USD = document.getElementById("USD");
	var EUR = document.getElementById("EUR");
	var AUD = document.getElementById("AUD");
	var button = document.getElementById("button");

	//GBP.addEventListener('change', convert_gbp(), false);
	GBP.addEventListener('keyup', function() {
		if (verifyNum(GBP)) {
			CAD.value = format(GBP.value * 1.99169);
			USD.value = format(GBP.value * 2.03032);
			EUR.value = format(GBP.value * 1.43448);
			AUD.value = format(GBP.value * 2.29964);
		}
		return;
	}, false);

	//USD.addEventListener('change', convert_usd(), false);
	USD.addEventListener('keyup', function convert_usd() {
		if (verifyNum(USD)) {
			GBP.value = format(USD.value * 0.49246);
			CAD.value = format(USD.value * 0.98054);
			EUR.value = format(USD.value * 0.70641);
			AUD.value = format(USD.value * 1.13262);
		}
		return;	
	}, false);

	//CAD.addEventListener('change', convert_cad(), false);
	CAD.addEventListener('keyup', function convert_cad() {
		if (verifyNum(CAD)) {
			GBP.value = format(CAD.value * 0.50221);
			USD.value = format(CAD.value * 1.01941);
			EUR.value = format(CAD.value * 0.72037);
			AUD.value = format(CAD.value * 1.15498);					
		}
		return;	
	}, false);

	//EUR.addEventListener('change', convert_eur(), false);
	EUR.addEventListener('keyup', function convert_eur() {
		if (verifyNum(EUR)) {
			GBP.value = format(EUR.value * 0.69714);
			USD.value = format(EUR.value * 1.41544);
			CAD.value = format(EUR.value * 1.38814);
			AUD.value = format(EUR.value * 1.60329);					
		}
		return;	
	}, false);

	//AUD.addEventListener('change', convert_aud(), false);
	AUD.addEventListener('keyup', function convert_aud() {
		if (verifyNum(AUD)) {
			GBP.value = format(AUD.value * 0.43497);
			USD.value = format(AUD.value * 0.88297);
			EUR.value = format(AUD.value * 0.62382);
			CAD.value = format(AUD.value * 0.86613);					
		}
		return;	
	}, false);
	
	button.addEventListener('click', function clear() {
		if (verifyNum(AUD)) {
			GBP.value = "";
			USD.value = "";
			EUR.value = "";
			CAD.value = "";
			AUD.value = "";					
		}
		return;	
	}, false);	

	return;				
}

function format(num) {
	return parseFloat(num).toFixed(5);
}


function verifyNum(textBox) {
// textBox is one of the currency fields	
	var boxValue = parseFloat(textBox.value);
	if (textBox.value != "" && isNaN(boxValue)) {
		alert("You must enter a number value");
		textBox.value = "";
		return false;
	}
	return true;
}
