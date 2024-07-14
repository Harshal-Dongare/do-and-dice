import styled from "styled-components";

export const Button = styled.button`
    font-size: 1rem;
    color: white;
    border: 1px solid transparent;
    padding: 10px 18px;
    background: #000000;
    border-radius: 5px;
    width: 220px;
    cursor: pointer;
    transition: 0.3s background ease-in;

    &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover {
        background-color: black;
        border: 1px solid transparent;
        color: white;
    }
`;
