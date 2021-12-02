nums = document.getElementsByTagName("pre")[0].innerText.split("\n").filter(n => n.length).map(n => Number(n));

length = nums.length;

largerThan = 0;

sums = [];

for (i = 0; i <= length; i++) {
  let set = nums.slice(0, 3);
  if (set.length < 3) break;

  sums.push(set.reduce((a, b) => a + b))

  nums = nums.slice(1);
}

lastnum = null;

sums.forEach(num => {
  if (lastnum === null) {
    lastnum = num;
    return false;
  }

  console.log(num, lastnum, num > lastnum);

  if (num > lastnum) largerThan += 1;
  lastnum = num;
});

console.log({
  lastnum,
  largerThan
});