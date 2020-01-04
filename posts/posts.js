const btn = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    btn.style.opacity = 1;
  } else {
    btn.style.opacity = 0;
  }
}

setTimeout(() => document.querySelector("body").style.overflow = "auto", 1000);