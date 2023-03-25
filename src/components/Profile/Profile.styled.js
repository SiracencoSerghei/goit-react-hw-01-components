import styled from '@emotion/styled';

export const Profiler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  border: 2px solid green;
  border-radius: 8px;
  margin: 30px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px solid green;
  padding: 5px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  font-size: 18px;
  color: gray;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 10px;
  gap: 10px;
  border: 1px black;

  overflow: hidden;
  background-color: lightgray;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  margin: 10px;
  padding: 10px;
  flex: grow;
`;

export const Label = styled.span`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
