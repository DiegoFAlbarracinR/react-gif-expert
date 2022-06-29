//Funcional Component
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

const [categories, setCategories] = useState([ 'Naruto' ]);

const onAddCategory = ( newCategory ) => {
    //Mientras aprendo React NO USAR PUSH para agregar elementos de una rray
    //categories.push( 'Naruto' );
    
    if( categories.includes(newCategory) ) return;
    //Una forma de hacerlo
    setCategories([ newCategory, ...categories ]);

    //Otra forma de hacerlo
    //setCategories( cat => [ 'Naruto', ...cat ]);
}

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ event => onAddCategory(event) } 
        />

        
        { 
            categories.map( category => (
                <GifGrid 
                    key={ category } 
                    category={ category } 
                />
            ) )
        }
        

    </>
  )
}
