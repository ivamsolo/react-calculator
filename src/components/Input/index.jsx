import InputContainer from "./style"

function Input({values}) {
    return <InputContainer>
            <div className="expression">
                <h2>{values.expr}</h2>
            </div>
            <div className="entry">
                <h1>{values.entry}</h1>
            </div>
        </InputContainer>
}

export default Input
