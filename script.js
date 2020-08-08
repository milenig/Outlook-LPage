function openTab(e, tabName) {
    let tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");

    //hide all tabs
    for( let i=0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    //remove style from active button
    for( let i=0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //show tab and style button
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        nav: false,
        center: true,
        autoplay: true,
        animateIn: true,
        smartSpeed: 1000
    });
  });