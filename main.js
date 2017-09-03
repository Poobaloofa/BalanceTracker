var balance = 0.00;
var x = 0;
function addBalance() {
  x = parseFloat(document.getElementById('value').value);
  if (isNaN(x)) {
    x = 0;
  }
  balance += x;
  balance *= 100;
  Math.floor(balance);
  balance /= 100;
  document.getElementById("HTMLbalance").innerHTML = "Balance = $" + balance;
  document.getElementById("changeLog").innerHTML += "<br/>" + "+ $" + x + " -- New balance: $" + balance + " -- " + document.getElementById('changeName').value;
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
  document.getElementById("HTMLbalance").innerHTML = "Balance = $" + balance;
  document.getElementById("changeLog").innerHTML += "<br/>" + "- $" + x + " -- New balance: $" + balance + " -- " + document.getElementById('changeName').value;
}
document.getElementById("HTMLbalance").innerHTML = "Balance = $" + balance;
