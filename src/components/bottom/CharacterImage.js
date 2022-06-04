import React from 'react';
import { BASE_URL } from "../../constans/constans";

function CharacterImage() {
    return (
        <img className='img-character-profile' src={ BASE_URL + `/assets/images/characters/3-s.png`} alt="t" title="t" />
    )
}

export default CharacterImage;