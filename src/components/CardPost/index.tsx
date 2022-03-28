import React from 'react';
import { Box, AspectRatio, Image, Center, Stack, Heading, Text, HStack } from 'native-base';
import { Description, Detail, More, Title } from './styles';

interface Props {
    title: string;
    description: string;
    uri: string;
}

export function CardPost(props: Props) {
    const { title, description, uri } = props;
    return (
        <Detail>
            <Box mr={10} alignItems="center" maxW="235" borderColor="coolGray.200" borderWidth="1" overflow="hidden"
                 rounded="lg">
                <Box maxH="103">
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image width={'100%'} height={'103'} source={{uri}} alt="image"/>
                    </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Title>{title}</Title>
                    </Stack>
                    <Description>{description}</Description>
                    <Stack space={3}>
                        <More>Leia mais</More>
                    </Stack>
                </Stack>
            </Box>
        </Detail>
    );
}