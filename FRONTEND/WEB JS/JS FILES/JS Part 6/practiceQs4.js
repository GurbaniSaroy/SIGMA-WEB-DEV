//print a table of the given number
function table(inp){
    for(let i=1;i<=10;i++){
        let ans=inp*i;
        console.log(`${inp}*${i}=${ans}`);
    }
}
table(2);