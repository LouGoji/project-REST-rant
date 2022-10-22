const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="/images/fries-is-served.jpg" alt="Fries" />
                <div> Photo by <a href="AUTHOR_LINK">Lucas Andrade</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
              </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
