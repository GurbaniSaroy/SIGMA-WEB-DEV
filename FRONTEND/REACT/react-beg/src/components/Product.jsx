import ProductPrice from "./ProductPrice";
import "./Product.css";
export default function Product({ idx}){
    let title = ["Logitech MX Master","Apple Pencil (2nd Gen)","Zebronics Zeb-transformer","Petronics Toad 23"];
    let oldPrice =["12,498","45,089","5,422","78,124"];
    let newPrice = ["10,564","42,453","4,223","75,456"];
    let description = ["8000 DPI", "Intuitive Surface", "Designed for iPad Pro", "wireless"];
    return(
        <div className="Product">
            <h4>{title[idx]}</h4>
            <p>{description[idx]}</p>
            <ProductPrice oldPrice={oldPrice[idx]} newPrice= {newPrice[idx]}/>
        </div>
    )
}
