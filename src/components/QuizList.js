import { QuizCard } from "./QuizCard"

export const QuizList = ({items}) => {
    // console.log(props.items);
    return <ul>
        {items.map(item => (
            <li key={item.id}>
                <QuizCard item={ item} />                
            </li>
        ))}
    </ul>
}