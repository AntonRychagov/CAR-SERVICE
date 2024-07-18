import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
} from "@mui/material";
import { Menu as MenuIcon, WbSunny, Brightness3 } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { SearchBox } from "../../../widgets/SearchBox/ui/SearchBox";
import { DrawerContent } from "./DrawerContent";
import { ErrorBox } from "./ErrorBox";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../../../shared/lib/hooks/useRootStore";
import { useAuth } from "../../../shared/lib/hooks/useAuth";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  alignItems: "center",
  fontSize: "1.25rem",
  fontWeight: "bold",
  marginRight: theme.spacing(2),
}));

const availableServices = ["Автосервис 1", "Автосервис 2", "Автомойка 1"]; // Пример данных

const Navbar: React.FC = observer(() => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const { themeStore, searchStore } = useRootStore();
  const muiTheme = useTheme();
  const { isAuthenticated } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const handleHideError = () => {
    searchStore.setShowError(false);
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          top: 0,
          zIndex: 1100,
          backgroundColor: muiTheme.palette.background.default,
          boxShadow: 1,
        }}
      >
        <Container maxWidth="lg">
          <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ backgroundColor: "transparent" }}
          >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
                <StyledLink to="/" sx={{ flexGrow: 1 }}>
                  CAR SERVICE
                </StyledLink>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  flexGrow: 1,
                  justifyContent: "center",
                }}
              >
                <SearchBox
                  searchTerm={searchStore.searchTerm}
                  setSearchTerm={searchStore.setSearchTerm}
                  handleSearch={() =>
                    searchStore.handleSearch(availableServices, navigate)
                  }
                  handleKeyDown={(event) => {
                    if (event.key === "Enter") {
                      searchStore.handleSearch(availableServices, navigate);
                    }
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  flexGrow: 1,
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                {isAuthenticated ? (
                  <Button color="inherit" component={Link} to="/account">
                    Личный кабинет
                  </Button>
                ) : (
                  <Button color="inherit" component={Link} to="/login">
                    Вход/Регистрация
                  </Button>
                )}
                <IconButton onClick={themeStore.toggleTheme} color="inherit">
                  {themeStore.darkMode ? (
                    <WbSunny style={{ color: "yellow" }} />
                  ) : (
                    <Brightness3 style={{ color: "blue" }} />
                  )}
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", sm: "none" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <SearchBox
                  searchTerm={searchStore.searchTerm}
                  setSearchTerm={searchStore.setSearchTerm}
                  handleSearch={() =>
                    searchStore.handleSearch(availableServices, navigate)
                  }
                  handleKeyDown={(event) => {
                    if (event.key === "Enter") {
                      searchStore.handleSearch(availableServices, navigate);
                    }
                  }}
                />
                <IconButton onClick={themeStore.toggleTheme} color="inherit">
                  {themeStore.darkMode ? (
                    <WbSunny style={{ color: "yellow" }} />
                  ) : (
                    <Brightness3 style={{ color: "blue" }} />
                  )}
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Container>
      </Box>
      <Box sx={{ mt: 12 }} />
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        <DrawerContent
          handleLinkClick={handleLinkClick}
          handleDrawerToggle={handleDrawerToggle}
          isAuthenticated={isAuthenticated}
        />
      </Drawer>
      <ErrorBox
        showError={searchStore.showError}
        onHideError={handleHideError}
      />
    </Box>
  );
});

export { Navbar };
