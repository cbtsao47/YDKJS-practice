function canIBuyThat() {
  const tax = 0.08;
  const phonePrice = 99.99;
  const accPrice = 9.99;
  const spendingThreshold = 200;
  const bankSaving = 303.91;
  let total = 0;
  function format(amount) {
    return amount.toFixed(2);
  }
  function thetax(amount) {
    return amount * tax;
  }

  while (total < spendingThreshold) {
    //   console.log(amount);
    total = total + phonePrice;
    if (total < spendingThreshold) {
      total = total + accPrice;
    }
  }
  total = total + thetax(total);

  // console.log(amount);

  console.log("The total would be $" + format(total));

  if (total < bankSaving || total == bankSaving) {
    console.log(`can afford`);
  } else {
    console.log(`cannot afford`);
  }
}
canIBuyThat();
