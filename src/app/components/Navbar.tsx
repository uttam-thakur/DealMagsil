"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
// Adjust interface as needed
interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Products", path: "/products" },
  { label: "Contact Us", path: "/contact" },
  { label: "Brouchers", path: "/brouchers" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src="http://nebula.wsimg.com/f6f02f85f065096f57161ffd21c2a893?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1"
        alt="Company Logo"
        style={{
          height: "60px",
          width: "60px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      />
      <Typography variant="h6" sx={{ my: 2 }}>
        Deal Magsil
        <br />
        <Typography
          sx={{ my: 2, fontSize: "15px", color: "red", marginTop: "-5px" }}
        >
          Since 1991
        </Typography>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link href={item.path} passHref>
              <ListItemButton sx={{ textAlign: "center", color: "black" }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      {/* Footer with social media icons */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "50px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          overflowY: "hidden",
        }}
      >
        <a
          href="https://wa.me/yourwhatsapplink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon
            sx={{
              color: "white",
              "&:hover": {
                color: "green", // Change to your desired hover color
                transform: "scale(1.5)", // Example of scaling effect
                transition: "all 0.3s ease", // Smooth transition
              },
            }}
          />
        </a>
        <a
          href="https://facebook.com/yourfacebookpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            sx={{
              color: "white",
              "&:hover": {
                color: "blue", // Change to your desired hover color
                transform: "scale(1.5)", // Example of scaling effect
                transition: "all 0.3s ease", // Smooth transition
              },
            }}
          />
        </a>
        <a
          href="https://instagram.com/yourinstagramprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            sx={{
              color: "white",
              "&:hover": {
                color: "red", // Change to your desired hover color
                transform: "scale(1.5)", // Example of scaling effect
                transition: "all 0.3s ease", // Smooth transition
              },
            }}
          />
        </a>
        <a
          href="https://twitter.com/yourtwitterprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon
            sx={{
              color: "white",
              "&:hover": {
                color: "blue", // Change to your desired hover color
                transform: "scale(1.5)", // Example of scaling effect
                transition: "all 0.3s ease", // Smooth transition
              },
            }}
          />
        </a>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Company Logo */}
          <Link href="/" passHref>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <img
                src="http://nebula.wsimg.com/f6f02f85f065096f57161ffd21c2a893?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1"
                alt="Company Logo"
                style={{
                  height: "60px",
                  width: "60px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Link>

          {/* Spacer to push navigation items to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Navigation Links for desktop */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link href={item.path} passHref key={item.label}>
                <Button sx={{ color: "#fff", marginLeft: 2 }}>
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              opacity: 0.9,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
