import { QuizList } from './QuizList/QuizList';
import initialQuizItems from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { Component } from 'react';
import { GlobalStyled as GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { QuizForm } from './QuizForm/QuizForm';
import { LevelFilter } from "./LevelFilter";
import { TopicFilter } from "./TopicFilter";

const localStorageKey = 'quizFilters';

const initialsFilters = {
      topic: '',
      level: 'all',
    }

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: initialsFilters,
  };

  componentDidMount() {
    // console.log('Mount');
    const savedFilters = localStorage.getItem(localStorageKey);
      if(savedFilters!==0){
        this.setState({
          filters: JSON.parse(savedFilters),
        });
        }
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('this.state:', this.state);
    // console.log('prevState:', prevState);
    const { filters: prevFilters } = prevState;
    const { filters: nextFilters } = this.state;
    if (prevFilters !== nextFilters) {
      localStorage.setItem(localStorageKey, JSON.stringify(this.state.filters));
    }
  }

  resetFilters = () => {
    this.setState({
      filters: initialsFilters,
    })
  }

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
    console.log('rander');
    const { quizItems, filters } = this.state;
    
    const visibleQuizItems = quizItems.filter(quiz => {
      if (filters.level === 'all') {
        return quiz.topic.toLowerCase().includes(filters.topic.toLowerCase());
      }
        return (
        quiz.topic.toLowerCase().includes(filters.topic.toLowerCase())
        && quiz.level === filters.level
      );
    });
    return (
    <Layout>
        <QuizForm onAdd={this.addQuiz} />
        <SearchBar onResetFilters={this.resetFilters}>
          <TopicFilter value={filters.topic} onChange={ this.changeTopicFilter} /> 
          <LevelFilter value={filters.level} onChange={this.changeLevelFilter} />
        </SearchBar>
        <QuizList items={visibleQuizItems} onDelete={this.handleOnDelete} />
      <GlobalStyle/>
    </Layout>
  );
  }
};
