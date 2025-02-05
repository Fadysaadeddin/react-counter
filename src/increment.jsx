
export default function Increment({ add, style1, className }) {
  return (
    <button onClick={add} style={style1} className={className}>
      {className}
    </button>
  );
}
