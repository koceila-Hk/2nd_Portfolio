/* Sidenav */
document.addEventListener('DOMContentLoaded', function() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    
    document.getElementById('openBtn').addEventListener('click', openNav);
    document.getElementById('mySidenav').addEventListener('click', closeNav);
    
    document.addEventListener('click', function(event) {
         document.getElementById("mySidenav");
         document.getElementById("openBtn");

        if (event.target !== mySidenav && event.target !== openBtn && !mySidenav.contains(event.target)) {
            closeNav();
        }
    });
});
    


/*
document.addEventListener('DOMContentLoaded', function() {
    // Function to open the side navigation menu
    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }
  
    // Function to close the side navigation menu
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  
    // Event listener for the "open" button
    document.getElementById("openBtn").addEventListener('click', openNav);
  
    // Event listener for clicks outside the side navigation menu
    document.addEventListener('click', function(event) {
      var sidenav = document.getElementById("mySidenav");
      var openBtn = document.getElementById("openBtn");
  
      if (event.target !== sidenav && event.target !== openBtn && !sidenav.contains(event.target)) {
        closeNav();
      }
    });
  });
*/