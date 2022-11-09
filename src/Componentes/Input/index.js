import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #ffffff;
  background: transparent;
  border: 1px solid #FFF;
  padding: 25px 250px 25px 250px;
  border-radius: 15px;
  width: 200px;
  color: #FFF;
  font-size: 16px;
  margin-bottom: 10px;

  &::placeholder {
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    width: 250px;
  }
`

export default Input