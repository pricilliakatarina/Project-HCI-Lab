function userData(event) {

    let username = document.getElementById("username")
    let password = document.getElementById("password")
    let email = document.getElementById("email")
    let region = document.getElementById("region")
    let dateOfBirth = document.getElementById("dateOfBirth")
    let agreement = document.getElementById("agree")

    if (username.value.length < 5) {
        let choice = confirm("Your username is too Short")
        if (choice == true) {
            event.preventDefault()
        }
    } else if (!isNaN(password.value)) {
        let choice = confirm("Your password must contain more at least one Alphabetic Character")
        if (choice == true) {
            event.preventDefault()
        }
    } else if (!email.value.includes("@") || !email.value.includes(".com")) {
        let choice = confirm("Your email address is invalid")
        if (choice == true) {
            event.preventDefault()
        }
    } else if (!region.value) {
        let choice = confirm("Please choose your region")
        if (choice == true) {
            event.preventDefault()
        }
    } else if (!dateOfBirth.value) {
        let choice = confirm("Please input your date of birth")
        if (choice == true) {
            event.preventDefault()
        }
    } else if (!agreement.checked) {
        let choice = confirm("You need to agree to our Terms and Condition")
        if (choice == true) {
            event.preventDefault()
        }
    } else {
        let choice = confirm("Are you sure to submit the current datas?")
        if (choice == false) {
            event.preventDefault()
        }
    }

}