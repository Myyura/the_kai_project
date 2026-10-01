---
sidebar_label: 2026年8月実施 5. 【選択問題】ネットワーク
sidebar_position: 5
tags:
  - Osaka-University
  - Computer-Science.Networks.Transmission-Control-Protocol-and-User-Datagram-Protocol
  - Computer-Science.Networks.Transmission-Control-Protocol-Congestion-Control
  - Computer-Science.Networks.OSI-Reference-Model
  - Computer-Science.Networks.Reliable-Data-Transfer
---
# 大阪大学 情報科学研究科 情報工学 2026年8月実施 5. 【選択問題】ネットワーク

## **Author**

[xxxuuu](https://github.com/xxxuuu)

## **Description**

配点：(1) 20，(2-1) 5，(2-2) 15，(2-3) 15，(3-1) 30，(3-2-1) 20，(3-2-2) 20

ネットワークに関する以下の各問に答えよ。

### (1)

以下は OSI 参照モデル（OSI reference model）の階層構造（layered structure）を示したものである。

<svg viewBox="0 0 700 470" width="100%" height="500" role="img" aria-labelledby="osi-model-title" preserveAspectRatio="xMidYMid meet">
  <title id="osi-model-title">OSI 参照モデルの階層構造</title>
  <g fill="none" stroke="currentColor" stroke-width="2"><rect x="65" y="20" width="570" height="420" /><line x1="65" y1="80" x2="635" y2="80" /><line x1="65" y1="140" x2="635" y2="140" /><line x1="65" y1="200" x2="635" y2="200" /><line x1="65" y1="260" x2="635" y2="260" /><line x1="65" y1="320" x2="635" y2="320" /><line x1="65" y1="380" x2="635" y2="380" /><rect x="165" y="215" width="390" height="30" /><rect x="165" y="275" width="390" height="30" /><rect x="165" y="335" width="390" height="30" /><rect x="165" y="395" width="390" height="30" /></g>
  <g fill="currentColor" font-family="serif" font-size="21"><text x="85" y="58">第7層 アプリケーション層（application layer）</text><text x="85" y="118">第6層 プレゼンテーション層（presentation layer）</text><text x="85" y="178">第5層 セッション層（session layer）</text><text x="85" y="238">第4層</text><text x="350" y="238" text-anchor="middle">（i）</text><text x="85" y="298">第3層</text><text x="350" y="298" text-anchor="middle">（ii）</text><text x="85" y="358">第2層</text><text x="350" y="358" text-anchor="middle">（iii）</text><text x="85" y="418">第1層</text><text x="350" y="418" text-anchor="middle">（iv）</text></g>
</svg>

空欄（i）～（iv）に当てはまる最も適切な用語を，以下の選択肢 (a)～(d) からそれぞれ選び，記号で答えよ。

(a) 物理層（physical layer）

(b) ネットワーク層（network layer）

(c) トランスポート層（transport layer）

(d) データリンク層（data link layer）

### (2)

以下は TCP（Transmission Control Protocol）セグメント（segment）の送受信の動作の説明である。以下の各小問に答えよ。

> 送信者（sender）：上位層から渡されたデータを最大セグメントサイズ以下に分割する。分割した各データ（data）に［α］と <u>（A）シーケンス番号（sequence number）</u>を含むヘッダ（header）を付加してセグメントを構築する。構築したセグメントを下位層に渡す。また，受信者（receiver）からの確認応答（acknowledgment）を管理し，必要に応じて <u>（B）再送（retransmission）</u>を行う。
>
> 受信者：下位層からセグメントを受け取ると，ヘッダに含まれる［α］によって <u>（C）対応するアプリケーションを識別</u>し，<u>（D）データを順序通りに再構成</u>する。再構成したデータは，上位層が受け取る。また，<u>（E）セグメントを受信したことを示す確認応答を送信者に送信</u>する。

#### (2-1)

空欄［α］を適切な用語で埋めよ。

#### (2-2)

下線部（A）～（E）の処理のうち，UDP（User Datagram Protocol）では行われない処理をすべて選び，記号で答えよ。

#### (2-3)

図1に，TCP セグメントのシーケンス番号と確認応答番号の関係を示す。図中の $S$ はセグメントのシーケンス番号を示し，$A$ は確認応答番号を示す。また，送信者が送信する各セグメントのペイロード（payload）のサイズはすべて1［バイト］(Byte) である。図中の空欄（a）～（c）に入る確認応答番号を示せ。

<svg viewBox="0 0 700 600" width="100%" height="600" role="img" aria-labelledby="network-figure-1-title" preserveAspectRatio="xMidYMid meet">
  <title id="network-figure-1-title">図1　TCP セグメントのシーケンス番号と確認応答番号の関係</title>
  <defs><marker id="arrow-n1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor" /></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="3">
    <line x1="180" y1="90" x2="180" y2="575" marker-end="url(#arrow-n1)" /><line x1="535" y1="90" x2="535" y2="575" marker-end="url(#arrow-n1)" />
    <line x1="180" y1="120" x2="205" y2="124.2" /><line x1="310" y1="142" x2="535" y2="180" marker-end="url(#arrow-n1)" /><line x1="180" y1="180" x2="205" y2="184.2" /><line x1="310" y1="202" x2="535" y2="240" marker-end="url(#arrow-n1)" /><line x1="180" y1="240" x2="205" y2="244.8" /><line x1="310" y1="265" x2="315" y2="266" /><line x1="330" y1="248" x2="350" y2="275" /><line x1="330" y1="275" x2="350" y2="248" /><line x1="180" y1="300" x2="205" y2="304.2" /><line x1="310" y1="322" x2="535" y2="360" marker-end="url(#arrow-n1)" />
    <line x1="535" y1="180" x2="291" y2="338" /><line x1="230" y1="377.6" x2="180" y2="410" marker-end="url(#arrow-n1)" /><line x1="535" y1="240" x2="338" y2="367.6" /><line x1="318.9" y1="380" x2="269.4" y2="412" /><line x1="230" y1="437.6" x2="180" y2="470" marker-end="url(#arrow-n1)" /><line x1="535" y1="360" x2="299.5" y2="486" /><line x1="230" y1="523.4" x2="180" y2="550" marker-end="url(#arrow-n1)" />
    <rect x="205" y="101" width="105" height="42" /><rect x="205" y="161" width="105" height="42" /><rect x="205" y="221" width="105" height="42" /><rect x="205" y="281" width="105" height="42" />
  </g>
  <g fill="none" stroke="currentColor" stroke-width="3">
    <rect x="230" y="338" width="108" height="42" /><rect x="230" y="412" width="108" height="42" /><rect x="230" y="486" width="108" height="42" />
  </g>
  <g fill="currentColor" font-family="serif" font-size="23"><text x="130" y="45">送信者</text><text x="120" y="75">（sender）</text><text x="495" y="45">受信者</text><text x="485" y="75">（receiver）</text><text x="220" y="130" font-style="italic">S=101</text><text x="220" y="190" font-style="italic">S=102</text><text x="220" y="250" font-style="italic">S=103</text><text x="220" y="310" font-style="italic">S=104</text><text x="360" y="258">損失</text><text x="360" y="286">（loss）</text><text x="245" y="367" font-style="italic">A=（a）</text><text x="245" y="441" font-style="italic">A=（b）</text><text x="245" y="515" font-style="italic">A=（c）</text></g>
</svg>

<div align="center">図1　TCP セグメントのシーケンス番号と確認応答番号の関係</div>

### (3)

TCP における輻輳制御（congestion control）に関する以下の各小問に答えよ。

#### (3-1)

タイムアウト（timeout）以外でセグメント損失の検知に用いられる条件を示せ。また，その条件によりセグメント損失が検知された場合と，タイムアウトによりセグメント損失が検知された場合について，それぞれにより推定される，受信者へのセグメントの到達状況をそれぞれ1～2行で説明せよ。

#### (3-2)

図2に示すネットワークにおいて，送信者から受信者にデータを送信する場合を考える。ただし，以下を仮定する。

- 送信者とルータ（router）$R_1$ の間のリンクの通信速度は $L_1$，ルータ $R_1$ とルータ $R_2$ の間のリンクの通信速度は $L_2$，ルータ $R_2$ と受信者の間のリンクの通信速度は $L_3$ であり，$L_1>L_2$，$L_3>L_2$ である。
- ルータのバッファ（buffer）に空きがない時に到着したパケット（packet）は破棄される。それ以外の要因でパケットの損失は発生しない。
- 送信者は，確認応答を受信していないセグメントのペイロードサイズの合計が輻輳ウィンドウサイズ（congestion window size）以下となる範囲内で，セグメントを送出し続ける。
- 送信者は，セグメント損失を検知しない限り，確認応答を受信するたびに輻輳ウィンドウサイズを大きくし，セグメント損失を検知すると輻輳ウィンドウサイズを減少させる。
- 受信者の広告ウィンドウサイズ（advertised window size）は十分に大きい。

以下の (3-2-1) と (3-2-2) に答えよ。

##### (3-2-1)

図2に示すネットワークにおいて，セグメント損失が発生するまでの過程を2～3行で説明せよ。

##### (3-2-2)

ルータ $R_1$ のバッファサイズの大小が，送信者がセグメントを送出してから受信者にセグメントが届くまでの時間にどのように影響を与えるか。理由とともに，2～3行で説明せよ。

<svg viewBox="0 0 1200 190" width="100%" height="190" role="img" aria-labelledby="network-figure-2-title" preserveAspectRatio="xMidYMid meet">
  <title id="network-figure-2-title">図2　ネットワーク</title>
  <g fill="none" stroke="currentColor" stroke-width="3"><rect x="25" y="80" width="145" height="70" rx="12" /><rect x="350" y="65" width="155" height="100" rx="12" /><rect x="695" y="65" width="155" height="100" rx="12" /><rect x="1030" y="80" width="145" height="70" rx="12" /></g>
  <g fill="none" stroke="currentColor" stroke-width="3"><line x1="170" y1="115" x2="350" y2="115" /><line x1="505" y1="115" x2="695" y2="115" /><line x1="850" y1="115" x2="1030" y2="115" /></g>
  <g fill="currentColor" font-family="serif" font-size="20" text-anchor="middle"><text x="97" y="108">送信者</text><text x="97" y="134">（Sender）</text><text x="427" y="103">ルータ R₁</text><text x="427" y="131">（Router R₁）</text><text x="772" y="103">ルータ R₂</text><text x="772" y="131">（Router R₂）</text><text x="1102" y="108">受信者</text><text x="1102" y="134">（Receiver）</text><text x="260" y="99">通信速度：L₁</text><text x="600" y="99">通信速度：L₂</text><text x="940" y="99">通信速度：L₃</text></g>
</svg>

<div align="center">図2　ネットワーク</div>
