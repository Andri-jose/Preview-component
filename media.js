

function show() {
    const share = document.querySelectorAll(".share");


    share.forEach(x => {
        const icon = document.getElementById("icon");
        const iconImage = document.getElementById("iconImage");

        if (x.style.display === "none") {
            x.style.display = "flex";
            icon.style.backgroundColor = "rgb(109, 127, 151)";
            iconImage.style.color = "rgb(255, 255, 255)";
        } else {
            x.style.display = "none";
            icon.style.backgroundColor = "rgb(236, 242, 248)";
            iconImage.style.color = "rgb(109, 127, 151)";
        }
    }

    )}

    
   

    