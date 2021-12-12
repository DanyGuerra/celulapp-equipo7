import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import SearchResults from "./SearchResults";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  border: "solid",
  borderWidth: "1px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
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
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Input() {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const [activeResults, setActiveResults] = useState(false);

  const searchData = async (search) => {
    try {
      const response = await fetch(
        `https://celulapp.herokuapp.com/v1/celulares/search/${search}`
      );
      const data = await response.json();
      if (data.length > 0) {
        setResults(data);
      } else {
        setResults([]);
      }

      // console.log(results);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (e) => {
    const search = e.target.value.toLowerCase();
    if (!search) return;
    searchData(search);
  };

  return (
    <>
      <SearchResults
        showResults={showResults}
        results={results}
        setShowResults={setShowResults}
        setActiveResults={setActiveResults}
        activeResults={activeResults}
      />
      <div className="Input">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Buscar celular"
            inputProps={{ "aria-label": "search" }}
            onChange={handleChange}
            onFocus={() => {
              setShowResults(true);
            }}
            onBlur={() => {
              if (activeResults) return;
              setShowResults(false);
              console.log("Foucs out");
            }}
          />
        </Search>
      </div>
    </>
  );
}

export default Input;
