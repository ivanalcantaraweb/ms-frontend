import {Link} from 'react-router-dom'

const AboutButton = () => {
    return(
        <Link className="p-4 flex hover:text-blue-500" to="/about"> 
                About 
        </Link>
    )
}

export default AboutButton;