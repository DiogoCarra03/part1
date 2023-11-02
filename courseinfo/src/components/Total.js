const Total = (props) => {
    const exercises = props.exercises

    return (
        <p>Numero de Exercicios {exercises[0] + exercises[1] + exercises[2]}</p>
    )
}

export { Total }
