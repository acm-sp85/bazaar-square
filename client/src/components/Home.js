import React from 'react';

import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import ItemTypesCarousel from './ItemTypesCarousel';
import CategoriesCarousel from './CategoriesCarousel';
import AreasCarousel from './AreasCarousel';
import { useHistory } from 'react-router-dom';

function Home({ currentUser, setCurrentUser, categories, cities }) {
  const history = useHistory();
  return (
    <div className="home">
      {currentUser ? (
        <h1 style={{ textAlign: 'center' }}>
          Welcome {currentUser.user_name}!{' '}
        </h1>
      ) : (
        <>
          {' '}
          <h3
            style={{
              textAlign: 'center',
              textDecorationLine: 'underline',
              cursor: 'pointer',
            }}
            onClick={() =>
              history.push({
                pathname: '/login',
              })
            }
          >
            LOG IN TO ENJOY THE PLATFORM
          </h3>
        </>
      )}

      <h3 variant="body1" style={{ textAlign: 'center', color: 'grey' }}>
        Random Bazaar is a market place to share goods with your community.
      </h3>
      <h4 variant="body1" style={{ textAlign: 'center', color: 'grey' }}>
        Donate, borrow, trade or sell your goods in our platform.
      </h4>

      <ItemTypesCarousel />
      <br />
      <h3>Categories:</h3>
      <CategoriesCarousel categories={categories} />
      <br />
      <h3>Areas:</h3>
      <AreasCarousel cities={cities} />
      <LeftComponent />
      <RightComponent
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
      />
    </div>
  );
}

export default Home;
