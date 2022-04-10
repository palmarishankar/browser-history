import './index.css'

const BrowserHistory = props => {
  const {historyList, onDeleteApp} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList
  console.log(historyList)
  const onDelete = () => {
    onDeleteApp(id)
  }
  return (
    <li className="history-list-container">
      <div className="app-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt={title} className="logo-url" />
        <p className="title">{title}</p>
        <p className="domain-name">{domainUrl}</p>
      </div>
      <button type="button" className="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
