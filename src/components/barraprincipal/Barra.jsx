import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
//import MenuPrincipal from "./MenuPrincipal";

const Search = styled("div")(({ theme }) => ({
  position: "relative",

  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),

  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "primary",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

BarraConBusqueda.propTypes  = {
  
  handleSearch: PropTypes.func,
};

export default function BarraConBusqueda({ handleSearch }) {
  const nav = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: " rgb(240, 236, 225)" }}>
          <Toolbar>

            {/* <MenuPrincipal /> */}

            <img src="../src/assets/logo2.png" width="90" height="80" />

            <Typography
              variant="h3"
              noWrap
              component="div"
              border={0} //aplica un recuadro
              color={"rgb(1, 175, 100285)"}
              fontWeight="bold"
              mt={0} //Es la distancia al borde superior
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Gabriel Web Store
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => {
                  handleSearch(e.target.value);
                  nav("/productos/Productos");  //Cuando efectuo una busqueda me rutea hacia productos, este en la pagina Inicio o en la que este
                }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
