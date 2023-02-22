console.log('hello');
let table = document.getElementById("table")

function getBaseInput() {
    table.textContent = ""
    let arr = [];
    let value;
    try {
        value = document.getElementById("input").value.trim();
        if (value == "" || value == null) {
            alert("please input valid number")
        }
        if (value <= 0) {
            alert("please do not enter negative number or zero");
        }
    } catch (e) {

    }
    let roundedValue = Math.round(value);

    if ((value) !== NaN && value != "" && Number.isInteger(roundedValue) && value > 0) {


        for (let i = 1; i <= 10; i++) {
            let temp = roundedValue * i;
            arr.push(temp);
        }
        arr.forEach((element, index) => {
            const row1 = document.createElement("p");
            const node1 = document.createTextNode(`${roundedValue} x ${index + 1}`)
            row1.append(node1);
            const para = document.createElement("p");
            const node = document.createTextNode(`  ${element} `)
            para.append(node);
            row1.classList.add("tableData");
            para.classList.add("tableData");
            table.appendChild(row1);
            table.appendChild(para);
        });
    }
}
