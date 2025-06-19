function something(){
    console.log("hoovered mouse");
}
export default function NonClick(){
    return(
        <button onMouseOver={something}>Hoover me!!!</button>
    );
}

