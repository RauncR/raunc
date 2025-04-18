import CustomerServiceSurvey from "./components/UnControlledInputWindowObject"; // Removed trailing slash

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <CustomerServiceSurvey /> {/* Changed to match imported name */}
    </div>
  );
}

export default App;
