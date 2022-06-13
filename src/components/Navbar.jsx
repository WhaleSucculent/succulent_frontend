import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Container = styled.div`
  height: 10px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-right: 1px;
`;

const Input = styled.input`
  border: none;
  width: 80px;
`;
const Logo = styled.h1`
  font-weight: lighter;
  font-size: 30px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  justify-content: center;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Menuitem = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin-left: 30px;
  text-decoration: none;
`;
function Navbar() {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <NavLink to={'/products'}>
              <Menuitem>Succulents</Menuitem>
            </NavLink>
            <Menuitem>Soils</Menuitem>
            <Menuitem>Pots</Menuitem>
            <Menuitem>Grow lights</Menuitem>
          </Left>

          <Center>
            <Link to={'/'}>
              <Logo>Whale Succulent</Logo>
            </Link>
          </Center>
          <Right>
            <SearchContainer>
              <Input />
              <SearchIcon style={{ color: "gray", fontSize: 15 }} />
            </SearchContainer>
            <NavLink to={'/login'} underline="none" color={'black'}>
              <Menuitem>Sign In</Menuitem>
            </NavLink>
            <NavLink to={'/checkout'}>
              <Menuitem>
                <Badge badgeContent={2} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Menuitem>
            </NavLink>
          </Right>
        </Wrapper>
      </Container>
      <Outlet />
    </div>
  );
}

export default Navbar;
