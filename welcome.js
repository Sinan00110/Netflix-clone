let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
setInterval(nextSlide, 5000);

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.nobox');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const cardWidth = 20; 
    const cardsToShow = 5;
    const totalCards = 16; 

    let index = 0;

    function updateSlider() {
        const offset = -index * cardWidth;
        slider.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', function () {
        if (index < (totalCards / cardsToShow - 1)) {
            index++;
        }
        updateSlider();
    });

    prevButton.addEventListener('click', function () {
        if (index > 0) {
            index--;
        }
        updateSlider();
    });

    updateSlider(); 
});
// JavaScript to handle scroll event
window.addEventListener("scroll", function() {
    var navbar = document.querySelector("nav");
    // Add or remove 'scrolled' class based on scroll position
    if (window.scrollY > 60) { // Adjust this value based on how much scroll you want before it changes
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});





async function moviedata() {
    try {
        const all = document.querySelector(".api");
        const input = document.querySelector("input").value.trim();

        if (!input) return; // Exit if search is empty

        // Clear the previous results
        all.innerHTML = "";

        // Hide all sections except the navbar and search bar
        document.querySelectorAll("section",).forEach(section => {
            section.classList.add("hidden");
        });

        // Change body background to black
        document.body.style.backgroundColor = "black";

        // Fetch movie data
        let movie = await fetch(`https://www.omdbapi.com/?s=${input}&apikey=d53ebbac`);
        let data = await movie.json();

        // Check if no results found
        if (data.Response === "False") {
            all.innerHTML = "<h1>No movies found</h1>";
        } else {
            data.Search.forEach(({ Type, Poster, Title, Year }) => {
                all.innerHTML += `
                    <div class="start">
                        <div class="type"><h2>${Type}</h2></div>
                        <div class="image">
                            <img src="${Poster === 'N/A' ? './giphy.gif' : Poster}" alt="Poster">
                        </div>
                        <div class="title"><h3>${Title}</h3></div>
                        <div class="year"><p>${Year}</p></div>
                    </div>`;
            });
        }
    } catch (err) {
        console.error(err.message);
    }
}
document.querySelector(".searchfield").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        moviedata();
    }
});
document.querySelector(".iconsearch").addEventListener("click", moviedata);
