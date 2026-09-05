---
sidebar_label: '2010年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Computer-Science.Programming.Higher-Order-Functions
  - Computer-Science.Security.Public-Key-Infrastructure
  - Computer-Science.Networks.Autonomous-System-Numbers
  - Engineering.Robotics.Simultaneous-Localization-and-Mapping
  - Engineering.Robotics.Articulated-Link-Mechanism-Representation
  - Mathematics.Linear-Algebra.Moore-Penrose-Pseudoinverse
  - Electrical-Electronic.Control-Theory.H-Infinity-Control
  - Data-Science-Artificial-Intelligence.Data-Science.Principal-Component-Analysis
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2010年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

出典：[大学公式問題冊子の保存版](https://web.archive.org/web/20151118065628id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2010_8_ci_istmajor_ja.pdf)。

### 日本語

以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) 高階関数
2) PKI
3) インターネットにおける AS 番号
4) 移動ロボットにおける自己位置認識と地図構築のための技術
5) 多関節ロボットにおけるリンク機構の表現方法
6) 一般化逆行列 または 擬似逆行列
7) $H^\infty$ 制御
8) 主成分分析

### English
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately 4~8 lines of text.
If necessary, use examples or figures.

1) Higher-order functions
2) PKI 
3) AS numbers within the Internet
4) Technologies for localization and mapping in a mobile robot
5) Representation of link mechanism in an articulated robot 
6) Generalized inverse matrix or pseudo-inverse matrix
7) $H^\infty$ control
8) Principal component analysis

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例或图。

1. 高阶函数。
2. PKI（公钥基础设施）。
3. 互联网中的自治系统编号（AS 号）。
4. 移动机器人同时进行自身定位和地图构建的技术。
5. 多关节机器人的连杆机构表示方法。
6. 广义逆矩阵或伪逆矩阵。
7. $H^\infty$ 控制。
8. 主成分分析。

## **Kai**

### (1) Higher-order functions

高階関数は、関数を引数として受け取るか、関数を結果として返す関数である。例えば `map` は処理を表す関数と対象の列を受け取り、各要素へ処理を適用する。Pythonの `list(map(lambda x: x*x, [1,2,3]))` は `[1,4,9]` となる。共通の反復や集約の骨組みを一度記述し、個々の処理を関数として差し替えられるため、再利用性が高まる。関数を値として扱うことと、その関数が副作用を持たないことは別の性質である。


### (2) PKI (Public Key Infrastructure)


PKIは、公開鍵とその所有者・主体との対応を確認し、公開鍵を運用するための制度と技術の基盤である。認証局CAが公開鍵証明書へ署名し、検証側は信頼する起点からの証明書連鎖、署名、名前、用途、有効期間などを検査する。失効や鍵更新、登録時の本人・組織確認も管理対象となる。これにより通信相手の認証や電子署名の検証で、受け取った公開鍵を誰のものとして扱えるかを判断する。証明書があるだけでデータが自動的に暗号化されるわけではない。[RFC 5280](https://www.rfc-editor.org/rfc/rfc5280.html)はX.509証明書と認証経路検証を規定している。

### (3) AS numbers

AS番号は、共通の明確な経路制御方針を持つネットワーク群である自律システムを識別する番号である。BGPでは経路広告のAS_PATH等に使われ、経由したASの記録、ループ検出、経路方針の適用に役立つ。従来の16ビット番号に加えて32ビット番号があり、公的な割当てはIANAから地域インターネットレジストリ等を通して管理される。私用・予約の番号もあるため、全ての番号を任意に公開利用できるわけではない。個々のホストのIPアドレスやルータIDとは異なる。[IANAのAS番号レジストリ](https://www.iana.org/assignments/as-numbers)は、両サイズの番号と割当て体系を掲載している。

### (4) Localization and mapping

移動ロボットが未知の環境で、自分の位置・姿勢と環境地図を同時に推定する問題をSLAMという。車輪の移動量やIMUによる運動予測に、カメラ・LiDAR等で観測した特徴点や距離を組み合わせる。自己位置が分かれば地図を作りやすく、地図が分かれば自己位置を求めやすいという相互依存を、確率推定や最適化で解く。代表的な方法にはEKF、粒子フィルタ、姿勢グラフ最適化等がある。以前の場所への再訪を検出するループ閉じ込みは累積誤差の抑制に役立つが、誤った対応付けを避ける必要がある。外部基準がなければ地図全体の絶対位置・向き等には任意性が残る。

### (5) Representation of articulated links

各剛体リンクへ座標系を取り付け、隣接リンク間の回転と並進を4×4同次変換で表す方法がある。標準DH法では関節角 $\theta_i$、軸方向距離 $d_i$、リンク長 $a_i$、ねじれ角 $\alpha_i$ の4パラメータを用い、規約に従って

$$T_{i-1,i}=R_z(\theta_i)T_z(d_i)T_x(a_i)R_x(\alpha_i)$$

と表せる。回転関節では通常 $\theta_i$、直動関節では $d_i$ が関節変数となる。基部から先端までの変換はこれらの行列の順序付き積で求める。座標系の置き方や標準DH／修正DHの規約を混ぜず、固定変換も含めて接続関係を明記することが大切である。

### (6) Generalized inverse or pseudoinverse

非正方形や階数不足の行列でも逆行列に似た操作を行うために一般化逆行列を用いる。実行列 $A$ のMoore–Penrose逆 $A^+$ は、$AA^+A=A$, $A^+AA^+=A^+$ と、$AA^+$ および $A^+A$ が対称であるという4条件により一意に決まる。特異値分解 $A=U\Sigma V^{\mathsf T}$ から、非零特異値だけを逆数にした $\Sigma^+$ を使い $A^+=V\Sigma^+U^{\mathsf T}$ と構成する。$x=A^+b$ は最小二乗解のうちユークリッドノルムが最小の解である。列が独立なら $(A^{\mathsf T}A)^{-1}A^{\mathsf T}$ と書けるが、階数不足の場合にこの式の逆行列を用いてはならない。

### (7) H-infinity control

$H^\infty$ 制御は、閉ループを内部安定にしつつ、外乱から評価出力への最悪の増幅率を小さくする制御器設計である。安定な伝達行列 $T_{zw}$ の指標は

$$\|T_{zw}\|_\infty=\sup_{\omega}\sigma_{\max}(T_{zw}(j\omega))$$

であり、零初期状態での入力・出力の $L^2$ ノルム比の上限とも解釈できる。追従誤差、外乱抑制、入力の大きさなどを周波数重みで評価出力へ組み込み、このノルムを最小化、または指定値未満にする。適切に表したモデル不確かさに対するロバスト性も検討できるが、任意の非線形性・不確かさへの保証を意味するものではない。[MathWorksの設計解説](https://www.mathworks.com/help/robust/ref/dynamicsystem.hinfsyn.html)も安定化制御器とこの閉ループノルムを用いている。

### (8) Principal component analysis

主成分分析は、データを中心化し、分散の大きい方向を互いに直交する軸として選ぶ線形変換である。標本を行に並べた中心化行列 $X$ に対し、共分散行列 $C=X^{\mathsf T}X/(m-1)$ の固有ベクトルを、固有値の大きい順に主成分方向とする。上位 $k$ 方向への射影は多くの分散を保持し、同じ次元の直交射影の中で二乗再構成誤差を最小にする。次元削減、可視化、雑音成分の抑制などに利用できる。変数の単位や尺度で結果が変わるため、目的に応じて標準化を行う。教師ラベルを用いないので、最大分散の方向が必ず分類に最も有効とは限らない。
