import React, {useRef} from 'react';
import css from './search_header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchHeader = (props) => {
    const searchRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit(searchRef.current.value);
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <span className={css['search-tit']}>youtube</span>
            <input 
                ref={searchRef} 
                type="search" 
                name="search" 
                className={css.keyword} 
                placeholder="Search..."
            />
            <button type="submit" className={css['btn-search']}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    );
};

export default SearchHeader;