import { FC } from "react";
import styled from "styled-components";
import { Sidepanel } from "../Sidepanel";

export const Initial: FC = () => {
  return (
    <Container>
      <Sidepanel />
      <Page>
        <Keyboard />
      </Page>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Keyboard = styled.div`
  height: 40vh;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  z-index: 100;
`

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
`