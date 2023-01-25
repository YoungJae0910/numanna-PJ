import React from "react"
import styled from "styled-components"

const Button = (props) => {
    const { text, size, height, outline, onClick } = props
    return (
        <ButtonBox
            size={size}
            height={height}
            outline={outline ? outline : ""}
            onClick={onClick}
        >
            {text}
        </ButtonBox>
    )
}

export default Button

const ButtonBox = styled.button`
    width: ${(props) => {
        switch (props.size) {
            case "primary":
                return "200px"
            case "secondary":
                return "140px"
            case "tertiary":
                return "15%"
            case "quaternary":
                return "70px"
            default:
                return "100px"
        }
    }};
    height: ${(props) => {
        switch (props.height) {
            case "primary":
                return "46px"
            case "secondary":
                return "40px"
            case "tertiary":
                return "3.4rem"
            default:
                return ""
        }
    }};
    background-color: ${(props) => (props.outline ? "transparent" : "#F9F2F2")};
    border: ${(props) => (props.outline ? "1px solid #333" : "none")};
    font-size: 150%;
    font-weight: 400;
    border-radius: 4px;
    &:hover {
        background-color: ${(props) =>
            props.outline ? "transparent" : "#F25A5A"};
        border: ${(props) => (props.outline ? "1px solid #333" : "none")};
        color: ${(props) => (props.outline ? "#333" : "#fff")};
    }
`
