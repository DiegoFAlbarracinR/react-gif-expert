import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

//Un HOOK no es más que una función que regresa algo:
export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState( [] );
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async () => {
        const newImages =  await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect( () => {
        getImages();
    }, [] );

    return {
        images: images,
        isLoading: isLoading
    }

}
