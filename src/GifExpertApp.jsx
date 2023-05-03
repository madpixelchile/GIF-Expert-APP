
import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const handleAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) {
            return;
        }

        setCategories([
            ...categories,
            `${newCategory}`
        ]);

    }

    return (
        <>
            <h1>GIF APP</h1>
            {/* mAwXBAoyPHrX19vdliguugKoALS6ZBo0 */}

            {/* Input de búsqueda */}

            {/* <AddCategory setCategories={setCategories}/> //Esta forma me gustaba */}
            <AddCategory onNewCategory={handleAddCategory} />

            {/* Listado de GIFS */}

            {
                categories.map((obj) => <GifGrid key={obj} category={obj} /> )
            }

            {/* <button type={'button'} onClick={handleAddCategory}>Añadir categoría</button> */}

            {/* GIF Items */}

        </>
    )
}

export default GifExpertApp;
