
import PropTypes from 'prop-types';
import Friend from './FriendItem';
import { FriendsList } from './FriendStyles';

const Friends = ({ friends }) => {
    return (
        <FriendsList>
            {/* {friends
                .filter(friend => friend.isOnline) // Фильтрация только друзей онлайн
                .map(friend => <Friend key={friend.id} {...friend} />) // Отображение друзей онлайн
            }
            {friends
                .filter(friend => !friend.isOnline) // Фильтрация друзей офлайн
                .map(friend => <Friend key={friend.id} {...friend} />) // Отображение друзей офлайн
            } */}
            {friends
                .sort((a, b) => (a.isOnline === b.isOnline ? 0 : a.isOnline ? -1 : 1)) // Сортировка друзей: сначала онлайн, затем остальные
                .map(friend => (
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