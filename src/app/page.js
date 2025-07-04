'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import Rirekisho from '../components/Rirekisho';
import ShokumuKeireki from '../components/ShokumuKeireki';

const MainContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`;

const DownloadSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const BigDownloadButton = styled.button`
  padding: 30px 50px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  min-width: 300px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  overflow: hidden;

  &:active {
    transform: translateY(3px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: translateY(3px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const PinkButton = styled(BigDownloadButton)`
  background: linear-gradient(135deg, #ff6b9d, #ff8fab);

  &:hover {
    background: linear-gradient(135deg, #ff5a8a, #ff7e98);
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(255,107,157,0.3);
  }
`;

const BlueButton = styled(BigDownloadButton)`
  background: linear-gradient(135deg, #74b9ff, #0984e3);

  &:hover {
    background: linear-gradient(135deg, #5faef7, #0770c4);
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(116,185,255,0.3);
  }
`;

const ButtonIcon = styled.div`
  font-size: 2rem;
`;

const ButtonText = styled.div`
  font-size: 1.3rem;
`;

const HomeButton = styled.button`
  padding: 10px 20px;
  background: #74b9ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 20px auto;
  display: block;
  
  &:hover {
    background: #5faef7;
  }
`;

const PrintButton = styled.button`
  padding: 12px 25px;
  background: #00b894;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 10px;
  
  &:hover {
    background: #00a085;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
`;

export default function DocumentViewer() {
  const [activeTab, setActiveTab] = useState('download');
  const [downloadingRirekisho, setDownloadingRirekisho] = useState(false);
  const [downloadingShokumu, setDownloadingShokumu] = useState(false);

  // 基本印刷CSS（共通）
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        /* 全ての不要要素を非表示 */
        .no-print,
        .no-print-button,
        button,
        nav,
        header,
        footer,
        [role="button"] {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          width: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
        }
        
        /* ページ余白設定 */
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        
        /* Next.js開発時の要素を非表示 */
        #__next-build-watcher,
        [data-nextjs-scroll-focus-boundary] {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleDownloadRirekisho = async () => {
    setDownloadingRirekisho(true);
    setActiveTab('rirekisho');

    // 履歴書専用の印刷設定（A3横向き）
    const printStyle = document.createElement('style');
    printStyle.id = 'rirekisho-print-style';
    printStyle.textContent = `
      @media print {
        @page { 
          size: A3 landscape !important; 
          margin: 0 !important; 
        }
        
        body {
          margin: 0 !important;
          padding: 0 !important;
          zoom: 1 !important;
        }
      }
    `;
    document.head.appendChild(printStyle);

    // ドキュメントタイトルを変更
    const originalTitle = document.title;
    document.title = '履歴書_田口龍馬';

    setTimeout(() => {
      window.print();
      document.title = originalTitle;
      
      // 印刷用スタイルを削除
      const styleElement = document.getElementById('rirekisho-print-style');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
      
      setDownloadingRirekisho(false);
    }, 1000);
  };

  const handleDownloadShokumu = async () => {
    setDownloadingShokumu(true);
    setActiveTab('shokumu');

    // 職務経歴書専用の印刷設定（A4縦向き）
    const printStyle = document.createElement('style');
    printStyle.id = 'shokumu-print-style';
    printStyle.textContent = `
      @media print {
        @page { 
          size: A4 portrait !important; 
          margin: 0 !important; 
        }
        
        body {
          margin: 0 !important;
          padding: 0 !important;
          zoom: 1 !important;
        }
        
        /* ページ区切り制御 */
        .page-break-before {
          page-break-before: always !important;
          margin-top: 0 !important;
        }
        
        .page-break-avoid {
          page-break-inside: avoid !important;
        }
      }
    `;
    document.head.appendChild(printStyle);

    // ドキュメントタイトルを変更
    const originalTitle = document.title;
    document.title = '職務経歴書_田口龍馬';

    setTimeout(() => {
      window.print();
      document.title = originalTitle;
      
      // 印刷用スタイルを削除
      const styleElement = document.getElementById('shokumu-print-style');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
      
      setDownloadingShokumu(false);
    }, 1000);
  };

  // 再印刷機能
  const handleReprintRirekisho = () => {
    // 履歴書専用の印刷設定（A3横向き）
    const printStyle = document.createElement('style');
    printStyle.id = 'rirekisho-reprint-style';
    printStyle.textContent = `
      @media print {
        @page { 
          size: A3 landscape !important; 
          margin: 0 !important; 
        }
        
        body {
          margin: 0 !important;
          padding: 0 !important;
          zoom: 1 !important;
        }
      }
    `;
    document.head.appendChild(printStyle);

    const originalTitle = document.title;
    document.title = '履歴書_田口龍馬';

    window.print();
    
    document.title = originalTitle;
    const styleElement = document.getElementById('rirekisho-reprint-style');
    if (styleElement) {
      document.head.removeChild(styleElement);
    }
  };

  const handleReprintShokumu = () => {
    // 職務経歴書専用の印刷設定（A4縦向き）
    const printStyle = document.createElement('style');
    printStyle.id = 'shokumu-reprint-style';
    printStyle.textContent = `
      @media print {
        @page { 
          size: A4 portrait !important; 
          margin: 0 !important; 
        }
        
        body {
          margin: 0 !important;
          padding: 0 !important;
          zoom: 1 !important;
        }
        
        /* ページ区切り制御 */
        .page-break-before {
          page-break-before: always !important;
          margin-top: 0 !important;
        }
        
        .page-break-avoid {
          page-break-inside: avoid !important;
        }
      }
    `;
    document.head.appendChild(printStyle);

    const originalTitle = document.title;
    document.title = '職務経歴書_田口龍馬';

    window.print();
    
    document.title = originalTitle;
    const styleElement = document.getElementById('shokumu-reprint-style');
    if (styleElement) {
      document.head.removeChild(styleElement);
    }
  };

  if (activeTab === 'download') {
    return (
      <MainContainer>
        <DownloadSection>
          <Title>田口龍馬 応募書類</Title>
          <Subtitle>ダウンロードしたい書類を選択してください</Subtitle>

          <ButtonContainer>
            <PinkButton 
              onClick={handleDownloadRirekisho}
              disabled={downloadingRirekisho}
            >
              <ButtonIcon>📄</ButtonIcon>
              <ButtonText>
                {downloadingRirekisho ? 'ダウンロード中...' : '履歴書ダウンロード'}
              </ButtonText>
            </PinkButton>

            <BlueButton 
              onClick={handleDownloadShokumu}
              disabled={downloadingShokumu}
            >
              <ButtonIcon>📋</ButtonIcon>
              <ButtonText>
                {downloadingShokumu ? 'ダウンロード中...' : '職務経歴書ダウンロード'}
              </ButtonText>
            </BlueButton>
          </ButtonContainer>

          <div style={{marginTop: '40px', textAlign: 'center', color: '#666'}}>
            <p>プレビューを確認したい場合は、ボタンをクリック後に表示されます</p>
            <p style={{fontSize: '0.9rem', marginTop: '10px', fontWeight: 'bold', color: '#e74c3c'}}>
              📌 印刷時は必ずブラウザの「ヘッダーとフッター」設定をOFFにしてください
            </p>
            <p style={{fontSize: '0.8rem', marginTop: '5px', color: '#7f8c8d'}}>
              Chrome/Edge/Safari: 印刷ダイアログ → 詳細設定 → 「ヘッダーとフッター」のチェックを外す
            </p>
          </div>
        </DownloadSection>
      </MainContainer>
    );
  }

  return (
    <div>
      {/* ホームへ戻るボタンと印刷ボタン - 印刷時は非表示 */}
      <div className="no-print">
        <ButtonGroup>
          <HomeButton onClick={() => setActiveTab('download')}>
            🏠 ホームへ戻る
          </HomeButton>
          <PrintButton onClick={activeTab === 'rirekisho' ? handleReprintRirekisho : handleReprintShokumu}>
            🖨️ 印刷
          </PrintButton>
        </ButtonGroup>
      </div>

      {activeTab === 'rirekisho' ? <Rirekisho /> : <ShokumuKeireki />}
    </div>
  );
}