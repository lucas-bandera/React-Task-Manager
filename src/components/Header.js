import PropTypes from 'prop-types'
import Button from './Button'

import { useLocation } from "react-router-dom";


function Header({ title, onAdd, showAdd }) {
    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>
            { location.pathname === "/" && <Button color={showAdd ? 'green' : 'red'} text={showAdd ? 'Add' : 'Close'} onClick={onAdd} />}
        </header>
    )
}

// CSS in JS
// const styles = {
//     header: {
//         color: '#7159c1'
//     }
// }

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Header
