import { useState } from "react";


const Checkout = () => {
  const [value , setValue] = useState('')
    return (
      
      <>
            <input type="text" onChange={(e)=>setValue(e.target.value)} />
      </>
      
    );
    
  };
  
  export default Checkout;
  