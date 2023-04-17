const React = require('react');

const Wrapper = ({children, title}) => {
    return(
        <html>
            <head>
                <title>{title}</title>
                <link rel="stylesheet" type="text/css" href="/styles.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/logs">Home Page</a></li>
                        <li><a href="/logs/new">Create page</a></li>
                    </ul>
                </nav>
                <h2>{title}</h2>
                { children }
            </body>
        </html>
    )
}

module.exports = Wrapper;