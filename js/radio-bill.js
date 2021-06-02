//reference to the button
let radioBillAddBtn = document.querySelector('.radioBillAddBtn')

//reference to the smsTotal
let smsTotalTwo = document.querySelector('.smsTotalTwo')

//reference to call total
let callTotalTwo = document.querySelector('.callTotalTwo')

//reference to final total
const totalTwo = document.querySelector('.totalTwo')


//reference the checked button


const radioBillFunction = RadioBill();

radioBillAddBtn.addEventListener('click', () => {
    const checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if(checkedRadioBtn){
        (radioBillFunction.setRadioInput(checkedRadioBtn.value))
    }

    if(radioBillFunction.getRadioInput() == 'call'){
        radioBillFunction.makeCall()
    }

    if(radioBillFunction.getRadioInput() == 'sms'){
        radioBillFunction.sendSms()
    }

    //reference to template
    let radioTotals = document.querySelector('.templateTotals').innerHTML

    //compile template
    let compileRadioTotals = Handlebars.compile(radioTotals)

    smsTotalTwo.innerHTML = compileRadioTotals({smsTotal: radioBillFunction.getSmsTotal().toFixed(2)})
    callTotalTwo.innerHTML = compileRadioTotals({callTotal: radioBillFunction.getCallTotal().toFixed(2)})
    totalTwo.innerHTML = compileRadioTotals({finalTotal: radioBillFunction.getTotalCost().toFixed(2)})

    totalTwo.classList.add(radioBillFunction.addWarningClasses())
})





