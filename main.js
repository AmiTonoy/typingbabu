const arrayOfText = [
	"i love my country i love my land green bangladesh my home land",
	"jony jony yes papa eatting sugar no papa telling lies no papa open your mouth hah hah hah ",
	"type fast type fast type fast",
	"google is awesome you can find almost everything"
]

let randomIndexForArray = Math.floor(Math.random()*arrayOfText.length);
let targetClass = document.querySelector(".randomText");

// make arrayofCharacter from the random text
 
let characterArray = arrayOfText[randomIndexForArray].split("");

characterArray.forEach(item=>{
targetClass.innerHTML += `<span>${item}</span>`
})
//create a index of typed character array 

let index = 0;

//call the textarea and capture event if typed any input


let textArea = document.querySelector(".textArea");

textArea.addEventListener('input',()=>{
	let inputedCharacter = textArea.value.split("")[index];
	let characterHaveToInput = characterArray[index];
	let lenghtOfInput = textArea.value.split("");
	let lengthOfHaveToInput = characterArray.length;
	console.log(lenghtOfInput.length);
	console.log(lengthOfHaveToInput);
	if(lenghtOfInput.length == lengthOfHaveToInput){
		window.location.reload();		
	}
let targetSpan = targetClass.querySelectorAll("span")[index];
if(inputedCharacter === characterHaveToInput){
	//check the span inner html if match with the character you have typed then add class else do nothing 
	targetSpan.classList.remove("hoynai");	
	targetSpan.classList.add("hoisay");
	index++;

}else{
	targetSpan.classList.remove("hoisay");
	targetSpan.classList.add("hoynai");
}

})

