import ExploreComp from '@/components/exploreComp';
import SettingsLayout from '@/components/moreComponents/settingsLayout';
import PostComp from '@/components/postComp';
import { Store } from '@/utils/Store';
import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
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
  const {state:cxtState} = useContext(Store);
  const {user} = cxtState

  useEffect(() => {
    const getExpo = async () => {
      try {
        let url;
        if (process.env.NODE_ENV === 'production') {
          url = 'http://localhost:5000/api/posts/getPosts';
        } else {
          url = 'http://localhost:5000/api/posts/getPosts';
        }
        const config = {
          headers: { authorization: `Bearer ${user.token}` },
        };

        const { data } = await axios.get(url,config);
        dispatch({ type: 'FETCH_EXPO', payload: data });
      } catch (err) {
        console.log(err);
      }
    };

    getExpo();
  }, []);

  return (
    <SettingsLayout>
      <Masonry className="flex items-center justify-center" breakpointCols={3}>
        {posts?.map((post, i) => (
          <ExploreComp key={i} post={post} />
        ))}
      </Masonry>
    </SettingsLayout>
  );
}
