import React from "react";
import { useLocation } from "react-router-dom";
import SearchResults from "./SearchResults";

const SearchResultsPage: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("searchTerm") || "";

    return (
        <div>

            <SearchResults searchTerm={searchTerm} />
        </div>
    );
}

export default SearchResultsPage;
