import { useAppContext } from "../context/appContext"
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi"
import Wrapper from "../assets/wrappers/PageBtnContainer"

const PageBtnContainer = () => {
  const { page, numOfPages } = useAppContext()

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1
  })

  const prevPage = () => {
    console.log("prev page")
  }

  const nextPage = () => {
    console.log("next page")
  }

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>

      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              key={pageNumber}
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              onClick={() => {
                console.log(pageNumber)
              }}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>

      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  )
}
export default PageBtnContainer
