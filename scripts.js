document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Feature coming soon!");
        });
    });
});
