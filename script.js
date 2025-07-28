document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const thankYouMessage = document.getElementById('thankYouMessage');
  
    let valid = true;
  
    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    thankYouMessage.classList.add('hidden');
  
    // Name validation
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Full name is required';
      valid = false;
    }
  
    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Email is required';
      valid = false;
    } else if (!emailInput.value.match(emailPattern)) {
      emailError.textContent = 'Invalid email format';
      valid = false;
    }
  
    if (valid) {
      // Optional: Save to localStorage
      localStorage.setItem('subscriberName', nameInput.value);
      localStorage.setItem('subscriberEmail', emailInput.value);
  
      // Show thank you message
      thankYouMessage.classList.remove('hidden');
  
      // Disable button (optional)
      e.target.querySelector('button').disabled = true;
  
      // Optional: Clear form
      nameInput.value = '';
      emailInput.value = '';
    }
  });
  