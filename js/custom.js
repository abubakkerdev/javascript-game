
let content     = document.querySelector('#content');
let input       = document.querySelector('#inputVal');
let btn         = document.querySelector('#defaultBtn');
let err         = document.querySelector('#error');
let allplayer   = document.querySelector('#allplayer');
let chance      = document.querySelector('#chance');
let go          = document.getElementById('goBack');
let allName     = [];
let allWinner   = [];
let stepCheck   = [];
let countOne    = 5;
let countTwo    = 5;

btn.addEventListener('click', (button) => {
    let inpNumber         = input.value.match(/[0-9]/g);
    let inpString         = input.value.match(/[A-z]/g);
    let inpSpecialChar    = input.value.match(/[\W]/g);
    let space             = input.value.match(/[\s]/g);
    let digit             = input.value.match(/[\d]/g);


    if (button.target.dataset.val == 'default')
    {
        if ((digit !== null) || (inpSpecialChar !== null) || space || input.value === '')
        {
            err.classList.remove('in-active');
            err.innerHTML = 'Error: Give a valid name !';
        }
        else {
            err.classList.add('in-active');
            content.innerHTML = 'Player - 1 (' + input.value + ')';
            input.setAttribute('placeholder', 'Give a number');
            input.setAttribute('type', 'password');
            button.target.setAttribute('data-val', 'playerOne');
            allName[0] = input.value;
            input.value = '';
            err.innerHTML = '';
            button.target.innerHTML = 'Let’s Play';
            stepCheck[0] = 1;
        }
    }
    else if (button.target.dataset.val == 'playerOne' && stepCheck[0] == 1)
    {
        if (inpNumber && (inpString === null) && (inpSpecialChar === null) && (space === null) && input.value !== '')
        {
            err.classList.add('in-active');
            err.innerHTML = '';

            let number = Number(input.value);
            
            if (number > 10 || number <= 0)
            {
                err.classList.remove('in-active');
                err.innerHTML = 'Error: Your number should be greater than 0 & less then 10.';
            }
            else {
                err.classList.add('in-active');
                err.innerHTML = '';
                allWinner[0] = number;
                content.innerHTML = 'Player - 2 Name';
                input.setAttribute('placeholder', 'What is your name ?');
                input.setAttribute('type', 'text');
                button.target.setAttribute('data-val', 'playerTwo');
                button.target.innerHTML = 'Start Game';
                input.value = '';
                stepCheck[1] = 2;
            }
        }
        else {
            err.classList.remove('in-active');
            err.innerHTML = 'Error: Give a valid number !';
        }
    }
    else if (button.target.dataset.val == 'playerTwo' && stepCheck[0] == 1 && stepCheck[1] == 2)
    {
        if ((digit !== null) || (inpSpecialChar !== null) || space || input.value === '')
        {
            err.classList.remove('in-active');
            err.innerHTML = 'Error: Give a valid name !';
        }
        else {
            allName[1] = input.value;
            err.classList.add('in-active');
            content.innerHTML = 'Player - 2 (' + input.value + ')';
            chance.classList.remove('in-active');
            err.innerHTML = '';
            input.value = '';
            input.setAttribute('placeholder', 'Guess a number');
            input.setAttribute('type', 'number');
            button.target.setAttribute('data-val', 'playerTwoGuess');
            button.target.innerHTML = 'Guess';
            stepCheck[2] = 3;
        }
    }
    else if (button.target.dataset.val == 'playerTwoGuess' && stepCheck[0] == 1 && stepCheck[1] == 2 && stepCheck[2] == 3)
    {
        if (inpNumber && (inpString === null) && (inpSpecialChar === null) && (space === null) && input.value !== '')
        {
            let number = Number(input.value);
            err.classList.add('in-active');
            err.innerHTML = '';
            countOne--;
            
            if (number == allWinner[0] && countOne >= 0)
            {
                allWinner[1] = 1;
                content.innerHTML = 'Player - 3 Name';
                chance.classList.add('in-active');
                input.value = '';
                input.setAttribute('placeholder', 'What is your name ?');
                input.setAttribute('type', 'text');
                button.target.setAttribute('data-val', 'playerThree');
                button.target.innerHTML = 'Start Game';
                stepCheck[3] = 4;
            }
            else {
                if (countOne > 0) 
                {
                    chance.innerHTML = 'Chance - ' + countOne;  
                }
                else {
                    allWinner[1] = 0;
                    content.innerHTML = 'Player - 3 Name';
                    chance.classList.add('in-active');
                    input.value = '';
                    input.setAttribute('placeholder', 'What is your name ?');
                    input.setAttribute('type', 'text');
                    button.target.setAttribute('data-val', 'playerThree');
                    button.target.innerHTML = 'Start Game';
                    stepCheck[3] = 4;
                }
            }
        }
        else {
            err.classList.remove('in-active');
            err.innerHTML = 'Error: Give a valid number !';
        } 
    }
    else if (button.target.dataset.val == 'playerThree' && stepCheck[0] == 1 && stepCheck[1] == 2 && stepCheck[2] == 3 && stepCheck[3] == 4)
    {
        if ((digit !== null) || (inpSpecialChar !== null) || space || input.value === '')
        {
            err.classList.remove('in-active');
            err.innerHTML = 'Error: Give a valid name !';
        }
        else {
            allName[2] = input.value;
            err.classList.add('in-active');
            content.innerHTML = 'Player - 3 (' + input.value + ')';
            chance.classList.remove('in-active');
            chance.innerHTML = 'Chance - ' + 5;
            err.innerHTML = '';
            input.value = '';
            input.setAttribute('placeholder', 'Guess a number');
            input.setAttribute('type', 'number');
            button.target.setAttribute('data-val', 'playerThreeGuess');
            button.target.innerHTML = 'Guess';
            stepCheck[4] = 5;
        }
    }
    else if (button.target.dataset.val == 'playerThreeGuess' && stepCheck[0] == 1 && stepCheck[1] == 2 && stepCheck[2] == 3 && stepCheck[3] == 4 && stepCheck[4] == 5)
    {
        if (inpNumber && (inpString === null) && (inpSpecialChar === null) && (space === null) && input.value !== '')
        {
            let number = Number(input.value);
            err.classList.add('in-active');
            err.innerHTML = '';
            countTwo--;
    
            let playerTwo = document.createElement('li');
            let playerThree = document.createElement('li');
            let playerOne = document.createElement('li');

            if (number == allWinner[0] && countTwo >= 0)
            {
                allWinner[2] = 1;
                content.innerHTML = 'Game Over';
                chance.classList.add('in-active');
                input.classList.add('in-active');
                allplayer.classList.remove('in-active');
                button.target.classList.add('in-active');
                go.classList.remove('in-active');
                go.setAttribute('href', window.location.href);

               if (allWinner[1] == 1 && allWinner[2] == 1)
               {
                    playerTwo.innerHTML = '<h2>Player - 2 (' + allName[1] + ')' + ' <span class="win"> winner</span></h2>';
                    allplayer.prepend(playerTwo);

                    playerThree.innerHTML = '<h2>Player - 3 (' + allName[2] + ')' + ' <span class="win"> winner</span></h2>';
                    allplayer.children[0].after(playerThree);

                    playerOne.innerHTML = '<h2>Player - 1 (' + allName[0] + ')' + ' <span class="loser"> loser</span></h2>';
                    allplayer.children[1].after(playerOne);
               }
               else if (allWinner[1] == 0 && allWinner[2] == 1)
               {
                    playerThree.innerHTML = '<h2>Player - 3 (' + allName[2] + ')' + ' <span class="win"> winner</span></h2>';
                    allplayer.prepend(playerThree);

                    playerTwo.innerHTML = '<h2>Player - 2 (' + allName[1] + ')' + ' <span class="loser"> loser</span></h2>';
                    allplayer.children[0].after(playerTwo);

                    playerOne.innerHTML = '<h2>Player - 1 (' + allName[0] + ')' + ' <span class="loser"> loser</span></h2>';
                    allplayer.children[1].after(playerOne);
               }
            }
            else {
                if (countTwo > 0) 
                {
                    chance.innerHTML = 'Chance - ' + countTwo;  
                }
                else {
                    allWinner[2] = 0;
                    content.innerHTML = 'Game Over';
                    chance.classList.add('in-active');
                    allplayer.classList.remove('in-active');
                    input.classList.add('in-active');
                    button.target.classList.add('in-active');
                    go.classList.remove('in-active');
                    go.setAttribute('href', window.location.href);

                    if (allWinner[1] == 1 && allWinner[2] == 0)
                    {
                        playerTwo.innerHTML = '<h2>Player - 2 (' + allName[1] + ')' + ' <span class="win"> winner</span></h2>';
                        allplayer.prepend(playerTwo);
    
                        playerThree.innerHTML = '<h2>Player - 3 (' + allName[2] + ')' + ' <span class="loser"> loser</span></h2>';
                        allplayer.children[0].after(playerThree);
    
                        playerOne.innerHTML = '<h2>Player - 1 (' + allName[0] + ')' + ' <span class="loser"> loser</span></h2>';
                        allplayer.children[1].after(playerOne);
                    }
                    else if (allWinner[1] == 0 && allWinner[2] == 0) {
                        playerOne.innerHTML = '<h2>Player - 1 (' + allName[0] + ')' + ' <span class="win"> winner</span></h2>';
                        allplayer.prepend(playerOne);
    
                        playerTwo.innerHTML = '<h2>Player - 2 (' + allName[1] + ')' + ' <span class="loser"> loser</span></h2>';
                        allplayer.children[0].after(playerTwo);
    
                        playerThree.innerHTML = '<h2>Player - 3 (' + allName[2] + ')' + ' <span class="loser"> loser</span></h2>';
                        allplayer.children[1].after(playerThree);
                    }
                }
            }
        }
        else {
            err.classList.remove('in-active');
            err.innerHTML = 'Error: Give a valid number !';
        } 
    }
    else {
        err.classList.remove('in-active');
        err.innerHTML = 'Error: Broke the rules of the game!';
        content.classList.add('in-active');
        btn.classList.add('in-active');
        input.classList.add('in-active');
        input.value = '';
        go.classList.remove('in-active');
        go.setAttribute('href', window.location.href);
    }
});