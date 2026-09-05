---
sidebar_label: '2008年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Electrical-Electronic.Control-Theory.Position-and-Torque-Feedback
  - Electrical-Electronic.Circuits.Proximity-Sensor-Principles
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Measurement-Uncertainty
  - Data-Science-Artificial-Intelligence.Machine-Learning.Hidden-Markov-Model
  - Computer-Science.Distributed-Systems.Grid-Computing
  - Computer-Science.Security.Phishing-Attack
  - Computer-Science.Programming.Reflection
  - Computer-Science.Programming.Referential-Transparency
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2008年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

### 日本語

以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) サーボ系における位置フィードバックとトルクフィードバック
2) 近接覚センサーの原理 (1 種類でよい)
3) 計測における不確かさ (uncertainty)
4) 隠れマルコフモデル
5) グリッド・コンピューティング
6) フィッシング (phishing)
7) プログラミングにおけるリフレクション
8) 参照透明性

### English
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately 4~8 lines of text.
If necessary, use examples or figures.

1) Position feedback and torque feedback in a servo system
2) Principle of proximity sensing (a particular type)
3) Uncertainty in measurement
4) Hidden Markov models
5) Grid computing
6) Phishing
7) Reflection in programming
8) Referential transparency

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例或图。

1. 伺服系统中的位置反馈与转矩反馈。
2. 任意一种接近觉传感器的工作原理。
3. 测量中的不确定度。
4. 隐马尔可夫模型。
5. 网格计算。
6. 网络钓鱼。
7. 编程中的反射。
8. 引用透明性。

## **Kai**


### (1) Position feedback and torque feedback

位置フィードバックは、エンコーダ等で測った位置と目標位置との差を制御器へ戻し、モータへの指令を調整して位置を追従させる。トルクフィードバックは、トルクセンサの測定値などを目標トルクと比較し、力の発生を制御する。電流からトルクを推定する場合は、既知のトルク定数と適切なモータモデルを用いる。位置ループの内側に高速な速度・トルク／電流ループを置く構成がよく使われる。位置制御は位置決めに、トルク制御は接触作業や力の制限に適するが、安定性・飽和・機械系の共振を考慮して帯域を設計する。

### (2) Principle of proximity sensing

静電容量型の近接センサでは、電極と周囲の物体との容量が接近によって変化することを利用する。理想的な平行板なら $C=\varepsilon A/d$ であり、距離 $d$ が小さいほど容量が増える。実際は浮遊容量や物体の形状・誘電率も影響するので、発振周波数や充放電時間の変化を測り、基準値との差から近接を判定する。接触せずに物体を検出できる一方、湿度・汚れ・接地条件による変動に対する校正が必要である。

### (3) Uncertainty in measurement

測定の不確かさは、利用できる情報に基づいて測定対象量へ割り当てる値のばらつきを表す非負の指標であり、未知の真値との実際の誤差そのものではない。反復測定の統計から評価するタイプAと、校正資料・分解能・経験等から評価するタイプBがあり、これはランダム誤差／系統誤差の分類とは異なる。測定モデル $y=f(x_1,\ldots,x_n)$ を一次近似する場合、感度係数 $c_i=\partial f/\partial x_i$ と共分散行列 $\Sigma$ から $u_c^2(y)=c^{\mathsf T}\Sigma c$ を求める。拡張不確かさ $U=ku_c$ を報告する際は、包含係数 $k$ と対応する包含確率の前提も明記する。[国際計量用語集 VIM 2.26](https://jcgm.bipm.org/vim/en/2.26.html)は、系統的効果に関係する成分も不確かさへ含めている。

### (4) Hidden Markov models

隠れマルコフモデルは、直接観測できない状態 $s_t$ がマルコフ連鎖として遷移し、各状態から観測 $o_t$ が確率的に生成されるモデルである。通常のHMMでは、状態系列を条件とすると各観測は独立で、その分布は現在の状態だけに依存する。初期確率 $\pi_i$、遷移確率 $a_{ij}$、出力確率（または密度）$b_i(o)$ を用いて、同時確率は

$$P(s_{1:T},o_{1:T})=\pi_{s_1}\prod_{t=2}^T a_{s_{t-1},s_t}\prod_{t=1}^T b_{s_t}(o_t)$$

と書ける。観測の尤度は前向き算法、最も確からしい状態経路はViterbi算法で求められ、未知パラメータにはBaum–Welch算法などを用いる。音声認識や時系列の状態推定が応用例である。

### (5) Grid computing

グリッド・コンピューティングは、異なる組織や場所にある計算機・ストレージ等を連携させ、共通の仕事に利用する方式である。ミドルウェアが認証、資源探索、ジョブ投入、実行監視、データ転送等を調整する。例えば独立なシミュレーションを多数の研究機関の計算機へ分配できる。資源の性能・管理方針・可用性が異なるため、通信コスト、スケジューリング、失敗した仕事の再実行が課題となる。全資源が単一の共有メモリ計算機として振る舞うことを意味するものではない。

### (6) Phishing

フィッシングは、信頼されている組織や人物を装い、偽のメール・メッセージ・Webページ等で利用者をだまして認証情報や機密情報を入力させる攻撃である。例えば銀行を装う通知から偽ログイン画面へ誘導し、入力されたパスワードを取得する。ソフトウェアの脆弱性だけでなく、人の判断や信頼を悪用するソーシャルエンジニアリングに属する。送信者の表示名だけを信用せず、正規の連絡経路やドメインを確認し、フィッシング耐性のある認証方式を使うことが対策となる。[NISTの用語解説](https://csrc.nist.gov/glossary/term/phishing)も、なりすましによる情報取得を中心に説明している。

### (7) Reflection in programming

リフレクションは、実行中のプログラムが自身の型・メソッド・属性等の構造を調べ、言語が許す範囲で動的に操作する機能である。例えば.NETでは型のメタデータからメソッド一覧を取得し、実行時に選んだメソッドを呼び出せる。シリアライズ、プラグイン読込み、テストツール等で、型ごとに同じ処理を手書きせずに済む。一方、静的な型検査で発見しにくい誤りや実行時の追加コストが生じ得る。利用可能な操作は言語・実行環境・アクセス制御によって制限される。[Microsoftの説明](https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/overview)は、型の調査、インスタンス生成、メンバーへのアクセスを例示している。

### (8) Referential transparency

参照透明性とは、ある式をその評価結果の値へ置き換えても、プログラムの観測可能な振る舞いが変わらない性質である。同じ引数について同じ結果を返し、外部状態の変更や入出力を行わない純粋な関数は、そのような式を作る基本となる。例えば整数の純粋な式 `square(3)` を `9` に置き換えても計算結果は変わらない。現在時刻や乱数の取得、外部変数の更新を行う式では一般にこの置換はできない。参照透明性は等式変形による推論やテストを容易にし、適切な条件の下で結果の再利用や評価順序の変更を可能にする。
