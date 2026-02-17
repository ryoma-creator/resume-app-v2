// src/components/Rirekisho.js
import React from 'react';
import styled from 'styled-components';

const RirekishoContainer = styled.div`
  width: 420mm;
  height: 297mm;
  margin: 0 auto;
  padding: 6mm;
  background: white;
  font-family: 'Noto Sans JP', 'MS PGothic', sans-serif;
  font-size: 10pt;
  line-height: 1.2;
  color: #000;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  @media print {
    box-shadow: none;
    margin: 0;
    padding: 5mm;
    width: 420mm;
    height: 297mm;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 16pt;
  font-weight: bold;
  margin: 0 0 4mm 0;
  letter-spacing: 4px;
`;

const DateLine = styled.div`
  text-align: right;
  margin-bottom: 4mm;
  font-size: 10pt;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  gap: 4mm;
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// テーブル共通スタイル
const BaseTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 3mm;
  
  th, td {
    border: 1px solid #000;
    padding: 2mm;
    vertical-align: top;
    font-size: 9pt;
  }
  
  th {
    background: #f5f5f5;
    font-weight: bold;
    text-align: center;
  }
`;

// 基本情報テーブル
const InfoTable = styled(BaseTable)`
  td {
    font-size: 9pt;
  }
`;

const LabelCell = styled.td`
  background: #f5f5f5;
  font-weight: bold;
  text-align: center;
  width: 15%;
  font-size: 8pt;
`;

const NameCell = styled.td`
  font-size: 12pt;
  font-weight: bold;
`;

const PhotoCell = styled.td`
  width: 35mm;
  height: 40mm;
  text-align: center;
  vertical-align: middle;
  background: #f8f8f8;
  font-size: 7pt;
  line-height: 1.1;
  padding: 2mm;
  border: 1px solid #000;
`;

// 学歴職歴テーブル
const CareerTable = styled(BaseTable)`
  flex: 1;
  
  th, td {
    font-size: 9pt;
  }
`;

const YearCell = styled.td`
  width: 12%;
  text-align: center;
  font-size: 8pt;
`;

const MonthCell = styled.td`
  width: 8%;
  text-align: center;
  font-size: 8pt;
`;

const ContentCell = styled.td`
  font-size: 9pt;
  line-height: 1.2;
`;

// 資格テーブル
const QualificationTable = styled(BaseTable)`
  th, td {
    font-size: 9pt;
  }
`;

// 志望動機テーブル
const MotivationTable = styled(BaseTable)`
  flex: 1;
  
  th, td {
    font-size: 9pt;
  }
`;

// 希望欄テーブル
const RequestTable = styled(BaseTable)`
  th, td {
    font-size: 9pt;
  }
`;

export default function Rirekisho() {
  return (
    <RirekishoContainer>
      <Title>履　歴　書</Title>
      
      <DateLine>
        2026年　2月　17日現在
      </DateLine>

      <MainContent>
        {/* 左列 */}
        <LeftColumn>
          {/* 基本情報 */}
          <InfoTable>
            <tbody>
              <tr>
                <LabelCell>ふりがな</LabelCell>
                <td style={{width: '35%'}}>たぐち　りょうま</td>
                <LabelCell>※性別</LabelCell>
                <td style={{width: '20%'}}>男</td>
                <PhotoCell rowSpan="5" style={{padding: 0}}>
                    <img 
                      src="https://res.cloudinary.com/dptxzcxot/image/upload/v1740218108/PROFILE_PIC_ORIGINAL__pnllgi.png" 
                      alt="証明写真"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        border: 'none'
                      }}
                    />
                </PhotoCell>
              </tr>
              <tr>
                <LabelCell>氏　名</LabelCell>
                <NameCell>田口　龍馬</NameCell>
                <td colSpan="2" style={{fontSize: '7pt', color: '#666'}}>
                  ※記載は任意です
                </td>
              </tr>
              <tr>
                <LabelCell>生年月日</LabelCell>
                <td colSpan="3">1988年　11月　13日生　（満37歳）</td>
              </tr>
              <tr>
                <LabelCell>ふりがな</LabelCell>
                <td colSpan="3" style={{fontSize: '8pt'}}>
                  〒220-0074　神奈川県横浜市西区南浅間町33-9
                </td>
              </tr>
              <tr>
                <LabelCell>現住所</LabelCell>
                <td colSpan="3" style={{fontSize: '8pt'}}>
                  現在海外滞在中
                </td>
              </tr>
              <tr>
                <LabelCell>電話</LabelCell>
                <td>+63-935-981-8031</td>
                <td colSpan="3" style={{fontSize: '8pt', color: '#666'}}>
                  （現住所以外に連絡希望の場合のみ）
                </td>
              </tr>

            </tbody>
          </InfoTable>

          {/* 学歴・職歴 */}
          <CareerTable>
            <thead>
              <tr>
                <th>年</th>
                <th>月</th>
                <th>学歴・職歴（各別にまとめて書く）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{paddingTop: '3mm', paddingBottom: '3mm'}}></td>
                <td style={{paddingTop: '3mm', paddingBottom: '3mm'}}></td>
                <ContentCell style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '3mm', paddingBottom: '3mm'}}>学　歴</ContentCell>
              </tr>
              <tr>
                <YearCell>2008</YearCell>
                <MonthCell>4</MonthCell>
                <ContentCell>武蔵工業大学 環境情報学部環境情報学科 入学</ContentCell>
              </tr>
              <tr>
                <YearCell>2012</YearCell>
                <MonthCell>4</MonthCell>
                <ContentCell>明治学院大学 法学部法律学科 編入学（3年次）</ContentCell>
              </tr>
              <tr>
                <YearCell>2017-2018</YearCell>
                <MonthCell></MonthCell>
                <ContentCell>海外語学/異文化理解留学（デンマーク・フィリピン）</ContentCell>
              </tr>
              <tr>
                <YearCell>2018</YearCell>
                <MonthCell>3</MonthCell>
                <ContentCell>明治学院大学 法学部法律学科 卒業</ContentCell>
              </tr>
              <tr>
                <td style={{paddingTop: '3mm', paddingBottom: '3mm'}}></td>
                <td style={{paddingTop: '3mm', paddingBottom: '3mm'}}></td>
                <ContentCell style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '3mm', paddingBottom: '3mm'}}>職　歴</ContentCell>
              </tr>
              <tr>
                <YearCell>2010</YearCell>
                <MonthCell></MonthCell>
                <ContentCell>サービス業・教育・翻訳・ITサポート等に従事（英語対応含む）</ContentCell>
              </tr>
              <tr>
                <YearCell>2022</YearCell>
                <MonthCell>2</MonthCell>
                <ContentCell>アクセンチュア株式会社 入社</ContentCell>
              </tr>
              <tr>
                <YearCell>2022</YearCell>
                <MonthCell>7</MonthCell>
                <ContentCell>同社フィリピン法人へ転籍</ContentCell>
              </tr>
              <tr>
                <YearCell>2024</YearCell>
                <MonthCell>2</MonthCell>
                <ContentCell>同社 退職</ContentCell>
              </tr>
              <tr>
                <YearCell>2024</YearCell>
                <MonthCell>3</MonthCell>
                <ContentCell>現在フリーランスとして開発案件応募・技術研鑽中</ContentCell>
              </tr>
              <tr>
                <td style={{paddingTop: '3mm', paddingBottom: '3mm'}}></td>
                <td style={{paddingTop: '3mm', paddingBottom: '3mm'}}></td>
                <ContentCell style={{textAlign: 'center', paddingTop: '3mm', paddingBottom: '3mm'}}>以上</ContentCell>
              </tr>
            </tbody>
          </CareerTable>
        </LeftColumn>

        {/* 右列 */}
        <RightColumn>
          {/* 免許・資格 */}
          <QualificationTable>
            <thead>
              <tr>
                <th>年</th>
                <th>月</th>
                <th>免許・資格</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <YearCell>2018</YearCell>
                <MonthCell>3</MonthCell>
                <ContentCell>普通自動車第一種運転免許</ContentCell>
              </tr>
              <tr>
                <YearCell>2019</YearCell>
                <MonthCell>12</MonthCell>
                <ContentCell>TOEIC 750点</ContentCell>
              </tr>
              <tr>
                <YearCell>2020</YearCell>
                <MonthCell>6</MonthCell>
                <ContentCell>MOS Word/Excel/Powerpoint</ContentCell>
              </tr>
              <tr>
                <YearCell>2024</YearCell>
                <MonthCell>12</MonthCell>
                <ContentCell>The Odin Project JavaScript / React Course 修了</ContentCell>
              </tr>
            </tbody>
          </QualificationTable>
{/* 志望動機 */}
<MotivationTable>
  <thead>
    <tr>
      <th colSpan="3">志望の動機、特技、好きな学科、アピールポイントなど</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan="3" style={{height: '80mm', padding: '4mm', lineHeight: '1.3', fontSize: '9pt'}}>
      <strong>志望動機</strong><br/>
        React/Next.jsを中心とした開発経験と英語環境での実務経験を活かし、開発業務に貢献できればと考えております。<br/><br/>

        <strong>アピールポイント</strong><br/>
        ・IBM Philippines Bilingual Application Developer（2025年4月〜10月）英語6段階選考すべて通過（最終合格）<br/>
        ・React / Next.js / TypeScript を中心としたWeb開発<br/>
        ・API / 認証 / DB含むフルスタック開発理解<br/>
        ・英語業務コミュニケーション<br/>
        ・Figma等からのUI再現・pixel perfect実装<br/>
        ・Git / レスポンシブ / コンポーネント設計<br/>
        ・AIツール利用開発経験（Cursor等）
      </td>
    </tr>
  </tbody>
</MotivationTable>

{/* 本人希望記入欄 */}
<RequestTable>
  <thead>
    <tr>
      <th colSpan="3">本人希望記入欄（特に給料・職種・勤務時間・勤務地・その他についての希望などがあれば記入）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan="3" style={{height: '40mm', padding: '4mm', lineHeight: '1.3', fontSize: '9pt'}}>
        <strong>ポートフォリオ</strong><br/>
        https://my-portfolio-website-lake.vercel.app/<br/><br/>
        <strong>LinkedIn</strong><br/>
        https://www.linkedin.com/in/ryoma-taguchi-b32024283
      </td>
    </tr>
  </tbody>
</RequestTable> 
        </RightColumn>
      </MainContent>
    </RirekishoContainer>
  );
}