const React = require('react');

const Wrapper = ({children, title}) => {
    return(
        <html>
            <head>
                <title>{title}</title>
            </head>
            <body>
                <h2>{title}</h2>
                { children }
            </body>
        </html>
    )
}

module.exports = Wrapper;