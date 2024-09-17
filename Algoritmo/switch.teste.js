const expr = 'Bergamota';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Bergamota':
    console.log('Bergamota are $2.00 a pound.')
    break;
  case 'Bluberry':
  case 'Apples':
    console.log('Apples and Bluberry are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
