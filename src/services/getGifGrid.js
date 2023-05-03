
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=mAwXBAoyPHrX19vdliguugKoALS6ZBo0&q= ${category} &limit=5`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const buildGifs = data.map((img)=>(
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    ))
    
    return buildGifs;

}