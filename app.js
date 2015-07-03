function story() {

var characterFind = parseInt(Math.random() * 20) ;

var settingFind = parseInt(Math.random() * 20);


var problemFind = parseInt(Math.random() * 20);



switch (characterFind){

	case 0:
		var character = "A boy";
		break;
	case 1:
		var character = "A girl";
		break;
	case 2:
		var character = "A young boy";
		break;
	case 3:
		var character = "A young girl";
		break;
	case 4:
		var character = "A man";
		break;
	case 5:
		var character = "A woman";
		break;
	case 6:
		var character = "A daughter";
		break;
	case 7:
		var character = "A son";
		break;
	case 8:
		var character = "A mother";
		break;
	case 9:
		var character = "A father";
		break;
	case 10:
		var character = "A king";
		break;
	case 11:
		var character = "A servant";
		break;
	case 12:
		var character = "A set of twins";
		break;
	case 13:
		var character = "An emperor";
		break;
	case 14:
		var character = "A Roman";
		break;
	case 15:
		var character = "A Greek";
		break;
	case 16:
		var character = "An Englishman";
		break;
	case 17:
		var character = "A Slave";
		break;
	case 18:
		var character = "An Aristocrat";
		break;
	case 19:
		var character = "A Scholar";
		break;
	case 20:
		var character = "A Knight";
		break;
		
	default:
		var character = "Psycho Murder Clown";
}

switch (settingFind){

	case 0:
		var setting = "Suburbia";
		break;
	case 1:
		var setting = "A City";
		break;
	case 2:
		var setting = "A School";
		break;
	case 3:
		var setting = "A House";
		break;
	case 4:
		var setting = "Corporate America";
		break;
	case 5:
		var setting = "A Galaxy Far, Far Away";
		break;
	case 6:
		var setting = "Revolution Era France";
		break;
	case 7:
		var setting = "The Industrial Revolution";
		break;
	case 8:
		var setting = "Victorian England";
		break;
	case 9:
		var setting = "The Renaissance";
		break;
	case 10:
		var setting = "Arabia";
		break;
	case 11:
		var setting = "The American Revolution";
		break;
	case 12:
		var setting = "Medieval France";
		break;
	case 13:
		var setting = "China";
		break;
	case 14:
		var setting = "Rome";
		break;
	case 15:
		var setting = "Athens";
		break;
	case 16:
		var setting = "Elizabethan England";
		break;
	case 17:
		var setting = "Egypt";
		break;
	case 18:
		var setting = "The Enlightenment";
		break;
	case 19:
		var setting = "Baghdad";
		break;
	case 20:
		var setting = "Soviet Russia";
		break;
		
	default:
		var setting = "Psycho Murder Circus";

}

switch (problemFind){

	case 0:
		var problem = "being poor.";
		break;
	case 1:
		var problem = "depression.";
		break;
	case 2:
		var problem = "lack of opportunity.";
		break;
	case 3:
		var problem = "abuse.";
		break;
	case 4:
		var problem = "loss of a loved one.";
		break;
	case 5:
		var problem = "a broken home.";
		break;
	case 6:
		var problem = "unemployment.";
		break;
	case 7:
		var problem = "societal norms.";
		break;
	case 8:
		var problem = "parental expectations.";
		break;
	case 9:
		var problem = "discontent.";
		break;
	case 10:
		var problem = "a kidnapped loved one.";
		break;
	case 11:
		var problem = "internal corruption.";
		break;
	case 12:
		var problem = "their freedom.";
		break;
	case 13:
		var problem = "competition.";
		break;
	case 14:
		var problem = "famine.";
		break;
	case 15:
		var problem = "the end of an Empire.";
		break;
	case 16:
		var problem = "a nationalist war.";
		break;
	case 17:
		var problem = "a terminal illness.";
		break;
	case 18:
		var problem = "a political power play.";
		break;
	case 19:
		var problem = "unrequited affections.";
		break;
	case 20:
		var problem = "self-improvement.";
		break;	
	default:
		var problem = "fear of clowns.";

}

var prompt = " Write a story about... " + character + " in... " + setting + " who is dealing with... " + problem;
	
	document.getElementById("prompt").innerHTML = prompt;
}