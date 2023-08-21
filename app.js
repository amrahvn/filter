



document.addEventListener("DOMContentLoaded", function() {
    let divElement = document.querySelector(".updivspan1");
    let ulElement = divElement.querySelector("ul");
    let spanElement = divElement.querySelector(".span1");

    divElement.addEventListener("click", function(event) {
        if (ulElement.classList.contains("d-none")) {
            ulElement.classList.remove("d-none");
        } else {
            ulElement.classList.add("d-none");
        }

        let target = event.target;
        if (target.tagName === "LI") {
            spanElement.textContent = target.textContent;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let divElement = document.querySelector(".updivspan2");
    let ulElement = divElement.querySelector("ul");
    let spanElement = divElement.querySelector(".span2");

    divElement.addEventListener("click", function(event) {
        if (ulElement.classList.contains("d-none")) {
            ulElement.classList.remove("d-none");
        } else {
            ulElement.classList.add("d-none");
        }

        let target = event.target;
        if (target.tagName === "LI") {
            spanElement.textContent = target.textContent;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let divElement = document.querySelector(".updivspan3");
    let ulElement = divElement.querySelector("ul");
    let spanElement = divElement.querySelector(".span3");

    divElement.addEventListener("click", function(event) {
        if (ulElement.classList.contains("d-none")) {
            ulElement.classList.remove("d-none");
        } else {
            ulElement.classList.add("d-none");
        }

        let target = event.target;
        if (target.tagName === "LI") {
            spanElement.textContent = target.textContent;
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    let divElement = document.querySelector(".updivspan4");
    let ulElement = divElement.querySelector("ul");
    let spanElement = divElement.querySelector(".span4");

    divElement.addEventListener("click", function(event) {
        if (ulElement.classList.contains("d-none")) {
            ulElement.classList.remove("d-none");
        } else {
            ulElement.classList.add("d-none");
        }

        let target = event.target;
        if (target.tagName === "LI") {
            spanElement.textContent = target.textContent;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let divElement = document.querySelector(".updivspan5");
    let ulElement = divElement.querySelector("ul");
    let spanElement = divElement.querySelector(".span5");

    divElement.addEventListener("click", function(event) {
        if (ulElement.classList.contains("d-none")) {
            ulElement.classList.remove("d-none");
        } else {
            ulElement.classList.add("d-none");
        }

        let target = event.target;
        if (target.tagName === "LI") {
            spanElement.textContent = target.textContent;
        }
    });
});


  
document.addEventListener("DOMContentLoaded", function () {
    let countryDropdown = document.getElementById("countryDropdown");
    let cityDropdown = document.getElementById("cityDropdown");
    let districtDropdown = document.getElementById("districtDropdown");
    
    let data = {
        countries: {
            Azerbaycan: ["Baki", "Xirdalan"],
            suriye: ["Halep", "Hunus"],
        },
        cities: {
            Baki: ["20yanvar", "ecemi"],
            Xirdalan: ["Aff", "BAzar"],
            Halep: ["Some", "Other"],
            Hunus: ["More", "Options"],
        },
       
    };
    
    function populateDropdown(dropdown, items) {
        dropdown.innerHTML = "";
        items.forEach((item) => {
            let li = document.createElement("li");
            li.textContent = item;
            dropdown.appendChild(li);
        });
    }
    
    countryDropdown.addEventListener("click", function (event) {
        let selectedCountry = event.target.textContent.trim();
        populateDropdown(cityDropdown, data.countries[selectedCountry]);
        populateDropdown(districtDropdown, []); 
    });
    
    cityDropdown.addEventListener("click", function (event) {
        let selectedCity = event.target.textContent.trim();
        populateDropdown(districtDropdown, data.cities[selectedCity]);
    });
});
