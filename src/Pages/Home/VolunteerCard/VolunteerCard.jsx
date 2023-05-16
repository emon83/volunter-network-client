import { Link } from 'react-router-dom';
import './VolunteerCard.css'

const VolunteerCard = ({volunteer}) => {
    //console.log(volunteer);
    const {_id ,img, title} = volunteer;
    return (
        <div className="volunteer-card">
            <img src={img} alt="" />
            <div className='-mt-16 text-bg'>
                <Link to={`/volunteer/${_id}`}>
                <h2 className='text-xl font-bold text-center mt-2 text-white'>{title}</h2>
                </Link>
            </div>
        </div>
    );
};

export default VolunteerCard;