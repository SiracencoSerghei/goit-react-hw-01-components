import React from 'react';
import Profile from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import FriendsList from './FriendList/FriendsList';
import TransactionHistory from './Transactions/Transaction';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './Transactions/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh', // error in hw task
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
         margin: 30
      }}
    >
      
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics
        title="Upload stats" stats={data} />
      
      <FriendsList friends={friends} />

      {/* <TransactionHistory items={transactions} />; */}
      
    </div>
  );
};
