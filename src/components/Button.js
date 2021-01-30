import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    
    return ( 
        <button onClick={onClick} className="btn" style={{backgroundColor: color, transition: '0.5s ease'}}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Add'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
}

export default Button
