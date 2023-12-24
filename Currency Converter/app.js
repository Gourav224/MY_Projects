const baseUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const loadingIndicator = document.querySelector(".loading");

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if (amtval === "" || amtval < 1) {
        amtval = 1;
        amount.value = "1";
    }

    const URL = `${baseUrl}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

    try {
        let res = await fetch(URL);

        if (!res.ok) {
            throw new Error(`Failed to fetch exchange rate (${res.status} ${res.statusText})`);
        }

        let data = await res.json();
        let rate = data[toCurr.value.toLowerCase()];
        let finalAmount = amtval * rate;
        msg.innerText = `${amtval} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
        
    } catch (error) {
        
        msg.innerText = "Error fetching exchange rate. Please try again.";

    }
}

for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);

    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    await updateExchangeRate();
});

window.addEventListener("load", async () => {
    await updateExchangeRate();
});
