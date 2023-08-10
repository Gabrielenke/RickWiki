interface InputGroupProps {
  name: string;
  changeID: any;
  total: number;
}

const InputGroup = ({ name, changeID, total }: InputGroupProps) => {
  return (
    <div className="">
      <select onChange={(e) => changeID(e.target.value)} className="" id={name}>
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option key={index} value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default InputGroup;
