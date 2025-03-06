import Part from "../Components/part";

const content = (props) => {
  const differentParts = props.parts.map((element) => (
    <Part key={element.id} parts={element} />
  ));

  return <div>{differentParts}</div>;
};

export default content;
