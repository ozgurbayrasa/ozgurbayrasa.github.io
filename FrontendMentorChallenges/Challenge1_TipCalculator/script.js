
const buttonAndInput = document.getElementsByClassName("tip-button");
const buttonAndInputArr = [...buttonAndInput];
const buttons = buttonAndInputArr.slice(0,5);
let tipAmount = '0%';

buttons.forEach((val) => {
    val.addEventListener('click', (e) => {
        tipAmount = e.target.textContent;
    })
});

function calculate(){
    let bill = getBill();
    let tipAmount = getTip();
    let numOfPeople = getNumOfPeople();

    let totalTip = bill * tipAmount;
    let total = (bill + totalTip) / numOfPeople
    let tip = totalTip / numOfPeople

    const tipArea = document.getElementById("tip");

    const totalArea = document.getElementById("total");

    tipArea.innerHTML = "&dollar;" + tip.toFixed(2);
    totalArea.innerHTML = "&dollar;" + total.toFixed(2);    
}

function getBill(){
    const billInput = document.getElementById("bill");
    return billInput.value;
}

function getTip(){
    if(tipAmount === '0%'){
        const customTipInput = document.getElementById("custom-tip");
        return customTipInput.value;
    }
    else{
        let tipSub = tipAmount.slice(0,-1);
        let tipInt = parseInt(tipSub);
        return tipInt;
    }
}

function getNumOfPeople(){
    const numOfPeopleInput = document.getElementById("number-of-people");
    return numOfPeopleInput.value;
}


const billInputMain = document.getElementById("bill");
billInputMain.addEventListener('change', calculate);

const numOfPeopleInputMain = document.getElementById("number-of-people");
numOfPeopleInputMain.addEventListener('change', calculate);

const customTipInputMain = document.getElementById("custom-tip");
customTipInputMain.addEventListener('change', calculate);


