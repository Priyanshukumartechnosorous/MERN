// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Title from './Title.jsx';
// import Product from './product.jsx';
import Msg from './MsgBox.jsx';
import ProductTab from './ProductTab.jsx';
import Button from './Button.jsx';
import From from './Form.jsx';

function App() {
  // const [count, setCount] = useState(0)

  // return <h1>hello</h1>
  //return(
  // <div>
  //   <h1>hello</h1>
  //   <Title/>
  // </div>);
  return (
    <>
      {/* <Msg name = "priyanshu" color="blue"/>
       <ProductTab /> */}
       {/* <Button/> */}
       <From/>
       </>
  );
 


    // <>
    // <Product />
    // <Product />
    // <Product />
    // </>
  
}

export default App;
