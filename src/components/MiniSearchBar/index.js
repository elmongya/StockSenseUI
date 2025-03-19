import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../../App.css';

const placeholders = ["Apple", "Amazon", "Google"];

const validCompanies = [
    "Apple", "Amazon", "Google", "Nvidia", "Microsoft",
    "Meta", "Tesla", "AMD", "Intel", "Netflix",
    "IBM", "Uber", "Lyft", "Salesforce", "Oracle",
    "Cisco", "PayPal", "Adobe", "Spotify", "Shopify",
    "Square", "Boeing", "Ford", "General Motors", "Starbucks",
    "Coca-Cola", "Pepsi", "Walmart", "Target", "Disney"
];

const MiniSearchBar=({setResults})=>{
    const [input, setInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const searchBarRef = useRef(null); // Ref for detecting clicks outside

    const navigate = useNavigate();

    const handleSelect = (company) => {
        navigate(`/stock/${company}`);
        setInput(""); // Clear input after selection
        setFilteredResults([]);
    };

    const handleChange = (value) => {
        setInput(value);
        if (value.length === 0) {
          setFilteredResults([]);
          return;
        }
        
        const results = validCompanies
          .filter((company) => company.toLowerCase().includes(value.toLowerCase()))
          .slice(0, 5); // Limit to 5 results
    
        setFilteredResults(results);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setFilteredResults([]); // Hide results if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className="mini-input-Wrapper" ref={searchBarRef}>
            <FaSearch id="search-icon"/>
            <input placeholder={`Search...`}
                className="mini-search-bar-input"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && filteredResults.length > 0) {
                      handleSelect(filteredResults[0]); // Select the first search result
                    }
                }}
            />
            {filteredResults.length > 0 && (
                <ul className="search-results">
                  {filteredResults.map((company, index) => (
                    <li key={index} onClick={() => handleSelect(company)}>
                      {company}
                    </li>
                  ))}
                </ul>
              )}
        </div>
    );
};

export default MiniSearchBar;