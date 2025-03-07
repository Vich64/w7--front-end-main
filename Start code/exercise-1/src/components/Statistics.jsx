export default function Statistics({ courseResult }) {
  const average = courseResult.reduce((acc, curr) => acc + curr.score, 0) / courseResult.length;
  const max = Math.max(...courseResult.map((result) => result.score));
  const min = Math.min(...courseResult.map((result) => result.score));

  return (
      <div className="statistics">
          <table>
              <thead>
                  <tr>
                      <th>Average</th>
                      <th>Max</th>
                      <th>Min</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>{average.toFixed(2)}</td>
                      <td>{max}</td>
                      <td>{min}</td>
                  </tr>
              </tbody>
          </table>
      </div>
  );
}