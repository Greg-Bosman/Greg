/jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/

var tabInfoBtn = document.getElementById("event-description");
var tabArtiestBtn = document.getElementById("event-artiesten");

var infoContent = document.getElementById("event-info");
var infoArtiesten = document.getElementById("alle-artiesten");

var tabToggle = true;

function toggle() {
    if (tabToggle == true) {

        tabArtiestBtn.classList.add("active");
        tabInfoBtn.classList.remove("active");
        infoArtiesten.classList.remove("hide");
        infoContent.classList.add("hide");
        tabToggle = false;
        console.log('check 1');
        return;
        
    } else {

        tabArtiestBtn.classList.remove("active");
        tabInfoBtn.classList.add("active");
        infoArtiesten.classList.add("hide");
        infoContent.classList.remove("hide");
        tabToggle = true;
        console.log('check 2');
        return;
        
    }
}


//function makeActiveArtiest() {
//
//    tabArtiestBtn.classList.add("active");
//    tabInfoBtn.classList.remove("active");
//    infoArtiesten.classList.remove("hide");
//    infoContent.classList.add("hide");
//
//}
//
//function makeActiveInfo() {
//
//    tabArtiestBtn.classList.remove("active");
//    tabInfoBtn.classList.add("active");
//    infoArtiesten.classList.add("hide");
//    infoContent.classList.remove("hide");
//}


tabArtiestBtn.addEventListener('click', toggle);
tabInfoBtn.addEventListener('click', toggle);
