
function handleEnter(event, nextInputId) {
    
    if (event.key === 'Enter') {

        var nextInput = document.getElementById(nextInputId);

        if (nextInput) {    
            nextInput.focus();
        }
    }
}

function handleLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username && password != '') {
        window.location.href = 'Dasboard.html';
    }

    else {
        alert('Tolong Lengkapi');
        return;  
    }
}