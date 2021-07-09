import React from "react";

export interface DataSuccessTypes {
    status: 200
    data: [
        {
            word: string,
            meanings: [
                {
                    partOfSpeech: string,
                    definitions: [
                        {
                            definition: string,
                            example?: string,
                            synonyms?: string[]
                        }
                    ]
                }
            ],
            phonetics: [
                {
                    text: string,
                    audio: string
                }
            ]
        }
    ]
}

export interface DataFailureTypes {
    status: 404
    data: {}
}

export type Data = DataSuccessTypes | DataFailureTypes

export interface SearchBoxInterface {
    searchText: string,
    setSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: () => void
    onReset: () => void
}
