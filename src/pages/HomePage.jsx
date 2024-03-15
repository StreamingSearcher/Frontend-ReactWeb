import { useState } from "react";
import MovieCardContainer from "../components/MovieCardContainer";

const HomePage = () => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        // Aquí puedes hacer cualquier acción adicional con el título si es necesario
        // Por ahora, solo estamos actualizando el estado title
        setTitle(event.target.elements.title.value);
    };
 
    return (
        <div style={styles.home}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="search movies"
                    name="title" // Asignar un nombre al input para poder acceder a su valor desde el evento onSubmit
                />
                <button type="submit">search</button>
            </form>
            {title && <MovieCardContainer title={title} />}
        </div>
    );
};


const styles = {
    home : {
        padding : '1rem',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'start',
        minHeight : '95vh',
        alignItems : 'center'

    },
    form : {
        width : '100%',
        display : 'flex',
        justifyContent : 'center'
    }
}

export default HomePage;
