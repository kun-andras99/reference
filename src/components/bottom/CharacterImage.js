import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from "../../constans/constans";

function CharacterImage() {
    return (
        <Link to="/character/3/profile"><img className='img-character-profile' src={ BASE_URL + `/assets/images/characters/3-s.png`} alt="t" title="t" /></Link>
    )
}

export default CharacterImage;