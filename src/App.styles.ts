import styled,{createGlobalStyle} from 'styled-components';
import BGImage from "./img/gordon-cowie-5meTk0lF0nM-unsplash.jpg";

export const GlobalStyle = createGlobalStyle`
html{
    height: "100%",
}
body{
    display: flex;
    background-image: url(${BGImage});
    background-size: cover;
    padding: 0 20px;
    margin: 0;
    justify-content: center;

}
*{
    box-sizing: border-box;
    font-family: 'Merriweather', serif;

}
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
> p {
    color: #fff;
}
.score{
    color: #fff;
    font-size: 2rem;
    margin: 0;
}
h1{
    font-family: 'Merriweather', serif;
    color: #fff;
    font-size: 3rem;
}

.start, .next{
    cursor: pointer;
    background-color: whitesmoke;
    color: black;
    font-size: 1.5rem;
    padding : 0.5em;
    border-radius: 8px;
    margin-top: 0.5em;
}

`