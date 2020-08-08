function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.querySelector(".hideOnScroll").style.display = "none";
    document.querySelectorAll(".showOnScroll").forEach(function(val) {
        val.style.display = 'inline';
    });
    document.querySelector("header").style.backgroundColor = "white";
    document.querySelector("header").style.boxShadow = "0 2px 60px 14px rgba(0,0,0,0.13)";
    document.querySelector("header").style.animation = "header 0.4s forwards linear";
    document.querySelector(".button--outline").classList += " button--header";
    document.querySelector(".button--secondary").classList += " button--header";
  } else {
    document.querySelector(".hideOnScroll").style.display = "inline";
    document.querySelectorAll(".showOnScroll").forEach(function(val) {
        val.style.display = 'none';
    });
    document.querySelector("header").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    document.querySelector("header").style.boxShadow = "0 2px 60px 14px rgba(0,0,0,0)";
    document.querySelector("header").style.animation = "none";
    document.querySelector(".button--outline").classList.remove("button--header");
    document.querySelector(".button--secondary").classList.remove("button--header");
  }
}

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