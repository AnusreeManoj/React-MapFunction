import React from "react"
  
function App() {
  
  // Declared an array of items
  const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune'];

  // Styling for the items
  const styles = {
  
    padding:'20px',
    margin: 'auto',
    width:'300px',
    border: '0.2px solid Lightgray' 
  };
  
  return <>
    {
      /*  This maps each array item to a div adds
      the style declared above and return it */

    
      planets.map(planet => <div key={planet} 
            style={styles}>{planet}</div>)
    }
  </>;
}
  
export default App;