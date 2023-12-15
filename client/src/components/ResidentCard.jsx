import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

const ResidentCard = ({ url }) => {
  const [resident, getApiResident] = useFetch(url)

  useEffect(() => {
    getApiResident()
  }, [])

  return (
    <article className="ResidentCard">
      <header className="img_resident">
        <img src={resident?.image} alt="img resident" />
        <div className='resident_status'>
            <span className={`resident_circle ${resident?.status}`}></span>
            <span>{resident?.status}</span>
        </div>
      </header>
      <main className="info_resident">
        <h2 className="name_resident">
           {resident?.name}
        </h2>
        <ul className="data_resident">
          <li>
            <span>Specie: </span>
            {resident?.species}
          </li>
          <li>
            <span>Origin: </span>
            {resident?.origin.name}
          </li>
          <li>
            <span>Eppisodes where appear: </span>
            {resident?.episode.length}
          </li>
        </ul>
      </main>
    </article>
  )
}

export default ResidentCard
