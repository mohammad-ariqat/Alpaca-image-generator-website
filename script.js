document.addEventListener("DOMContentLoaded", () => {
    const accessoryButtons = document.querySelectorAll("#accessories-container .btn");
    const styleGroups = document.querySelectorAll("#styles-container [data-accessory]");
    console.log(styleGroups);
    console.log(accessoryButtons);

    accessoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const accessory = button.getAttribute("data-accessory");
            // Hide all style groups
            styleGroups.forEach(group => group.classList.add("d-none"));

            // Show the corresponding style group
            const activeGroup = document.querySelector(`#styles-container [data-accessory="${accessory}"]`);
            if (activeGroup) {
                activeGroup.classList.remove("d-none");
            }
        });
    });
});