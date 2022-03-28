import React from 'react';
import { Box, AspectRatio, Image, Center, Stack, Heading, Text, HStack } from 'native-base';

export function CardPost() {
    return (
        <Box mr={10} alignItems="center" maxW="80" borderColor="coolGray.200" borderWidth="1" overflow="hidden"
             rounded="lg">
            <Box maxH="103">
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Image width={'100%'} height={'103'} source={{
                        uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg'
                    }} alt="image"/>
                </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
                <Stack space={2}>
                    <Heading size="md">
                        The Garden City
                    </Heading>
                </Stack>
                <Text fontWeight="400">
                    Bengaluru (also called Bangalore) is the center of India's high-tech
                    industry. The city is also known for its parks and nightlife.
                </Text>
            </Stack>
        </Box>
    );
}