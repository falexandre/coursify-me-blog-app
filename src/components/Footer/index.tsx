import React from 'react';
import { Container, PlatformButton, Title } from './styles';
import { Image } from 'native-base';
const logo = require('../../../assets/logo-coursify-w.png');

export function Footer() {
    return (
        <Container>
            <Image source={logo}/>
            <Title>O Coursify.me é uma plataforma de ensino a distância,
                onde qualquer pessoa ou empresa pode construir seu EAD e vender cursos pela internet.</Title>
            <PlatformButton>
                <Title>Quero conhecer a plataforma!</Title>
            </PlatformButton>
        </Container>
    )
}