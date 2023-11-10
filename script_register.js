function check_inputs(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
    var name = document.getElementById('name').value;
    var phoneNumber = document.getElementById('phone_number').value;
    var age = document.getElementById('age').value;
    var sex = document.getElementById('sex').value;
    var concerns = document.getElementById('concerns').value;
    
    // Select all input elements
    var inputs = document.querySelectorAll('input');

    // Iterate through each input and check if it has a value
    inputs.forEach(function(input) {
        if (input.value.trim() === '') {
            // If the input is empty, add the 'empty-input' class
            input.classList.add('empty-input');
        }

        else {
            // If the input has a value, remove the 'empty-input' class
            input.classList.remove('empty-input');
            
        }
        input.addEventListener('input', function() {
            // Check if the input has a value
            if (input.value.trim() === '') {
                // If the input is empty, add the 'empty-input' class
                input.classList.add('empty-input');
            } else {
                // If the input has a value, remove the 'empty-input' class
                input.classList.remove('empty-input');
            }
        });
    });

    if (password !== confirmPassword) {
        // alert("Password and Confirm Password do not match.");
        document.getElementById('confirm_password').classList.add('empty-input');
        return;
    }
}
