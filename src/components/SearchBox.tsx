import React from 'react';
import {SearchBoxInterface} from "../interface";

const SearchBox: React.FC<SearchBoxInterface> = ({searchText, setSearchText, onSubmit, onReset}) => {
    const onSubmitForm = (e: React.SyntheticEvent) => {
        e.preventDefault()
        onSubmit()
    }
    return (
        <React.Fragment>
            <form onSubmit={onSubmitForm} onReset={onReset}>
                <input type="search" value={searchText} onChange={setSearchText}/>
                <button type="submit">Search</button>
                <button type="reset">Reset</button>
            </form>
        </React.Fragment>
    );
};

export default SearchBox;
