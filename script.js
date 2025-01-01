document.addEventListener("DOMContentLoaded", () => {
    const accessoryButtons = document.querySelectorAll("#accessories-container .btn");
    const styleGroups = document.querySelectorAll("#styles-container [data-accessory]");
    const stylebuttons = document.querySelectorAll("#styles-container .btn");
    const hairStayles = document.querySelectorAll("#styles-container [data-accessory='hair'] button");
    const legStayles = document.querySelectorAll("#styles-container [data-accessory='leg'] button");
    const accessoryStayles = document.querySelectorAll("#styles-container [data-accessory='accessories'] button");
    const backgroundStayles = document.querySelectorAll("#styles-container [data-accessory='backgrounds'] button");
    const earsStayles = document.querySelectorAll("#styles-container [data-accessory='ears'] button");
    const eyesStayles = document.querySelectorAll("#styles-container [data-accessory='eyes'] button");
    const mouthStayles = document.querySelectorAll("#styles-container [data-accessory='mouth'] button");
    const neckStayles = document.querySelectorAll("#styles-container [data-accessory='neck'] button");

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
    document.getElementById("random").addEventListener("click", () => {
        let randomHair = Math.floor(Math.random() * hairStayles.length) + 1;
        let randomEars = Math.floor(Math.random() * earsStayles.length) + 1;
        let randomEyes = Math.floor(Math.random() * eyesStayles.length) + 1;
        let randomMouth = Math.floor(Math.random() * mouthStayles.length) + 1;
        let randomNeck = Math.floor(Math.random() * neckStayles.length) + 1;
        let randomLeg = Math.floor(Math.random() * legStayles.length) + 1;
        let randomAccessories = Math.floor(Math.random() * accessoryStayles.length) + 1;
        let randomBackground = Math.floor(Math.random() * backgroundStayles.length) + 1;
        
        document.getElementById("hair").src = `alpaca-generator-assets/alpaca/hair/${hairStayles[randomHair - 1].getAttribute("id")}.png`;
        document.getElementById("ears").src = `alpaca-generator-assets/alpaca/ears/${earsStayles[randomEars - 1].getAttribute("id")}.png`;
        document.getElementById("eyes").src = `alpaca-generator-assets/alpaca/eyes/${eyesStayles[randomEyes - 1].getAttribute("id")}.png`;
        document.getElementById("mouth").src = `alpaca-generator-assets/alpaca/mouth/${mouthStayles[randomMouth - 1].getAttribute("id")}.png`;
        document.getElementById("neck").src = `alpaca-generator-assets/alpaca/neck/${neckStayles[randomNeck - 1].getAttribute("id")}.png`;
        document.getElementById("leg").src = `alpaca-generator-assets/alpaca/leg/${legStayles[randomLeg - 1].getAttribute("id")}.png`;
        document.getElementById("accessories").src = `alpaca-generator-assets/alpaca/accessories/${accessoryStayles[randomAccessories - 1].getAttribute("id")}.png`;
        document.getElementById("backgrounds").src = `alpaca-generator-assets/alpaca/backgrounds/${backgroundStayles[randomBackground - 1].getAttribute("id")}.png`;
    });
});