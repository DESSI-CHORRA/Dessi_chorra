// Animated Counter
let count = 0;
let target = 100000; // Display number only

let counter = document.getElementById("number");

let speed = setInterval(() => {

    count += 500;

    counter.innerHTML = count.toLocaleString();

    if(count >= target){
        counter.innerHTML = target.toLocaleString() + "+";
        clearInterval(speed);
    }

},20);


// Fade Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition=".8s";

    observer.observe(card);

});


// Smooth Scroll
document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",function(e){

if(this.hash){

e.preventDefault();

document.querySelector(this.hash).scrollIntoView({

behavior:"smooth"

});

}

});

});


// Console Message
console.log("Welcome to Desi Choraa Website 🚀");
