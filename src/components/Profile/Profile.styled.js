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
  background-color: aliceblue;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
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
  padding: 0;
  width: 100%;
  border: 1px black;
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  background-color: lightgray;
`;

export const Stat = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  padding: 10px;
`;

export const Label = styled.span`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-size: 24px;
  font-weight: bold;
`;