let container = document.querySelector(".container");
let btn = document.querySelector("#convert");


btn.addEventListener("click", () => {

    let decimal = 0;
    let counter = 0;
    let result = document.querySelector(".result");
    let binary = document.querySelector(".binary").value;
    // check if the input is a binary number
    if (binary.match(/^[0-1]+$/g) == null) {
        result.textContent = "Please enter a binary number";
        return;
    }
    // convert binary to decimal

    while (binary > 0) {
        let remainder = Math.round(binary % 10);
        decimal += remainder * Math.pow(2, counter);
        binary = Math.floor(binary / 10);
        counter++;
    }
    result.textContent = `Decimal Number: ${decimal}`;
});




