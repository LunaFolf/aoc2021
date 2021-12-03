binaries = document.getElementsByTagName("pre")[0].innerText.split("\n").filter(n => n.length);

ratings = {
  "oxygen": "",
  "co2": ""
}

const filters = [
  {
    name: "oxygen",
    filter: (filterBinaries, positiveBits, negativeBits) => {
      const positive = (positiveBits > negativeBits) || (positiveBits === negativeBits)
      return filterBinaries.filter(binary => binary[i] === (positive ? "1" : "0"))
    }
  },
  {
    name: "co2",
    filter: (filterBinaries, positiveBits, negativeBits) => {
      const negative = (positiveBits > negativeBits) || (positiveBits === negativeBits)
      return filterBinaries.filter(binary => binary[i] === (negative ? "0" : "1"))
    }
  }
]

function convertBinaryToDecimal(binary) {
    return parseInt(binary, 2);
}

filters.forEach(filter => {
  let filterBinaries = [...binaries]
  for (i = 0; i <= binaries[0].length; i++) {
    if (filterBinaries.length < 2) {
      ratings[filter.name] = convertBinaryToDecimal(filterBinaries[0])
      break
    };
    let positiveBits = 0;
    let negativeBits = 0;
    filterBinaries.forEach(binary => {
      if (binary[i] === "1") {
        positiveBits++;
      } else {
        negativeBits++;
      }
    })

    filterBinaries = filter.filter(filterBinaries, positiveBits, negativeBits)
  } 
})

console.log({
  ...ratings,
  lifeSupport: ratings.oxygen * ratings.co2
})