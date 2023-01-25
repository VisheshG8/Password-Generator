class PasswordGenerator {
  constructor(length, charset) {
    this.length = length;
    this.charset = charset;
    this.charsetOptions = {
      "alpha": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "alphanumeric": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      "alphanumeric-symbols": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};':\"\\|,.<>/?`~"
    };
  }

  generate() {
    var possibleChars = this.charsetOptions[this.charset];
    var password = "";
    for (var i = 0; i < this.length; i++) {
      password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    return password;
  }
}
// Get the "Generate Password" button
var submitBtn = document.querySelector("input[type='submit']");

// Add event listener for click event
submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the form from submitting and reloading the page

  // Get form inputs
  var length = document.getElementById("password-length").value;
  var charset = document.getElementById("password-charset").value;

  // Create instance of class
  var generator = new PasswordGenerator(length, charset);

  // Generate password
  var password = generator.generate();

  // Display password
  document.getElementById("pass").value = password;
});

// Get the "Copy Password" button
var copyBtn = document.getElementById("copy-btn");

// Add event listener for click event
copyBtn.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the form from submitting and reloading the page

  // Get the password input element
  var passwordInput = document.getElementById("pass");

  // Select the text in the input
  passwordInput.select();

  // Copy the text to the clipboard
  document.execCommand("copy");

  // Show message to indicate that the password has been copied
  alert("Password copied to clipboard!");
});
