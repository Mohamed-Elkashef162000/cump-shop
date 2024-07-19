import { Container, Row, Col } from "reactstrap";
import { useContext } from "react";
import { contextValue } from "./ProviderValue";

const InputValue = () => {
  const { value, setValue } = useContext(contextValue);
    const style ={
      minHeight:'45vh',
      backgroundColor:'var(--primary-color)'
    }
  const styleParent = {
    height:'30vh',
    display :'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center',
  }

    
  return (
    <section style={style}>
      <Container>
        <Row>
          <Col lg="12">
           
              <div style={styleParent}>
                <h1 style={{color:'#fff'}} className="fs-1">Site Products Change</h1>
                <h2 style={{color:'var(--yellow-color)'}} className="fs-1 mt-3">Now {value} Data</h2>
              <div className="  mt-5 w-100 d-flex justify-content-around  align-items-center">
              <button className="buy_btn mt-3" onClick={()=>{setValue('local')}}>local data</button>
              <button className="buy_btn m-3 " onClick={()=>{setValue('firebase')}}>firebase data</button>
              </div>
             
              </div>
            );
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InputValue;
