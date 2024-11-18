import Part from "./Part"

const Content = ({course}) => {
    const part1 = course.parts[0];
    const part2 = course.parts[1];
    const part3 = course.parts[2];

    return (
        <>
        <p><Part name={part1.name} exercises={part1.exercises}/></p>
        <p><Part name={part2.name} exercises={part2.exercises}/></p>
        <p><Part name={part3.name} exercises={part3.exercises}/></p>
        </>
    )
}

export default Content