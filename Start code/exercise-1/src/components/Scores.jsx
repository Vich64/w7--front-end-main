import Statistics from "./Statistics";

export default function Scores({ course, results }) {
  return (
    
    <main className="scores-container">
      <div className="scores">
        <h1>{course}</h1>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.firstName}</td>
                <td>{result.lastName}</td>
                <td className={result.score <50 ? 'warning': ''}>{result.score}</td>
                
              </tr>
            ))}
            
          </tbody>
        </table>
        <Statistics courseResult={results} />
      </div>

    </main>
  );
}