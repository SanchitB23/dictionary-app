import React from 'react';

interface SearchBoxInterface {
    searchText: string,
    setSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: () => void
    onReset: () => void
}

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
