console.log("lol")

function openImage(img) {
    var lightbox = document.getElementById("lightbox");
    var expandedImg = document.getElementById("expanded-img");
    expandedImg.src = img.src;
    lightbox.style.display = "flex";
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}


document.querySelectorAll(".pro-container img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".pop-up").style.display = "block";
        document.querySelector(".pop-up img").src = image.getAttribute("src");
    }
});

document.querySelectorAll(".pop-up span").forEach((span) => {
    span.onclick = () => {
        document.querySelector(".pop-up").style.display = "none";
    };
});



function about() {
    console.log("Redirecting to about page");
    window.location.href = "/about/";
}