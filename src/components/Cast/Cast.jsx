import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'api';
import { useParams } from 'react-router-dom';
import { PhotoWrapper, Container } from './Cast.styled';
import { Loader } from 'components/Loader';
import { toast } from 'react-hot-toast';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getCastInfo() {
      try {
        setLoading(true);

        const { cast } = await fetchMovieCredits(id);
        setCastInfo(cast);
      } catch {
        toast.error('This didn`t work. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    getCastInfo();
  }, [id]);

  function getPoster(poster) {
    if (poster === null) {
      return 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';
    } else {
      return `https://image.tmdb.org/t/p/w300/${poster}`;
    }
  }

  return (
    <>
      {loading && <Loader />}

      <Container>
        {castInfo.map(({ original_name, id, profile_path, character }) => (
          <li key={id}>
            <PhotoWrapper>
              <img src={getPoster(profile_path)} alt="poster" />
            </PhotoWrapper>
            <p>{original_name}</p>
            <p>Character:{character}</p>
          </li>
        ))}
      </Container>
    </>
  );
};
export default Cast;
