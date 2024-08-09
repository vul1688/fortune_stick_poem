const images = [
    'images/poems/poem_001.jpg', 
    'images/poems/poem_008.jpg', 
    'images/poems/poem_009.jpg', 
    'images/poems/poem_011.jpg', 
    'images/poems/poem_012.jpg', 
    'images/poems/poem_013.jpg', 
    'images/poems/poem_014.jpg', 
    'images/poems/poem_018.jpg', 
    'images/poems/poem_020.jpg', 
    'images/poems/poem_021.jpg', 
    'images/poems/poem_022.jpg', 
    'images/poems/poem_028.jpg', 
    'images/poems/poem_029.jpg', 
    'images/poems/poem_034.jpg', 
    'images/poems/poem_035.jpg', 
    'images/poems/poem_036.jpg', 
    'images/poems/poem_043.jpg', 
    'images/poems/poem_045.jpg', 
    'images/poems/poem_047.jpg', 
    'images/poems/poem_048.jpg', 
    'images/poems/poem_050.jpg', 
    'images/poems/poem_053.jpg', 
    'images/poems/poem_055.jpg', 
    'images/poems/poem_061.jpg', 
    'images/poems/poem_067.jpg', 
    'images/poems/poem_068.jpg', 
    'images/poems/poem_071.jpg', 
    'images/poems/poem_073.jpg', 
    'images/poems/poem_076.jpg', 
    'images/poems/poem_080.jpg', 
    'images/poems/poem_085.jpg', 
    'images/poems/poem_086.jpg', 
    'images/poems/poem_089.jpg', 
    'images/poems/poem_090.jpg', 
    'images/poems/poem_091.jpg', 
    'images/poems/poem_092.jpg', 
    'images/poems/poem_095.jpg', 
    'images/poems/poem_096.jpg'
];

document.getElementById('showImageBtn').addEventListener(
    'click', 
    function() {
        const button = this;
        const imageContainer = document.getElementById('imageContainer');
        
        button.disabled = true;
        
        imageContainer.innerHTML = '';
        wingsContainer.innerHTML = '';
        const rotatingImage = document.createElement('img');
        rotatingImage.src = 'images/wings.png';
        rotatingImage.style.animation = 'rotate 10s linear';
        wingsContainer.appendChild(rotatingImage);

        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(1800deg);
                }
            }
        `;
        document.head.appendChild(style);

        setTimeout(
            function() {
                const randomImage = images[Math.floor(Math.random() * images.length)];
                
                wingsContainer.innerHTML = '';
                const imgElement = document.createElement('img');
                imgElement.src = randomImage;
                imageContainer.appendChild(imgElement);
                
                button.textContent = '再求一隻籤';
                button.disabled = false;
            }, 
            5000
        );
    }
);
