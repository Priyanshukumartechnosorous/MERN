import Product from "./product";


function ProductTab() {
    //let options = ["hitech","durable","fast"];
    let options = [<li>"hi-tech"</li>,<li>"durable</li>,<li>"fast"</li>];
    //let options2 ={ a: "hi-tech", b: "durable", c: "fast"};
    return(
        <>
            {/* <Product title="phone" Price="30,000" features={["hi-tech","durable"]} /> */}
            <Product title="phone" Price={30000}/>
            <Product title="laptop" Price={45000}/>
            <Product title="pen"Price={10}/>

        </>
    );
}

export default ProductTab;