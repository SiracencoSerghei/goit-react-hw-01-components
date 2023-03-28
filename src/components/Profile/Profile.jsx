import PropTypes from 'prop-types';
import { Profiler, Avatar, Name, Tag, Location, Description, Label, Quantity, Stats, Stat } from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {        
    // console.log({ username, tag, location, avatar, stats });
    return (
        <Profiler>
            <Description>
                <Avatar
                    src={avatar}
                    alt='User avatar'
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <Stat>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </Stat>
                <Stat>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </Stat>
                <Stat>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </Stat>
            </Stats>
        </Profiler>

        // <div class="profile">
        //     <div class="description">
        //         <img
        //             src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        //             alt="User avatar"
        //             class="avatar"
        //         />
        //         <p class="name">Petra Marica</p>
        //         <p class="tag">@pmarica</p>
        //         <p class="location">Salvador, Brasil</p>
        //     </div>

        //     <ul class="stats">
        //         <li>
        //             <span class="label">Followers</span>
        //             <span class="quantity">1000</span>
        //         </li>
        //         <li>
        //             <span class="label">Views</span>
        //             <span class="quantity">2000</span>
        //         </li>
        //         <li>
        //             <span class="label">Likes</span>
        //             <span class="quantity">3000</span>
        //         </li>
        //     </ul>
        // </div>
    )

}
Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape(
        {
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
        })
};
