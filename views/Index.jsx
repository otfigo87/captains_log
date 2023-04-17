const React = require('react');
const Wrapper = require('./layout/Wrapper')

const Index = ({ logs }) => {
  return (
    <Wrapper title="Logs / Index ">
      <a href="/logs/new">Create page</a>
      <h3>welcome</h3>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>
            <a href={`/logs/${log._id}`}>{log.title}</a>
            <div className="btns">
            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
              <input type="submit" value="DELETE" className="delete" />
            </form>
            <a href={`/logs/${log._id}/edit`}><button>EDIT</button></a>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

module.exports = Index