import React from 'react';
import { Container, More, Title } from './styles';
import { Icon, Text } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
    title: string;
}

export function CategoryTitle(props: Props) {
    const { title } = props;
    return (
        <Container>
            <Title>{title}</Title>
            <More>
                <Text>VER MAIS</Text>
                <Icon as={MaterialIcons} name="arrow-right" size="md"/>
            </More>
        </Container>
    );
}