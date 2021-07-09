import React from "react";

export interface TextDataProps {
    data: [
        {
            word: string,
            meanings: [
                partOfSpeech: string,
                definitions: [
                    {
                        definition: string,
                        example: string,
                        synonyms: string[]
                    }
                ]
            ],
            phonetics: [
                text: string,
                audio: string
            ]
        }
    ]
}

export interface SearchBoxInterface {
    searchText: string,
    setSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: () => void
    onReset: () => void
}
