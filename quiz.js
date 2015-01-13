
function getRandomOrder(n) {
	var order = new Array(n);  
       var i, k, temp;
       var finish = Math.pow(n,3) * Math.log(n) * 12;
  
       for (i = 0; i < n; i++)
           order[i] = i;

       for (i = 1; i <= finish; i++)
            if (Math.random () < 0.5) { 
                  k = Math.floor(Math.random() * (order.length - 1));
                  temp = order[k];
                  order[k] = order[k+1];
                  order[k+1] = temp;
            }
       return order; 
}


function getQuiz() {
	var q0 = "Who invented the BALLPOINT PEN?",//a
		a0 = "A. Biro Brothers; B. Waterman Brothers; C. Write Brothers.",
		q1 = "In which decade was the first solid state integrated circuit demonstrated?",//a
		a1 = "A. 1950s; B. 1960s; C. 1970s.",
		q2 = "What J. B. Dunlop invented?",//b
		a2 = "A. Automobile wheel rim; B. Pneumatic rubber tire; C. Rubber boot.",
		q3 = "Which scientist discovered the radioactive element radium?",//c
		a3 = "A. Isaac Newton; B. Benjamin Franklin; C. Marie Curie.",
		q4 = "When was barb wire patented?",//c
		a4 = "A. 1870; B. 1840; C. 1874.",
		q5 = "What Galileo invented?",//c
		a5 = "A. Barometer; B. Microscope; C. Thermometer.",
		q6 = "What is the name of the CalTech seismologist who invented the scale used to measure the magnitude of earthquakes?",//a
		a6 = "A. Charles Richter; B. Giuseppe Mercalli; C. Joshua Rumble.",
		q7 = "Where is the village of Branston, after which the famous pickle is named?",//c
		a7 = "A. Yorkshire; B. Lancashire; C. Staffordshire.",
		q8 = "Who invented Jet Engine?",//a
		a8 = "A. Sir Frank Whittle; B. Roger Bacon; C. Gottlieb Daimler.",
		q9 = "Who perfected GENETIC ENGINEERING?";//b
		a9 = "A. Hunt & Davids; B. Cohen & Boyer; C. Jaysson & Simons."
	// static variables
	var questions = [q0,q1,q2,q3,q4,q5,q6,q7,q8,q9];
	var answers = [a0,a1,a2,a3,a4,a5,a6,a7,a8,a9];
	var correct_answers = ['A','A','B','C','C','C','A','C','A','B'];

	var qNum = prompt("Welcome to Quiz! How many questions do you want to answer? Please enter an integer number <= 10.", 5); // default 5 questions
	var index = getRandomOrder(qNum); // get a random order of questions
	var anw = new Array(); // arr for user's answers
	var corrNum = 0; // counter
	var out = document.getElementById("out"); // html handler
	var t = new Array(); // html new childNode


	confirm("Ready to start? Just enter the answer 'A' or 'B' or 'C'.");

	if (questions.length < qNum) {
		alert("Sorry, we don't have enough questions for you, the maximum number of quetions is:"+questions.length+". please reload the page.");
	}

	for (var i = 0; i < qNum; i++) {

		anw[i] = prompt(questions[index[i]]+"\n"+answers[index[i]],"Enter A or B or C");
		t[i] = document.createElement("p");
		out.appendChild(t[i]);

		if (anw[i] == correct_answers[index[i]] || anw[i].toUpperCase() == correct_answers[index[i]]) {

			t[i].innerHTML = "<p>"+questions[index[i]]+"<br>"+answers[index[i]]+"<br>Your answer is: "+ anw[i].toUpperCase()+".<br><b>Correct!</b></p>";
			corrNum++;
		} else {
			t[i].innerHTML = "<p>"+questions[index[i]]+"<br>"+answers[index[i]]+"<br>Your answer is: "+ anw[i].toUpperCase()+".<br><b>Incorrect!</b></p>";

		}
	}

	t[qNum] = document.createElement("p");
	out.appendChild(t[qNum]);
	t[qNum].innerHTML = "\nYou answered "+corrNum+" out of "+qNum+" questions correctly ("+Math.floor((corrNum / qNum) * 100)+"%).";
}
