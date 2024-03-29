import { useRef, useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import React from 'react';
// @mui
import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
} from "@mui/material";
// components
import MenuPopover from "../components/MenuPopover";
// mocks_
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import ProfileService from "../../services/profile.service";
// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: "eva:home-fill",
    linkTo: "/dashboard/app",
  },
  {
    label: "Profile",
    icon: "eva:person-fill",
    linkTo: "/profile",
  },
  {
    label: "Settings",
    icon: "eva:settings-2-fill",
    linkTo: "#",
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const user = AuthService.getCurrentUser();
  useEffect(() => {
    ProfileService.getProfileById(user.uid).then((profile) => {
      setProfile(profile.data);
    });
    console.log(profile);
  }, [profile, user.uid]);
  const account = {
    displayName: user.fullname,
    email: user.email,
    photoURL: profile,
    role: "Boat Owner",
  };
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogOut = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar alt={user.fullname} src={account.photoURL}>
          {user.fullname
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </Avatar>
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          "& .MuiMenuItem-root": {
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap sx={{fontSize:'14px'}}>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary",fontSize:'12px' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              to={option.linkTo}
              component={RouterLink}
              onClick={handleClose}
              
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={handleLogOut} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
