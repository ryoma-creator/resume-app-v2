// src/components/common/DownloadButton.js
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #2c5282;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(44, 82, 130, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background: #2a4975;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(44, 82, 130, 0.4);
  }

  @media print {
    display: none;
  }
`;

export default function DownloadButton({ onDownload }) {
  return (
    <Button onClick={onDownload}>
      📄 PDFダウンロード
    </Button>
  );
}