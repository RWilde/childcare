import styled from "styled-components"
import { MultiBackground } from "."

export const StyledInnerWrapper = styled.div`
  //   margin-top: 10%;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   width: 100%;
  //   height: 100%;
`

export const StyledMultiBackground = styled.div`
  flex: 1 0 auto;
  display: block;
  > section {
    /* You should set a background-size as the default value is "cover"! */
    /* So we won't have the default "lightgray" background-color. */
    background-color: transparent;
    /* Now again, remember the stacking order of CSS: lowermost comes last! */
    background-size: 10px 10px, 20%, 100%, 100%, 50px !important;
    background-repeat: no-repeat, no-repeat, no-repeat, repeat-x, repeat !important;
    background-position: 5% 40%, 95% 60%, center bottom !important;
    color: #fff;
  }
`
