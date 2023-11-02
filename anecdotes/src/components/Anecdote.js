import { Title } from './Title'

const Anecdote = (props) => {
    const { name, anecdote, point } = props

    return (
        <div>
            <Title name={name} />
            <p>
                {anecdote}
            </p>
            <p>
                Esta anedota têm {point} votos.
            </p>
        </div>
    )
}

export { Anecdote }
