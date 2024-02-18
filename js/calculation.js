document.getElementById('btn-calculate').addEventListener('click', function(){
    const income_id = document.getElementById('income_input')
    const getIncome = getValue(income_id)

    const food_id = document.getElementById('food_input')
    const getFood = getValue(food_id)

    const rent_id = document.getElementById('rent_input')
    const getRent = getValue(rent_id)

    const clothes_id = document.getElementById('clothes_input')
    const getClothes = getValue(clothes_id)

    

    console.log("Total income is : " + getIncome)
    console.log("Total food cost is : " + getFood)
    console.log("Total rent cost is : " + getRent)
    console.log("Total clothes cost is : " + getClothes)

    const totalExpenses = getFood + getRent + getClothes
    const remainingBalance = getIncome - totalExpenses

    setInnerText('total_expenses', totalExpenses)
    setInnerText('balance', remainingBalance)
    
})

// start from here , work with saving_amount and remaining_balance
document.getElementById('btn-save').addEventListener('click', function(){
    const save_id = document.getElementById('save_input')
    const getSaving = getValue(save_id)

    const incomeing_id = document.getElementById('income_input')
    const getIncomeStream = getValue(incomeing_id)

    const totalSaving = ((getIncomeStream*getSaving)/100) 
    setInnerText('saving_amount',totalSaving)

    const balance = getInnerText('balance')
    console.log("balance is :", balance)

    const savings = getInnerText('saving_amount')
    console.log("total savings is: ", savings)

    const remainingBalance = balance - savings
    setInnerText('remaining_balance', remainingBalance)

   // balance, remaining_balance
})

function getValue(income_id){
    const fieldString = income_id.value 
    const fieldValue  = parseFloat(fieldString)
    return fieldValue;
}

function setInnerText(text_id, amount){
    const getId = document.getElementById(text_id)
    getId.innerText = amount
}

function getInnerText(id){
    const elementId = document.getElementById(id)
    const elementString = elementId.innerText
    const elementValue = parseFloat(elementString)
    return elementValue
}
