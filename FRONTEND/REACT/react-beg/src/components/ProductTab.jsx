import Product from "./Product.jsx"
function ProductTab(){
    return(
        <div>
            <h1>Blockbuster Deals | Shop Now</h1>
        <Product idx={0} />
        <Product idx={1}/>
        <Product idx={2}/>
        <Product idx={3}/>
        </div>
    );
}
export default ProductTab;