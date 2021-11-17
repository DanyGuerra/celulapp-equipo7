import "../css/SearchResults.css";

import { useHistory } from "react-router";

const SearchResults = (props) => {
  const history = useHistory();

  function firstUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  if (!props.showResults) {
    return <></>;
  } else if (props.results.length === 0) {
    return <div className="search-no-results">No hay resultados</div>;
  } else if (props.results.length > 0) {
    return (
      <div
        className="search-results"
        onMouseOver={() => {
          props.setActiveResults(true);
        }}
        onMouseOut={() => {
          props.setActiveResults(false);
        }}
      >
        {props.results.map((item, index) => (
          <div
            className="search-item"
            onClick={(e) => {
              history.push(`/details/${item._id}`);
              props.setShowResults(false);
              props.setActiveResults(false);
            }}
            // onMouseOver={() => {
            //   props.setActiveResults(true);
            // }}
            // onMouseOut={() => {
            //   props.setActiveResults(false);
            // }}
            key={index}
          >
            <img
              className="result-img"
              src={item.images[0]}
              alt={item.modelo}
            ></img>
            <div>{firstUpper(item.marca)}</div>
            <div>{firstUpper(item.modelo)}</div>
          </div>
        ))}
      </div>
    );
  } else {
    return <></>;
  }
};
export default SearchResults;
