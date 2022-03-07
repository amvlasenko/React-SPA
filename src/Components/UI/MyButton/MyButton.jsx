import classes from './MyButton.module.css';
function MyButton({ children, ...props }) {
   return (
      <button
         {...props}
         className={`waves-effect waves-light btn ${classes.MyButton}`}
      >
         {children}
      </button>
   );
}

export default MyButton;
