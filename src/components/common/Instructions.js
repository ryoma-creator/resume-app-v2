// src/components/common/Instructions.js
import React from 'react';
import styled from 'styled-components';

const InstructionsContainer = styled.div`
  position: fixed;
  top: 80px;
  right: 20px;
  background: white;
  border: 2px solid #2c5282;
  border-radius: 8px;
  padding: 15px;
  font-size: 12px;
  max-width: 250px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 1000;

  @media print {
    display: none;
  }
`;

export default function Instructions({ activeTab }) {
  return (
    <InstructionsContainer>
      <strong>📋 PDFダウンロード手順:</strong>
      <br />
      1. 「PDFダウンロード」ボタンをクリック
      <br />
      2. 印刷画面で「送信先」→「PDFに保存」を選択
      <br />
      3. ファイル名を設定して保存
      <br />
      <small>※現在表示中: {activeTab === 'rirekisho' ? '履歴書' : '職務経歴書'}</small>
    </InstructionsContainer>
  );
}