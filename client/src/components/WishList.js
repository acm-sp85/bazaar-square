import React, { useState, useEffect } from 'react';

import Wish from './Wish';

export default function WishList(props) {
  const [wished_items, setWished_items] = useState(null);
  const [all_items, setAll_items] = useState('');

  useEffect(() => {
    fetch('/items', {
      credentials: 'include',
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setAll_items(data);
          // console.log(all_items)
        });
      } else {
      }
    });

    setWished_items(props.currentUser.wishlists);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>WISHLIST</h1>
      {wished_items && wished_items.length >= 1 ? (
        <div className="centered">
          {wished_items.map((item) => (
            <Wish
              info={item}
              setWished_items={setWished_items}
              wished_items={wished_items}
              key={item.id}
              all_items={all_items}
            />
          ))}
        </div>
      ) : (
        <h3 style={{ textAlign: 'center' }} className="centered">
          You have no wished items on your list yet
        </h3>
      )}
    </div>
  );
}
