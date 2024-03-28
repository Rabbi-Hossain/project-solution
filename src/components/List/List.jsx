
import PropTypes from 'prop-types';

const List = ({route}) => {
    

    return (
        <div>
            <li className="mr-3">
                <a href={route.path}>{route.name}</a></li>
        </div>
    );
};

List.propTypes = {
    route: PropTypes.object
}

export default List;