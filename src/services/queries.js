import { gql } from '@apollo/client';

export const mediasMyTitle = gql`
  query MoviesByTitle($title: String!) {
    moviesByTitle(title: $title) {
      title
      titleType
      imageUrl
      year
      imdbId
    }
  }
`;

export const mediasMyImdbId = gql`
  query MoviesById($imdbId: String!) {
    moviesById(imdbId: $imdbId) {
      title
      titleType
      imageUrl
      year
      imdbId
    }
  }
`;