




function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    console.log(getRandomInt(10));
  }
  
  console.log(getRandomInt(10));

  window.addEventListener('load', function() {
    document.querySelector(".roll").addEventListener('click', getRandomInt);
});