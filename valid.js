function valid() {
    var num = document.getElementById("no").value;
    var pattern = /^\d{10}$/;

    if (pattern.test(num)) {
        alert("Valid");
        return true;
    } else {
        alert("Not valid");
        num = " ";
        return false;
    }
}