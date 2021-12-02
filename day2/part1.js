movements = document.getElementsByTagName("pre")[0].innerText.split("\n").filter(n => n.length).map(c => {
    let split = c.split(" ");
    return { direction: split[0], units: Number(split[1]) }
});

horizontal = 0
depth = 0

movements.forEach(move => {
  if (move.direction == "forward") depth += move.units
  else if (move.direction == "up") depth -= move.units
  else if (move.direction == "down") depth += move.units
})

console.log({
  horizontal,
  depth,
  multiply: horizontal * depth
})