const React = require('react');
const Wrapper = require("./layout/Wrapper");

const Show = ({log}) => {
    const createdAtString = new Date(log.createdAt).toLocaleString();
    return (
      <Wrapper>
        <h3>{log.title} Page</h3>
        <p>{log.entry}</p>
        <h4>The ship is <span> {log.shipIsBroken ? "NOT Broken" : "Broken"}</span></h4>
        <h4>Created at: {createdAtString}</h4>
      </Wrapper>
    );
}

module.exports = Show;