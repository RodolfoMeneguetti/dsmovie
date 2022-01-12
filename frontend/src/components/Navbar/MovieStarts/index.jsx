import{ReactComponent as StarFull } from 'Assets/img/start_full.svg';
import{ReactComponent as StarHalf } from 'Assets/img/start_half.svg';
import{ReactComponent as StarEmpty } from 'Assets/img/start_empity.svg';
import './styles.css';

function MovieStarts() {
    return (

        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStarts;