



document.addEventListener("DOMContentLoaded", function() {
    var divElement = document.querySelector(".updivspan");
    var ulElement = divElement.querySelector("ul");
    var spanElement = divElement.querySelector(".span");

    divElement.addEventListener("click", function(event) {
        if (ulElement.classList.contains("d-none")) {
            ulElement.classList.remove("d-none");
        } else {
            ulElement.classList.add("d-none");
        }

        var target = event.target;
        if (target.tagName === "LI") {
            spanElement.textContent = target.textContent;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var divElement = document.querySelector(".updivspan2");
    var ulElement = divElement.querySelector("ul");
    var spanElement = divElement.querySelector(".span2");

    divElement.addEventListener("click", function(event) {
        if (ulElement.classList.contains("d-none")) {
            ulElement.classList.remove("d-none");
        } else {
            ulElement.classList.add("d-none");
        }

        var target = event.target;
        if (target.tagName === "LI") {
            spanElement.textContent = target.textContent;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var divElement = document.querySelector(".updivspan3");
    var ulElement = divElement.querySelector("ul");
    var spanElement = divElement.querySelector(".span3");

    divElement.addEventListener("click", function(event) {
        if (ulElement.classList.contains("d-none")) {
            ulElement.classList.remove("d-none");
        } else {
            ulElement.classList.add("d-none");
        }

        var target = event.target;
        if (target.tagName === "LI") {
            spanElement.textContent = target.textContent;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var upDivSpanElement = document.querySelector(".updivspan");
    var upDivSpan2Element = document.querySelector(".updivspan2");
    var ulElement = upDivSpan2Element.querySelector("ul");
    var spanElement = upDivSpan2Element.querySelector(".span2");

    upDivSpanElement.addEventListener("click", function(event) {
        var target = event.target;
        if (target.tagName === "LI" && target.textContent === "Azerbaycan") {
            ulElement.innerHTML = '<li>Baki</li><li>Xirdalan</li>';
        } else if (target.tagName === "LI" && target.textContent === "suriye") {
            ulElement.innerHTML = '<li>Halep</li><li>Hunus</li>';
        }

        ulElement.classList.remove("d-none");
        // spanElement.textContent = target.textContent;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var upDivSpan2Element = document.querySelector(".updivspan2");
    var upDivSpan3Element = document.querySelector(".updivspan3");
    var ulElement2 = upDivSpan3Element.querySelector("ul");
    var spanElement2 = upDivSpan3Element.querySelector(".span3");

    upDivSpan2Element.addEventListener("click", function(event) {
        var target = event.target;
        if (target.tagName === "LI") {
            var city = target.textContent;
            if (city === "Baki") {
                ulElement2.innerHTML = '<li>20yanvar</li>';
            } else if (city === "Halep") {
                ulElement2.innerHTML = '<li>El-Bab</li>';
            }  
            // } else {
            //     ulElement2.innerHTML = ''; // Hide the district list for other cities
            // }

            ulElement2.classList.remove("d-none");
            // spanElement2.textContent = city;
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var divElement = document.querySelector(".updivspan4");
    var ulElement = divElement.querySelector("ul");
    var spanElement = divElement.querySelector(".span4");

    divElement.addEventListener("click", function(event) {
        if (ulElement.classList.contains("d-none")) {
            ulElement.classList.remove("d-none");
        } else {
            ulElement.classList.add("d-none");
        }

        var target = event.target;
        if (target.tagName === "LI") {
            spanElement.textContent = target.textContent;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var divElement = document.querySelector(".updivspan5");
    var ulElement = divElement.querySelector("ul");
    var spanElement = divElement.querySelector(".span5");

    divElement.addEventListener("click", function(event) {
        if (ulElement.classList.contains("d-none")) {
            ulElement.classList.remove("d-none");
        } else {
            ulElement.classList.add("d-none");
        }

        var target = event.target;
        if (target.tagName === "LI") {
            spanElement.textContent = target.textContent;
        }
    });
});

/* Önceki CSS kuralları burada yer alır */

