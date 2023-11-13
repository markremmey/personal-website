function addDate() {
    var dateButton = document.getElementById("dateButton");

    dateButton.onclick = () => document.getElementById('date').innerHTML = new Date().toString();
}

window.onload = function() {
    document.getElementById('poemButton').onclick = function() {
        document.getElementById('poem').innerHTML = "This is a nice poem"
    };
    addDate();
}

