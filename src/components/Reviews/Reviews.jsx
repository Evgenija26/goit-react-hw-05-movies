import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'api';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { toast } from 'react-toastify';

export const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        setLoading(true);
        const reviews = await fetchMovieReviews(id);
        setReviews(reviews);
      } catch {
        toast.error('something went wrong');
      } finally {
        setLoading(false);
      }
    }
    getMovieReviews();
  }, [id]);

  return (
    <div>
      {loading && <Loader />}

      {reviews.map(({ author, id, content }) => (
        <div key={id}>
          <text>Author: {author}</text>
          <textReview>{content}</textReview>
        </div>
      ))}
    </div>
  );
};
