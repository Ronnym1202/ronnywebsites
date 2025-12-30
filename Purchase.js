const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get("product");
const amountValue = urlParams.get("amount");

const productNameEl = document.getElementById("productName");
const amountInput = document.getElementById("amount");
const confirmInput = document.getElementById("confirm");
const payButton = document.getElementById("pay");
const display = document.getElementById("display");

if (product && amountValue) {
    productNameEl.textContent = `PAY FOR: ${product}`;
    amountInput.value = amountValue;
    confirmInput.value = amountValue;
}

payButton.onclick = function() {
    const amount = Number(amountInput.value);
    const confirm = Number(confirmInput.value);

    if (!amount || !confirm) {
        display.style.color = "red";
        display.textContent = "FAILED! Enter amount!";
        return;
    }
    if (amount !== confirm) {
        display.style.color = "red";
        display.textContent = "FAILED! Amounts do not match!";
        return;
    }

    if (amount < 200) {   
        display.style.color = "red";
        display.textContent = "FAILED! Amount too low!";
        return;
    }

    const mobile = prompt("Enter your mobile number (e.g., 07XXXXXXXX):");
    if (!mobile || !mobile.match(/^07\d{8}$/)) {
        display.style.color = "red";
        display.textContent = "FAILED! Invalid mobile number!";
        return;
    }

    const pin = prompt(`You will be charged Ksh ${amount} on ${mobile}. Enter your MPesa PIN:`);
    if (!pin) {
        display.style.color = "red";
        display.textContent = "Payment cancelled!";
        return;
    }

    display.style.color = "green";
    display.textContent = `CONGRATULATIONS! You purchased ${product} for Ksh ${amount}.`;
};

