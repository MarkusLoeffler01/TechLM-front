import React from 'react';
import ProductBox from './components/Configurator/ProductBox';
import ProductList from './components/Configurator/ProductList';
import Test1 from "./assets/test1.jpg";

export default function Test()
{
    const [selected, setSelected] = React.useState(false);
    console.log(selected);

    // return <ProductBox 
    //         image={Test1} 
    //         name='asuss ROG STRIX RTX 3060 OC' 
    //         price='399,90€'
    //         setSelected={setSelected}
    //         selected={selected}
    //          />

    return (
    <ProductList>
        <ProductBox
            image={Test1}
            name='ASUS ROG STRIX RTX 3060 OC'
            price='399,90€'
            setSelected={setSelected}
            selected={selected}
        />
        <ProductBox
            image={Test1}
            name='ASUS ROG STRIX RTX 3060 OC'
            price='399,90€'
            setSelected={setSelected}
            selected={selected}
        />
    </ProductList>
    );
}