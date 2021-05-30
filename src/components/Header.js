import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

function FloatingActionButtons() {
    const classes = useStyles();
  
    return (
        <Box component="span" m={1}>
  

      <div className={classes.root} style={{ }}>
      
        <Fab variant="extended" color="secondary">
          <NavigationIcon className={classes.extendedIcon} />
          <Link to="/">Home</Link>
        </Fab>
        <Fab variant="extended" color="secondary">
          <NavigationIcon className={classes.extendedIcon} />
          <Link to="/products">Products</Link>
        </Fab>
        <Fab variant="extended" color="secondary">
          <NavigationIcon className={classes.extendedIcon} />
          <Link to="/cart">Cart</Link>
        </Fab>
        <Fab variant="extended" color="secondary">
          <NavigationIcon className={classes.extendedIcon} />
          <Link to="/checkout">Checkout</Link>
        </Fab>
        <Fab variant="extended" color="secondary">
          <NavigationIcon className={classes.extendedIcon} />
          <Link to="/Admin">Become seller</Link>
        </Fab>
        <Fab variant="extended" color="secondary">
          <NavigationIcon className={classes.extendedIcon} />
          <Link to="/createshop">Add your shop</Link>
        </Fab>
        <Fab variant="extended" color="secondary">
          <NavigationIcon className={classes.extendedIcon} />
          <Link to="/searchshop">Search Shops</Link>
        </Fab>
    

      </div>
      </Box>
    );
  }



const Header = () => {
  return (
    <header className="main-head" >
      <nav style={{display:"flex",justifyContent:"center"}}>
        <h1 id="logo">Amazingshop</h1>
        <ul>
          <li style={{ margin: "0 30px 0 0" }}>
        
              <Link to="/">Home</Link>
          
            
          </li>
          <li style={{ margin: "0 30px 0 0" }}>
            <Link to="/products">Products</Link>
          </li>
          <li style={{ margin: "0 30px 0 0" }}>
            <Link to="/cart">Cart</Link>
          </li>
          <li style={{ margin: "0 30px 0 0" }}>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li style={{ margin: "0 30px 0 0" }}>
            <Link to="/Admin">Become seller</Link>
          </li>
          <li style={{ margin: "0 30px 0 0" }}>
            <Link to="/createshop">Add your shop</Link>
          </li>
          <li style={{ margin: "0 30px 0 0" }}>
            <Link to="/searchshop">Search Shops</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
