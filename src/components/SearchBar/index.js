import React, { useState, useEffect } from "react";
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

const SearchBar=({setResults})=>{
    const [input, setInput] = useState("");
    const [placeholder, setPlaceholder] = useState("");
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [filteredResults, setFilteredResults] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const currentText = placeholders[placeholderIndex];

        const typeEffect = setTimeout(() => {
            if (!isDeleting) {
            // Typing effect
            if (charIndex < currentText.length) {
                setPlaceholder((prev) => prev + currentText[charIndex]);
                setCharIndex((prev) => prev + 1);
            } else {
                setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
            }
            } else {
            // Deleting effect
            if (charIndex > 0) {
                setPlaceholder((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else {
                setIsDeleting(false);
                setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
            }
            }
        }, isDeleting ? 50 : 150); // Typing speed
    
        return () => clearTimeout(typeEffect);

    }, [charIndex, isDeleting, placeholderIndex]);

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


    // const fetchData = (value) => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => response.json())
    //     .then((json) => {
    //         const results = json.filter(
    //         (user) =>
    //             value &&
    //             user &&
    //             user.name &&
    //             user.name.toLowerCase().includes(value)
    //         );
    //         setResults(results);
    //     });
    // };

    // const handleChange=(value)=>{
    //     setInput(value);
    //     fetchData(value);
    // }

    return (
        <div className="input-Wrapper">
            <FaSearch id="search-icon"/>
            <input placeholder={`Search for ${placeholder}...`}
                className="search-bar-input"
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

export default SearchBar;