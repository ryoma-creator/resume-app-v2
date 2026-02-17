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
      
      /* 印刷可能領域: 180mm × 267mm */
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
  margin-bottom: 15mm;
`;

const Title = styled.h1`
  font-size: 16pt;
  font-weight: bold;
  margin: 0 0 8mm 0;
  letter-spacing: 4px;
`;

const DateName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11pt;
`;

const SectionTitle = styled.h2`
  font-size: 12pt;
  font-weight: bold;
  margin: 12mm 0 5mm 0;
  padding-bottom: 2mm;
  border-bottom: 2px solid #000;
`;

const SectionContent = styled.div`
  font-size: 10.5pt;
  line-height: 1.3;
  text-align: justify;
  margin-bottom: 8mm;
`;

const CompanyBlock = styled.div`
  border: 1px solid #666;
  padding: 8mm;
  margin-bottom: 8mm;
  page-break-inside: avoid;
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5mm;
  font-weight: bold;
  font-size: 11pt;
`;

const PeriodBox = styled.div`
  font-size: 9pt;
  background: #f0f0f0;
  padding: 2mm 4mm;
  border: 1px solid #999;
`;

const JobTitle = styled.div`
  font-size: 11pt;
  font-weight: bold;
  margin: 4mm 0;
  text-decoration: underline;
`;

const JobContent = styled.div`
  font-size: 10pt;
  line-height: 1.3;
  margin-bottom: 5mm;
`;

const AchievementBox = styled.div`
  border: 1px solid #333;
  padding: 5mm;
  margin: 5mm 0;
  background: #f8f8f8;
  page-break-inside: avoid;
`;

const BulletList = styled.ul`
  margin: 2mm 0;
  padding-left: 5mm;
  font-size: 9pt;
  line-height: 1.3;
  list-style: none;
  
  li {
    margin-bottom: 2mm;
    position: relative;
    padding-left: 3mm;
    
    &:before {
      content: "・";
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }
  
  @media print {
    font-size: 8.5pt;
    line-height: 1.2;
    
    li {
      margin-bottom: 1.5mm;
      page-break-inside: avoid;
    }
  }
`;

const SkillsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 5mm 0;
  page-break-inside: avoid;
  
  th, td {
    border: 1px solid #333;
    padding: 4mm;
    text-align: left;
    vertical-align: top;
    font-size: 9.5pt;
    line-height: 1.2;
  }
  
  th {
    background: #e0e0e0;
    font-weight: bold;
    width: 18%;
  }
`;

const SubSectionTitle = styled.h3`
  font-size: 11pt;
  font-weight: bold;
  margin: 8mm 0 3mm 0;
  text-decoration: underline;
`;

const PRContent = styled.div`
  font-size: 10pt;
  line-height: 1.3;
  margin-bottom: 6mm;
`;

const PRSection = styled.div`
  page-break-inside: avoid;
  margin-bottom: 6mm;
`;

export default function StandardFontShokumu() {
  return (
    <ResumeContainer>
      {/* 1ページ目: ヘッダー + 職務要約 + Upwork + フロントエンド学習 */}
      <Page className="page">
        <Header>
          <Title>職　務　経　歴　書</Title>
          <DateName>
            <div>2025年10月14日現在</div>
            <div style={{fontWeight: 'bold'}}>田口　龍馬</div>
          </DateName>
        </Header>

        <SectionTitle>■ 職務要約</SectionTitle>
        <SectionContent>
          明治学院大学法学部卒業後、多角的な実務経験を経て2022年アクセンチュア入社。日本・フィリピン拠点で金融・HR業務システムの国際実装を担当。バイリンガル能力を活かした多国籍チーム調整のスペシャリストとして活躍。
          <br/><br/>
          最終半年間は実質的なリーダー役として5名のチームを牽引。英語・日本語のバイリンガル能力とIT知識を活かし、マニュアル不在の難案件を期限内に成功させ、さらに独自マニュアルを整備して後続者を育成。結果として研修期間を3ヶ月から1ヶ月に短縮（70%効率化）を達成。
          <br/><br/>
          退職後は約2年間でReact/Next.js/TypeScriptを集中習得。IBM Application Developer（Bilingual Japanese）最終選考合格（全6段階：書類・コーディングテスト（HackerRank）・HR面接・Language Test・技術面接・行動面接／全英語）により技術力を客観的に証明済み。さらにUpwork（海外フリーランスプラットフォーム）で実案件を受注し、プロフェッショナルな対応で最高評価を獲得。現在は国際業務経験と開発スキルを融合し、企業成長に貢献するエンジニアを目指す。
        </SectionContent>

        <SectionTitle>■ 職務経歴</SectionTitle>

        <CompanyBlock>
          <CompanyHeader>
            <div>海外フリーランス活動（Upwork）</div>
            <PeriodBox>2025年9月 ～ 現在</PeriodBox>
          </CompanyHeader>
          
          <JobContent style={{marginBottom: '4mm', color: '#333'}}>
            内容：海外クライアント向けフロントエンド開発案件の受注・納品<br/>
            プラットフォーム：Upwork（世界最大級のフリーランスプラットフォーム）
          </JobContent>
          
          <JobTitle>フロントエンド開発フリーランサー</JobTitle>
          
          <JobContent>
            <strong>主な業務内容：</strong><br/>
            イングランドのクライアントから「Figma to Code（テストエディット）」案件を受注。Figmaデザインファイルを正確にHTML/CSS/JavaScriptでコード化。英語でのクライアントコミュニケーション（要件確認・進捗報告・修正対応）。納期厳守とプロフェッショナルな対応により、クライアントから最高評価を獲得。
          </JobContent>
          
          <AchievementBox>
            <div style={{fontWeight: 'bold', marginBottom: '3mm', fontSize: '9pt'}}>【主な成果・実績】</div>
            <BulletList>
              <li>海外クライアント（イングランド）から最高評価（5つ星）を獲得</li>
              <li>「プロフェッショナルな姿勢」「正確な作業」「良好なコミュニケーション」を評価される</li>
              <li>Figma to Codeの実務経験により、デザイン再現力を証明</li>
              <li>英語での業務遂行能力を実案件で実証</li>
            </BulletList>
          </AchievementBox>
        </CompanyBlock>

        <CompanyBlock>
          <CompanyHeader>
            <div>フロントエンド開発技術習得（独学）</div>
            <PeriodBox>2024年3月 ～ 現在</PeriodBox>
          </CompanyHeader>
          
          <JobContent style={{marginBottom: '4mm', color: '#333'}}>
            内容：React / Next.js / TypeScript を中心に、体系的なフロントエンド開発を習得<br/>
            学習時間：毎日6-14時間（3,000時間以上継続中）<br/>
            成果：IBM Application Developer（Bilingual Japanese）最終選考合格（全6段階・全英語）
          </JobContent>
          
          <JobTitle>フロントエンド開発技術習得</JobTitle>
          
          <JobContent>
            <strong>学習アプローチ：</strong><br/>
            HTML/CSS → JavaScript → React.js → Next.js → TypeScript を段階的に習得。The Odin Project・公式ドキュメントを中心に学習、3,000時間以上継続。ECサイト、タスク管理ツール、天気予報アプリ、ポートフォリオサイト等を開発。HackerRankでJavaScriptによるアルゴリズム問題を継続演習。Supabase（CMS基礎学習中）、AWS（クラウド基礎学習中）。
          </JobContent>
          
          <AchievementBox>
            <div style={{fontWeight: 'bold', marginBottom: '3mm', fontSize: '9pt'}}>【主な成果・実績】</div>
            <BulletList>
              <li>IBM Application Developer（Bilingual Japanese）最終選考合格により技術力が客観的に評価</li>
              <li>React/Next.js/TypeScript等モダン技術でのWebアプリケーション複数件開発</li>
              <li>技術的課題への継続的対応と解決（パフォーマンス最適化、フレームワーク移行等）</li>
              <li>HackerRankアルゴリズム解法習得（Easy-Midレベル）</li>
            </BulletList>
          </AchievementBox>
        </CompanyBlock>
      </Page>

      {/* 2ページ目: アクセンチュア経歴 + 多様な実務経験 */}
      <Page className="page">
        <CompanyBlock>
          <CompanyHeader>
            <div>アクセンチュア株式会社（日本・フィリピン）</div>
            <PeriodBox>2022年2月 ～ 2024年2月</PeriodBox>
          </CompanyHeader>
          
          <JobContent style={{marginBottom: '3mm', color: '#333', fontSize: '9.5pt'}}>
            事業内容：ITコンサルティング・システム開発<br/>
            所属：日本法人（2022年2月～7月）→ フィリピン法人（2022年7月～2024年2月）
          </JobContent>
          
          <JobTitle style={{fontSize: '10pt'}}>実質的なリーダー役として活躍</JobTitle>
          
          <JobContent style={{fontSize: '9.5pt'}}>
            <strong>担当プロジェクト：</strong>金融・HR業務システムの国際実装（日・中・比連携）<br/>
            <strong>業務内容：</strong>率先して課題に取り組み、5名のチーム全体を牽引。多国籍チームにおける調整・橋渡し、マニュアル整備、新人教育を担当。日英バイリンガルでのコミュニケーションを日常的に実施し、会議・資料作成・指導を英語・日本語双方で対応。他チームの困難な業務も積極的に引き受け、問題解決に貢献。
          </JobContent>
          
          <AchievementBox style={{padding: '3mm', margin: '3mm 0'}}>
            <div style={{fontWeight: 'bold', marginBottom: '2mm', fontSize: '9pt'}}>【主な成果・実績】</div>
            <BulletList style={{fontSize: '8.5pt', lineHeight: '1.2'}}>
              <li>研修効率化：新人研修期間を3ヶ月→1ヶ月へ短縮（70%効率化）</li>
              <li>業務最適化：データ分析に基づくタスク分配改善でプロジェクト遅延を回避</li>
              <li>難案件対応：他チームが困難とした業務導入を積極的に引き受け成功、手法をマニュアル化</li>
              <li>国際調整：日・中・比間の橋渡し役としてチーム間の連携を強化</li>
              <li>リーダーシップ：5名のチームを実質的に牽引＋他チームへの改善指導</li>
            </BulletList>
          </AchievementBox>
        </CompanyBlock>

        <CompanyBlock style={{padding: '5mm', marginBottom: '5mm'}}>
          <CompanyHeader>
            <div style={{fontSize: '10pt'}}>多角的実務経験（顧客対応・教育・国際経験）</div>
            <PeriodBox>2010年4月 ～ 2021年12月</PeriodBox>
          </CompanyHeader>
          
          <AchievementBox style={{padding: '3mm', margin: '3mm 0'}}>
            <div style={{fontWeight: 'bold', marginBottom: '2mm', fontSize: '9pt'}}>【主な成果・実績】</div>
            <BulletList style={{fontSize: '8.5pt', lineHeight: '1.2'}}>
              <li>教育指導：志望校合格困難とされた中学生の英語偏差値＋10を達成し、合格に導く</li>
              <li>販売接客：顧客ニーズを的確に把握し適切な提案を行い、売上向上に貢献</li>
              <li>空港業務：外国人選手の不満に対し英語で対応・理解を得て、日本のイメージ向上に貢献</li>
              <li>データ入力：高速・正確な処理により最上位評価を獲得、雇用先から個別に契約延長を打診</li>
              <li>専門学習：デンマーク留学、フィリピン語学留学、厚生労働省認定プログラム修了、Internet Academy専科修了</li>
            </BulletList>
          </AchievementBox>
        </CompanyBlock>
      </Page>

      {/* 3ページ目: 保有スキル + 自己PR + 志望動機 */}
      <Page className="page">
        <SectionTitle style={{fontSize: '11pt', margin: '8mm 0 4mm 0'}}>■ 保有スキル・技術</SectionTitle>
        
        <SkillsTable style={{margin: '3mm 0', fontSize: '8pt'}}>
          <tbody>
            <tr>
              <th style={{fontSize: '7.5pt', padding: '2mm', lineHeight: '1.1'}}>フロントエンド開発</th>
              <td style={{fontSize: '7.5pt', padding: '2mm', lineHeight: '1.1'}}>
                ・React.js / Next.js（複数アプリ開発経験）<br/>
                ・JavaScript / TypeScript（ES6+、非同期処理、API連携）<br/>
                ・HTML5 / CSS3（レスポンシブ対応）<br/>
                ・Tailwind CSS、アニメーション実装（Framer Motion / GSAP）
              </td>
            </tr>
            <tr>
              <th style={{fontSize: '7.5pt', padding: '2mm', lineHeight: '1.1'}}>開発ツール・環境</th>
              <td style={{fontSize: '7.5pt', padding: '2mm', lineHeight: '1.1'}}>
                ・Git / GitHub、Node.js / npm<br/>
                ・Vercel、Cloudinary<br/>
                ・Supabase（基礎学習中）、AWS（基礎学習中）
              </td>
            </tr>
            <tr>
              <th style={{fontSize: '7.5pt', padding: '2mm', lineHeight: '1.1'}}>言語・コミュニケーション</th>
              <td style={{fontSize: '7.5pt', padding: '2mm', lineHeight: '1.1'}}>
                ・日本語（ネイティブ）、英語（ビジネス上級・TOEIC 750点）<br/>
                ・オンライン英会話15年（3,000回以上・90,000分以上）<br/>
                ・デンマーク・フィリピン留学<br/>
                ・多国籍チーム調整経験（日本・フィリピン・中国）
              </td>
            </tr>
            <tr>
              <th style={{fontSize: '7.5pt', padding: '2mm', lineHeight: '1.1'}}>ビジネススキル</th>
              <td style={{fontSize: '7.5pt', padding: '2mm', lineHeight: '1.1'}}>
                ・チーム牽引（5名のチームを実質的にリード＋他チームへの指導）<br/>
                ・プロジェクト管理、業務効率化（研修期間70%短縮）<br/>
                ・データ分析による改善提案<br/>
                ・Microsoft Office（Word、Excel、PowerPoint、Teams）
              </td>
            </tr>
          </tbody>
        </SkillsTable>

        <SectionTitle style={{fontSize: '11pt', margin: '8mm 0 4mm 0'}}>■ 自己PR</SectionTitle>
        
        <PRSection>
          <SubSectionTitle style={{fontSize: '10pt'}}>継続的学習力と実践力</SubSectionTitle>
          <BulletList style={{fontSize: '9pt'}}>
            <li>未経験から約2年間でReact/Next.js中心のフロントエンド技術を習得</li>
            <li>3,000時間以上の独学と複数アプリ開発で実践スキルを確立</li>
            <li>IBM Application Developer（Bilingual Japanese）最終選考合格（全6段階・全英語）で客観的評価を獲得</li>
            <li>Upworkで海外クライアントから実案件を受注し、最高評価を獲得</li>
          </BulletList>
        </PRSection>

        <PRSection>
          <SubSectionTitle style={{fontSize: '10pt'}}>国際的調整力とリーダーシップ</SubSectionTitle>
          <BulletList style={{fontSize: '9pt'}}>
            <li>中国→フィリピンのシステム移管や困難案件を率先して引き受け、チームを牽引</li>
            <li>英語で直接調整・データ分析を実施しプロジェクト成功に貢献</li>
            <li>研修期間を3ヶ月→1ヶ月に短縮（70%効率化）、他チームへの改善指導も実施</li>
          </BulletList>
        </PRSection>

        <PRSection>
          <SubSectionTitle style={{fontSize: '10pt'}}>行動力と問題解決力</SubSectionTitle>
          <BulletList style={{fontSize: '9pt'}}>
            <li>マニュアルや指示なしでも課題特定→仮説→解決策を実行し、国際案件を完遂</li>
            <li>IBM選考でも評価され、今後のフロントエンド開発に応用可能</li>
          </BulletList>
        </PRSection>

        <SectionTitle style={{fontSize: '11pt', margin: '8mm 0 4mm 0'}}>■ 志望動機</SectionTitle>
        <SectionContent style={{fontSize: '9.5pt'}}>
          以前貴社で2年間勤務し、多国籍チームでの調整力と問題解決力を培いました。貴社の国際的な環境やプロジェクトの進め方を理解しているため、スムーズに業務に貢献できると考えています。
          <br/><br/>
          退職後はフロントエンド開発に専念し、IBM Application Developer（Bilingual Japanese）の最終選考合格により技術力が客観的に評価され、さらにUpworkで海外クライアントから実案件を受注し最高評価を獲得しました。
          <br/><br/>
          私の目標は、国際的な環境でIT技術力を持って活躍することです。以前の経験を活かしつつ、新たに習得した開発スキルを加えることで、技術面からより大きな価値を提供できると確信しています。この理想像を実現できる環境として、貴社に再び貢献したく応募いたします。
        </SectionContent>

        <div style={{textAlign: 'right', marginTop: '10mm', fontSize: '10pt'}}>
          以上
        </div>
      </Page>
    </ResumeContainer>
  );
}
