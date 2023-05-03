
import { GifGridItem } from "../GifGridItem/GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    console.log({ images, isLoading });

    // const [images, setImages] = useState([]);

    // const getImages = async ()=>{
    //     const newImages = await getGifs(category);
    //     setImages(newImages)
    // }

    // useEffect(() => {
    // getGifs(category);

    // setImages( 
    //     getGifs(category).then((data)=>{
    //         return data
    //     })
    // )

    //     getImages();

    // }, []);

    // console.log('IMAGES:', images)

    return (
        <>

            <div className='category-group'>
                <h3>{category}</h3>
                {
                    isLoading && <span>Loading...</span>
                }
                <div className={'card-grid'}>

                    {
                        images.map((obj) => ( //se destructura el obj del parámetro para no poner obj.title obj.id
                            <GifGridItem key={obj.id} {...obj} /> //Esparcimos las props que trae el map para poder usarlas libremente dentro del componente
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default GifGrid;
