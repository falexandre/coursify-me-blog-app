import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  left: 0px;
  height: 222px;
  background: #1ABC9C;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  width: 300px;
  text-align: center;
  font: normal normal normal 12px/17px Roboto;
  color: #FFFFFF;
`;

export const PlatformButton = styled.TouchableOpacity`
  width: 216px;
  height: 44px;
  background: #FFA900;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;