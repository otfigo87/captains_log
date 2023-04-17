const React = require("react");
const Wrapper = require('./layout/Wrapper')


function New() {
  return (
    <Wrapper title="New Log">
      <form action="/logs" method="POST">
        <label htmlFor="title">Title:</label>
        <input className="new" type="text" name="title" id="title" />
        <br />
        <label htmlFor="entry">Entry:</label>
        <input className="new" type="textarea" name="entry" id="entry" />
        <br />
       <label htmlFor="broken">Ship Is Broken:</label>
        <input type="checkbox" name="shipIsBroken" id="broken" />
        <br />
        <input className="sub" type="submit" name="" value="Submit" />
      </form>
    </Wrapper>
  );
}

module.exports = New;
