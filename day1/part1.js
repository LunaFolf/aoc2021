nums = document.getElementsByTagName("pre")[0].innerText.split("\n").filter(n => n.length).map(n => Number(n));

lastnum = null;
largerThan = 0;

nums.forEach(num => {
  if (lastnum === null) {
    lastnum = num;
    return false;
  }

  if (num > lastnum) largerThan += 1;
  lastnum = num;
});

console.log({
  lastnum,
  largerThan
});