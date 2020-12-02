// animate smooth scroll
$('#view-work').on('click', function(){
    const images = $('#images').position().top;

    $('html, body').animate({
        scrollTop: images
    },900
    );
});

const main = document.getElementById('skill');

const data = [
    {
        image: './images/a1.jpg'
    },
    {
        image: './images/a2.jpg'
    },
    {
        image: './images/a3.jpg'
    },
    {
        image: './images/a4.jpg'
    },
    {
        image: './images/a5.jpg'
    },
    {
        image: './images/a6.jpg'
    },
    {
        image: './images/a7.jpg'
    },
    {
        image: './images/a8.jpg'
    },
    {
        image: './images/a9.jpg'
    }
];

data.forEach(createBox);

//create art boxes
function createBox(item){
    const box = document.createElement('div');

    const { image } = item;

    box.classList.add('box');
    box.innerHTML = `
    <img src="${image}" />
    `;

     
    
    main.appendChild(box);
}