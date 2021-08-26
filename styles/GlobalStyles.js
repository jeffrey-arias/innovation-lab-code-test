import styled from "styled-components";

export const MainContainer = styled.div`
  height: calc(100vh - 64px - 16px);
  width: calc(100vw - 16px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
`;

export const Title = styled.div`
  font-size: 2rem;
  color: white;
  text-shadow: -1px 1px 0 #000,
                1px 1px 0 #000,
                1px -1px 0 #000,
              -1px -1px 0 #000;  
  font-family: Arial;
  display: inline-block;
  text-align: center;
  width: calc(100vw - 16px);
  margin-top: 20px;
  margin-bottom: 50px;

`;

export const DisplayContainer = styled.div`
  height: calc(100vh - 64px - 16px);
  width: calc(100vw - 16px);
  background-color: lightgray;
`;