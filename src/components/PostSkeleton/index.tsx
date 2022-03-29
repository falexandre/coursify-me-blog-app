import React from 'react';
import { AspectRatio, Box, Skeleton, Stack } from 'native-base';

export function PostSkeleton() {
    return (
        <Box mr={10} alignItems="center" width="240" borderColor="coolGray.200" borderWidth="1" overflow="hidden"
             rounded="lg">
            <Box maxH="103">
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Skeleton w="240" h="103"/>
                </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
                <Stack space={2}>
                    <Skeleton.Text lines={2} w="240" px="4"/>
                </Stack>
                <Skeleton.Text lines={4} w="240" px="4" mt={5}/>
                <Stack space={5}>
                    <Skeleton.Text lines={1} w="240" px="4" mt={5}/>
                </Stack>
            </Stack>
        </Box>
    )
        ;
}