function regexChecker() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    let nameCheck = /^[A-Z][a-zA-Z]+/;
    if(firstName.match(nameCheck)) {
        if(lastName.match(nameCheck)) {
            alert("Yay! Your inputs were all correct!");
        } else alert("Oh no! LAST NAME is an invalid format!");
    } else alert("Oh no! FIRST NAME is an invalid format!");
}