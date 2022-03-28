import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  height: 420px;
  padding: 0px 17px 17px 17px;
`;

export const Posts = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {
        paddingRight: 17,
    },
    showsHorizontalScrollIndicator: false,
})``;
