export function Cards({ title, img, alt, text }) {
    
    

    return(
        <div className="card">
            <div className="card-body">
                <img src={img} alt={alt} /> 
                <h5 className="card-title">{title}</h5>
                <p>{text}</p>
            </div>
        </div>

    );

}