import React from 'react';
import { Skeleton, Stack } from 'native-base';
import { Container, Posts } from '../CategoryList/styles';
import { PostSkeleton } from '../';

export function CategorySkeleton() {
    return (
        <Container>
            <Stack space={2} h="27">
                <Skeleton.Text lines={1} w="240" px="4"/>
            </Stack>
            <Posts>
                <PostSkeleton/>
                <PostSkeleton/>
            </Posts>
        </Container>
    );
}