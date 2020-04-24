
const counters = document.querySelectorAll('.counter');
const speed = 300;

counters.forEach(counter =>{
  const updateCount = () =>{
  const target = +counter.getAttribute('data-target');
  const count = +counter.innerText;
  
  const inc = target / speed;
  console.log(count);

  if(count<target){
    counter.innerText = count + Math.floor(inc)
    setTimeout( updateCount , 1)
  } else{
    counter.innerText  =target
  }
  }
  updateCount()
});


window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
