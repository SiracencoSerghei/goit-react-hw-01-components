
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

{/* <ul class="friend-list">

    <!-- Произвольное кол-во FriendListItem -->
</ul> */}

{/* <li class="item">
    <span class="status"></span>
    <img class="avatar" src="" alt="User avatar" width="48" />
    <p class="name"></p>
</li> */}