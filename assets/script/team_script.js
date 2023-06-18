// script for navbar

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:'right'});
});

// script for team.html

document.addEventListener("DOMContentLoaded", function () {
    let triggers = document.getElementsByClassName("profile-picture");

    for (let trigger of triggers) {
        trigger.addEventListener("click", function () {
            let picNumber = this.getAttribute("id").substr(this.getAttribute("id").length - 1);
            console.log(picNumber);
            for (let picture of document.getElementsByClassName('pic-container')) {
                picture.style.borderColor = "white";
                picture.style.zIndex = "1";
            };
            for (let info of document.getElementsByClassName('profile-info')) {
                info.style.display = "none";
            }
            for (let element of document.getElementsByClassName(this.getAttribute("id"))) {
                element.style.display = "block";
            };
            let container = "container-" + picNumber;
            console.log(container);
            document.getElementById(container).style.borderColor = "#ee6e73";
            document.getElementById(container).style.zIndex = "5";
        });
    }
});
