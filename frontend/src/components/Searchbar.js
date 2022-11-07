const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="title search">Search doctor names</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search..."
            name="s" 
        />
        <button type="submit">Click</button>
    </form>
);

export default SearchBar;