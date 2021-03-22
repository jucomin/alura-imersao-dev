function convertCurrency() {
  const RATE = 1.53

  const crown = parseFloat(prompt('Swedish crown'))
  const brazilianReal = crown * RATE
  alert(brazilianReal)
}

convertCurrency()
