import styled from 'styled-components';

export const List = styled.ul`
backgroundColor: 'orange';
// list-style: circle;
display: flex;
flex-wrap: wrap;
gap: 16px;
`;

const getBorderColor = props => {
    switch (props.level) {
        case 'beginner':
            return 'green';
        case 'advanced':
            return 'blue';
        case 'intermediate':
            return 'yellow';
        default:
            return 'black';
    }
}

export const ListItem = styled.li`
border: 5px solid ${getBorderColor};
:hover{
    background-color: blue;
    cursor: pointer;
}
`