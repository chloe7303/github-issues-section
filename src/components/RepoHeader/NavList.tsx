import styled from 'styled-components';
import {
  CodeIcon,
  IssueOpenedIcon,
  GitPullRequestIcon,
  PlayIcon,
  TableIcon,
  BookIcon,
  ShieldIcon,
  GraphIcon,
  GearIcon,
  KebabHorizontalIcon,
} from '@primer/octicons-react';

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const List = styled.div`
  display: flex;
`;

const Item = styled.li`
  font-size: 14px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  ${({ active }) => active && 'border-bottom: 2px solid #fd8c73'};
  ${({ active }) => active && 'font-weight: 600'};
  @media screen and (max-width: 1011px) {
    ${({ index }) => index! > 2 && 'display: none'};
  }
`;

const Text = styled.span`
  margin-left: 8px;
`;

const More = styled(KebabHorizontalIcon)`
  display: none !important;
  @media screen and (max-width: 1011px) {
    display: block !important;
  }
`;

const lists = [
  { text: 'Code', icon: <CodeIcon /> },
  { text: 'Issues', icon: <IssueOpenedIcon />, active: true },
  { text: 'Pull requests', icon: <GitPullRequestIcon /> },
  { text: 'Actions', icon: <PlayIcon /> },
  { text: 'Projects', icon: <TableIcon /> },
  { text: 'Wiki', icon: <BookIcon /> },
  { text: 'Security', icon: <ShieldIcon /> },
  { text: 'Insights', icon: <GraphIcon /> },
  { text: 'Settings', icon: <GearIcon /> },
];

const NavList = () => {
  return (
    <Wrapper>
      <List>
        {lists.map((list, index) => (
          <Item key={index} active={list.active} index={index}>
            {list.icon}
            <Text>{list.text}</Text>
          </Item>
        ))}
      </List>
      <More />
    </Wrapper>
  );
};

export default NavList;