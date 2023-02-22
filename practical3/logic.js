console.log("prac3");


function sort(){
let text = document.getElementById('text').value;

let regEx = /\d/;

if(!regEx.test(text))
{
let sorted = text.split(" ");

let temp= Array.from(sorted);
temp.sort();

let output = temp.join(' ')

let resultDiv = document.getElementById("sorted");
resultDiv.textContent = "";

let p=document.createElement('p')
let text1 = document.createTextNode(output);
p.appendChild(text1);
p.classList.add('output');
resultDiv.appendChild(p);
}
else{
    alert("please enter only text characters (not numbers)")
}
}