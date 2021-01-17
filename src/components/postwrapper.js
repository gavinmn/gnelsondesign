import React from "react"
import styled from "styled-components"
import { device } from "./device"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Fade from "../components/fade"
import Wrapper from "../components/wrapper"
import Caption from "../components/caption"

const Container = styled.div`
  margin: 8rem 0 4rem 0;

  @media ${device.desktop} {
    margin: 4rem 0 4rem 0;
  }
`

const Subtitle = styled.h3`
  font-size: var(--font-xs);
  font-style: normal;
  margin: 0;
`

const PostWrapper = props => (
  <Layout>
    <SEO title={`${props.title} - `} />
    <Wrapper size="large">
      <Fade>
        <Container>
          <Wrapper size="small">
            <h1>{props.title}</h1>
            <Subtitle>{props.subtitle}</Subtitle>
            <Caption>
              <i>{props.time}</i>
            </Caption>
            {props.children}
          </Wrapper>
        </Container>
      </Fade>
    </Wrapper>
  </Layout>
)

export default PostWrapper