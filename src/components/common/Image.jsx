export default function Image({ src, alt, className, width, height, onClick }) {
    return(
        <img
            src={src}
            alt={alt}
            className={className}
            width={width}
            height={height}
            onClick={onClick}
        />
    )
}