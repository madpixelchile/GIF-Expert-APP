

export const GifGridItem = ({title, url}) => {
  return (
    <div className="card">
        <img src={url} alt={`Gif sobre ${title}`}/>
        <p>{title}</p>
    </div>
  )
}

