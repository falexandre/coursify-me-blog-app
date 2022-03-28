import React from 'react';
import { Container, PlatformButton, Title } from './styles';
import { Box, Stack } from 'native-base';

export function Footer() {
    return (
        <Container>
            <Box alignItems="center" >
                <Box maxH="103">

                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Title>O Coursify.me é uma plataforma de ensino a distância,onde qualquer pessoa ou empresa pode construir seuEAD e vender cursos pela internet.</Title>
                    </Stack>
                    <Stack space={3}>
                        <PlatformButton>Quero conhecer a plataforma!</PlatformButton>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    )
}