import "./Product.css";


function Product ({title, Price,features,})
 {
    let isdiscount = Price>30000;
    let styles = {backgroundColor : isdiscount ? "blue" : ""};
    //let styles = {backgroundColor : Price>30000 ? "blue" : ""};
    //const list = features.map((feature)=> <li>{feature}</li>);
    //console.log(features);
    //let isdiscount = ;
    //console.log(props.title);
    return ( 
       
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price : {Price}</h5>
            {/* <p>{Price>30000 ? "Discount of 5%": ""}</p> */}
            {Price>30000 ? <p>"Discount of 5%"</p> :null}
            {/* <p>{ features.map((feature)=> <li>{feature}</li>)}</p> */}
            
        </div>
    );
}

export default Product;