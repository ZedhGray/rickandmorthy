const Locationinfo = ({ location }) => {
  console.log(location)
  return (
    <article className="Card">
      <h2>{location?.name}</h2>
      <ul>
        <li>
          <span>Type: </span>
          {location?.type}
        </li>
        <li>
          <span>Dimension: </span>
          {location?.dimension}
        </li>
        <li>
          <span>Population: </span>
          {location?.residents?.length}
        </li>
      </ul>
    </article>
  )
}

export default Locationinfo
