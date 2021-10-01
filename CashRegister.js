/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	                Amount
Penny	                      $0.01 (PENNY)
Nickel	                      $0.05 (NICKEL)
Dime	                      $0.1 (DIME)
Quarter	                      $0.25 (QUARTER)
Dollar	                      $1 (ONE)
Five Dollars	              $5 (FIVE)
Ten Dollars	                  $10 (TEN)
Twenty Dollars	              $20 (TWENTY)
One-hundred Dollars	          $100 (ONE HUNDRED)

*/

const cidToObj = cidArray => {
    let obj = {}
    let copiedArray = [...cidArray]
    copiedArray.reverse().forEach( item => {
      obj[item[0]] = item[1]
    })
    return obj
  }
  
  const unitValue = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ]
  
  function checkCashRegister(price, cash, cid) {
    const cidObj = cidToObj(cid);
    const unitValueObj = cidToObj(unitValue)
  
    let res = { status: '', change: []}
    let updatedCidObj = {}
    let updatedChange = cash - price
  
    for (let unit of Object.keys(cidObj) ) {
      let tempResAmount = Math.floor(updatedChange / unitValueObj[unit])
      let currentAmount = Math.round(cidObj[unit] / unitValueObj[unit])
  
      let resAmount = currentAmount <= tempResAmount ? currentAmount : tempResAmount;
      let resAmountValue = resAmount * unitValueObj[unit]
  
      updatedCidObj[unit] = parseFloat((cidObj[unit] - resAmountValue).toFixed(2))
  
      if ( resAmount > 0 ) {
        res.change.push([unit,resAmountValue])
        updatedChange = parseFloat((updatedChange - resAmountValue).toFixed(2))
      }
  
    }
  
    if (updatedChange > 0) {
      res = {status: "INSUFFICIENT_FUNDS", change: []}
    }
    else if (Object.keys(updatedCidObj).every(unit => 0 === updatedCidObj[unit])) {
    
      res = { status: 'CLOSED', change: cid}
    } 
    else {
      res.status = 'OPEN'
    }
  
  
    console.log(res)
  
    return res;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);