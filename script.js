
document.addEventListener('DOMContentLoaded', function() {
  // Image gallery functionality
  const dots = document.querySelectorAll('.dot');
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      // Remove active class from all dots
      dots.forEach(d => d.classList.remove('active'));
      
      // Add active class to clicked dot
      dot.classList.add('active');
      
      // Here you would typically change the main image
      // In a real implementation, you'd have multiple images to switch between
      console.log(`Changing to image ${index + 1}`);
    });
  });
  
  // Address form submission
  const addressForm = document.getElementById('addressForm');
  
  if (addressForm) {
    addressForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form values
      const cep = document.getElementById('cep').value;
      const street = document.getElementById('street').value;
      const number = document.getElementById('number').value;
      
      // Validate form (simple validation)
      if (!cep || !street || !number) {
        alert('Por favor, preencha todos os campos do endereço.');
        return;
      }
      
      // Store address data in localStorage for use on the shipping page
      localStorage.setItem('shippingAddress', JSON.stringify({
        cep,
        street,
        number
      }));
      
      // Redirect to shipping page
      window.location.href = 'frete.html';
    });
  }
});
