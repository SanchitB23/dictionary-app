import React, {useCallback, useState} from 'react';
import SearchBox from "../components/SearchBox";
import axios from "axios";
import TextData from "../components/TextData";
import {Data} from "../interface";


const Index = () => {
    const [searchText, setSearchText] = useState('')
    const [isReset, setIsReset] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<Data>()

    const setText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    const onsubmitSearch = useCallback(() => {
        setIsLoading(true)
        setIsReset(false)
        axios.get(`/api/getSearchTextData?text=${searchText}`)
            .then(value => {
                setData({
                    status: 200,
                    data: value.data
                })
            })
            .catch(({response}) => {
                setData({
                    status: 404,
                    data: response.data
                })
            })
            .finally(() => {
                console.log("query run done")
                setIsLoading(false)
            })
    }, [searchText])

    const onReset = () => {
        setIsReset(true)
        setSearchText("")
    }

    const RenderComponent = () => {

        if (isLoading)
            return <h1>Loading</h1>
        else if (isReset)
            return <h1>Submit your search</h1>
        else if (data && Object.keys(data).length !== 0) {
            if (data.status === 200) {
                return <TextData data={data.data} status={data.status}/>
            } else if (data.status === 404) {
                console.log(data)
                return <h1>Error Component to do</h1>
            }
        }
        return <h1>Error</h1>
    }
    return (
        <React.Fragment>
            <SearchBox searchText={searchText} setSearchText={setText} onSubmit={onsubmitSearch} onReset={onReset}/>
            <RenderComponent/>
        </React.Fragment>
    );
};

export default Index;
