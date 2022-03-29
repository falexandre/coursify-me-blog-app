import React from 'react';
import { Container, Menu } from './styles';
import { Icon, IconButton, Image } from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { If } from '../';

const logo = require('../../../assets/logo.png');

interface Props {
    isGoBack?: boolean
}

export function Header(props: Props) {
    const { goBack } = useNavigation<any>();
    const { isGoBack } = props;

    return (
        <Container style={{ elevation: 6 }}>
            <If show={Boolean(isGoBack)}>
                <IconButton variant="ghost"
                            onPress={() => goBack()}
                            _icon={{
                                as: MaterialIcons,
                                name: 'arrow-back'
                            }}/>
            </If>

            <Image source={logo} alt={'Coursify.me'}/>
            <Menu>
                <Icon as={Ionicons} name="md-menu" color="white"/>
            </Menu>
        </Container>
    )
}
