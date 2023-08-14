import { QuizList } from './QuizList';
import quizItoms from '../data.json';
import { SearchBar } from './SearchBar';

export const App = () => {
  return (
    <div>
      <SearchBar/>
      <QuizList items={quizItoms} />
    </div>
  );
};
