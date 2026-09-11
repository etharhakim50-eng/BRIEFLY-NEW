function SearchBar({
  search,
  setSearch,
  handleSearch
}) {

  function handleKeyDown(event) {

    if (event.key === "Enter") {
      handleSearch();
    }

  }

  return (
    <div className="search-wrapper">

      <input
        type="text"
        placeholder="Search for a story..."
        value={search}
        onChange={function (event) {
          setSearch(event.target.value);
        }}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSearch}>
        Search
      </button>

    </div>
  );
}

export default SearchBar;