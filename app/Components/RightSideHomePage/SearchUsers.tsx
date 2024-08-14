"use client"
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import styles from "./RightSideHomePage.module.css";

const SearchUsers = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e : any) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value && typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`http://213.130.144.203:8084/api/search?query=${value}`,{
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        setSearchResults(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return ( 
    <div className={styles.search_container}>
      <div className={styles.image_fly}>
        <img 
          src="https://s3-alpha-sig.figma.com/img/a62b/8a37/6efe50c39c66fe3e7fb01ab0f48154d5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oc8v32zjXdZJj9YiEMRM6U7QniRR-4Q~m6xdp72D4yjrIyKkkwctP7tKnp4EnbDxePp-NVTAr1PPJIH4vtU4suC3Aol75C2sMi63TEd19hkn4CqYZSwFnXoKLYlAQzkLQq37Fd5aQHBtnt0bZQ4FvAIzVSd8Jlw8slTJ8iIkU1yrjIVRoiP~BJos8ZF8Ld1m4qHPL8YiUvgai8OXuben027c-KGGbZapsywTebKhP-A0IhCEfQQwyyFlPRfzWT3Hq-MVfWwnQQXe0NTYw7cbz9iRgEn9OIQVn1rp9Q1RxyswTOIOYMs70JKIS~PeXO9-9T6ESb7fJPnFrV1o0uQcGw__"
          alt="fly image trekr"
        />
      </div>
      <div className={styles.input_search}>
        <input 
          type="text"
          className={styles.search_input}
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch className={styles.search_icon} />
      </div>
      {/* {searchResults.length > 0 && (
        <div className={styles.search_results}>
          {searchResults.map(result => (
            <div key={result.id} className={styles.search_result}>
              {result.name}
            </div>
          ))}
        </div>
      )} */}
    </div>
   );
}
 
export default SearchUsers;
