// src/components/common/TabNavigation.js
import React from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;

  @media print {
    display: none;
  }
`;

const Tab = styled.button`
  background: ${props => props.active ? '#2c5282' : 'white'};
  color: ${props => props.active ? 'white' : '#2c5282'};
  border: 2px solid #2c5282;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: ${props => props.active ? '#2c5282' : '#f0f4f8'};
  }
`;

export default function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <TabContainer>
      <Tab 
        active={activeTab === 'rirekisho'} 
        onClick={() => setActiveTab('rirekisho')}
      >
        📄 履歴書
      </Tab>
      <Tab 
        active={activeTab === 'shokumu'} 
        onClick={() => setActiveTab('shokumu')}
      >
        📋 職務経歴書
      </Tab>
    </TabContainer>
  );
}