let favMovie=prompt("Enter your favourite movie that is to be guessed.");
let guess=prompt("Enter your guesses");
while((guess !=favMovie)&&(guess !="quit"))
{
    guess=prompt("wrong guess! Please try again");
}
if(favMovie==guess)
{
    console.log("Congrats! Your guess is right");
}
else{
    console.log("Luck next time!")
}