import React, {useCallback, useState} from 'react';
import SearchBox from "../components/SearchBox";
import TextData from "../components/TextData";

const Index = () => {
    const [searchText, setSearchText] = useState('')
    const [isReset, setIsReset] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({})

    const setText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        setIsReset(true)
    }

    const onsubmitSearch = useCallback(() => {
        setIsLoading(true)
        setIsReset(false)
        setData({text: searchText})
        setIsLoading(false)
    }, [searchText])

    const onReset = () => setIsReset(true)

    return (
        <React.Fragment>
            <SearchBox searchText={searchText} setSearchText={setText} onSubmit={onsubmitSearch} onReset={onReset}/>
            {isLoading ? "Loading" : isReset ? "submit your search" : <TextData data={data}/>}
        </React.Fragment>
    );
};

export default Index;
