"use client";

import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  // { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(15, 23, 42, 0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: "72px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Typography
              component="a"
              href="#home"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontSize: "1.5rem",
                fontWeight: 500,
                letterSpacing: "1px",
              }}
            >
              UMMU HABEEBA
            </Typography>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    color: "text.primary",
                    textTransform: "none",
                    fontSize: "0.95rem",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="open navigation menu"
              sx={{
                display: { xs: "flex", md: "none" },
                color: "text.primary",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        // PaperProps={{
        //   sx: {
        //     width: { xs: "80%", sm: "350px" },
        //     backgroundColor: "background.default",
        //     color: "text.primary",
        //   },
        // }}

        slotProps={{
          paper: {
            sx: {
              width: { xs: "80%", sm: "350px" },
              backgroundColor: "background.default",
              color: "text.primary",
            },
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.3rem",
                fontWeight: 500,
              }}
            >
              UMMU HABEEBA
            </Typography>

            <IconButton
              onClick={handleDrawerToggle}
              aria-label="close navigation menu"
              sx={{ color: "text.primary" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Mobile Navigation */}
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={handleNavClick}
                  sx={{
                    borderRadius: "8px",
                    mb: 0.5,
                    "&:hover": {
                      backgroundColor: "rgba(56, 189, 248, 0.1)",
                      color: "primary.main",
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
