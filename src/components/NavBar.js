import {
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import GitHubIcon from "@mui/icons-material/GitHub";
import useStyles from "../styles/style";
import { Link } from "react-router-dom";


function NavBar({ title }) {
  const classes = useStyles();
  return (
      <div className="shadow-lg bg-neutral ">
        <Toolbar className={classes.navContainer}>
          <Link className="flex items-center gab-4" to="/">
            <GitHubIcon style={{ color: "blue", fontSize: "2rem" }} />
            <Typography variant="h6" >{title}</Typography>
          </Link>

          <List className={classes.navContainer}>
            <ListItem>
                <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
                <Link to="/about">About</Link>
            </ListItem>
          </List>
        </Toolbar>
      </div>
    
  );
}
NavBar.defaultProps = {
  title: "Github Users Application",
};
NavBar.propTypes = {
  title: PropTypes.string,
};

export default NavBar;
