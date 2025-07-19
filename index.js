 // EVENTS - ptr2
 // change card display on click

 const revealButton = document.querySelector('.reveal-button');
 const hiddenContent = document.querySelector('.content-hidden');

function toggleContent() {
    if(hiddenContent.classList.contains('reveal-button'))
        {
        hiddenContent.classList.remove('reveal-button');
    }
    else{  
        hiddenContent.classList.add('reveal-button');
    }
}

revealButton.addEventListener('click', toggleContent);