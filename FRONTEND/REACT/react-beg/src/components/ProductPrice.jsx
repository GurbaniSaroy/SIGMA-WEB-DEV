export default function ProductPrice({oldPrice, newPrice}){
    return(
        <div>
            <span>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>{newPrice}</span>
        </div>
    )
}