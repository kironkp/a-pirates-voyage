/*-------------------------------- Constants --------------------------------*/


const stageDetails = {


}

const stage0 = {
    stageLevel : 0,
    title : 'A Pirate\'s Voyage',
    instructions : 'On the quest for buried treasure, a group of pirates set sail across the seven seas. The wind blows from the north. Which way will you sail?',
    choices :[
        {text: 'East'},
        {text: 'West'}
    ]
}

const renderButton = (buttonData) => {
    // const buttonData = {text: 'East'}
    const button = document.createElement('button')
    button.textContent = buttonData.text
    gameElements.appendChild(button)
}

const init = () => {
    renderStage()
}

const renderStage = () => {
    const heading = document.createElement('h1');
heading.textContent = activeStage.title
gameElements.appendChild(heading);

const paragraph = document.createElement('p');
paragraph.textContent = activeStage.instructions
gameElements.appendChild(paragraph);

activeStage.choices.forEach(renderButton)

}



const stage1 = {
    stageLevel : 1,
    title : 'A Pirate\'s Voyage',
    instructions : 'You see a Island in the distance do you want to explore it?',
    choices :[
        {text: 'Pass'},
        {text: 'Explore it'},
        {text: 'Go back'}
    ]
    
}

// console.log(stage0.stageLevel = 1)

/*---------------------------- Variables (state) ----------------------------*/

let activeStage = stage0

/*------------------------ Cached Element References ------------------------*/

const gameElements = document.getElementById('game') 

// const gameElement = document.querySelector('#game')

/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/


/*----------------------------- Runtime Code -----------------------------*/

init()

activeStage = stage1

renderStage()