import styled from 'styled-components'


const StyledButton = styled.button`
    width: 100%;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, #8ec5fc, #e0c3fc);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;


// 태그 사이에 쓰는 내용을 children으로 받아올 수 있습니다.
function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
