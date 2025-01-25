// export const MyInput = ({ value, onChange }) => {
//     return <input type="text" value={value} onChange={onChange} />;
//   };
  


import './MyInput.css';  // Make sure to import the CSS file

export const MyInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="my-input"
    />
  );
};
