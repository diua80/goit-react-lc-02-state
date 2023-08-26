import { QuizList } from './QuizList/QuizList';
import initialQuizItems from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { Component } from 'react';
import { GlobalStyled as GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { QuizForm } from './QuizForm/QuizForm';

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topic: '',
      level: 'all',
    },
  };
  handleOnDelete = (quizId) => {
    this.setState(
      prevState => {
        return {quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId )}
      }
    )
  }
  addQuiz = newQuiz => {
    this.setState(prevState => {
      return {
        quizItems: [...prevState.quizItems, newQuiz],
      };
    })

  }
  changeTopicFilter = newTopic => {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          topic: newTopic,
        },
      };
    });
  };
  changeLevelFilter = newLevel => {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          level: newLevel,
        },
      };
    });
  }
  render() {
    const { quizItems, filters } = this.state;
    
    const visibleQuizItems = quizItems.filter(quiz => {
      if (filters.level === 'all') {
        return quiz.topic.toLowerCase().includes(filters.topic.toLowerCase());
      }
        return (
        quiz.topic.toLowerCase().includes(filters.topic.toLowCase())
        && quiz.level === filters.level
      );
    });
    return (
    <Layout>
        <QuizForm onAdd={this.addQuiz} />
        <SearchBar
          topicFilter={filters.topic}
          levelFilter={filters.level}
          onChangeTopic={this.changeTopicFilter}
          onChangeLevel={ this.changeLevelFilter}
        />
        <QuizList items={visibleQuizItems} onDelete={this.handleOnDelete} />
      <GlobalStyle/>
    </Layout>
  );
  }
};
