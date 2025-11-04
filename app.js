/*-------------------------------- Constants --------------------------------*/

const stage1East = {
    stageLevel : 1,
    title : 'A Pirate\'s Voyage',
    instructions : 'You see a Island in the distance do you want to explore it?',
    image: './stage0-image.png',
    choices :[
        {text: 'Pass'},
        {text: 'Explore it'},
        {text: 'Go back'}
    ]
    
}

const stage1West = {
    stageLevel : 1,
    title : 'A Pirate\'s Voyage',
    instructions : 'You see a Ship in the distance do you want to attack it?',
    image: './stage0-image.png',
    choices :[
        {text: 'Pass'},
        {text: 'Attack'},
        {text: 'Go back'}
    ]
    
}

const stageDetails = {


    
}

const stage0 = {
    stageLevel : 0,
    title : 'A Pirate\'s Voyage',
    instructions : 'On the quest for buried treasure, a group of pirates set sail across the seven seas. The wind blows from the north. Which way will you sail?',
    image: './stage0-image.png',
    choices :[
        {text: 'East', nextStage: stage1East},
        {text: 'West', nextStage: stage1West}
    ]
}




const init = () => {
    const heading = document.createElement('h1');
    heading.textContent = activeStage.title
    heading.classList.add('stage-heading');
    gameElements.appendChild(heading);
    renderStage()
    
}

// const renderButton = (buttonData) => {
//     // const buttonData = {text: 'East'}
//     const button = document.createElement('button')
//     button.textContent = buttonData.text
//     gameElements.appendChild(button)
// }


const renderStage = () => {
    
// const heading = document.createElement('h1');
// heading.textContent = activeStage.title
// heading.classList.add('stage-heading');
// gameElements.appendChild(heading);

const image = document.createElement('img')
image.src = activeStage.image
image.classList.add('stage-image')
// image.id = "game-image";
gameElements.appendChild(image)
const stageImage = document.getElementById('game-image') 


// replace image rather than just add
// If it does replace it



const paragraph = document.createElement('p');
paragraph.textContent = activeStage.instructions
paragraph.classList.add('stage-text');
gameElements.appendChild(paragraph);



const flexContainer = document.createElement('div');
flexContainer.classList.add('flex-container');

// const button = document.createElement('button')
// button.textContent = buttonData.text
// button.classList.add('stage-button');
// flexContainer.appendChild(button)


gameElements.appendChild(flexContainer);

const renderButton = (buttonData) => {
    const button = document.createElement('button')
    button.textContent = buttonData.text
    button.addEventListener('click', () => {
        activeStage = buttonData.nextStage
        renderStage()
    })
    flexContainer.appendChild(button)
}

// (function) => {
    // runs a function on the array
    //  function(value of array at index, index)
    // }

activeStage.choices.forEach(renderButton)


// renderButton({text: 'East', nextStage: stage1East}, 0)
// renderButton({text: 'West', nextStage: stage1West}, 1)


}





// console.log(stage0.stageLevel = 1)

/*---------------------------- Variables (state) ----------------------------*/

let activeStage = stage0

/*------------------------ Cached Element References ------------------------*/

const gameElements = document.getElementById('game') 
// const flexContainerElement = document.querySelector('.flex-container')

// console.log(flexContainerElement)
// const gameElement = document.querySelector('#game')


/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/





/*----------------------------- Runtime Code -----------------------------*/

init()

activeStage = stage1

renderStage()
