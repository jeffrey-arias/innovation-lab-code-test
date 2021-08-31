import React, { useState } from "react";
import styled from "styled-components";
import { GetStaticProps } from "next";
import useDetectDevice from "../hooks/useDetectDevice";
import NavBar from "../components/navBar";


interface IProps {
  isMobileDevice?: boolean;
}

export const MainContainer = styled.div<IProps>`
  height: calc(100vh - 64px - 16px);
  width: calc(100vw - 16px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  ${props => {
    if (props.isMobileDevice === true ) return `
      height: calc(100vh - 64px - 16px - 50px);
    `
  }}
`;

const Title = styled.div<IProps>`
  font-size: 5rem;
  color: white;
  text-shadow: -1px 1px 0 #000,
                1px 1px 0 #000,
                1px -1px 0 #000,
              -1px -1px 0 #000;  
  font-family: Arial;
  display: inline;
  vertical-align: bottom;
  line-height: 150px;
  height: 150px;
  ${props => {
    if (props.isMobileDevice === true ) return `
        font-size: 4rem;
        display: block;
    `
  }}
`;

type Dog = {
  url: string;
  caption: string;
};

type StaticProps = {
  dogs: Dog[];
};

export default ({ dogs: initialDogs }: StaticProps) => {
  const [dogs, setDogs] = useState<Dog[]>(initialDogs);
  const { isMobileDevice } = useDetectDevice();

  return (
    <>
      <NavBar />
      <MainContainer isMobileDevice={isMobileDevice}>
      { isMobileDevice ? 
        <div>
          <Title isMobileDevice={isMobileDevice}>Hello, Woofs!</Title>
          <center>
            <img src="/baby_doge.png" />
          </center>
        </div>
        :
        <div>
          <Title isMobileDevice={isMobileDevice}>Hello, Woofs!</Title>
          < img src="/baby_doge.png" />
        </div>
      } 
      </MainContainer>
      {/* Here are the dogs:
      {dogs.map((dog) => (
        <div>
          url: {dog.url}, caption: {dog.caption}
        </div>
      ))} */}
    </>
  );
};

// export const getStaticProps: GetStaticProps<StaticProps> = async () => {
//   return {
//     props: {
//       dogs: [],
//     },
//   };
// };
