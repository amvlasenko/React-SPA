import classes from './MyLoader.module.css';

function MyLoader() {
   return <div className={`progress ${classes.loader}`}>
      <div className="indeterminate"></div>
   </div>;
}

export default MyLoader;
