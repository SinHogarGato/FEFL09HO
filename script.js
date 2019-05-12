let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let genius = JSON.parse(this.responseText);
        document.getElementById("name").innerHTML = genius.name;
        document.getElementById("bday").innerHTML = genius.birthday;
    }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();


function showme() {
    let newRequest = new XMLHttpRequest();
    newRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let genius = JSON.parse(this.responseText);
            document.getElementById("bio").innerHTML = genius.bio;
        }
    };
    newRequest.open("GET", "einstein.json", true);
    newRequest.send();
}