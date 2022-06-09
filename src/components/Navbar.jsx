import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";

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
// const Language = styled.span`
//     font-size: 15px;
//     cursor: pointer;
// `
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
            <Menuitem>Shop</Menuitem>
            <Menuitem>Sale</Menuitem>
            <Menuitem>About Us</Menuitem>
          </Left>

          <Center>
            <Logo>Whale Succulent</Logo>
          </Center>
          <Right>
            <SearchContainer>
              <Input />
              <SearchIcon style={{ color: "gray", fontSize: 15 }} />
            </SearchContainer>
            <Menuitem>
              <Link href={"/login"} underline="none" color={"black"}>
                Sign In
              </Link>
            </Menuitem>

            <Menuitem>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Menuitem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Navbar;
