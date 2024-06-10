import ButtonContainer from "./style";

function Button({label, type, onClick: handleClick}) {
    return (
        <ButtonContainer data-type={type} data-value={label} onClick={handleClick}>
            {label}
        </ButtonContainer>
    )
}

export default Button