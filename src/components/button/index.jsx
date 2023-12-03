export const Button = (props) => {
    return(
        <button onClick={props.onClickFunc}>{props.value}</button>
    )
}