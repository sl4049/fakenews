function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



function saveUrl() {
  var url = document.getElementById("urlInput").value;
    sessionStorage.setItem("inputurl", url);
}

function loadArticle () {
  var articleEl = document.getElementById('frame');
  articleEl.src = sessionStorage.getItem("inputurl");
}

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
//"http://worldnewsdailyreport.com/woman-arrested-for-training-squirrels-to-attack-her-ex-boyfriend/";
