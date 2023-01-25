import styled from "styled-components"

const StBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StLogo = styled.img`
    max-width: 300px;
    margin-top: 40px;
    margin-bottom: 20px;
`
const StLogoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StInputBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #fe6473;
    width: 300px;
    height: 430px;
    background-color: #ffe1e1;
    border-radius: 5px;
    margin-bottom: 50px;
`
const StInput = styled.input`
    width: 72%;
    border-radius: 10px;
    border: 1px solid rgb(195, 190, 190);
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    outline: none;
    text-align: center;
    outline: none;

    &:focus {
        outline: none;
        border: 2px solid #fe6473;
    }
`

const StBtn = styled.button`
    width: 40%;
    border-radius: 5px;
    color: white;
    background-color: #f25a5a;
    padding: 10px;
    margin: 10px;
    border: 1px solid #f6809f;
    font-weight: 600;
    outline: none;
    &:hover {
        background-color: white;
        color: #f25a5a;
    }
`

const Colortext = styled.span`
    font-size: 10px;
    &.success {
        color: green;
    }
    &.error {
        color: #ff2727;
    }
`

const StText = styled.span`
    color: #f25a5a;
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: 600;
    border: 1px solid transparent;
    padding: 5px;
    border-radius: 10px;
    background-color: white;
    width: 60%;
    box-sizing: border-box;
`

export {
    StText,
    Colortext,
    StBtn,
    StBox,
    StLogo,
    StLogoBox,
    StInputBox,
    StInput
}
