import React from "react";

function DisplayItems({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <div className="card" className="custom-card">
            <h5 className="card-title" id={item.user_id}>
              {item.item_name}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}
export default DisplayItems;
