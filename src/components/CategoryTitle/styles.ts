import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 27px;
  background: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font: normal normal bold 22px/27px Roboto;
  color: #2AB598;
  width: 280px;
  text-transform: uppercase;
`;

export const More = styled.TouchableOpacity`
  width: 95px;
  height: 22px;
  font: normal normal normal 17px/20px Roboto;
  color: #535353;
  display: flex;
  flex-direction: row;
  align-items: center;
`;