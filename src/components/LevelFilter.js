export const LevelFilter = ({value, onChange}) => {
  return (
    <select value = {value} onChange={(evt)=>onChange(evt.target.value)}>
      <option value="beginner">Beginner</option>
      <option value="all">All levels</option>
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
    </select>
  );
};
