import React from 'react';
import Rating from '@material-ui/lab/Rating';

export default function HalfRating(props) {
  return (
    <div>
      <Rating name="half-rating" value={props.rating} precision={0.5} />
    </div>
  );
}