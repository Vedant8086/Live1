let bulbImg = document.querySelector('#bulb-img');
let toggleBtn = document.querySelector('#toggle-btn');


toggleBtn.addEventListener('click', function() {
    if (toggleBtn.innerHTML == "Turn On") {
        bulbImg.src = 'pngtree-flat-light-bulb-shine-bright-isolated-vector-png-image_2531330-removebg-preview.png';
        toggleBtn.innerHTML = "Turn Off";
        console.log("Turned On");
    } else {
        bulbImg.src = 'pngtree-flat-light-bulb-turn-off-isolated-vector-png-image_5692256-removebg-preview.png';
        toggleBtn.innerHTML = "Turn On";
        console.log("Turned Off");
    }
});