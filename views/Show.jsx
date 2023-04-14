const React = require('react');

const Show = ({log}) => {
    const createdAtString = new Date(log.createdAt).toLocaleString();
    return (
      <div>
        <h2>{log.title}</h2>
        <p>{log.entry}</p>
        <h3>The ship is {log.shipIsBroken ? "NOT Broken" : "Broken"}</h3>
        <h4>Created at: {createdAtString}</h4>
      </div>
    );
}

module.exports = Show;