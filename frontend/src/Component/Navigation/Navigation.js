import {
  Divider,
  IconButton,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import Login from "../LoginPage/Login";
import React, { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navigation.css";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import GroupsIcon from "@mui/icons-material/Groups";
import logo from "../../images/logo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const settings = [
  { name: "Login", destination: "login" },
  { name: "SignUp", destination: "register" },
];
function Navigation() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  useEffect(() => {
    if (localStorage.getItem("userEmail") === null) {
      settings[0] = { name: "Login", destination: "login" };
      settings[1] = { name: "SignUp", destination: "register" };
    } else {
      settings[0] = { name: "Profile", destination: "profile" };
      settings[1] = { name: "Logout", destination: "logout" };
    }
  }, [localStorage.getItem("userEmail")]);

  const logout = async () => {
    const { data } = await axios.get(`/api/v1/logout`);
    if (data) {
      if (data.success === true) {
        localStorage.removeItem("userEmail");
        navigate("/");
      }
    }
  };

  const handleMenu = (name) => {
    if (name === "Profile") {
      navigate("/profile");
    } else if (name === "Logout") {
      logout();
    } else if (name === "Login") {
      navigate("/login");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="navigation">
      <Toolbar>
        <div
          style={{
            justifyContent: "left",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            flex: "1",
            flexGrow: "3",
          }}
          className="login"
        >
          <Link to="/">
            <img src={logo} height="45px" />
          </Link>
        </div>
        <Typography color="inherit">
          <Button
            fontSize="large"
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Opportunities
          </Button>
        </Typography>
        <StyledMenu
        sx={{zIndex:"100"}}
          className="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <Link to="/conferences" className="demo-customized-menu">
            <MenuItem onClick={handleClose} disableRipple>
              <GroupsIcon />
              <p>Conferences</p>
            </MenuItem>
          </Link>
          <Link to="/hackathons" className="demo-customized-menu">
            <MenuItem onClick={handleClose} disableRipple>
              <DeveloperModeIcon />
              Hackathons
            </MenuItem>
          </Link>
          <Link to="/internships" className="demo-customized-menu">
            <MenuItem onClick={handleClose} disableRipple>
              <WorkIcon />
              Interships/Fellowships
            </MenuItem>
          </Link>
          <Link to="/coding" className="demo-customized-menu">
            <MenuItem onClick={handleClose} disableRipple>
              <CodeIcon />
              Coding Contests
            </MenuItem>
          </Link>
        </StyledMenu>

        <Typography>
          <Link to="/gosocial" style={{textDecoration:"none"}}>
            <Button className="socialBtn">Let's Build Teams</Button>
          </Link>
        </Typography>

        <Box>
          <IconButton className="loginBtn" onClick={handleOpenUserMenu}>
            <AccountCircleIcon fontSize="large" />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                onClickCapture={() => handleMenu(setting.name)}
                key={setting.name}
                onClick={handleCloseUserMenu}
              >
                {setting.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
      <Divider />
    </div>
  );
}

export default Navigation;
