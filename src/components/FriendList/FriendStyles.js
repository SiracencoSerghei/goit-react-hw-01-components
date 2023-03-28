import styled from '@emotion/styled';

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  border: 2px solid green;
  border-radius: 8px;
  padding: 30px;
  margin: 30px;
  background-color: aliceblue;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Avatar = styled.img`
  width: 48px;
  padding: 15px;
  margin-right: 10px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
  
`;
