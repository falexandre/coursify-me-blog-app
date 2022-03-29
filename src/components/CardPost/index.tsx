import React, { useEffect, useState } from 'react';
import { AspectRatio, Box, Image, Skeleton, Stack } from 'native-base';
import { Description, Detail, More, Title } from './styles';
import { PostDto } from '../../services/post/post.dto';
import { MediaService } from '../../services/media/media.service';
import { useNavigation } from '@react-navigation/native';

interface Props {
    data: PostDto
}

export function CardPost(props: Props) {
    const { title, description, featured_media, content } = props?.data;
    const [isLoaded, setIsLoaded] = useState(false);
    const [uri, setUri] = useState('');
    const { navigate } = useNavigation<any>();

    useEffect(() => {
        let unmounted = false;
        getImage();
        return () => {
            unmounted = true;
        };
    }, [featured_media]);

    const getImage = async () => {
        const payload = await MediaService.get(featured_media);
        setUri(payload.uri);
        setIsLoaded(true);
    }


    const onPressPost = () => {
        navigate('Detail', { title, content });
    };


    return (
        <Detail onPress={onPressPost}>
            <Box mr={10} alignItems="center" width="240" borderColor="coolGray.200" borderWidth="1" overflow="hidden"
                 rounded="lg">
                <Box maxH="103">
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Skeleton w="240" h="103" isLoaded={isLoaded}>
                            <Image width={'100%'} height={'103'} source={{ uri }} alt={title}/>
                        </Skeleton>
                    </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Title numberOfLines={2}>{title}</Title>
                    </Stack>
                    <Description numberOfLines={4}>{description}</Description>
                    <Stack space={3}>
                        <More>Leia mais</More>
                    </Stack>
                </Stack>
            </Box>
        </Detail>
    );
}