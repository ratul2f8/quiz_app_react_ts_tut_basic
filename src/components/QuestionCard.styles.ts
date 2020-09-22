import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
> .p{
    font-size : 1em;
    color: white;
}
.question{
    font-size: 1.5em;
    color: white;
    padding: 0.3em;
    background-color: black;
}
.option{
    font-size: 1.5em;
    color: black;
    background-color: white;
    padding: 0.3em;
    margin: 0.5em;
}
`