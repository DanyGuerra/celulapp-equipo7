import "../css/SearchResults.css";

const SearchResults = (props) => {
  return (
    props.showResults && (
      <div className="search-results">
        <h4>No hay resultados</h4>
      </div>
    )
  );
};

export default SearchResults;
