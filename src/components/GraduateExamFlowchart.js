import React, { useEffect } from 'react';
import mermaid from 'mermaid';
import './GraduateExamFlowchart.css';

const GraduateExamFlowchart = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        primaryColor: '#f9f9f9',
        primaryTextColor: '#333',
        primaryBorderColor: '#ddd',
        lineColor: '#666',
        fontFamily: 'Inter, sans-serif'
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true
      }
    });
  }, []);

  const flowchartCode = `
    flowchart TD
      Title["<b>2025年度 日本主要大学院入試日程</b><br/>2025 Graduate School Entrance Exam Schedule for Top Japanese Universities"]
      
      subgraph Timeline["Timeline Overview"]
        direction LR
        Jun["6月<br/>June"] --> Jul["7月<br/>July"] --> Aug["8月<br/>August"] --> Sep["9月<br/>September"] --> Oct["10月<br/>October"]
      end
      
      subgraph Tokyo["東京大学 (University of Tokyo)"]
        T1["出願期間<br/>Application<br/>Early June"] --> T2["書類締切<br/>Document Deadline<br/>Mid June"]
        T2 --> T3["筆記試験<br/>Written Exam<br/>Late August"]
        T3 --> T4["面接<br/>Interview<br/>Early September"]
        T4 --> T5["合格発表<br/>Results<br/>Mid September"]
      end
      
      subgraph Kyoto["京都大学 (Kyoto University)"]
        K1["出願期間<br/>Application<br/>Mid June"] --> K2["書類締切<br/>Document Deadline<br/>Late June"]
        K2 --> K3["筆記試験<br/>Written Exam<br/>Late August"]
        K3 --> K4["面接<br/>Interview<br/>Early September"]
        K4 --> K5["合格発表<br/>Results<br/>Late September"]
      end
      
      subgraph Tohoku["東北大学 (Tohoku University)"]
        TH1["出願期間<br/>Application<br/>Early July"] --> TH2["書類締切<br/>Document Deadline<br/>Mid July"]
        TH2 --> TH3["筆記試験<br/>Written Exam<br/>Early September"]
        TH3 --> TH4["面接<br/>Interview<br/>Mid September"]
        TH4 --> TH5["合格発表<br/>Results<br/>Late September"]
      end
      
      subgraph Osaka["大阪大学 (Osaka University)"]
        O1["出願期間<br/>Application<br/>Mid June"] --> O2["書類締切<br/>Document Deadline<br/>Late June"]
        O2 --> O3["筆記試験<br/>Written Exam<br/>Late August"]
        O3 --> O4["面接<br/>Interview<br/>Early September"]
        O4 --> O5["合格発表<br/>Results<br/>Mid September"]
      end
      
      subgraph Nagoya["名古屋大学 (Nagoya University)"]
        N1["出願期間<br/>Application<br/>Early July"] --> N2["書類締切<br/>Document Deadline<br/>Mid July"]
        N2 --> N3["筆記試験<br/>Written Exam<br/>Early September"]
        N3 --> N4["面接<br/>Interview<br/>Mid September"]
        N4 --> N5["合格発表<br/>Results<br/>Late September"]
      end
      
      subgraph TUS["東京理科大学 (Tokyo University of Science)"]
        TU1["出願期間<br/>Application<br/>Late June"] --> TU2["書類締切<br/>Document Deadline<br/>Early July"]
        TU2 --> TU3["第1次試験<br/>1st Round Exam<br/>Mid August"]
        TU3 --> TU4["第2次試験<br/>2nd Round Exam<br/>Late August"]
        TU4 --> TU5["合格発表<br/>Results<br/>Early September"]
      end
      
      subgraph Hokkaido["北海道大学 (Hokkaido University)"]
        H1["出願期間<br/>Application<br/>Mid July"] --> H2["書類締切<br/>Document Deadline<br/>Late July"]
        H2 --> H3["筆記試験<br/>Written Exam<br/>Early September"]
        H3 --> H4["面接<br/>Interview<br/>Mid September"]
        H4 --> H5["合格発表<br/>Results<br/>Early October"]
      end
      
      subgraph Kyushu["九州大学 (Kyushu University)"]
        KY1["出願期間<br/>Application<br/>Early July"] --> KY2["書類締切<br/>Document Deadline<br/>Mid July"]
        KY2 --> KY3["筆記試験<br/>Written Exam<br/>Late August"]
        KY3 --> KY4["面接<br/>Interview<br/>Early September"]
        KY4 --> KY5["合格発表<br/>Results<br/>Mid September"]
      end
      
      subgraph Waseda["早稲田大学 (Waseda University)"]
        W1["出願期間<br/>Application<br/>Late May"] --> W2["書類締切<br/>Document Deadline<br/>Early June"]
        W2 --> W3["筆記試験<br/>Written Exam<br/>Mid July"]
        W3 --> W4["面接<br/>Interview<br/>Late July"]
        W4 --> W5["合格発表<br/>Results<br/>Early August"]
      end
      
      subgraph Tsukuba["筑波大学 (University of Tsukuba)"]
        TS1["出願期間<br/>Application<br/>Mid June"] --> TS2["書類締切<br/>Document Deadline<br/>Late June"]
        TS2 --> TS3["筆記試験<br/>Written Exam<br/>Mid August"]
        TS3 --> TS4["面接<br/>Interview<br/>Late August"]
        TS4 --> TS5["合格発表<br/>Results<br/>Early September"]
      end
      
      subgraph UEC["電気通信大学 (University of Electro-Communications)"]
        U1["出願期間<br/>Application<br/>Late June"] --> U2["書類締切<br/>Document Deadline<br/>Early July"]
        U2 --> U3["筆記試験<br/>Written Exam<br/>Late August"]
        U3 --> U4["面接<br/>Interview<br/>Early September"]
        U4 --> U5["合格発表<br/>Results<br/>Mid September"]
      end
      
      subgraph Kobe["神戸大学 (Kobe University)"]
        KB1["出願期間<br/>Application<br/>Early July"] --> KB2["書類締切<br/>Document Deadline<br/>Mid July"]
        KB2 --> KB3["筆記試験<br/>Written Exam<br/>Early September"]
        KB3 --> KB4["面接<br/>Interview<br/>Mid September"]
        KB4 --> KB5["合格発表<br/>Results<br/>Late September"]
      end
      
      subgraph Hiroshima["広島大学 (Hiroshima University)"]
        HR1["出願期間<br/>Application<br/>Mid July"] --> HR2["書類締切<br/>Document Deadline<br/>Late July"]
        HR2 --> HR3["筆記試験<br/>Written Exam<br/>Early September"]
        HR3 --> HR4["面接<br/>Interview<br/>Mid September"]
        HR4 --> HR5["合格発表<br/>Results<br/>Early October"]
      end
      
      Title --> Timeline
      Timeline --> Tokyo
      Timeline --> Kyoto
      Timeline --> Tohoku
      Timeline --> Osaka
      Timeline --> Nagoya
      Timeline --> TUS
      Timeline --> Hokkaido
      Timeline --> Kyushu
      Timeline --> Waseda
      Timeline --> Tsukuba
      Timeline --> UEC
      Timeline --> Kobe
      Timeline --> Hiroshima
      
      classDef tokyo fill:#3b82f6,stroke:#1d4ed8,stroke-width:2px,color:#fff
      classDef kyoto fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
      classDef tohoku fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
      classDef osaka fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
      classDef nagoya fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
      classDef tus fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
      classDef hokkaido fill:#84cc16,stroke:#65a30d,stroke-width:2px,color:#fff
      classDef kyushu fill:#f97316,stroke:#ea580c,stroke-width:2px,color:#fff
      classDef waseda fill:#ec4899,stroke:#db2777,stroke-width:2px,color:#fff
      classDef tsukuba fill:#6366f1,stroke:#4f46e5,stroke-width:2px,color:#fff
      classDef uec fill:#14b8a6,stroke:#0d9488,stroke-width:2px,color:#fff
      classDef kobe fill:#a855f7,stroke:#9333ea,stroke-width:2px,color:#fff
      classDef hiroshima fill:#f43f5e,stroke:#e11d48,stroke-width:2px,color:#fff
      
      class T1,T2,T3,T4,T5 tokyo
      class K1,K2,K3,K4,K5 kyoto
      class TH1,TH2,TH3,TH4,TH5 tohoku
      class O1,O2,O3,O4,O5 osaka
      class N1,N2,N3,N4,N5 nagoya
      class TU1,TU2,TU3,TU4,TU5 tus
      class H1,H2,H3,H4,H5 hokkaido
      class KY1,KY2,KY3,KY4,KY5 kyushu
      class W1,W2,W3,W4,W5 waseda
      class TS1,TS2,TS3,TS4,TS5 tsukuba
      class U1,U2,U3,U4,U5 uec
      class KB1,KB2,KB3,KB4,KB5 kobe
      class HR1,HR2,HR3,HR4,HR5 hiroshima
  `;

  return (
    <div className="graduate-exam-flowchart">
      <div className="mermaid">
        {flowchartCode}
      </div>
      <div className="flowchart-notes">
        <h3>📝 注意事項 (Important Notes)</h3>
        <ul>
          <li><strong>早稲田大学:</strong> 他大学より早期スケジュール / Earlier schedule than other universities</li>
          <li><strong>東京理科大学:</strong> 2段階選考システム / Two-stage examination system</li>
          <li><strong>私立大学:</strong> 一般的に国立大学より早期実施 / Private universities typically held earlier than national universities</li>
          <li><strong>更新予定:</strong> 2025年正式日程発表後に更新 / Will be updated when official 2025 schedules are released</li>
        </ul>
      </div>
    </div>
  );
};

export default GraduateExamFlowchart;
