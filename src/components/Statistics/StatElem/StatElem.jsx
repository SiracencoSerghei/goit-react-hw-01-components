import PropTypes from 'prop-types';
import getRandomColor from 'utils/getRandomColor';
import css from './Statistics.module.css';

const StatElem = (stats) => {
    return(
    stats.map(({ label, percentage, id }) => (
        <li
            style={{ backgroundColor: getRandomColor() }}
            className={css.item}
            key={id}
        >
            <span>{label}</span>
            <
span>{percentage}%</span>
        </li>)))
};

StatElem.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number, 
        })
    )
}
export default StatElem;
