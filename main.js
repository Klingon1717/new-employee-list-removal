
var nameArray = ['John Snow', 'Gill Bates', 'Cool Joe', 'Rigby James', 'Morty Rick'];
var num = nameArray.length - 1;
//holding Employees names for later use, and adding the array of names.
var first = "There are" + num +"Employees:" + nameArray;
console.log(first);
// asking which name they would like to remove
var userAns = prompt("Who do you wish to remove from the list\?");

// We want to look through each name one at a time. 
for(var i = 0; i < nameArray.length; i++){
	//We checking each element in an array to see if it matches userAns
	if(userAns === nameArray[i] ){
		var remove = nameArray.splice(i,1);
		//After finding the matching element to userAns, I want to use my remove var and splice that guy out of there.

	}
}
//I want to display the new array with four names that has been spliced
var second = "There are"+' '+num+' '+"Employees:"+ nameArray;
console.log(second);