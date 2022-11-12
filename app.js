import{firebaseLogIn} from './firebase.js'
window.sucessAlert = function(successfulMessage){
    Swal.fire({
        icon: 'success',
        title: successfulMessage,
        showConfirmButton: false,
        timer: 1500
      })
}
window.errorAlert = function (errorMessage){  // onclick="errorAlert('good feeling')"
    Swal.fire({
        icon: 'error',
        title:errorMessage,
        text: 'Something went wrong!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
}

window.adminLogin = async function () {
    let emailValue = document.getElementById("email_value").value
    let passwordValue = document.getElementById("password_value").value
    try {
        await firebaseLogIn(emailValue, passwordValue);
        await sucessAlert('succesfuly logIn');
        window.location.href = './Home/index.html'
    } catch (e) {
        alert(e.message)
    }
}