import React from 'react';

interface TextDataProps {
    data: {}
}

const TextData: React.FC<TextDataProps> = ({data}) => {
    console.log(data)
    return (
        <React.Fragment>
            Hello
        </React.Fragment>
    );
};

export default TextData;
