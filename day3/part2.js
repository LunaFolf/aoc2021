binaries = document.getElementsByTagName("pre")[0].innerText.split("\n").filter(n => n.length);

ratings = { oxygen: null, carbon: null };

const bitCriterias = [
  {
    name: 'oxygen',
    filter: (filterBinaries, positiveBits, negativeBits) => {
      const positive = (positiveBits > negativeBits) || (positiveBits === negativeBits)
      return filterBinaries.filter(binary => binary[i] === (positive ? "1" : "0"))
    }
  },
  {
    name: 'carbon',
    filter: (filterBinaries, positiveBits, negativeBits) => {
      const negative = (positiveBits > negativeBits) || (positiveBits === negativeBits)
      return filterBinaries.filter(binary => binary[i] === (negative ? "0" : "1"))
    }
  }
]

bitCriterias.forEach(bitCriteria => {
  let filteredBinaries = [...binaries]

  for (i = 0; i <= binaries[0].length; i++) {
    // If only one binary is left, stop.
    if (filteredBinaries.length < 2) {
      ratings[bitCriteria.name] = parseInt(filteredBinaries[0], 2);
      break;
    };

    // Find most common bit, for current column.
    let positiveBits = 0;
    let negativeBits = 0;
    filteredBinaries.forEach(binary => {
      if (binary[i] === "1") positiveBits++;
      else negativeBits++;
    })

    filteredBinaries = bitCriteria.filter(filteredBinaries, positiveBits, negativeBits)
  } 
})

console.log({
  ...ratings,
  lifeSupport: ratings.oxygen * ratings.carbon
})