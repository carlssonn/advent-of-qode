import styled from 'styled-components';

export const Body = styled.div`
  text-align: center;
  color: #666666;
`;

export const Header = styled.header`
  background-color: #0f0f23;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 1.5vmin);
  text-decoration: none;
  color: #009900;
  margin-left: 20px;
`;

export const Link = styled.a`
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: inherit;
  &:hover {
    background-color: #1e1e46;
    background-color: rgba(119, 119, 165, 0.2);
    cursor: pointer;
  }
  &:visited {
    text-decoration: none;
    color: inherit;
  }
`;
