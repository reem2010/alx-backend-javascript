const Utils = require("utilS")

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const sum = Utils.calculateNumber("SUM", totalAmount, totalShipping)
    console.log(`The total is: ${sum}`)
}

module.exports = sendPaymentRequestToApi