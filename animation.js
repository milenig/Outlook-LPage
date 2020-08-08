const headText = document.querySelector('.anim1');
const coffeText = document.querySelector('.anim2');
const corner = document.querySelector('.corner');
const listItems = document.querySelectorAll('.list-item');
const blueText = document.querySelector('.anim4');
const organizedBg = document.querySelector('.organizedBg');
const img1 = document.querySelectorAll('.img1');
const img3 = document.querySelectorAll('.img3');
const accessibility = document.querySelector('.accessibility');
const welcomeText = document.querySelector('.welcomeText');
const ornament = document.querySelector('.ornament');
const outlookicn = document.querySelector('.outlook-icon');
const reflectAppIcon = document.querySelectorAll('.reflect-app-icon');
const expand = document.querySelector('.expand');

let divs = [headText, coffeText, corner, blueText, organizedBg, accessibility, welcomeText, ornament, outlookicn, expand];

function animation(entires) {
  entires.forEach(entry => {
    if (entry.isIntersecting) {
        if(entry.target.classList.contains('anim1')){
            entry.target.style.animation = `headText 1s forwards ease-out`;
        }
        if(entry.target.classList.contains('anim2')){
            entry.target.style.animation = `coffeText 1s forwards ease-out`;
        }
        if(entry.target.classList.contains('corner')){
            entry.target.style.animation = `corner 1.5s forwards ease-in-out`;
        }
        if(entry.target.classList.contains('anim4')){
            entry.target.style.animation = `blueText 1.2s forwards ease-out`;
        }
        if(entry.intersectionRatio == 1){
          if(entry.target.classList.contains('list-item')){
            entry.target.style.animation = `icon_reflect 1s 0.7s forwards ease-in-out`;
          }
        }
        if(entry.target.classList.contains('outlook-icon')){
          entry.target.style.animation = `icon_reflect 0.55s forwards linear`;
        }
        if(entry.target.classList.contains('organizedBg')){
          entry.target.style.animation = `organizedBg 1s forwards ease-out`;
      }
        if(entry.target.classList.contains('img1')){
          entry.target.style.animation = `leftImg 1.7s 0.8 forwards ease-in-out`;
      }
        if(entry.target.classList.contains('img3')){
          entry.target.style.animation = `rightImg 1.7s 0.8 forwards ease-in-out`;
      }
        if(entry.target.classList.contains('ornament')){
          entry.target.style.animation = `ornament 1s forwards linear`;
      }
        if(entry.target.classList.contains('accessibility')){
          entry.target.style.animation = `accessibility 1s forwards ease-in`;
      } 
        if(entry.target.classList.contains('welcomeText')){
          entry.target.style.animation = `coffeText 1.5s forwards ease-out`;
      }
        if(entry.target.classList.contains('reflect-app-icon')){
          entry.target.style.animation = `icon_reflect 0.8s ${entry.target.dataset.delay} forwards ease-out`;
      }
        if(entry.target.classList.contains('expand')){
          entry.target.style.animation = `expand 1.2s forwards ease-out`;
      }
        
    }
    else {
        entry.target.style.animation = 'none';
    }
  })
}
const observer = new IntersectionObserver(animation);
divs.forEach(div => observer.observe(div));
listItems.forEach(element => observer.observe(element));
img1.forEach(element => observer.observe(element));
img3.forEach(element => observer.observe(element));
reflectAppIcon.forEach(element => observer.observe(element));