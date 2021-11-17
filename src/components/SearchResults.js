import "../css/SearchResults.css";

import { useHistory } from "react-router";

const SearchResults = (props) => {
  const history = useHistory();

  function firstUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    props.showResults && (
      <div className="search-results">
        {props.results.map((item, index) => (
          <div
            className="search-item"
            onClick={() => {
              history.push(`/details/${item._id}`);
              // props.setShowResults(false);
            }}
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
    )
  );
};
export default SearchResults;
