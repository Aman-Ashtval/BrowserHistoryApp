import {Component} from 'react'
import './index.css'

class BrowserHistory extends Component {
  render() {
    const {historyObj, deleteHistory} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = historyObj

    const onDelete = () => {
      deleteHistory(id)
    }

    return (
      <li className="item">
        <p className="p">{timeAccessed}</p>
        <div className="item-status-container">
          <div className="item-logo-container">
            <img src={logoUrl} alt="domain logo" className="item-logo-image" />
            <p className="item-title">{title}</p>
            <p className="item-title spn">{domainUrl}</p>
          </div>
          <button
            type="button"
            className="delete-btn"
            onClick={onDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-image"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default BrowserHistory
