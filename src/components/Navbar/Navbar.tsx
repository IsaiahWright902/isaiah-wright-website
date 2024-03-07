import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { PortfolioLink, theme } from "@/theme/ThemeRegistry";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { coreSelectors } from "@/store/CoreState/selector";
import { coreActions } from "@/store/CoreState/reducer";
import { useRouter } from "next/navigation";
import { modalActions } from "@/store/ModalState/reducer";

export default function Navbar({ links }: { links: PortfolioLink[] }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const useLightMode = useSelector(coreSelectors.useLightMode);
  const userColor = useSelector(coreSelectors.userColor);
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleColorClick = () => {
    dispatch(modalActions.open("userColorPickerModal"));
    // dispatch(modalActions.open("welcomeModal"));
  };

  const toggleThemePreference = (val: boolean) => {
    dispatch(coreActions.setUseLightMode(val));
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            margin: isMobile ? "non" : "0px 165px",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width={"100%"}
          >
            <Stack
              onClick={() => router.push("/")}
              direction="row"
              alignItems="center"
              width={"100%"}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                  color: "white !important",
                  cursor: "pointer",
                }}
              >
                Isaiah Wright
              </Typography>
              {!isMobile && (
                <Typography
                  sx={{ color: "white !important", cursor: "pointer" }}
                >
                  - Full Stack Developer
                </Typography>
              )}
            </Stack>

            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  aria-label="mobile drop down label"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  <MenuItem onClick={handleColorClick}>
                    <Stack spacing={1} direction="row" alignItems="center">
                      <Typography variant="subtitle1">Change Color</Typography>
                      <Box
                        width="15px"
                        height="15px"
                        borderRadius="50%"
                        sx={{
                          background: userColor,
                        }}
                      ></Box>
                    </Stack>
                  </MenuItem>
                  <MenuItem
                    onClick={() => toggleThemePreference(!useLightMode)}
                  >
                    <Typography variant="subtitle1">
                      Toggle {useLightMode ? "Dark" : "Light"} Mode
                    </Typography>
                  </MenuItem>
                  {links.map((link, idx) => (
                    <MenuItem
                      key={idx}
                      href={link.url}
                      target="_blank"
                      component={Link}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <Typography variant="subtitle1">
                          {" "}
                          {link.name}
                        </Typography>
                        {link.icon}
                      </div>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Stack direction="row" alignItems="center" spacing={2}>
                {links.map((link, idx) => (
                  <Button
                    href={link.url}
                    target="_blank"
                    endIcon={link.icon}
                    key={idx}
                    sx={{ my: 2, color: "white" }}
                  >
                    {link.name}
                  </Button>
                ))}
                <LightDarkToggle
                  toggleThemePreference={toggleThemePreference}
                  useLightMode={useLightMode}
                />
                <ChangeUserColor
                  handleOpenModal={handleColorClick}
                  userColor={userColor}
                />
              </Stack>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function LightDarkToggle({
  useLightMode,
  toggleThemePreference,
}: {
  useLightMode: boolean;
  toggleThemePreference: (val: boolean) => void;
}) {
  return (
    <Tooltip title={`Toggle ${useLightMode ? "Dark" : "Light"} Mode`}>
      <IconButton onClick={() => toggleThemePreference(!useLightMode)}>
        {useLightMode ? (
          <LightModeIcon
            sx={{
              fill: `white`,
            }}
          />
        ) : (
          <DarkModeIcon
            sx={{
              fill: `white`,
            }}
          />
        )}
      </IconButton>
    </Tooltip>
  );
}

function ChangeUserColor({
  userColor,
  handleOpenModal,
}: {
  userColor: string;
  handleOpenModal: () => void;
}) {
  return (
    <Tooltip title="Change Preferred Color">
      <IconButton onClick={handleOpenModal}>
        <Box
          width="20px"
          height="20px"
          borderRadius="50%"
          sx={{
            background: userColor,
            cursor: "pointer",
          }}
        ></Box>
      </IconButton>
    </Tooltip>
  );
}
