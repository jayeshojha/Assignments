let popup = document.getElementById('popup');
let box = document.getElementById('box')
let button1 = document.querySelector('.button1');
let icon1 = document.getElementById('icon1')
let popupbox = document.querySelector('.popup-box')
let icon = document.getElementById('icon');
let navbar = document.getElementById('navbar');
let navbar1 = document.getElementById('navbar1');
let nav3 = document.getElementById('nav3')

// Show an alert massge of three divs innerText
function Alert() {
    let classes = Array.from(document.getElementsByClassName('class1'))
    classes.forEach((e) => {
        alert(e.innerText)
    });
}


// create a responsive navbar
let i = 0;
button1.addEventListener('click', Alert)
window.addEventListener('resize', () => {
    let width = window.innerWidth;
    if (width <= 786) {
        navbar.style.display = 'none';
        navbar1.removeAttribute('style')
    }
    else {
        navbar.style.display = 'flex';
        navbar1.style.display = 'none';
        nav3.style.display = 'none';
        nav3.style.right = '-40%';
        i = 0;
    }
})

// create a popup box for all questions
icon1.addEventListener('click', () => {
    if (i == 0) {
        nav3.removeAttribute('style')
        nav3.style.animation = 'magic 0.5s linear 0.1s 1'
        setTimeout(() => {
            nav3.style.right = '0%'
        }, 500)
        i++;
    } else {
        nav3.style.display = 'none'
        nav3.style.right = '-40%'
        i = 0;
    }
})
icon.addEventListener('click', () => {
    popupbox.style.display = 'none'
})


// Form validation
let firstname = document.getElementById('FirstName')
let lastname = document.getElementById('LastName')
let email = document.getElementById('Email')
let password = document.getElementById('Password');
let inptag = Array.from(document.getElementsByClassName('inp-tag'))
let info = Array.from(document.getElementsByClassName('info'))
let submit = document.getElementById('submit');
let Sform = document.getElementById('S-form');
let text = Array.from(document.getElementsByClassName('.Text'))
let show = document.getElementById('Show');
Sform.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;
    inptag.forEach((e) => {
        if (e.value == '') {
            e.nextSibling.innerText = '!Required'
            e.nextSibling.style.color = 'red'
            hasError = true;
        }else{
            e.nextSibling.innerText = ''
        }

    })
    for (let i = 0; i < firstname.value.length; i++) {
        let hasError1 = false;
        for (let j = 0; j <= 9; j++) {
            if (firstname.value[i] == `${j}`) {
                hasError1 = true;
                break;
            } else {
                firstname.nextSibling.innerText = ' '
            }
        }
         if(hasError1 == true){
            firstname.nextSibling.innerText = 'Only character allowed'
            firstname.nextSibling.style.color = 'red'
            hasError = true;
            break;
         }
    }
    for (let i = 0; i < lastname.value.length; i++) {
        let hasError2 = false;
        for (let j = 0; j <= 9; j++) {
            if (lastname.value[i] == `${j}`) {
                hasError2 = true;
                break;
            } else {
                lastname.nextSibling.innerText = ' '
            }
        }
         if(hasError2 == true){
            lastname.nextSibling.innerText = 'Only character allowed'
            lastname.nextSibling.style.color = 'red'
            hasError = true;
            break;
         }
    }

    if (!hasError) {
        Sform.submit(); // Programmatically submit the form
    }

})


//Password hide and show
show.addEventListener('change', () => {
    if (show.checked == true) {
        password.type = 'text'
    }
    else {
        password.type = 'password'
    }
})

// Popupbox With three buttons
let popupbox1 = document.querySelector('.popup-box1')
let icon2 = document.getElementById('icon2');
let box1 = document.getElementById('box1');
let buttons = Array.from(document.getElementsByClassName('btn'));
icon2.addEventListener('click', () => {
    popupbox1.style.display = 'none';
})

buttons.forEach((e) => {
    e.addEventListener('click', () => {
        alert(e.innerText);
    })
})

let btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', () => {
    popupbox1.removeAttribute('style');
})
