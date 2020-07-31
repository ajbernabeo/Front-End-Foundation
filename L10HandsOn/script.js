let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let gitObject = JSON.parse(this.responseText);
        for (let i = 0; i < gitObject.length; i++) {
        let link = $('<a>').text(repo.full_name);
        link.attr('href', repo.html_url);
        $("#repos").append($('<li>').append(link));
        }
    }
};
gitHubRequest.open("GET", "https://api.github.com/users/ajbernabeo/repos", true);
gitHubRequest.send();