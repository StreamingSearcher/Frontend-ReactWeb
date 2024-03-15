
const MovieCard = ({title, titleType, imageUrl, year, imdbId}) => {

    return (
        <div style={styles.card}>
            <img style={styles.img}  src={imageUrl} />
            <h2 style={styles.title}>{title}</h2>
            <p>{year}</p>
            <p>{titleType}</p>
        </div>
    )
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        width: '100%',
        maxWidth : '200px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        justifySelf : 'center'
    },
    title: {
        fontSize: '18px',
        color: '#ffffff',
        marginBottom: '10px',
    },
    img :{
        width : '100%'
    }
    // Agrega estilos adicionales aquí si es necesario
};

export default MovieCard;
