import React from 'react';
import styled from 'styled-components';

const Survey = () => {
  return (
    <SurveyContainer>
      <SurveyQuestionBox>
        <SurveyQuestionText>Q. 당신은 술을 좋아합니까?</SurveyQuestionText>
      </SurveyQuestionBox>
      <SurveyAnswerBox>
        <SurveySelectBox>
          <SurveySelectText>Yes</SurveySelectText>
        </SurveySelectBox>
        <SurveySelectBox>
          <SurveySelectText>No</SurveySelectText>
        </SurveySelectBox>
        <SurveyQuestionText></SurveyQuestionText>
      </SurveyAnswerBox>
    </SurveyContainer>
  );
};

export default Survey;

const SurveyContainer = styled.div`
  width: 100%;
`;

const SurveyQuestionBox = styled.div`
  width: 80%;
  height: 100px;
  background-color: #f94772;
`;

const SurveyQuestionText = styled.h2`
  font-weight: 100%;
  color: white;
`;

const SurveyAnswerBox = styled.div`
  width: 80%;
  height: 400px;
  background-color: #ffe1e1;
`;

const SurveySelectBox = styled.div`
  width: 10%;
  height: 15%;
  background-color: #fa8033;
`;

const SurveySelectText = styled.h3`
  font-weight: 100%;
  color: white;
`;
