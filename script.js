// Function to handle form submission
document.getElementById('donationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const donorName = document.getElementById('donorName').value;
  const foodItem = document.getElementById('foodItem').value;
  const quantity = document.getElementById('quantity').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const location = document.getElementById('location').value;

  // Create a new donation entry
  const donation = {
    donorName,
    foodItem,
    quantity,
    expiryDate,
    location              
  };

  // Add donation to list
  addDonationToList(donation);

  // Reset form
  document.getElementById('donationForm').reset();
});

// Function to add a donation to the list
function addDonationToList(donation) {
  const donationList = document.getElementById('donationList');
  const listItem = document.createElement('li');
  listItem.textContent = `${donation.donorName} donated ${donation.quantity} ${donation.foodItem}(s) - Exp: ${donation.expiryDate} at ${donation.location}`;
  donationList.appendChild(listItem);
}
