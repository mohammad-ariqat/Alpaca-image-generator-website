document.addEventListener("DOMContentLoaded", () => {
    const accessoryButtons = document.querySelectorAll("#accessories-container .btn");
    const styleGroups = document.querySelectorAll("#styles-container [data-accessory]");
    const stylebuttons = document.querySelectorAll("#styles-container .btn");
    console.log(styleGroups);
    console.log(accessoryButtons);

    accessoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const accessory = button.getAttribute("data-accessory");
            // Hide all style groups
            styleGroups.forEach(group => group.classList.add("d-none"));

            // Remove active class from all buttons
            accessoryButtons.forEach(button => button.classList.remove("active"));

            // Show the corresponding style group
            const activeGroup = document.querySelector(`#styles-container [data-accessory="${accessory}"]`);
            if (activeGroup) {
                activeGroup.classList.remove("d-none");
                button.classList.add("active");
            }
        });
    });
    stylebuttons.forEach(button => {
        button.addEventListener("click", () => {
            stylebuttons.forEach(button => button.classList.remove("active"));
            button.classList.add("active");
            const parent = button.parentElement;
            console.log(parent);
            const accessory = parent.getAttribute("data-accessory");
            const style = button.getAttribute("id");
            console.log(accessory, style);
            document.getElementById(accessory).src = `alpaca-generator-assets/alpaca/${accessory}/${style}.png`;
            
        });
    });
});