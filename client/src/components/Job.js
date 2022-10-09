import moment from "moment"

const Job = ({ company, createAt }) => {
  let date = moment(createAt)
  date = date.format("MMM Do, YYYY")
  return (
    <div>
      <h5>{company}</h5>
      <h5>{date}</h5>
    </div>
  )
}
export default Job
