import { Topic, Wrapper, Text } from './QuizCard.styled';

export const QuizCard = ({ item: { id, topic, level, time, questions }, onDelete}) => {
    return (
        <Wrapper>
            <Topic>{topic}</Topic>
            <Text>Level:{level}</Text>
            <Text>Time:{time}</Text>
            <Text>Questions:{questions}</Text>
            <div><button onClick = {()=>onDelete(id)}>Delete</button></div>
        </Wrapper>
    );
}