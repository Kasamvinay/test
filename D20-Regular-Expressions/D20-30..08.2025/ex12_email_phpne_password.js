// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test('user@example.com')); // true

// Phone number validation (simple)
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
console.log(phoneRegex.test('123-456-7890')); // true

// Password validation (at least 8 chars, 1 uppercase, 1 lowercase, 1 number)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
console.log(passwordRegex.test('Password123')); // true