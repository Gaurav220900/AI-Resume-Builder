import React from "react";
import Template1 from "../templates/Template1";
const Templates = () => {
    return (
        
        <div style={{ width: '350px', height: '350px', overflow: 'hidden', border: '1px solid #ccc', borderRadius: '8px', transform: 'scale(0.5)', transformOrigin: 'top left' }}>
  <div style={{ width: '700px', height: '700px' }}>
    <Template1 />
  </div>
</div>
)
           {/* <div>
                
                <h1 style={{color: 'black'}}>Templates</h1>
                <p style={{color: 'black'}}>Choose a template to start with</p>
                <div style={{display: 'flex', gap: '30px'}}>
                    <div style={{width: '350px', height: '350px', backgroundColor: '#f0f0f0', border: '1px solid #ccc'}}>
                        <Template1 width='100%' height='100%' />
                    </div>
                    <div style={{width: '350px', height: '350px', backgroundColor: '#f0f0f0', border: '1px solid #ccc'}}>
                        <Template1 />
                    </div>
                    <div style={{width: '350px', height: '350px', backgroundColor: '#f0f0f0', border: '1px solid #ccc'}}>
                        <Template1 />
                    </div>
                </div>
        </div> */
    }
        
    
};

export default Templates;