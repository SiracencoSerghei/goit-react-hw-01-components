
import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar } from './FriendStyles';

const Friend = ({ id, isOnline, avatar, name }) => {
    return (
        <FriendItem key={id}>
            <Status isOnline={isOnline} />
            <Avatar isOnline={isOnline} src={avatar} alt="User avatar" />
            <p className="name">{name}</p>
        </FriendItem>
    );
};

Friend.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Friend;