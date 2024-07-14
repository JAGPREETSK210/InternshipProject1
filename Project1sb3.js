document.addEventListener('DOMContentLoaded', (event) => {
  
    const myButton1 = document.getElementById('myButton1');
    const myPopup1 = document.getElementById('myPopup1');
    const closePopup1 = document.getElementById('closePopup1');
    
    myButton1.addEventListener('click', () => {
        myPopup1.style.display = 'block';
    });

    closePopup1.addEventListener('click', () => {
        myPopup1.style.display = 'none';
    });

   
    const myButton2 = document.getElementById('myButton2');
    const myPopup2 = document.getElementById('myPopup2');
    const closePopup2 = document.getElementById('closePopup2');
    
    myButton2.addEventListener('click', () => {
        myPopup2.style.display = 'block';
    });

    closePopup2.addEventListener('click', () => {
        myPopup2.style.display = 'none';
    });

    
    const myButton3 = document.getElementById('myButton3');
    const myPopup3 = document.getElementById('myPopup3');
    const closePopup3 = document.getElementById('closePopup3');
    
    myButton3.addEventListener('click', () => {
        myPopup3.style.display = 'block';
    });

    closePopup3.addEventListener('click', () => {
        myPopup3.style.display = 'none';
    });

    
    window.addEventListener('click', (event) => {
        if (event.target === myPopup1) {
            myPopup1.style.display = 'none';
        }
        if (event.target === myPopup2) {
            myPopup2.style.display = 'none';
        }
        if (event.target === myPopup3) {
            myPopup3.style.display = 'none';
        }
    });
});
