let max=prompt("Enter the max number from 1");
let guess=prompt("Please enter your guess");
let nmbr=Math.floor(Math.random()*max)+1;
console.log(nmbr);
while(true){
    if(guess=="quit"){
        alert("Quiting game");
        break;
    }
    if(nmbr !=guess){
        if(guess<nmbr){
            console.log("Your guess a smaller number. Try guessing a bigger one");
            guess=prompt(`Wrong guess ${nmbr}please try again!`);
        }

        else if(guess>nmbr)
        {
            console.log("Your guess a bit bigger number.Try guessing a smaller one");
            guess=prompt(`Wrong guess ${nmbr}please try again!`);
        }

    }
    if(nmbr==guess){
        alert("You guessed it right");
        break;
    }
}