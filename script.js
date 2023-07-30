/*-- scroll sections active link --*/
let menuIcon = document.querySelectorAll('menu-icon');
let navbar = document.querySelectorAll('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*-- scroll sections active link --*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset =sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top>=offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            });
        };
    });
/*-- sticky navbar --*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY >100);


/* remove toggle icon & navbar when clicked */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/* never change u fucker typed js */
const typed = new Typed ('.multiple-text', {
    strings: ['Frontend Developer','Web Developer','Blockchain Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true 
});