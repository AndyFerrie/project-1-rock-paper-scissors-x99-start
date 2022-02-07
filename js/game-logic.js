// All code should be written in this file.
let playerOneMoveOneType, 
    playerOneMoveTwoType, 
    playerOneMoveThreeType, 
    playerOneMoveOneValue, 
    playerOneMoveTwoValue, 
    playerOneMoveThreeValue, 
    playerTwoMoveOneType, 
    playerTwoMoveTwoType, 
    playerTwoMoveThreeType, 
    playerTwoMoveOneValue, 
    playerTwoMoveTwoValue, 
    playerTwoMoveThreeValue;

// A function called setPlayerMoves, which will take a string representing a player (in the form of 'Player One' or 'Player Two'), three move types, and three move values, and set the correct global move variables.

function setPlayerMoves (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
        return;
    }

    if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
        return;
    }

    if (!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
        return;
    }

    if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
        return;
    }

    if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}

// create helper function isValidMoveType() to validate value of 'rock' 'paper' or 'scissors'

function isValidMoveType(moveType) {
    return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors');
}

// create a helper function isValidMoveValue () accepts argument of 'moveValue' and checks that is >= 1 and <=99

function isValidMoveValue(moveValue) {
    return (moveValue >=1) && (moveValue <= 99);
}

// A function called getRoundWinner, which takes a round number (1, 2, or 3), compares both player’s move types and values for that round, and returns the appropriate winner ('Player One', 'Player Two', or 'Tie')

function getRoundWinner (roundNumber) {
    // create switch statement the takes parameter roundNumber that checks for a matching case of 1, 2 or 3
    switch (roundNumber) {
        case 1:
            return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
        case 2:
            return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
        case 3:
            return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
    }
}

function getMoveWinner (playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {

    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
        return null;
    }

    if (playerOneMoveType === playerTwoMoveType) {
       if (playerOneMoveValue > playerTwoMoveValue) {
           return 'Player One';
       } else if (playerOneMoveValue < playerTwoMoveValue) {
           return 'Player Two';
       } else {
            return 'Tie';
       }
    }

    if (playerOneMoveType === 'rock') {
        if (playerTwoMoveType === 'scissors') {
            return 'Player One';
        } else {
            return 'Player Two';
        }
    } else if (playerOneMoveType === 'paper') {
        if (playerTwoMoveType === 'rock') {
            return 'Player One';
        } else {
            return 'Player Two';
        }
    } else {
        if (playerTwoMoveType === 'paper') {
            return 'Player One';
        } else {
            return 'Player Two';
        }
    }
}

// A function called getGameWinner, which compares both player’s move types and values for the whole game and returns the appropriate winner ('Player One', 'Player Two', or 'Tie')

function getGameWinner () {
    if (!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeTypeplayer || !playerOneMoveOneValue || !playerOneMoveTwoValue || playerOneMoveThreeValue ||!playerTwoMoveOneType || !playerTwoMoveTwoType ||!playerTwoMoveThreeType || !playerTwoMoveOneValue ||!playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
        return null;
    }
}

// Bonus: A function called setComputerMoves, which chooses three random moves for player two. The move type for each move should be completely random, and the move values should be random but add up to 99.

function setComputerMoves () {

}