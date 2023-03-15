import ExploreComp from '@/components/exploreComp';
import SettingsLayout from '@/components/moreComponents/settingsLayout';
import PostComp from '@/components/postComp';
import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import Masonry from 'react-masonry-css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_EXPO':
      return { ...state, posts: action.payload };
    case 'FETCH_FAIL':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default function Explore() {
  const [{ posts, error }, dispatch] = useReducer(reducer, {
    error: false,
  });

  

  useEffect(() => {
    const getExpo = async () => {
      const { data } = await axios.get('/api/posts/getPosts');
      dispatch({ type: 'FETCH_EXPO', payload: data });
    };
    getExpo();
  }, []);

  return (
    <SettingsLayout>
      <Masonry className='flex' breakpointCols={3}>
        {posts?.map((post, i) => (
          <ExploreComp key={i} post={post} />
        ))}
      </Masonry>
    </SettingsLayout>
  );
}
