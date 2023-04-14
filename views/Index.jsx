const React = require('react');

const Index = ({ logs }) => {
  return (
    <div>
        <h2>Index Page</h2>
        <a href="/logs/new">Create page</a>
        <h3>welcome Page</h3>
        <ul>
          { logs.map((log, i )=> (
            <li key={i}>
             <a href={`/logs/show/${log._id}`}>{log.title}</a> 
            </li>
          )) }
        </ul>
    </div>
  )
}

module.exports = Index