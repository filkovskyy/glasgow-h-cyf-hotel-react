import React from 'react'

const SearchResult = ({ results }) => {
  const tableHeadings = Object.keys(results[0])

  const splitAndCapitalise = (str) => {
    return str
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <div className="table-container">
      <table className="table table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            {tableHeadings.map((heading) => (
              <th key={heading}>{splitAndCapitalise(heading)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((booking) => (
            <tr key={booking.id}>
              {tableHeadings.map((key) => (
                <td key={key}>{booking[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SearchResult
