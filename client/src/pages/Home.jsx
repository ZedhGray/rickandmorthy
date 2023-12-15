import { useEffect, useState } from 'react'
import getRandomNumber from '../utils/getRandomNumber'
import FormSearch from '../components/FormSearch'
import Locationinfo from '../components/LocationInfo'
import ResidentCard from '../components/ResidentCard'
import ErrorCard from '../components/ErrorCard'
import useFetch from '../hooks/useFetch'
import ThreeD from '../components/3D/ThreeD'

const Home = () => {
  const randomId = getRandomNumber(126)
  const [idLocation, setIdLocation] = useState(randomId)
  const [inputError, setInputError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(4)
  const [residents, setResidents] = useState([])

  const totalPages = Math.ceil(residents.length / cardsPerPage)

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`

  const [location, getApiLocation, hasError] = useFetch(url)

  useEffect(() => {
    if (idLocation) {
      getApiLocation()
      setInputError(false)
    } else {
      setInputError(true)
    }
  }, [idLocation])

  useEffect(() => {
    if (location && location.residents) {
      setResidents(location.residents)
    }
  }, [location])

  const nextPage = () => setCurrentPage((prev) => prev + 1)
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))

  const currentCards = residents.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  )
  return (
    <div className="Home">
      <div className="spaceheader"></div>
      <ThreeD />
      <main>
        <div className="container_form">
          <FormSearch
            setIdLocation={setIdLocation}
            handleEmptyInput={() => setInputError(true)}
          />
          {inputError ? (
            <ErrorCard />
          ) : hasError ? (
            <ErrorCard />
          ) : (
            <main>
              <div className="container_loc">
                <h2>Location</h2>
                <div className="location">
                  <Locationinfo location={location} />
                </div>
              </div>
              <div className="residents_text">
                <h2 className="residents_h2">Residents</h2>
              </div>
              {/** Buttons */}
              <div className="containet_buttons">
                {residents.length > cardsPerPage && (
                  <div className="residents_buttons">
                    <button onClick={prevPage} disabled={currentPage === 1}>
                      Previous
                    </button>
                    <button
                      onClick={nextPage}
                      disabled={residents.length <= currentPage * cardsPerPage}
                    >
                      Next
                    </button>
                  </div>
                )}
                <div className="num_pages">
                  {totalPages > 1 && (
                    <div>
                      Page {currentPage} of {totalPages}
                    </div>
                  )}
                </div>
              </div>

              <div className="resident-container">
                {currentCards.map((url) => (
                  <ResidentCard url={url} key={url} />
                ))}
              </div>
            </main>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home
