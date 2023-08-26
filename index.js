const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky",window.scrollY> 100)
});



/*window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href=' + id + ']').classList.add('active')
            });
        };
    });
};*/

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};


window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}