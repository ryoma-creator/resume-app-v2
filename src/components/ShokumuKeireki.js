import React from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  max-width: 210mm;
  margin: 0 auto;
  background: white;
  font-family: 'MS PGothic', 'Noto Sans JP', sans-serif;
  color: #000;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  
  @media print {
    box-shadow: none;
    margin: 0;
    
    .page {
      width: 210mm;
      min-height: 297mm;
      max-height: 297mm;
      padding: 15mm;
      margin: 0;
      page-break-after: always;
      box-sizing: border-box;
      overflow: hidden;
    }
    
    .page:last-child {
      page-break-after: avoid;
    }
    
    font-size: 9pt;
    line-height: 1.2;
  }
`;

const Page = styled.div`
  min-height: 297mm;
  padding: 20mm;
  
  @media print {
    min-height: 297mm;
    max-height: 297mm;
    padding: 15mm;
    box-sizing: border-box;
    overflow: hidden;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 8mm;
`;

const Title = styled.h1`
  font-size: 16pt;
  font-weight: bold;
  margin: 0 0 5mm 0;
  letter-spacing: 4px;
`;

const DateName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11pt;
`;

const SectionTitle = styled.h2`
  font-size: 11pt;
  font-weight: bold;
  margin: 6mm 0 3mm 0;
  padding-bottom: 1.5mm;
  border-bottom: 2px solid #000;
`;

const SummaryText = styled.div`
  font-size: 9.5pt;
  line-height: 1.4;
  margin-bottom: 2mm;
`;

const SkillBlock = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2mm 0 4mm 0;

  th, td {
    border: 1px solid #333;
    padding: 2.5mm 3mm;
    text-align: left;
    vertical-align: top;
    font-size: 9pt;
    line-height: 1.3;
  }

  th {
    background: #f0f0f0;
    font-weight: bold;
    width: 22%;
    white-space: nowrap;
  }
`;

const CareerBlock = styled.div`
  margin-bottom: 5mm;
`;

const CareerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.5mm;
`;

const CareerCompany = styled.div`
  font-weight: bold;
  font-size: 10pt;
`;

const CareerPeriod = styled.div`
  font-size: 9pt;
  color: #333;
`;

const CareerSummary = styled.div`
  font-size: 9pt;
  line-height: 1.3;
  margin-bottom: 2mm;
`;

const SubLabel = styled.div`
  font-weight: bold;
  font-size: 9pt;
  margin: 2mm 0 1mm 0;
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 5mm;
  font-size: 9pt;
  line-height: 1.4;
  list-style: none;

  li {
    margin-bottom: 1mm;
    position: relative;
    padding-left: 3mm;

    &:before {
      content: "・";
      position: absolute;
      left: 0;
    }
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 4mm 0;
`;

const MotivationBox = styled.div`
  font-size: 9.5pt;
  line-height: 1.4;
  margin-top: 2mm;
`;

export default function StandardFontShokumu() {
  return (
    <ResumeContainer>
      {/* ===== 1ページ目 ===== */}
      <Page className="page">
        <Header>
          <Title>職　務　経　歴　書</Title>
          <DateName>
            <div>2025年10月14日現在</div>
            <div style={{fontWeight: 'bold'}}>田口　龍馬</div>
          </DateName>
        </Header>

        {/* 職務要約 */}
        <SectionTitle>■ 職務要約</SectionTitle>
        <SummaryText>
          アクセンチュアにて金融・HRシステムの国際プロジェクトに2年間従事。<br/>
          日本・中国・フィリピン間の多国籍チームでの業務調整、資料作成、実装支援を担当。<br/>
          退職後はReact/Next.js/TypeScriptを中心にWeb開発を学習・実装し、複数のWebアプリを開発。<br/>
          現在は開発エンジニアとしての就業を目指し、ポートフォリオ開発および案件応募を継続中。
        </SummaryText>

        {/* スキル */}
        <SectionTitle>■ スキル</SectionTitle>
        <SkillBlock>
          <tbody>
            <tr>
              <th>開発言語・技術</th>
              <td>
                React / Next.js / TypeScript / JavaScript（ES6+）<br/>
                HTML5 / CSS3 / Tailwind CSS<br/>
                REST API / CRUD / 認証実装<br/>
                Figmaデザイン再現（pixel perfect）
              </td>
            </tr>
            <tr>
              <th>開発環境</th>
              <td>Git / GitHub / Node.js / npm / Vercel / Cloudinary</td>
            </tr>
            <tr>
              <th>DB・その他</th>
              <td>Supabase（基礎）/ PostgreSQL（基礎）</td>
            </tr>
            <tr>
              <th>言語</th>
              <td>
                日本語：ネイティブ<br/>
                英語：業務使用（会議・交渉・教育）
              </td>
            </tr>
          </tbody>
        </SkillBlock>

        {/* 職務経歴 */}
        <SectionTitle>■ 職務経歴</SectionTitle>

        {/* アクセンチュア */}
        <CareerBlock>
          <CareerHeader>
            <CareerCompany>アクセンチュア株式会社</CareerCompany>
            <CareerPeriod>2022年2月 ～ 2024年2月</CareerPeriod>
          </CareerHeader>
          <CareerSummary>
            中国拠点からフィリピン拠点へのHR業務システム移管プロジェクトに参画。<br/>
            日本・中国・フィリピンの多国籍チーム間の調整および業務設計を担当。
          </CareerSummary>
          <SubLabel>担当業務</SubLabel>
          <BulletList>
            <li>中国→フィリピン業務移管に伴う課題整理・調整</li>
            <li>英語での会議進行・折衝</li>
            <li>業務フロー設計</li>
            <li>マニュアル作成</li>
            <li>新人教育</li>
            <li>タスク再分配</li>
            <li>顧客対応</li>
            <li>ITチーム連携</li>
          </BulletList>
          <SubLabel>実績</SubLabel>
          <BulletList>
            <li>HR業務のフィリピン拠点立ち上げを主導</li>
            <li>業務マニュアルを新規作成</li>
            <li>教育期間3ヶ月 → 1ヶ月へ短縮</li>
            <li>日本・中国・PH間の業務連携を確立</li>
            <li>タスク配分を再設計し業務停滞を解消</li>
            <li>多国籍チームの調整役として稼働</li>
          </BulletList>
        </CareerBlock>

        <Divider />

        {/* IT転向期間 */}
        <CareerBlock>
          <CareerHeader>
            <CareerCompany>IT分野への転向期間</CareerCompany>
            <CareerPeriod>2019年4月 ～ 2021年3月</CareerPeriod>
          </CareerHeader>
          <BulletList>
            <li>プログラミングスクール受講</li>
            <li>Web開発基礎学習</li>
            <li>短期業務（翻訳・事務等）</li>
          </BulletList>
        </CareerBlock>

        <Divider />

        {/* その他 */}
        <CareerBlock>
          <CareerHeader>
            <CareerCompany>その他職務経験</CareerCompany>
            <CareerPeriod>2010年 ～ 2021年</CareerPeriod>
          </CareerHeader>
          <BulletList>
            <li>教育・接客・空港業務等に従事（英語対応含む）</li>
          </BulletList>
        </CareerBlock>
      </Page>

      {/* ===== 2ページ目 ===== */}
      <Page className="page">
        {/* 開発実績 */}
        <SectionTitle style={{marginTop: 0}}>■ 開発実績（ポートフォリオ）</SectionTitle>

        <SubLabel>ポートフォリオサイト</SubLabel>
        <div style={{fontSize: '9pt', marginBottom: '2mm'}}>
          https://my-portfolio-website-lake.vercel.app/
        </div>

        <SubLabel>Webアプリ</SubLabel>
        <BulletList>
          <li>ECサイト</li>
          <li>タスク管理アプリ</li>
          <li>天気アプリ</li>
        </BulletList>
        <div style={{fontSize: '9pt', marginTop: '1mm'}}>
          React / Next.js / TypeScript 使用。
        </div>

        <Divider />

        {/* 選考実績 */}
        <SectionTitle>■ 選考実績</SectionTitle>

        <CareerBlock>
          <CareerHeader>
            <CareerCompany>IBM Philippines — Bilingual Application Developer選考</CareerCompany>
            <CareerPeriod>2025年5月 ～ 10月</CareerPeriod>
          </CareerHeader>
          <div style={{fontSize: '9pt', marginBottom: '2mm'}}>全6段階選考通過（最終選考合格）</div>
          <BulletList>
            <li>書類</li>
            <li>コーディングテスト</li>
            <li>HR面接</li>
            <li>英語面接</li>
            <li>技術面接</li>
            <li>行動面接</li>
          </BulletList>
        </CareerBlock>

        <Divider />

        {/* 現在 */}
        <SectionTitle>■ 現在</SectionTitle>
        <CareerBlock>
          <CareerPeriod style={{marginBottom: '2mm'}}>2024年3月 ～ 現在</CareerPeriod>
          <div style={{fontSize: '9pt'}}>Web開発スキル向上および案件応募活動中</div>
        </CareerBlock>

        <Divider />

        {/* 志望動機 */}
        <SectionTitle>■ 志望動機</SectionTitle>
        <MotivationBox>
          React/Next.jsを中心とした開発経験と、<br/>
          アクセンチュアでの国際プロジェクト経験を活かし、<br/>
          開発業務に貢献したく応募いたしました。
        </MotivationBox>

        <div style={{textAlign: 'right', marginTop: '10mm', fontSize: '10pt'}}>
          以上
        </div>
      </Page>
    </ResumeContainer>
  );
}
