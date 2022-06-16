import React from "react";
import styled from "styled-components";
import Nav from "components/Nav";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "@mui/material";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: left;
  padding: 20px 40px;
  font-size: 40px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopButtom = styled.button`
  width: 12%;
  padding: 18px 20px;
  font-size: 15px;
  background-color: white;
  border-width: ${(props) => (props.type === "filled" ? "0px" : "1px")};
  background-color: ${(props) => props.type === "filled" && "#f9d7b9"};
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: white;
  border-width: ${(props) => (props.type === "filled" ? "0px" : "1px")};
  background-color: ${(props) => props.type === "filled" && "black"};
  color: ${(props) => props.type === "filled" && "white"};
  font-weight: bolder;
  font-size: 15px;
  margin: 5px 0px;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: #ddd8d8;
  margin: 10px 10px;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  padding: 40px;
  height: 50vh;
  width: 300px;
  border-style: solid;
  margin: 20px;
`;

const TopText = styled.div``;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Details = styled.div`
  padding: 60px 0px;
  flex-direction: column;

  display: flex;
  justify-content: space-around;
`;

const Img = styled.img`
  width: 200px;
  height: 270px;
  margin: 50px 50px;
  cursor: pointer;
`;

const Name = styled.span`
  padding: 10px;
`;

const ProductId = styled.span`
  padding: 10px;
`;

const Price = styled.span`
  flex: 1;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const ProductAmtContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  margin: 6px;
`;
const ProductPrice = styled.div`
  font-size: 24px;
`;

const SummaryTitle = styled.h1`
  font-weight: bold;
  font-size: 26px;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "400"};
  font-size: ${(props) => (props.type === "total" ? "20" : "15")};
`;

const SummaryText = styled.span``;

const SummaryPrice = styled.span``;

function Cart() {
  return (
    <Container>
      <Wrapper>
        <Title>Shopping Cart</Title>
        <Top>
          {/* <TopButtom>Continue Shopping</TopButtom> */}
          <TopText>
            <Text>Shopping Bag</Text>
            <Text>Wish List</Text>
          </TopText>
          {/* <TopButtom type='filled'>Checkout</TopButtom> */}
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Img src="https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80" />
                <Details>
                  <Name>
                    <Link href={"#"} underline="hover" color={"black"}>
                      <b>Plant 1</b>
                    </Link>
                  </Name>
                  <ProductId>#12315,Stock # or Desc here</ProductId>
                  <ProductId>$9.99</ProductId>
                </Details>
              </ProductDetail>
              <Price>
                <ProductAmtContainer>
                  <RemoveIcon />
                  <ProductAmount>1</ProductAmount>
                  <AddIcon />
                  {/* <ProductPrice> $139.99</ProductPrice> */}
                </ProductAmtContainer>
              </Price>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Img src="https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80" />
                <Details>
                  <Name>
                    <b>Plant 2</b>
                  </Name>
                  <ProductId>#00962,Stock # or Desc here</ProductId>
                  <ProductId>$1.99</ProductId>
                </Details>
              </ProductDetail>
              <Price>
                <ProductAmtContainer>
                  <RemoveIcon />
                  <ProductAmount>2</ProductAmount>
                  <AddIcon />
                  {/* <ProductPrice> $139.99</ProductPrice> */}
                </ProductAmtContainer>
              </Price>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Img src="https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80" />
                <Details>
                  <Name>
                    <b>Plant 3</b>
                  </Name>
                  <ProductId>#12005,Stock # or Desc here</ProductId>
                  <ProductId>$7.99</ProductId>
                </Details>
              </ProductDetail>
              <Price>
                <ProductAmtContainer>
                  <RemoveIcon />
                  <ProductAmount>1</ProductAmount>
                  <AddIcon />
                  {/* <ProductPrice> $139.99</ProductPrice> */}
                </ProductAmtContainer>
              </Price>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>$13.27</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Tax estimate</SummaryText>
              <SummaryPrice>$2.45</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Shipping estimate</SummaryText>
              <SummaryPrice>$9.99</SummaryPrice>
            </SummaryItem>
            <Hr />
            <SummaryItem type="total">
              <SummaryText>
                <b>Total estimate</b>
              </SummaryText>
              <SummaryPrice>
                <b>$18.15</b>
              </SummaryPrice>
            </SummaryItem>
            <Button type="filled">
              <Link href={"/checkout"} underline="hover" color={"white"}>
                Checkout Now
              </Link>
            </Button>
            <Button>
              <Link href={"/"} underline="none" color={"black"}>
                Continue Shopping
              </Link>
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default Cart;
