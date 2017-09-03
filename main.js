var balance = 0.00;
var x = 0;
var log = ""
var logtemp = ""
function addBalance() {
  x = parseFloat(document.getElementById('value').value);
  if (isNaN(x)) {
    x = 0;
  }
  balance += x;
  balance *= 100;
  Math.floor(balance);
  balance /= 100;
  logtemp = log;
  log = "<br/>" + "+ $" + x + " -- New balance: $" + balance + " -- " + document.getElementById('changeName').value + " -- " + document.getElementById('date').value;
  log = log.concat(logtemp);
  document.getElementById("HTMLbalance").innerHTML = "Balance = $" + balance;
  document.getElementById("changeLog").innerHTML = log
}

function subtractBalance() {
  x = parseFloat(document.getElementById('value').value);
  if (isNaN(x)) {
    x = 0;
  }
  balance -= x;
  balance *= 100;
  Math.floor(balance);
  balance /= 100;
  logtemp = log;
  log = "<br/>" + "- $" + x + " -- New balance: $" + balance + " -- " + document.getElementById('changeName').value + " -- " + document.getElementById('date').value;
  log = log.concat(logtemp);
  document.getElementById("HTMLbalance").innerHTML = "Balance = $" + balance;
  document.getElementById("changeLog").innerHTML = log;
}
document.getElementById("HTMLbalance").innerHTML = "Balance = $" + balance;
