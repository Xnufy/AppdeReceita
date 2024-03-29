import styled from 'styled-components/native';


 export const Background = styled.View`
 flex:1;
 background-color: #FFF;
 `;
 export const Container = styled.KeyboardAvoidingView`
 flex:1;
 align-items: center;
 justify-content: center;
 `;
 export const Logo = styled.Image`
 margin-bottom: 5px;
 height: 125px;
 width: 125px;

 `;
 export const AreaInput = styled.View`
 flex-direction: row;
 `;
 export const Input = styled.TextInput.attrs({
     placeholderTextColor: '#ad0005'
 })`
 background: #FFF;
 width: 90%;
 font-size: 17px;
 color: #000;
 margin-bottom: 15px;
 padding: 10px;
 border-radius: 5px;
 border-width: 1px;
 border-color: #000;

 `;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #ad0005;
    width: 90%;
    height: 45px;
    border-radius: 5px;
    margin-top: 12px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #FFF;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 9px;
`;

export const LinkText = styled.Text`
    color:  #ad0005;
    padding: 10px
`;
