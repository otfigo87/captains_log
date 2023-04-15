const React = require("react");
const Wrapper = require('./layout/Wrapper')


function New() {
  return (
    <Wrapper title="New Log">
      <form action="/logs" method="POST">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" />
        <br />
        <label htmlFor="entry">Entry:</label>
        <input type="textarea" name="entry" id="entry" />
        <br />
        Ship Is Broken: <input type="checkbox" name="shipIsBroken" />
        <br />
        <input type="submit" name="" value="Submit" />
      </form>
    </Wrapper>
  );
}

module.exports = New;
