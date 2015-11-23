var names = ["John Smith", "Jackie Jackson", "Chris Jones", "Amanda Cullen", "Jeremy Goodwin"];
console.log(names);
var arrayTwo = ["Jackie Jackson",
		"Chris Jones",
		"Amanda Cullen",
		"Jeremy Goodwin"];
var arrayThree = ["John Smith",
		"Chris Jones",
		"Amanda Cullen",
		"Jeremy Goodwin"];
var arrayFour = ["John Smith",
		"Jackie Jackson",
		"Amanda Cullen",
		"Jeremy Goodwin"];
var arrayFive = ["John Smith",
		"Jackie Jackson",
		"Chris Jones",
		"Jeremy Goodwin"];
var arraySix = ["John Smith",
		"Jackie Jacson",
		"Chris Jones",
		"Amanda Cullen"];
var remove = prompt('Which name do you whish to delete');
if(remove === 'John Smith'){
	console.log(arrayTwo);
}
else if(remove === 'Jackie Jackson'){
	console.log(arrayThree);

}
else if(remove === 'Chris Jones'){
	console.log(arrayFour);
}
else if(remove === 'Amanda Cullen'){
	console.log(arrayFive);
}
else if(remove === 'Jeremy Goodwin'){
	console.log(arraySix);
}
else{
	console.log("you done something wrong check your spelling and puncuation");
}



