import React from 'react';
import {TextDataProps} from "../interface";

const TextData: React.FC<TextDataProps> = ({data}) => {
    console.log(data[0])
    return (
        <React.Fragment>
            Hello
        </React.Fragment>
    );
};

export default TextData;
