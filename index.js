 // EVENTS
 // element.addEventListner("event", function(){})
 console.log('hello world');

 const button2 = document.querySelector('.btn2');
   
 function alertBtn() {
    button2.style.backgroundColor = 'red';
    alert('Button clicked!');
 }
    button2.addEventListener("click", alertBtn);

const newBackgroundColor = document.querySelector('.box3')

function changeBgColor () {
    newBackgroundColor.style.backgroundColor = 'blue';
}
newBackgroundColor.addEventListener("mouseover", changeBgColor);