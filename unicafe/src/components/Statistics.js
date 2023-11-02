import { Statistic } from './Statistic'
import { Title } from './Title'

const Statistics = (props) => {
    const { name, good, neutral, bad } = props
    const all = good + bad + neutral

    if (all === 0) {
        return (
            <div>
                <Title name={name} />
                No feedback given
            </div>
        )
    }

    return (
        <div>
            <Title name={name} />

            <table>
                <tbody>
                <Statistic text={'bom'} value={good} />
                <Statistic text={'neutro'} value={neutral} />
                <Statistic text={'mau'} value={bad} />
                <Statistic text={'tudo'} value={all} />
                <Statistic text={'comum'} value={(good - bad) / all} />
                <Statistic text={'positivo'} value={String(good / all * 100) + ' %'} />
                </tbody>
            </table>
        </div>
    )
}

export { Statistics }
