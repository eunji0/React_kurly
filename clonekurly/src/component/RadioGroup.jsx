import styled from "styled-components";

export default function RadioGroup({  children }) {

    const Radiogroup = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;
    `

    return (
        <Radiogroup>
        {children}
        </Radiogroup>
    );
  }