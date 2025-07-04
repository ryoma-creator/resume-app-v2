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
      {/* 1ページ目: ヘッダー + 職務要約 + フロントエンド学習（完全版） */}
      <Page className="page">
        <Header>
          <Title>職　務　経　歴　書</Title>
          <DateName>
            <div>2025年7月1日現在</div>
            <div style={{fontWeight: 'bold'}}>田口　龍馬</div>
          </DateName>
        </Header>

        <SectionTitle>■ 職務要約</SectionTitle>
        <SectionContent>
          明治学院大学法学部法律学科卒業後、教育・販売・空港業務等の多角的な実務経験とIT・語学スキル習得を通じて、2022年にアクセンチュア株式会社に入社。日本・フィリピン両拠点での約2年間にわたり、金融・HR業務システムの国際実装プロジェクトを担当。多国籍チーム調整のスペシャリストとして活躍し、最終半年間にサブチームリーダーへ抜擢され、新人研修効率化（3ヶ月→1ヶ月）や複雑業務の導入成功を実現。2024年2月の退職後、世界標準のフロントエンド学習プラットフォーム「The Odin Project」等により1年半でフロントエンド開発の実用レベルを習得。現在、アクセンチュアでの国際的な業務経験と新たに習得したフロントエンド技術を融合し、技術力で企業成長に貢献できるエンジニアを目指している。
        </SectionContent>

        <SectionTitle>■ 職務経歴</SectionTitle>

        <CompanyBlock>
          <CompanyHeader>
            <div>フロントエンド開発スキル習得期間（独学）</div>
            <PeriodBox>2024年3月 ～ 現在</PeriodBox>
          </CompanyHeader>
          
          <JobContent style={{marginBottom: '4mm', color: '#333'}}>
            内容：フロントエンド開発技術の体系的習得およびポートフォリオ制作<br/>
            学習時間：毎日6-14時間（2,000時間以上学習済み）
          </JobContent>
          
          <JobTitle>体系的学習によるフロントエンド開発技術習得</JobTitle>
          
          <JobContent>
            <strong>学習戦略・手法：</strong><br/>
            世界標準のフロントエンド学習プラットフォーム「The Odin Project」を軸に、現代フロントエンド開発の体系的手法で学習。Progate、ドットインストール、React/Next.js公式ドキュメント等を併用し、基礎から実践まで段階的に習得。Webアプリケーション4件（ECサイト、タスク管理ツール、天気予報API連携アプリ、ポートフォリオサイト）を全工程通して制作し、実践的なスキルを身につけた。
            <br/><br/>
            
            <strong>技術習得・課題解決：</strong><br/>
            HTML/CSS基礎 → JavaScript(ES6+) → React.js → Next.jsの順で体系的スキルアップ。特にポートフォリオサイト制作には半年を要し、多数のエラーと技術的課題に直面するも、現代のUI/UXデザインとユーザーが求める要素を学習しつつ、完成後も5度の大幅なレイアウト修正を実行し、納得のいく形まで開発を追求。Shadcn UI等のライブラリカスタマイズ、HackerRankでのアルゴリズム問題演習、Vanilla JS・DOM操作・API連携等も並行実施。
          </JobContent>
          
          <AchievementBox>
            <div style={{fontWeight: 'bold', marginBottom: '3mm', fontSize: '9pt'}}>【主な成果・実績】</div>
            <BulletList>
              <li>Web開発として必要な用語や仕組み、知識を基礎から体系的に学習済み</li>
              <li>Webアプリケーション4件を全工程学習開発経験済み（ECサイト、タスク管理ツール、天気予報API連携アプリ、ポートフォリオサイト）</li>
              <li>技術的課題解決と継続的改善（プロジェクト復旧対応、パフォーマンス最適化、フレームワーク移行等）</li>
              <li>React/Next.js/Tailwind CSS等モダンな技術だけでなく、Vanilla JSのDOM操作等による実装方法も習得（CRUD、API連携など）</li>
              <li>Vanilla JSのHackerRank等によるアルゴリズム等の解法等も着手（Easy-Midレベル）</li>
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
            所属：日本法人（2022年2月-7月）→ フィリピン法人転籍（2022年7月-2024年2月）
          </JobContent>
          
          <JobTitle style={{fontSize: '10pt'}}>多国籍プロジェクト実装スペシャリスト／サブチームリーダー</JobTitle>
          
          <JobContent style={{fontSize: '9.5pt'}}>
            <strong>担当プロジェクト：</strong>①金融業務システム日本→フィリピン移管プロジェクト（企業基幹システム導入）②中国→フィリピンHR業務システム導入プロジェクト<br/>
            <strong>業務内容・成果：</strong>日本の金融システムと中国のHRシステムをフィリピンに導入する2つのプロジェクトを担当。日本人チームからフィリピン人チームへの業務移管において、技術的な説明と文化的な違いを橋渡しし、円滑なプロジェクト運営を実現。マニュアルにない課題への自律的対応が常に求められる中、自分で思考し解決策を導出。最終退職までの半年間は、実質的なサブチームリーダーとして問題解決と指示、英語でのリード層への情報共有を担当し、5名チームの統括を実現。
          </JobContent>
          
          <AchievementBox style={{padding: '3mm', margin: '3mm 0'}}>
            <div style={{fontWeight: 'bold', marginBottom: '2mm', fontSize: '9pt'}}>【主な成果・実績】</div>
            <BulletList style={{fontSize: '8.5pt', lineHeight: '1.2'}}>
              <li>新人研修効率化：塾講師経験と法学部論理思考を活用した独自手法で大幅効率化を実現</li>
              <li>業務負荷最適化：客先データ独自分析により業務分配改善を提案、プロジェクト遅延回避</li>
              <li>困難案件成功：他チーム対応不可能な業務導入を複数成功、手法を他の人にもシェアし即戦力増員</li>
              <li>多国籍調整：日本・中国・フィリピン間の架け橋として、現地第一号の経験を後続者に共有</li>
              <li>現地適応支援：日本人-フィリピン人間の相互理解促進と、日本人スタッフのプロジェクト定着率向上を陰ながらサポート</li>
            </BulletList>
          </AchievementBox>
        </CompanyBlock>

        <CompanyBlock style={{padding: '5mm', marginBottom: '5mm'}}>
          <CompanyHeader>
            <div style={{fontSize: '10pt'}}>その他実務経験・専門スキル習得</div>
            <PeriodBox>2010年4月 ～ 2021年12月</PeriodBox>
          </CompanyHeader>
          
          <JobContent style={{fontSize: '9pt', lineHeight: '1.2'}}>
            多角的な実務経験による顧客対応・問題解決能力の向上
          </JobContent>
          
          <AchievementBox style={{padding: '3mm', margin: '3mm 0'}}>
            <div style={{fontWeight: 'bold', marginBottom: '2mm', fontSize: '9pt'}}>【主な成果・実績】</div>
            <BulletList style={{fontSize: '8.5pt', lineHeight: '1.2'}}>
              <li>個別指導塾講師：志望校合格困難とされた生徒の英語偏差値を10アップさせ志望校合格に導く。分析により必要レッスン量を算出し通常の3倍レッスンを提案・実行。新規顧客20名中18名の入塾を獲得</li>
              <li>書店販売スタッフ：豊富な読書経験を活かし、お客様のニーズを的確に把握。適切な書籍提案によりお客様に感謝され、結果として売上向上に寄与</li>
              <li>空港業務：日本の厳格なルール対応で、外国人のオリンピック選手等が不満が爆発する中、現地の人に英語で対応し、理解と疑問を解決。最終的に感謝もされ、会社・日本のイメージ向上に貢献</li>
              <li>データ入力業務：高速かつ正確な作業により最上位グループに分類され、契約更新を直談判で獲得</li>
              <li>専門スキル・国際経験（デンマーク、フィリピン）：職業訓練修了（IT基礎）、ウェブデザイン総合コース修了、多文化コミュニケーション能力習得</li>
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
                ・React.js / Next.js（実用レベル・ポートフォリオ制作経験あり）<br/>
                ・JavaScript（ES6+、非同期処理、API連携）<br/>
                ・HTML5 / CSS3（セマンティックHTML、レスポンシブデザイン）<br/>
                ・Tailwind CSS / SASS/SCSS（モダンCSS手法）<br/>
                ・アニメーション実装（Framer Motion、GSAP）
              </td>
            </tr>
            <tr>
              <th style={{fontSize: '7.5pt', padding: '2mm', lineHeight: '1.1'}}>開発ツール・環境</th>
              <td style={{fontSize: '7.5pt', padding: '2mm', lineHeight: '1.1'}}>
                ・Git / GitHub（バージョン管理、チーム開発経験）<br/>
                ・Node.js / npm（パッケージ管理、ビルドツール）<br/>
                ・Vercel / Cloudinary（デプロイメント、メディア管理）<br/>
                ・Adobe Creative Suite（Photoshop、Illustrator）
              </td>
            </tr>
            <tr>
              <th style={{fontSize: '7.5pt', padding: '2mm', lineHeight: '1.1'}}>言語・コミュニケーション</th>
              <td style={{fontSize: '7.5pt', padding: '2mm', lineHeight: '1.1'}}>
                ・日本語（ネイティブ）・英語（ビジネスレベル・TOEIC 750点）<br/>
                ・オンライン英会話 10年以上継続・3,000回以上・90,000分以上<br/>
                ・デンマーク留学経験（30カ国以上の学生との共同生活により多文化理解を深化）<br/>
                ・多国籍チーム調整経験（日本・フィリピン・中国）
              </td>
            </tr>
            <tr>
              <th style={{fontSize: '7.5pt', padding: '2mm', lineHeight: '1.1'}}>ビジネススキル</th>
              <td style={{fontSize: '7.5pt', padding: '2mm', lineHeight: '1.1'}}>
                ・チーム管理・リーダーシップ（5名チーム管理経験）<br/>
                ・プロジェクト管理・進捗調整・文化間コミュニケーション・橋渡し<br/>
                ・効率化・改善提案（独自手法による業務効率化実績多数）<br/>
                ・Microsoft Office Suite（Word、Excel、PowerPoint、Outlook、Teams）
              </td>
            </tr>
          </tbody>
        </SkillsTable>

        <SectionTitle style={{fontSize: '11pt', margin: '8mm 0 4mm 0'}}>■ 自己PR</SectionTitle>
        
        <PRSection>
          <SubSectionTitle style={{fontSize: '10pt'}}>継続的技術習得力と適応能力</SubSectionTitle>
          <PRContent style={{fontSize: '9.5pt'}}>
            35歳から本格的にフロントエンド開発に挑戦し、1年半にわたり毎日6-14時間の学習を継続。法学部で培った論理思考により、多数の技術的課題を段階的に解決し実用レベルに到達。10年以上のオンライン英会話継続により培った継続力と学習習慣を技術習得にも活かし、確実なスキルアップを実現。
          </PRContent>
        </PRSection>

        <PRSection>
          <SubSectionTitle style={{fontSize: '10pt'}}>問題解決力と文化的橋渡し能力</SubSectionTitle>
          <PRContent style={{fontSize: '9.5pt'}}>
            アクセンチュアでは多国籍チームでの調整役として、技術的な課題解決と文化的な違いを橋渡しする能力を発揮。マニュアルにない課題への自律的対応が評価され、最終半年間は実質的なサブチームリーダーとして5名チームを統括。国際的な環境でのコミュニケーション能力と問題解決スキルを実証済み。
          </PRContent>
        </PRSection>

        <SectionTitle style={{fontSize: '11pt', margin: '8mm 0 4mm 0'}}>■ 志望動機</SectionTitle>
        <SectionContent style={{fontSize: '9.5pt'}}>
          これまでのアクセンチュアでの国際プロジェクト経験と新たに習得したフロントエンド技術を活かし、チーム開発での貢献と企業の技術的成長を支える人材として活躍したく応募いたします。
          <br/><br/>
          アクセンチュアでは多国籍チームでのプロジェクト管理とシステム実装を経験し、技術的な課題解決と文化的な違いを橋渡しする調整力を身につけました。退職後は1年半にわたり集中的にフロントエンド技術を習得し、React/Next.jsを用いた実践的なWebアプリケーション開発経験を積み重ねてきました。
          <br/><br/>
          これらの経験を活かし、ユーザーにとってより直感的で使いやすいWebアプリケーションの開発に貢献したいと考えています。特に、多様なチームでの開発経験と問題解決能力を活かし、技術面からプロダクトの価値向上と組織の成長に寄与できると確信しています。
          <br/><br/>
          継続的な技術学習への取り組みと国際的な業務経験を融合し、長期的な視点で企業の技術的発展とチーム力向上に貢献したいと考えています。
        </SectionContent>

        <div style={{textAlign: 'right', marginTop: '10mm', fontSize: '10pt'}}>
          以上
        </div>
      </Page>
    </ResumeContainer>
  );
}