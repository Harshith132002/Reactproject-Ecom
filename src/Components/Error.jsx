import React from 'react';
import Button from 'react-bootstrap/Button';
const Error = () => {
  return (
   <div style={{textAlign:'center'}}>
    <div style={{ fontSize: "70px", fontWeight: "bold", textAlign: "center" }}>
      <p>404 Not Found</p>
    </div>

    <div style={{textAlign:'center'}}>
   <p>  Your visited page not found.You may go home page</p>
    </div>
    <div style={{textAlign:'center'}}>
    <Button 
  variant="danger" 
  style={{ backgroundColor: "red", borderColor: "red", color: "white" }} 
  onMouseEnter={(e) => e.target.style.backgroundColor = "red"}
  onMouseLeave={(e) => e.target.style.backgroundColor = "red"}
>
 Back To Home Page
</Button>

    </div>
    </div>
  );
};

export default Error;
