import React from 'react';
import {DataSuccessTypes} from "../interface";
import AudioButton from "./AudioButton";

const TextData: React.FC<DataSuccessTypes> = ({data}) => {
    const {meanings, word, phonetics} = data[0];
    return (
        <React.Fragment>
            <header className="header">
                <h1 className="header">{word}</h1>
                <ul className="header-list">
                    {phonetics.map((phonetic, index) => (
                        <li className="header-list__item" key={index}>
                            <span>{phonetic.text}</span>
                            <AudioButton url={phonetic.audio}/>
                        </li>
                    ))}
                </ul>
            </header>
            <ul className="meaning-list">{meanings.map(({partOfSpeech, definitions}, index) => {
                return (
                    <li key={index} className="meaning-list__item">
                        <span className="meaning-list__item__pos">{partOfSpeech}</span>
                        <div className="meaning-list__item__type meaning-list__item__type--definition">
                            <h3>Definition</h3>
                            <p>{definitions[0].definition}</p>
                        </div>
                        {definitions[0].example &&
                        <div className="meaning-list__item__type meaning-list__item__type--example">
                          <h3>Example</h3>
                          <p>{definitions[0].example}</p>
                        </div>
                        }
                        {definitions[0].synonyms &&
                        <div className="meaning-list__item__type meaning-list__item__type--synonyms">
                          <h3>Synonyms</h3>
                          <ul>{definitions[0].synonyms.map((word, index) => (
                              <li key={index}>{word}</li>
                          ))}</ul>
                        </div>}
                    </li>
                )
            })}
            </ul>
        </React.Fragment>
    );
};

export default TextData;
