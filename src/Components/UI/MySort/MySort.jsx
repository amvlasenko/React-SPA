function MySort(props) {
   return (
      <>
         <div className="input-field col s12">
            <select
               className="browser-default"
               value={props.value}
               onChange={(event) => props.onChange(event.target.value)}
            >
               {props.options.map((option) => (
                  <option value={option.value} key={option.value}>
                     {option.name}
                  </option>
               ))}
            </select>
         </div>
         <label>Сортировка</label>
      </>
   );
}

export default MySort;
