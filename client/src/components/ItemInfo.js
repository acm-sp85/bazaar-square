import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

function ItemInfo(info) {
  const path = info.props.location.pathname;
  const array = path.split("/");
  const id = array[array.length - 1];

  const [itemInfo, setItemInfo] = useState(info);
  const [user, setUser] = useState(info.currentUser);
  const [wishes_ids, setWishes_ids] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setWishes_ids(info.currentUser.wishlists.map((wish) => wish.item_id));
  }, []);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  useEffect(() => {
    fetch(`/items/${id}`, {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((item_info) => {
          setItemInfo(item_info);
        });
      }
    });
  }, []);
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      history.goBack();
    }
  };
  const closeInfo = () => {
    history.goBack();
  };
  const contactOwnerAction = () => {
    history.push({
      pathname: "/messager",
      state: itemInfo.owner_id,
    });
  };

  const addToWishlist = () => {
    console.log("add to wishlist");
    setWishes_ids([parseInt(id), ...wishes_ids]);
    console.log(id);
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: itemInfo.name,
        item_id: itemInfo.id,
        user_id: user.id,
      }),
    };

    fetch("/wishlist", config).then((response) => {
      if (response.ok) {
        response.json().then((item_wished) => {
          info.setCurrentUser({
            ...info.currentUser,
            wishlists: [...info.currentUser.wishlists, item_wished],
          });
        });
      } else {
        // DO BETTER ERROR HANDLING
        console.log("ERROORRRR");
      }
    });
  };

  return (
    <div>
      {/* {console.log(info.currentUser.wishlists)} */}
      <Box
        id="click-area"
        className="centered__itemInfo"
        sx={{
          maxWidth: 600,
          border: "1px solid lightgrey",
          borderRadius: 5,
          padding: 2,
          boxShadow: 2,
        }}
      >
        <React.Fragment>
          <Button color="error" style={{ float: "right" }} onClick={closeInfo}>
            ✖️
          </Button>

          <CardContent>
            {itemInfo.image_file ? (
              <CardMedia
                component="img"
                height="300"
                image={itemInfo.image_file}
                style={{ contentFit: "contain" }}
                alt="card-media"
              />
            ) : (
              <CardMedia
                component="img"
                height="300"
                image={itemInfo.image}
                alt="card-media"
                style={{ contentFit: "contain" }}
              />
            )}
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Item status: {itemInfo.type}
            </Typography>
            <Typography variant="h5" component="div">
              {itemInfo.item_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {itemInfo.category_name} - {itemInfo.location}
            </Typography>
            <Typography variant="body2">
              {itemInfo.description}
              <br />
            </Typography>
            {itemInfo.type == "Sell" ? (
              <Typography variant="body2">
                ${itemInfo.price}
                <br />
              </Typography>
            ) : (
              <></>
            )}
          </CardContent>
          <CardActions>
            {user ? (
              <>
                {itemInfo.owner_id != info.currentUser.id ? (
                  <>
                    {" "}
                    <Button size="small" onClick={contactOwnerAction}>
                      Contact owner - {itemInfo.owner}
                    </Button>
                    {wishes_ids.filter((wish_id) => wish_id === itemInfo.id)
                      .length > 0 ? (
                      <Button disabled>Added to Wishlist</Button>
                    ) : (
                      <Button size="small" onClick={addToWishlist}>
                        Add to Wishlist
                      </Button>
                    )}
                  </>
                ) : (
                  <>
                    <Button
                      size="small"
                      onClick={() => {
                        history.push({
                          pathname: "/manage-items",
                        });
                      }}
                    >
                      You own this item!
                    </Button>
                  </>
                )}
              </>
            ) : (
              <Button
                size="small"
                onClick={() => {
                  history.push({
                    pathname: "/login",
                  });
                }}
              >
                Log in to contact owner
              </Button>
            )}
          </CardActions>
        </React.Fragment>
      </Box>
    </div>
  );
}

export default ItemInfo;
