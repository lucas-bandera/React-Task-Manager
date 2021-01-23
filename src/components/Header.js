import PropTypes from 'prop-types'

import Button from './Button'


function Header({ title }) {
    const handleClick = () => {
        console.log('your click has been handled')
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" onClick={handleClick} />
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
