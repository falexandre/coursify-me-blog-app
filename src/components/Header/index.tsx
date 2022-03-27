import React from 'react';
import { Container, Menu } from './styles';
import { Image, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
const logo = require('../../../assets/logo.png');

export function Header() {
    return (
        <Container style={{ elevation: 6 }} >
            <Image source={logo}/>
            <Menu>
                <Icon as={Ionicons} name="md-menu" color="white" />
            </Menu>
        </Container>
    )
}
