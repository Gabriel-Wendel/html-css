function changeIcon (photoIcon){
    document.getElementById("icon").src = photoIcon;
}

function calc_total() {
    var amount = parseInt(document.getElementById('cAmount').value)
    tot = amount * 1500;
    document.getElementById('cTotal').value = tot;
}