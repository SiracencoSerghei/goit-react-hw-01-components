
import PropTypes from 'prop-types';
import Friend from './FriendItem';
import { FriendsList } from './FriendStyles';

const Friends = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(friend => (
                <Friend key={friend.id} {...friend} />
            ))}
        </FriendsList>
    );
};

Friends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default Friends;