function convertCurrency() {
  const RATE = 1.54

  const crown = parseFloat(prompt('Swedish crown'))
  const brazilianReal = crown * RATE
  alert(brazilianReal)
}

convertCurrency()
