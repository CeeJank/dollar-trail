export function Cards({ title, img, alt, text, width, height}) {
    
    

    return(
        <div className="card flex justify-center" style={{width, height}}>
            <div className="card-body">
                <img src={img} alt={alt} /> 
                <h5 className="card-title">{title}</h5>
                <p>{text}</p>
            </div>
        </div>

    );

}

export function PromoterCard({title, img, alt, text, width, height}) {
    return (
            <>
            <img src={img} alt={alt} />
            <h5 className="card-title">{title}</h5>
            <p>{text}</p>
            </>
    )
}