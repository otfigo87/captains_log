const React = require("react");


function New() {
  return (
    <div>
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
    </div>
  );
}

module.exports = New;
