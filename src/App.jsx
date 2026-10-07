import "./App.css";

function Header() {
  return <h1 className="header">Student Management System</h1>;
}

function StudentProfile(props) {
  return (
    <div className="profile">
      <p><b>Name:</b> {props.name}</p>
      <p><b>Department:</b> {props.department}</p>
      <p><b>Year:</b> {props.year}</p>
    </div>
  );
}

function Footer() {
  return <footer>© 2026 Student Management System</footer>;
}

function App() {
  const student1 = {
    name: "Shreyan",
    department: "CSE",
    year: "3rd Year"
  };

  const student2 = {
    name: "Riya",
    department: "Computer Science",
    year: "3rd Year"
  };

  return (
    <div>
      <Header />

      <h2>Student 1</h2>
      <StudentProfile
        name={student1.name}
        department={student1.department}
        year={student1.year}
      />

      <h2>Student 2</h2>
      <StudentProfile
        name={student2.name}
        department={student2.department}
        year={student2.year}
      />

      <Footer />
    </div>
  );
}

export default App;