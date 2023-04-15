const React = require('react');

const Edit = ({ log }) => {
    return (
      <form action={`/logs/${log._id}?_method=PUT`} method="POST">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" defaultValue={log.title} />
        <br />
        <label htmlFor="entry">Entry:</label>
        <input type="textarea" name="entry" id="entry" defaultValue={log.entry} />
        <br />
        Ship Is Broken: <input type="checkbox" name="shipIsBroken" />
        <br />
        <input type="submit" name="" value="Submit changes" />
      </form>
    );
}

module.exports = Edit