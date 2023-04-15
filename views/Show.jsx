const React = require('react');
const Wrapper = require("./layout/Wrapper");

const Show = ({log}) => {
    const createdAtString = new Date(log.createdAt).toLocaleString();
    return (
      <Wrapper title="Show Page">
        <h3>{log.title}</h3>
        <p>{log.entry}</p>
        <h3>The ship is {log.shipIsBroken ? "NOT Broken" : "Broken"}</h3>
        <h4>Created at: {createdAtString}</h4>
      </Wrapper>
    );
}

module.exports = Show;