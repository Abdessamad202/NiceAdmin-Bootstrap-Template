// Select all elements with the class 'disac'
let lists = document.querySelectorAll("aside .elements .disac");

// Initialize an empty array to store the '.element' elements
let a = [];

// Variable to keep track of the currently active '.disac'
let currentActiveDisac = null;

// Iterate over the NodeList
for (let i = 0; i < lists.length; i++) {
    // Find the '.element' element within each '.disac' and add it to the array
    let element = lists[i].querySelector(".element");
    if (element) { // Check if the '.element' element exists
        a.push({ element, disac: lists[i] }); // Store both '.element' and '.disac' reference
        console.log(element);
    }
}

// Add click event listener to each '.element'
a.forEach(item => {
    item.element.addEventListener("click", function() {
        // Remove 'showing' class from the currently active '.disac' if it's not the one being clicked
        if (currentActiveDisac && currentActiveDisac !== item.disac) {
            currentActiveDisac.classList.remove("showing");
        }

        // Toggle the 'showing' class on the clicked '.disac'
        item.disac.classList.toggle("showing");

        // Update the current active '.disac'
        currentActiveDisac = item.disac.classList.contains("showing") ? item.disac : null;
    });
});
let profile = document.querySelector(".profile .name");
let pic = document.querySelector(".profile .pic");
profile.addEventListener("click",function(){
    profile.classList.toggle("show");
})
pic.addEventListener("click",function(){
    profile.classList.toggle("show");
})
// Assuming your HTML structure has a menu icon with class "bx-menu",
// an aside element, and a main content area with class "cont".

// document.addEventListener("DOMContentLoaded", function() {
    // Select the menu icon
    let menu = document.querySelector(".bx-menu");

    // Add a click event listener to the menu icon
    menu.addEventListener("click", function() {
        // Select elements needed
        let aside = document.querySelector("aside");
        let main = document.querySelector("main .cont");

        // Check the current state of the aside element
        if (aside.style.left === "" || aside.style.left === "-300px") {
            // Show the aside menu
            // aside.style.opacity = "1";
            aside.style.left = "0px";
            let all = document.querySelector(".all");
            // Adjust main content width if needed
            if(window.innerWidth > 991 && (all.style.width === "" || all.style.width === "100%") ){
                main.style.width = "calc(100% - 300px)";
            }
        } else {
            // Hide the aside menu
            aside.style.left = "-300px";
            // aside.style.opacity = "0";
            if(window.innerWidth <540){
                main.style.minWidth = "320px";
            }else {
                main.style.width = "100%";

            }
            // Reset main content width
        }
    });
// });

let searchicon = document.querySelector(".notification .fa-magnifying-glass");
searchicon.addEventListener("click",function (){
    let search = document.querySelector(".search1");
    search.classList.toggle("show1");
    
})
let tab = document.querySelector(".tab");




// let filter = document.querySelectorAll(".fa-ellipsis");
function toggleFilter(icon) {
    // Get the parent of the ellipsis icon
    let parentElement = icon.parentElement;

    // Select the filter element
    let filterElement = parentElement.parentElement.querySelector(".infos");

    // Toggle the display of the filter element
    if (filterElement.style.display === "none" || filterElement.style.display === "") {
        filterElement.style.display = "block";
    } else {
        filterElement.style.display = "none";
    }
}
let filterIcons = document.querySelectorAll(".fa-ellipsis");
        filterIcons.forEach(function(icon) {
            icon.style.cursor = "pointer"
            icon.addEventListener("click", function() {
                toggleFilter(icon);
                window.addEventListener("click", function() {
            }); 
            
        });
        });
       