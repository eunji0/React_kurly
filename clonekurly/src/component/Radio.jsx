import styled from "styled-components";

export default function Radio({ children, value, name, defaultChecked, disabled }) {

  const Radiobtn = styled.input`
    min-width: 24px;
    min-height: 24px;
    display: inline-block;
    position: relative;
    border-radius: 50%;
    background-color: white;
    border: 1px solid rgb(221, 221, 221);
  `
  const Radiolabel = styled.label`
    font-size: 14px;
    display: flex;
    flex-direction: row;
    font-weight: 500;
  `

  const Txtchild = styled.span`
    padding-left: 10px;
    padding-top: 2px;
  `
  return (
    <Radiolabel>
      <Radiobtn
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      <Txtchild>
      {children}
      </Txtchild>
    </Radiolabel>
  );
  }