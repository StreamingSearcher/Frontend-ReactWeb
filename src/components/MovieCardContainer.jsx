import MovieCard from './MovieCard';

import { useQuery} from '@apollo/client';
import { mediasMyTitle } from '../services/queries';

const MovieCardContainer =   ({title}) => {

    const { loading: loadingTitle, error: errorTitle, data: dataTitle } =  useQuery(mediasMyTitle, {
    variables: { title : title }
    });

    if(loadingTitle){
        return (<>
            <div><h2>Cargando...</h2></div>
        </>)
    }

    return ( 
        <> 
            {dataTitle && 
                <div style={styles.container} >
                    {dataTitle.moviesByTitle.map(movie => <MovieCard key={movie.imdbId}   title={movie.title}
                                                                    imageUrl={movie.imageUrl}
                                                                    titleType={movie.titleType}
                                                                    year={movie.year}
                                                                    imdbId={movie.imdbId} 
                                                                    style={styles.gridItem}/>)}
                </div>
            }
        </>

    );

};

const styles = {
    container : {
        width: '100%',
        display : 'grid',
        justifyContent : 'center',
        gridTemplateColumns : 'repeat(auto-fill, minmax(200px, 1fr))',
        gap : '25px',
        padding : '0 10px'
    }
};


export default MovieCardContainer;