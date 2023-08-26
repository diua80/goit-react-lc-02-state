import { B } from './B';
const styles = {
  backgroundColor: 'green',
  padding: 12,
};

export const A = ({clicks, onIncrement, onReset}) => {
      return (
          <div style={styles}>Number of clicks: {clicks}
              <div>
                  <button onClick={onIncrement}>Increment</button>
              </div>
              <B value={clicks} onReset={onReset} />
          </div>
    );
}
