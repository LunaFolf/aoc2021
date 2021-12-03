binaries = document.getElementsByTagName("pre")[0].innerText.split("\n").filter(n => n.length);

gammaRate = '';
epsilonRate = '';

for (i = 0; i < binaries[0].length; i++) {

  // Find most common bit, for current column.
  let positiveBits = 0;
  let negativeBits = 0;
  binaries.forEach(binary => {
    if (binary[i] === "1") {
      positiveBits++;
    } else {
      negativeBits++;
    }
  })

  // If most common bit is positive add positive bit to gammaRate and negative bit to epsilonRate.
  // Otherwise add negative bit to gammaRate and positive bit to epsilonRate.
  if (positiveBits > negativeBits) {
    gammaRate += "1";
    epsilonRate += "0";
  } else {
    gammaRate += "0";
    epsilonRate += "1";
  }
}

console.log({
  gammaRate: parseInt(gammaRate, 2),
  epsilonRate: parseInt(epsilonRate, 2),
  powerConsumption: parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
})