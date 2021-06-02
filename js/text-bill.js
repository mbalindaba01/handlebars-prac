// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector('.billTypeText')

//reference to the total 
const totalOne = document.querySelector('.totalOne')

//reference to the sms total 
const smsTotalOne = document.querySelector('.smsTotalOne')

//reference to the call total
const callTotalOne = document.querySelector('.callTotalOne')

//get a reference to the add button
const addToBillBtn = document.querySelector('.addToBillBtn')

const textBillFunction = TextBill()

addToBillBtn.addEventListener('click', () => {
    textBillFunction.setInputStr(billTypeText.value)
    
    if(textBillFunction.getInputStr() == 'call'){
        textBillFunction.makeCall()
    }

    if(textBillFunction.getInputStr() == 'sms'){
        textBillFunction.sendSms()
    }
    
    //reference to template
    let textTotals = document.querySelector('.templateTotals').innerHTML

    //compile template
    let compileTextTotals = Handlebars.compile(textTotals)

    smsTotalOne.innerHTML = compileTextTotals({smsTotal: textBillFunction.getTotalSmsCost().toFixed(2)})
    callTotalOne.innerHTML = compileTextTotals({callTotal: textBillFunction.getTotalCallCost().toFixed(2)})
    totalOne.innerHTML = compileTextTotals({finalTotal: textBillFunction.getTotalCost().toFixed(2)})

    totalOne.classList.add(textBillFunction.addWarningClasses())

})

