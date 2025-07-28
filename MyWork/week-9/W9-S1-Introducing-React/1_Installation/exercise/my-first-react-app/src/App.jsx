import './App.css'
import Student from '/components/students';

function App() {

  const students = [{name:"Bob", age:17},
                    {name:"Charlie", age:25},
                    {name:"David", age:32},
                    {name:"Eve", age:45}]

    const onClickStudent = (student) => {
      console.log(`clicked on student ${student}`)
    }


  return (
    <>
      <div>
        <h1>Student Names</h1>
        <button onClick={() => onClickStudent(students[0])}>student</button>
        <ul>
        {students.map((student) => (
          <Student key={student.name} student={student} onClick={onClickStudent}/>
        ))}
        </ul>
      </div>
    </>
  )
}

export default App