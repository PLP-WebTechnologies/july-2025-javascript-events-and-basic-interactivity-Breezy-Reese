// ---------- Part 1: Basic Event Handling ----------
const clickBtn = document.getElementById('clickBtn');
const message = document.getElementById('message');

clickBtn.addEventListener('click', () => {
    message.textContent = "You clicked the button! 🎉";
});

// ---------- Part 2: Interactive Features ----------

// Light/Dark Mode
const toggleThemeBtn = document.getElementById('toggleTheme');
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Counter
let count = 0;
const counter = document.getElementById('counter');
document.getElementById('increment').addEventListener('click', () => {
    count++;
    counter.textContent = count;
});
document.getElementById('decrement').addEventListener('click', () => {
    count--;
    counter.textContent = count;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});

// ---------- Part 3: Form Validation ----------
const form = document.getElementById('signupForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop form from submitting
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let errors = [];

    if(name.length < 3) errors.push("Name must be at least 3 characters.");
    if(!/^\S+@\S+\.\S+$/.test(email)) errors.push("Email is invalid.");
    if(password.length < 6) errors.push("Password must be at least 6 characters.");

    if(errors.length > 0){
        formMessage.textContent = errors.join(" ");
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Form submitted successfully! ✅";
        formMessage.style.color = "green";
    }
});
