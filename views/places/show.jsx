const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>Rated</h2>
            <p>Not Rated</p>
            <img src={data.place.pic} alt="restaurant pic" />
            <h2>Description</h2>
            <p>{data.place.city}{data.place.state}</p>
            <p>{data.place.cuisines}</p>
            <h2>Comments</h2>
            <p>No comments yet</p>
          </main>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     

<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 
   

        </Def>
    )
}

module.exports = show
