import classes from "./MyInput.module.css";

function MyInput({ ...props }) {
  return <input {...props} className={classes.MyInput}></input>;
}

export default MyInput;
