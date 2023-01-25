import React from "react";
import styled from "styled-components";

const Partner = () => {
  return (
    <FlexBox>
      <PartnerUl>
        <PartnerLi>
          <PartnerImg></PartnerImg>
          <PartnerInfo>
            <span>이름:</span>
            <span>나이:</span>
            <span>성별:</span>
          </PartnerInfo>
        </PartnerLi>
        <PartnerLi>
          <PartnerImg></PartnerImg>
          <PartnerInfo>
            <span>이름:</span>
            <span>나이:</span>
            <span>성별:</span>
          </PartnerInfo>
        </PartnerLi>
        <PartnerLi>
          <PartnerImg></PartnerImg>
          <PartnerInfo>
            <span>이름:</span>
            <span>나이:</span>
            <span>성별:</span>
          </PartnerInfo>
        </PartnerLi>
        <PartnerLi>
          <PartnerImg></PartnerImg>
          <PartnerInfo>
            <span>이름:</span>
            <span>나이:</span>
            <span>성별:</span>
          </PartnerInfo>
        </PartnerLi>
      </PartnerUl>
    </FlexBox>
  );
};

export default Partner;

const FlexBox = styled.div`
  width: 100%;
  height: 700px;
  background-color: white;
  display: flex;
`;

const PartnerUl = styled.ul`
  width: 90%;
  height: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PartnerLi = styled.li`
  width: 70%;
  height: 100px;
  list-style: none;
  margin: 20px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #ffe1e1;
  display: flex;
  justify-content: space-around;
`;

const PartnerImg = styled.div`
  width: 40%;
  height: 80px;
  background-color: #f9f2f2;
  border-radius: 50%;
`;

const PartnerInfo = styled.div`
  width: 40%;
  height: 80px;
  background-color: #ffe1e1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

