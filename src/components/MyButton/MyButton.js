const MyButton = ({ value, ...props }) => {
  return <button {...props}> {value} </button>;
};

export default MyButton;

// const MyButton = ({ id, value, handleClick, style, disable }) => {
//   return (
//     <button
//       className={style}
//       onClick={() => handleClick(id)}
//       disabled={disable}
//     >
//       {value}
//     </button>
//   );
// };

// export default MyButton;
