movements = document.getElementsByTagName("pre")[0].innerText.split("\n").filter(n => n.length).map(c => {
    let split = c.split(" ");
    return { direction: split[0], units: Number(split[1]) }
});

horizontal = 0
depth = 0
aim = 0

movements.forEach(move => {
  if (move.direction == "forward") {
    horizontal += move.units
    depth += aim * move.units
  }
  else if (move.direction == "up") aim -= move.units
  else if (move.direction == "down") aim += move.units
})

console.log({
  horizontal,
  depth,
  multiply: horizontal * depth
})