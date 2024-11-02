function inverteString(inputString) {
    let stringInvertida = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        stringInvertida += inputString[i];
    }
    return stringInvertida;
}

const inputString = "Urso Panda"
console.log("String invertida:", inverteString(inputString));
