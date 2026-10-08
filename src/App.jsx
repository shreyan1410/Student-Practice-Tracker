
import { useState } from "react";
import Header from "./header";
import StudentProfile from "./StudentProfile";
import Footer from "./footer";

function App() {
  const [practiceCount, setPracticeCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <>
      <Header />

      <div style={{ textAlign: "center", padding: "30px" }}>
        <button
          onClick={() => setShowProfile(!showProfile)}
          style={{
            padding: "10px 20px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>

        {showProfile && (
          <StudentProfile
            name="Anu"
            department="CSE"
            year="3rd Year"
            practiceCount={practiceCount}
            setPracticeCount={setPracticeCount}
          />
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;