window.onload = function () {
    var fine = [34, 34, 34, 34, 34];
    var mitms = document.getElementsByClassName('mitm');
    var l0 = (mitms[0].offsetLeft + fine[0]);
    document.getElementById("nav_arrow").style.marginLeft = l0 + "px";
    
    for (var i = 0; i < mitms.length; i++) {
        mitms[i].default = false;
        mitms[i].fine = fine[i];
        mitms[i].onmouseover = function () {arr(this);};
        mitms[i].onmouseout = function () {
            var tmp = document.getElementsByClassName('mitm');
            for (var j=0; j<tmp.length; j++) {
                if (tmp[j].default === true) {arr(tmp[j]); break;}
            }
        };
        mitms[i].onclick = function() {
            var tmp = document.getElementsByClassName('mitm');
            for (var j=0; j<tmp.length; j++) {tmp[j].default = false;}
            this.default = true;
        }
    }
    mitms[0].default = true;
};

function arr(el) {
    var mitms = document.getElementsByClassName('mitm');
    var l = el.offsetLeft + el.fine;
    document.getElementById("nav_arrow").style.marginLeft = l + "px";
}
