import React from 'react'
import styled from 'styled-components'

export const StyledCard = styled.div`
  position: relative;
  flex: 0 1 50%;
  padding: 24px;
  border-radius: 4px;
  background-color: #fff;
  overflow: Hidden;
  box-shadow: 0 0 3px 0 #D0D2D6, 0 1px 2px 0 #D0D2D6;
  margin-top: 42px;
`

const Header = styled.h3`
  font-family: Averta, Helvetica, sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  color: #444751;
  font-weight: bold;
`

const Copy = styled.div`
  font-family: Roboto, Helvetica, sans-serif;
  display: block;
  margin: 0;
  padding: 24px 0;
  color: #444751;
  font-size: 16px;
  line-height: normal;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};

  strong {
    font-family: Roboto, Helvetica, sans-serif;
  }

  li {
    padding-bottom: 16px;
  }
`

const Instructions = () => {
  return (
    <StyledCard>
      <Header>Background</Header>
      <Copy>
        The purpose of this exercise is to get to know you a little better as a
        software developer. At Nav, we are not fans of whiteboard coding
        exercises and programming trivia questions. We want to know how you will
        perform on a real task our team takes on day-to-day. This involves
        writing some code, finishing a feature and discussing it with your peers.
      </Copy>

      <Header>Part 1: The Challenge</Header>
      <Copy>
        Here's what you'll do:

        <ul>
          <li>
            On the next page, you'll see an example of 3 interactive blocks.
            Choose the block that catches your eye most and build your own
            version of it.
          </li>
          <li>
            Feel free to stick to the visual styles we have in place or get
            creative and add your own flair 🔥🔥. It important that you implement
            the feature in full, so pay close attention to the details.
          </li>
          <li>
            We have two technical requirements. <strong>1.</strong> Your UI
            should be populated using a JSON data structure. <strong>2.</strong>
            {' '}Use React for UI components.
          </li>
          <li>
            Push your solution to Github or send over a .zip when you're done.
          </li>
        </ul>
      </Copy>

      <Header>Part 2: Discuss with Team</Header>
      <Copy>
        You will discuss your code and explain your decisions to a small group of
        developers and stakeholders at Articulate. The format is modeled after
        the way we conduct pairing sessions and is meant to give you a glimpse
        into the way we work. We are SUPER friendly and it will be a fun
        conversation.
      </Copy>
    </StyledCard>
  )
}

export default Instructions
