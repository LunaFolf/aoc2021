binaries = document.getElementsByTagName("pre")[0].innerText.split("\n").filter(n => n.length);

gammaRate = '';
epsilonRate = '';

function convertBinaryToDecimal(binary) {
    return parseInt(binary, 2);
}

for (i = 0; i < binaries[0].length; i++) {
  let positiveBits = 0;
  let negativeBits = 0;
  binaries.forEach(binary => {
    if (binary[i] === "1") {
      positiveBits++;
    } else {
      negativeBits++;
    }
  })

  console.log(`${i}: ${positiveBits} positive, ${negativeBits} negative`);

  if (positiveBits > negativeBits) {
    gammaRate += "1";
    epsilonRate += "0";
  } else {
    gammaRate += "0";
    epsilonRate += "1";
  }
}

console.log({
  gammaRate: convertBinaryToDecimal(gammaRate),
  epsilonRate: convertBinaryToDecimal(epsilonRate),
  powerConsumption: convertBinaryToDecimal(gammaRate) * convertBinaryToDecimal(epsilonRate)
})