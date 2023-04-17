const React = require('react');

const Wrapper = ({children, title}) => {
    return(
        <html>
            <head>
                <title>{title}</title>
                <link rel="stylesheet" type="text/css" href="/styles.css" />
            </head>
            <body>
                <h2>{title}</h2>
                { children }
            </body>
        </html>
    )
}

module.exports = Wrapper;