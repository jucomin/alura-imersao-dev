function convertCurrency() {
  const RATE = 1.53

  const crown = parseFloat(prompt('Swedish crown'))
  const brazilianReal = crown * RATE
  const brazilianRealFixed = brazilianReal.toFixed(2)

  alert(brazilianRealFixed)
}

convertCurrency()
