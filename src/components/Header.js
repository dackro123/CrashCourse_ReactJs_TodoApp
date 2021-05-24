import Button from './Button'
import { useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (<Button color={showAdd ? '#f44336' : '#4caf50'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />)}
    </header>
  )
}

Header.defaultProps = {
  title: "I'm a Yordel"
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header
