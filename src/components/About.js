import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p>Just a very simple react app to begin my journey</p>
            <Link to="/">
                Go Back
            </Link>
        </div>
    )
}

export default About
