

import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const submitEvent = (e) => {
        e.preventDefault();
        // setCategories(inputValue); //Forma 1
        const definitiveInputValue = inputValue.trim(); //quitamos los espacios de los costados
        if (definitiveInputValue.length <= 1) return;  //Recuerda que el return siempre va a cortar todo lo que venga después en una función.

        // setCategories((dataActual)=> [...dataActual, `${inputValue} ${categoryNumber ++}`]) //Este es el mejor camino, nunca olvidar que al enviar una función en un cambio de estado
        //El parámetro principal de la función será la DATA ACTUAL DEL ESTADO!

        onNewCategory(definitiveInputValue);
        setInputValue('');
        
    }

    return (
        <>
            <form onSubmit={submitEvent}>
                <input
                    type={'text'}
                    placeholder={'Buscar GIFS'}
                    value={inputValue} //Para ocupar el value por defecto en los inputs y poder generar cambios, es obligatorio ocupar la prop de evento sintético onChange
                    onChange={onInputChange}
                />
            </form>
        </>
    )
}

