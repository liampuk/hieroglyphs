import { FC } from "react";
import styled from "styled-components";

const glyphs = (len: number) => {
  return [...Array(len).keys()]
    .map((i) => {
      return <Glyph>{String.fromCodePoint(Number(`0x13${Number(i).toString(16).padStart(3, '0')}`))}</Glyph>
    })
}

const glyphFromTo = (start: number, end: number) => {
  return [...Array(end-start).keys()]
    .map((i) => {
      return <Glyph>{String.fromCodePoint(Number(`0x13${Number(i+start).toString(16).padStart(3, '0')}`))}</Glyph>
    })
}

export const Sidepanel: FC = () => {
  return (
    <Container>
      <h2>Hieroglyphs</h2>
      <Glyphs>
        <h3>A. Man and his occupations</h3>
        {glyphFromTo(0, 79)}
        <h3>B. Woman and her occupations</h3>
        {glyphFromTo(80, 89)}
        <h3>C. Anthropomorphic deities</h3>
        {glyphFromTo(90, 117)}
        <h3>D. Parts of the human body</h3>
        {glyphFromTo(118, 209)}
        <h3>E. Mammals</h3>
        {glyphFromTo(210, 253)}
        <h3>F. Parts of mammals</h3>
        {glyphFromTo(254, 318)}
        <h3>G. Birds</h3>
        {glyphFromTo(319, 382)}
        <h3>H. Parts of birds</h3>
        {glyphFromTo(383, 391)}
        <h3>I. Amphibious animals, reptiles, etc.</h3>
        {glyphFromTo(392, 410)}
        <h3>K. Fishes and parts of fishes</h3>
        {glyphFromTo(411, 418)}
        <h3>L. Invertebrata and lesser animals</h3>
        {glyphFromTo(419, 428)}
        <h3>M. Trees and plants</h3>
        {glyphFromTo(420, 494)}
      </Glyphs>

    </Container>
  )
}

const Container = styled.div`
  width: 30vw;
  height: 100%;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 200;
  padding: 16px;
  overflow: scroll;
`

const Glyphs = styled.div`
  word-wrap: break-word;
  line-height: 2em;
`

const Glyph = styled.span`
  font-size: 24px;
`