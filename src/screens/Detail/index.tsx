import React from 'react';
import { Header } from '../../components'
import { View } from 'native-base';
import { useRoute } from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import { Container, Title } from './styles';

export function Detail() {
    const { params } = useRoute<any>();
    const { width } = useWindowDimensions();
    const source = {
        html: params.content
            .replace(/<b/g, `<b style="color:#666666",font-size:27px`)
            .replace(/<l/g, `<b style="color:"#666666"`)
            .replace(/<span/g, `<span style="color:#666666",font-size:27px`)
            .replace(/<strong/g, `<strong style="color:#666666",font-size:27px`)
            .replace(/<li/g, `<li style="color:#666666",font-size:27px`)
            .replace(/size-full/g, '')
            .replace(/sizes/g, '')
            .concat('<p></p><p></p><p></p>')
    }
    return (
        <View>
            <Header isGoBack={true}/>
            <Container>
                <Title>{params.title}</Title>
                <RenderHtml
                    contentWidth={width}
                    source={source}
                />
            </Container>
        </View>
    )
}