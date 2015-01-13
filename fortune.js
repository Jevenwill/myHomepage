function fortune_display() {
	var fortunes = ["Life isn’t about getting and having, it’s about giving and being. –Kevin Kruse",
					"Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill",
					"Strive not to be a success, but rather to be of value. –Albert Einstein",
					"The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart",
					"Definiteness of purpose is the starting point of all achievement. –W. Clement Stone",
					"We become what we think about. –Earl Nightingale",
					"Life is 10% what happens to me and 90% of how I react to it. –Charles Swindoll",
					"Stay hungry, stay foolish. -Steve Jobs",
					"100% of the shots you don't take don't go in. -Wayne Gretzky"];
	var out = document.getElementById('fortune_box');
	var t = document.createTextNode(fortunes[Math.floor(Math.random()*(fortunes.length-1))]);

	if (out.hasChildNodes()) {
		out.replaceChild(t, out.childNodes[0]);
	} 
	out.appendChild(t);
	return;
}
