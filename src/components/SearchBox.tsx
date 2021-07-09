import React from 'react';
import {SearchBoxInterface} from "../interface";
import {GoSearch} from "react-icons/go";
import {ImCross} from "react-icons/im";

const SearchBox: React.FC<SearchBoxInterface> = ({searchText, setSearchText, onSubmit, onReset}) => {
    const onSubmitForm = (e: React.SyntheticEvent) => {
        e.preventDefault()
        onSubmit()
    }
    return (
        <React.Fragment>
            <form onSubmit={onSubmitForm} onReset={onReset}>
                <input type="search" value={searchText} onChange={setSearchText} placeholder="Search Here"/>
                <div>
                    <button type="submit">
                        <GoSearch/>
                    </button>
                    <button type="reset">
                        <ImCross/>
                    </button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default SearchBox;
