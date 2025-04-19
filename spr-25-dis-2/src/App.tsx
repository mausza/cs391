import CourseStaff from "./components/courseStaff.tsx";


function App() {
    return (
        <div>
            <h2>Welcome to my first react application</h2>
            <div>
                <CourseStaff
                    name={`Mauricio`}
                    title={`Student`}
                    rating={100}/>
            </div>
        </div>
    );
}

export default App;