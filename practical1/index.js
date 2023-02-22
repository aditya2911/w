console.log("hello1")

function add( ) {
    event.preventDefault();
    let first = parseFloat( document.getElementById("first").value);
    let second = parseFloat(document.getElementById("second").value);

  if(Number.isNaN(first))
{
alert("Enter valid First Number");
} 

if(Number.isNaN(second))
{
alert("Enter valid Second Number");
} 



let result = first + second;
    if(Number.isInteger(result) === false){result = "input  valid number"}
    console.log(result)
    document.getElementById("output").textContent = result;
}

function clearInput( ) {
    event.preventDefault();

    console.log("calling")
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("output").textContent = "";


}