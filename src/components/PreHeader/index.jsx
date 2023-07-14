import React from 'react';
import {Div, Social} from './styles';
import { BsInstagram, BsFacebook } from 'react-icons/bs';

export default function PreHeader() {

    return (
        <Div>
            <div>
                <p>(35) 99764-8167</p>
            </div>
            <Social>
                <p>Siga nossas redes sociais</p>
                <BsInstagram />
                <BsFacebook />
            </Social>
        </Div>
    )
}