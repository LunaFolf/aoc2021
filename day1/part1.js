nums = document.getElementsByTagName("pre")[0].innerText.split("\n").filter(n => n.length).map(n => Number(n));

lastnum = null;
larger = 0;

nums.forEach(num => {
  if (lastnum === null) {
    lastnum = num;
    return false;
  }

  console.log(num, lastnum, num > lastnum);

  if (num > lastnum) larger += 1;
  lastnum = num;
});

console.log({
  lastnum,
  larger
});