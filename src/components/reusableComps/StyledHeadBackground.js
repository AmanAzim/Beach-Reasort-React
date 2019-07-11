import styled from 'styled-components'

const StyledHeadBackground=styled.header`
  min-height: calc(100vh - 66px);
  background: url(${props=>props.img? props.img:''}) center/cover no-repeat; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default StyledHeadBackground;
// background: url(${props=>props.img}) center/cover no-repeat;
