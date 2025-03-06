import Header from "../Components/header";
import Content from "../Components/content";
import Total from "../Components/total";

const course = (props) => {
  console.log(props);
  return (
    <div>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  );
};

export default course;
