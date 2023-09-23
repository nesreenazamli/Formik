import styled from "styled-components";

 export const StyledTitle = styled.p`
   font-size: 40px;
    color: red;
    font-weight: bold;
    
    `

export const Container = styled.div`
      padding: 0 5%;
      height: 100vh;
  
  
      
    
    `
export const StyledButton = styled("button")`
    padding: 10px 30px;
      background: ${(props) => props.background};
      color: #000;
      font-size: ${props => props.fontSize}px;
  
  &:hover {
    background: brown;
    color: #fff;
  }
  
  &.btn {
    border: 6px solid #e5ef5f;
  }
  
  
  
  
  
    `

export const StyledBorderButton = styled(StyledButton)`
    border-radius: 8px;
  
      
    `


export const Typography = styled.p`
    font-size: ${props => props.fontSize}px;
  font-weight: ${props=> props.fontWeight ? props.fontWeight : "bold"};
  color: ${props => props.color ? props.color  : "#ccc" };
  
`