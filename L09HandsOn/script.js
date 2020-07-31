const newRequest = new XMLHttpRequest();
let myObj;
newRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("name").innerHTML = myObj.name;
        document.getElementById("birthday").innerHTML = myObj.birthday;
    }
};

function loadBio() {
    document.getElementById("bio").innerHTML = myObj.bio;
}

newRequest.open("GET", "einstein.json", true);
newRequest.send();