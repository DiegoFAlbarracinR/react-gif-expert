import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (event) => {

        setInputValue( event.target.value );

    };

    const onSubmit = (event) => {

        event.preventDefault();
        console.log( inputValue );

        //Para evitar el ingreso de campos vacios
        if( inputValue.trim().length <=1 ) return;

        onNewCategory( inputValue.trim() );

        //Limpiar el input text
        setInputValue('');

    };

    return ( /* Exísten dos opciones:
    1. onSubmit={ (event) => onSubmit(event) }
    Como es solo el event y se usa inmediatamente se puede abreviar:
    2. onSubmit={ onSubmit }
    */
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
