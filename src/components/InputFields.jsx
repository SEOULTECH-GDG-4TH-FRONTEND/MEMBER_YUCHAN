import styled from "styled-components";

const InputContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Label = styled.label`
    font-size: 14px;
    color: #666666;
    margin-bottom: 8px;
`;

const Input = styled.input`
    padding: 12px 15px;
    font-size: 16px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    &:focus {
        border-color: #8ec5fc;
        outline: none;
        box-shadow: 0 0 8px rgba(142, 197, 252, 0.4);
    }

    &::placeholder {
        color: #bbbbbb;
        font-size: 14px;
    }
`;

function InputFields({ label, type = "text", onChange }) {
    return (
        <InputContainer>
            <Label>{label}</Label>
            <Input type={type} placeholder={label} onChange={onChange} />
        </InputContainer>
    );
}

export default InputFields;
