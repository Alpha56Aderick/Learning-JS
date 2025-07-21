
let arcordian = document.getElementsByClassName('content-container');


for (i = 0; i < arcordian.length; i++ ){

    arcordian[i].addEventListener('click', function(){

        this.classList.toggle('active');
    })
}