import React, { useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
    AddFavourite,
    RemoveFavourite,
  increaseCounter,
  decrementCounter,
} from '../../../store/action/favaction';

import { Link } from 'react-router-dom';

const MoviesCard = props => {
  const favList = useSelector(state => state.favList);

  const dispatch = useDispatch();

  const { path, title, vote, id, page } = props;

  const img_URL = `https://image.tmdb.org/t/p/w500/${path}`;

  const favIcon = useRef(null);

  const changeIcon = () => {
    if (favIcon.current.classList.contains('far')) {
      favIcon.current.classList.replace('far', 'fas');
      dispatch(AddFavourite(props));
  
    } else {
      favIcon.current.classList.replace('fas', 'far');
      dispatch(RemoveFavourite(props));
 
    }
  };

  const renderIcons = () => {
    if (page === 'movies') {
      return (
        <i
          className='far fa-star position-absolute'
          style={{
            color: '#ffc400',
            cursor: 'pointer',
            fontSize: '1.4rem',
            right: '1.4rem',
            bottom: '1.4rem',
          }}
          onClick={changeIcon}
          ref={favIcon}
        ></i>
      );
    } else if (page === 'favorites') {
      return (
        <i
          className='fas fa-trash position-absolute'
          style={{
            color: '#f00',
            cursor: 'pointer',
            fontSize: '1.5rem',
            right: '1.4rem',
            bottom: '1.4rem',
          }}
          onClick={changeIcon}
          ref={favIcon}
        ></i>
      );
    }
  };

  useEffect(() => {
    favList.forEach(favMovie => {
      if (favMovie.id === id) {
        favIcon.current.classList.replace('far', 'fas');
      }
    });
  }, [favList, id]);

  return (
    <>
      <div
        className='card mx-2 mb-2 text-center'
        style={{
          width: '300px',
          height: '480px',
        }}
      >
        <img
          className='card-img-top'
          src={`${img_URL}`}
          alt='Card cap'
          style={{ minHeight: '300px', maxHeight: '300px', objectFit: 'cover' }}
        />
        <div className='card-body d-flex flex-column justify-content-end position-relative'>
          {renderIcons()}
          
          <p className='card-text'>{vote}</p>
          <Link
            to={`/movies-details/${id}`}
          >
            <h5 className='card-title'>{title}</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MoviesCard;
