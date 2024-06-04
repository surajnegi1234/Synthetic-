document.getElementById("configuration-select").addEventListener("click", function() {
    var selectedValue = this.value;
    const right = document.getElementsByClassName("right")[0];
    const rightOne = document.getElementsByClassName("right-one")[0];

    if (selectedValue === "network") {
        right.style.display = "none";
        rightOne.style.display = "block";
    } else {
        right.style.display = "block";
        rightOne.style.display = "none";
    }
});

