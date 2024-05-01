const Result = ({ result }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Result Page</h2>
        {result ? (
          <p className="text-lg">{result.success ? `Criminal captured by ${result.capturingCop}` : 'Criminal not found!'}</p>
        ) : (
          <p className="text-lg">Loading...</p>
        )}
      </div>
    );
  }
  
  export default Result;
  