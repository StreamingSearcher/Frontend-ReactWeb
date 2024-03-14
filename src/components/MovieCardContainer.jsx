import MovieCard from './MovieCard';

import { useQuery} from '@apollo/client';
import { mediasMyTitle } from '../services/queries';

const MovieCardContainer =   ({title}) => {

    const { loading: loadingTitle, error: errorTitle, data: dataTitle } =  useQuery(mediasMyTitle, {
    variables: { title : title }
    });

    console.log('Datos de la consulta por título:', dataTitle);

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

        display : 'grid',
        justifyContent : 'center',
        gridTemplateColumns : 'repeat(auto-fill, minmax(200px, 1fr))',
        gap : '50px',
        padding : '0 10px'
    }
};


export default MovieCardContainer;