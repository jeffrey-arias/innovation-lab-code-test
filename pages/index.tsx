import React, { useState } from "react";
import styled from "styled-components";
import { GetStaticProps } from "next";
import useDetectDevice from "../hooks/useDetectDevice";
import NavBar from "../components/navBar";
import { MainContainer } from "../styles/GlobalStyles";

const Title = styled.div`
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
      <MainContainer>
        <div>
          <Title>Hello, Woofs!</Title>
          <img src="/baby_doge.png" />
        </div>
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

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  return {
    props: {
      dogs: [],
    },
  };
};
