function calculateFees() {
  const selectedCourses = document.querySelectorAll('input[name="course"]:checked');
  let subtotal = 0;

  selectedCourses.forEach(course => {
    subtotal += parseFloat(course.value);
  });

  let discount = 0;
  if (selectedCourses.length === 1) discount = 0.05;
  else if (selectedCourses.length === 2) discount = 0.10;
  else if (selectedCourses.length >= 3) discount = 0.15;

  const discountedTotal = subtotal * (1 - discount);
  const vat = discountedTotal * 0.15;
  const total = discountedTotal + vat;

  document.getElementById("result").innerText =
    `Subtotal: R${subtotal.toFixed(2)}\n` +
    `Discount: ${discount * 100}%\n` +
    `VAT (15%): R${vat.toFixed(2)}\n` +
    `Total Quote: R${total.toFixed(2)}`;
}
