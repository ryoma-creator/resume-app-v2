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
        2025年　7月　1日現在
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
                <td rowSpan="5" style={{padding: 0}}>
                  <PhotoCell>
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
                </td>
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
                <td colSpan="3">1988年　11月　13日生　（満36歳）</td>
              </tr>
              <tr>
                <LabelCell>ふりがな</LabelCell>
                <td colSpan="3" style={{fontSize: '8pt'}}>
                  トリオンタワーズ、ビージーシー、タギッグ、メトロマニラ
                </td>
              </tr>
              <tr>
                <LabelCell>現住所</LabelCell>
                <td colSpan="3" style={{fontSize: '8pt'}}>
                  〒1634　Trion Towers, BGC, Taguig, Metro Manila, Philippines
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
                <YearCell>2017</YearCell>
                <MonthCell>9</MonthCell>
                <ContentCell>GITC（デンマーク）語学留学</ContentCell>
              </tr>
              <tr>
                <YearCell>2018</YearCell>
                <MonthCell>1</MonthCell>
                <ContentCell>フィリピン語学留学</ContentCell>
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
                <YearCell>2018</YearCell>
                <MonthCell>4</MonthCell>
                <ContentCell>各種サービス業・教育関連業務に従事（～2021年3月）</ContentCell>
              </tr>
              <tr>
                <YearCell>2019</YearCell>
                <MonthCell>4</MonthCell>
                <ContentCell>職業訓練（Microsoft Office基礎）受講</ContentCell>
              </tr>
              <tr>
                <YearCell>2020</YearCell>
                <MonthCell>4</MonthCell>
                <ContentCell>職業訓練（IT基礎・Python/Java）受講</ContentCell>
              </tr>
              <tr>
                <YearCell>2020</YearCell>
                <MonthCell>9</MonthCell>
                <ContentCell>InternetAcademy ウェブデザイン総合コース 受講</ContentCell>
              </tr>
              <tr>
                <YearCell>2021</YearCell>
                <MonthCell>4</MonthCell>
                <ContentCell>各種IT関連業務・派遣業務に従事</ContentCell>
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
                <ContentCell>現在に至る（フロントエンド開発技術習得に専念）</ContentCell>
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
                <YearCell>2019</YearCell>
                <MonthCell>6</MonthCell>
                <ContentCell>職業訓練修了証（Microsoft Office基礎）</ContentCell>
              </tr>
              <tr>
                <YearCell>2020</YearCell>
                <MonthCell>6</MonthCell>
                <ContentCell>MOS Word/Excel</ContentCell>
              </tr>
              <tr>
                <YearCell>2020</YearCell>
                <MonthCell>8</MonthCell>
                <ContentCell>職業訓練修了証（Python/Java）</ContentCell>
              </tr>
              <tr>
                <YearCell>2024</YearCell>
                <MonthCell>12</MonthCell>
                <ContentCell>The Odin Project JavaScript / React Course 修了</ContentCell>
              </tr>
              <tr>
                <td>継続中</td>
                <td></td>
                <ContentCell>オンライン英会話 3,000回以上・90,000分以上・Legend達成（10年以上継続）</ContentCell>
              </tr>
              <tr>
                <td>継続中</td>
                <td></td>
                <ContentCell>フロントエンド技術継続学習中（React/Next.js、TypeScript等）</ContentCell>
              </tr>
              <tr>
                <td>継続中</td>
                <td></td>
                <ContentCell>ポートフォリオサイト・Webアプリケーション4件公開中<br/>
                ・ポートフォリオサイト：https://my-portfolio-website-lake.vercel.app/<br/>
                ・ECサイト：https://ecommerce-p66q.vercel.app/<br/>
                ・タスク管理ツール：https://todo-app-kappa-ochre.vercel.app/<br/>
                ・天気予報アプリ：https://weather-app-eight-amber-29.vercel.app/</ContentCell>
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
        これまでのアクセンチュアでの国際プロジェクト経験と新たに習得したフロントエンド技術を活かし、技術力で企業成長に貢献したく応募いたします。<br/><br/>

        <strong>アピールポイント</strong><br/>
        ・1年半の集中学習（毎日6-14時間）により習得したフロントエンド技術一式（React/Next.js、レスポンシブデザイン、Git管理等）<br/>
        ・実践的なWebアプリケーション開発経験（ECサイト、タスク管理ツール、天気予報アプリ、ポートフォリオサイト）<br/>
        ・技術的課題への継続的対応と解決（プロジェクト復旧対応、パフォーマンス最適化、フレームワーク移行等）<br/>
        ・アクセンチュアでサブチームリード経験（多国籍チーム5名の統括）<br/>
        ・新人研修効率化による生産性向上（研修期間を約70%短縮）<br/>
        ・国際プロジェクトでの調整・架け橋役としての実績<br/>
        ・法学部での論理思考力を基盤とした本質的な問題解決能力<br/>
        ・10年以上の英語学習継続による国際的なコミュニケーション能力<br/>
        ・15年以上のサッカー・フットサル経験によるチームワークとリーダーシップ<br/><br/>

        技術力の向上と国際経験を融合し、チーム開発での貢献と企業の成長を支える人材として活躍したいと考えています。
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
        ・<strong>職種</strong>：フロントエンド開発を通じた技術スキル向上を希望<br/>
        ・<strong>勤務形態</strong>：フレックス・リモート可能な環境を希望<br/>
        ・<strong>その他</strong>：国際経験を活かした多様なチームでの開発業務を希望。技術力向上と国際的な環境での更なる成長を目指す<br/><br/>

        貴社の事業成長に技術面から貢献し、長期的なキャリア形成を図りたいと考えています。
      </td>
    </tr>
  </tbody>
</RequestTable>
        </RightColumn>
      </MainContent>
    </RirekishoContainer>
  );
}