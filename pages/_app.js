import GlobalStyle from "../styles";
import { useState } from "react";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState ([
    {id: "1", name: "Living Room", inOn: false},
    {id: "2", name: "Kitchen", inOn: false},
    {id: "3", name: "Bedroom", inOn: false},
    {id: "4", name: "Bathroom", inOn: false},
    {id: "5", name: "Garage", inOn: false},
    {id: "6", name: "Porch", inOn: false},
    {id: "7", name: "Garden", inOn: false},
    {id: "8", name: "Office", inOn: false},
  ]);

  const toggleLight = (id) => {
    setLights((prevLights) =>
    prevLights.map((light) =>
    light.id === id ? { ...light, isOn: !light.isOn } : light
    )
    );
  };

 

  return (
    <Layout>
      <GlobalStyle />
      <Component 
      {...pageProps} 
      lights={lights} 
      toggleLight={toggleLight}
       />
    </Layout>
  );
}
