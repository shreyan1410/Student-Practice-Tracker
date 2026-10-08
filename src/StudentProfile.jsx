import { useEffect } from "react";

function StudentProfile({
  name,
  department,
  year,
  practiceCount,
  setPracticeCount,
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${practiceCount}`;

    return () => {
      document.title = previousTitle;
    };
  }, [practiceCount]);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "auto",
        padding: "25px",
        border: "2px solid #6c5ce7",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
    >
      <h2>Student Practice Tracker</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>

      <h3>Practice Sessions: {practiceCount}</h3>

      <button
        onClick={() => setPracticeCount(practiceCount + 1)}
        style={{
          padding: "10px 15px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        Complete Practice
      </button>

      <button
        onClick={() => setPracticeCount(0)}
        style={{
          padding: "10px 15px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default StudentProfile;