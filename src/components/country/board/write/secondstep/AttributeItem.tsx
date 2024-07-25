type Props = {
  title: string;
  explain: string[];
  value: number[];
  setValue: (value: number) => void;
};

const AttributeItem = ({ props }: { props: Props }) => {
  return (
    <>
      <span>{props.title}</span>
      <div>
        {props.explain.map((element, index) => (
          <>
            <input
              className=""
              type="radio"
              id={element}
              value={props.value[index]}
              checked={false}
            />
            <label htmlFor={element}>{element}</label>
          </>
        ))}
      </div>
    </>
  );
};

export default AttributeItem;
