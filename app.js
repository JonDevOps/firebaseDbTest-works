// Your Firebase configuration object (replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyBJRYy4TZCRWgNSnY9wkhnK8EHlbhGbTO0",
    authDomain: "fireasedbtest.firebaseapp.com",
    projectId: "fireasedbtest",
    storageBucket: "fireasedbtest.firebasestorage.app",
    messagingSenderId: "937276003075",
    appId: "1:937276003075:web:07d1796e56cb782d748f36"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Realtime Database
const database = firebase.database();
const formDataRef = database.ref('formData'); // 'formData' is the root node for your data

// Get a reference to the form
const dataForm = document.getElementById('dataForm');

// Add an event listener for form submission
dataForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Push data to Firebase Realtime Database
    formDataRef.push({
        name: name,
        email: email,
        timestamp: new Date().toISOString() // Add a timestamp
    })
    .then(() => {
        alert('Data submitted successfully!');
        dataForm.reset(); // Clear the form
    })
    .catch((error) => {
        console.error('Error submitting data:', error);
        alert('Error submitting data. Check console for details.');
    });
});