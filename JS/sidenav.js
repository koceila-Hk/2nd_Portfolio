/* Sidenav */
/*document.addEventListener('DOMContentLoaded', function() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    
    document.getElementById('openBtn').addEventListener('click', openNav);
    document.getElementById('mySidenav').addEventListener('click', closeNav);
    
    document.addEventListener('click', function(event) {
        const mySidenav = document.getElementById("mySidenav");
        const openBtn = document.getElementById("openBtn");

        if (event.target !== mySidenav && event.target !== openBtn && !mySidenav.contains(event.target)) {
            closeNav();
        }
    });
});
*/

document.addEventListener("DOMContentLoaded", function() {
    const sideNav = document.querySelector(".sideNav");
    const openNav = document.querySelector(".openNav");

    openNav.addEventListener("click", function() {
        if (window.getComputedStyle(sideNav).display === "none") {
            sideNav.style.display = "flex";
        }
        else {
            sideNav.style.display = "none";
        }
    })
});