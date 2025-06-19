function doSomthing(){
    console.log("the button was clicked");
}
export default function ClickButton(){
    return(
        <>
        <button onClick={doSomthing}>Click me!!</button>
        </>
    )
}