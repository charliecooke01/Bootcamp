import './App.css'

function App() {

  const students = ["Alice", "Bob", "Charlie", "David", "Eve"];
  let count = 0;

  return (
    <>
      <div>
        <h1>Student Names</h1>
        <ul>
        {students.map((student) => (
          <div key={student}>{student}</div>
        ))}
        </ul>
      </div>
    </>
  )
}

export default App