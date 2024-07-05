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
let menu = document.querySelector(".bx-menu");
menu.style.cursor = "pointer";
menu.addEventListener("click",function(){
    let aside = document.querySelector("aside");
    if(aside.style.left === "" || aside.style.left === "-300px"){
        aside.style.left = "0px"
    } else {
        aside.style.left = "-300px"
    }
})
let searchicon = document.querySelector(".notification .fa-magnifying-glass");
searchicon.addEventListener("click",function (){
    let search = document.querySelector(".search1");
    search.classList.toggle("show1");
    
})