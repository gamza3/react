import styles from '../css/search.module.css';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {

    const searchRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit(searchRef.current.value);
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <span className={styles['search-tit']}>youtube</span>
            <input 
                ref={searchRef} 
                type="search" 
                name="search" 
                className={styles.keyword} 
                placeholder="Search..."
            />
            <button type="submit" className={styles['btn-search']}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    );
};

export default Search;