---
sidebar_label: 2021年7月実施 ネットワーク
tags:
  - Osaka-University
  - Computer-Science.Networks.Distance-Vector-and-Link-State-Routing
  - Computer-Science.Information-Theory.Instantaneous-Code
  - Computer-Science.Information-Theory.Source-Coding
  - Computer-Science.Information-Theory.Kraft-Inequality-for-Binary-Trees
---
# 大阪大学 情報科学研究科 情報工学 2021年7月実施 ネットワーク

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

**【選択問題】ネットワーク**

配点：(1-1) 25，(1-2) 25，(1-3) 35，(2-1) 10，(2-2) 10，(2-3) 20

(1) $2n+1$ 個のノード (node) がリング (ring) 状に接続されたネットワークにおける経路制御 (routing) を考える。$n$ は正の整数であり，以下の図は $n=2$ とした5ノードのネットワークである。各ノード $i$ ($1\le i\le2n+1$) は，三つのインターフェース (interface) IF#0〜IF#2を持ち，IF#0は自身のローカルネットワーク (local network) $LN_i$ に接続されている。IF#1は時計回り (clockwise) 方向，IF#2は反時計回り (counter-clockwise) 方向のノードに接続されている。各リンク (link) のコスト (cost) は1とする。以下の各小問に答えよ。

![5ノードのネットワーク](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/IST/ie/2022/ie_202107_network_figure_1.png)

(1-1) 距離ベクトル (distance vector) 型プロトコル (protocol) により最小コスト (minimum cost) 経路を求めることを考える。時刻ステップ (time step) $t$ が1経過すると，隣接ノード間の経路情報交換 (routing information exchange) が完了するものとする。

$n=2$ である時，時刻ステップ $t=1,2$ それぞれにおいて，ノード1が保持する経路表 (routing table) を示せ。時刻ステップ $t$ が0である時の各ノード $i$ ($1\le i\le5$) の経路表のエントリー (entry) の数は1であるとし，経路表は以下の表で与えられるものとする。

| 宛先 (destination) | インターフェース (interface) | 到達コスト (cost to reach) |
|---|---|---:|
| $LN_i$ | IF#0 | 1 |

(1-2) 各ノードの経路表のエントリーの最大数を2としつつ，すべてのローカルネットワーク間でパケット (packet) 送受信を可能とする経路表を考える。ノード1が保持すべき経路表を一つ提示せよ。また，あるパケットが経由するリンク数を経路長 (path length) とし，その最大値である最大経路長 (maximum path length) を $n$ を用いて表せ。

(1-3) 各ノードの経路表のエントリーの最大数を $k$ ($k\ge2$) としつつ，すべてのローカルネットワーク間でパケット送受信を可能とし，さらに，最大経路長を最小とする経路表を考える。最大経路長を $n$ および $k$ を用いて表せ。導出過程も示すこと。

(2) 情報源アルファベット (source alphabet) $A=\{a,b,c,d,e,f\}$ を符号化 (coding) するための符号 (code) $C_1,C_2,C_3,C_4,C_5$ が以下の表で与えられている。以下の各小問に答えよ。

| $A$ | $C_1$ | $C_2$ | $C_3$ | $C_4$ | $C_5$ |
|---|---|---|---|---|---|
| $a$ | 111 | 000 | 01 | 100 | 11 |
| $b$ | 011 | 001 | 1 | 10 | 01 |
| $c$ | 01 | 010 | 11 | 000 | 10 |
| $d$ | 00 | 011 | 101 | 01 | 001 |
| $e$ | 010 | 100 | 00 | 110 | 000 |
| $f$ | 110 | 101 | 100 | 001 | 011 |

(2-1) 符号 $C_1,C_2,C_3,C_4,C_5$ のうち，瞬時に復号可能 (instantaneously decodable) なものをすべて答えよ。瞬時に復号可能な符号は，語頭符号 (prefix code) とも呼ばれる。

(2-2) 符号 $C_1,C_2,C_3,C_4,C_5$ のうち，一意に復号可能 (uniquely decodable) なものをすべて答えよ。

(2-3) 以下の文章の空欄 (a)，(b)，(c) に当てはまる最も適切な数式または文を，下記の選択肢 (ア)〜(ケ) の中から一つ選び，その記号を答えよ。

情報源アルファベット $\mathcal X$ に対する2元符号 (binary code) $C$ において，各 $x\in\mathcal X$ に対する符号語 (codeword) の長さを $\ell(x)$ と表す。このとき，$\boxed{\mathrm{(a)}}$ はクラフトの不等式 (Kraft's inequality) と呼ばれており，符号 $C$ は，$\boxed{\mathrm{(b)}}$。また，$\mathcal X$ 上の記憶のない情報源 (memoryless information source) $X$ のエントロピー (entropy) $H(X)$ ならびに $X$ に対する符号 $C$ の平均符号語長 (average codeword length) $L_C(X)$ を，それぞれ

$$
\begin{aligned}
H(X)&=-\sum_{x\in\mathcal X}P_X(x)\log_2 P_X(x),\\
L_C(X)&=\sum_{x\in\mathcal X}P_X(x)\ell(x)
\end{aligned}
$$

と定める。ただし，$P_X(x)$ は情報源 $X$ が値 $x\in\mathcal X$ をとる確率 (probability) である。このとき，一意に復号可能な符号 $C$ の平均符号語長に関し，不等式 $\boxed{\mathrm{(c)}}$ が必ず成り立つ。

選択肢：

- (ア) $\displaystyle\sum_{x\in\mathcal X}1/\ell(x)>1$
- (イ) $\displaystyle\sum_{x\in\mathcal X}1/\log_2\ell(x)\le1$
- (ウ) $\displaystyle\sum_{x\in\mathcal X}2^{-\ell(x)}\le1$
- (エ) クラフトの不等式を満たすとき，かつそのときに限り，瞬時に復号可能である
- (オ) クラフトの不等式を満たすが，瞬時に復号可能でない場合がある
- (カ) 瞬時に復号可能であるが，クラフトの不等式を満たさない場合がある
- (キ) $L_C(X)\ge H(X)$
- (ク) $L_C(X)<H(X)+1$
- (ケ) $L_C(X)\le H(X)$

### 题目描述

**【选答题】网络**

分值：(1-1) 25，(1-2) 25，(1-3) 35，(2-1) 10，(2-2) 10，(2-3) 20

(1) 考虑由 $2n+1$ 个结点构成的环形网络中的路由控制，$n$ 为正整数。下图为 $n=2$ 时由5个结点构成的网络。每个结点 $i$ ($1\le i\le2n+1$) 有 IF#0、IF#1、IF#2 三个接口；IF#0连接自身的局域网 $LN_i$，IF#1连接顺时针方向的结点，IF#2连接逆时针方向的结点。每条链路的成本均为1。回答下列问题。

![5结点网络](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/IST/ie/2022/ie_202107_network_figure_1.png)

(1-1) 考虑用距离向量型协议求最小成本路由。每经过一个时间步，邻接结点之间完成一次路由信息交换。

当 $n=2$ 时，分别给出时间步 $t=1,2$ 时结点1的路由表。在 $t=0$ 时，各结点 $i$ ($1\le i\le5$) 的路由表只有一个条目，具体如下。

| 目的地 | 接口 | 到达成本 |
|---|---|---:|
| $LN_i$ | IF#0 | 1 |

(1-2) 将每个结点的路由表条目数限制为最多2条，同时保证所有局域网之间都能发送和接收分组。请给出一种结点1应持有的路由表。将一个分组经过的链路数定义为路径长度，用 $n$ 表示其中的最大值，即最大路径长度。

(1-3) 将每个结点的路由表条目数限制为最多 $k$ 条 ($k\ge2$)，同时保证所有局域网之间都能发送和接收分组，并使最大路径长度最小。请用 $n,k$ 表示该最大路径长度，并给出推导过程。

(2) 为信源字母表 $A=\{a,b,c,d,e,f\}$ 编码的 $C_1,C_2,C_3,C_4,C_5$ 如下表。回答下列问题。

| $A$ | $C_1$ | $C_2$ | $C_3$ | $C_4$ | $C_5$ |
|---|---|---|---|---|---|
| $a$ | 111 | 000 | 01 | 100 | 11 |
| $b$ | 011 | 001 | 1 | 10 | 01 |
| $c$ | 01 | 010 | 11 | 000 | 10 |
| $d$ | 00 | 011 | 101 | 01 | 001 |
| $e$ | 010 | 100 | 00 | 110 | 000 |
| $f$ | 110 | 101 | 100 | 001 | 011 |

(2-1) 列出 $C_1,C_2,C_3,C_4,C_5$ 中所有可即时译码的编码。可即时译码的编码也称为前缀码。

(2-2) 列出 $C_1,C_2,C_3,C_4,C_5$ 中所有可唯一译码的编码。

(2-3) 对下文空格 (a)、(b)、(c)，分别从 (ア) 至 (ケ) 中选择最合适的公式或句子，回答其符号。

对于信源字母表 $\mathcal X$ 上的二元码 $C$，将每个 $x\in\mathcal X$ 对应码字的长度记为 $\ell(x)$。$\boxed{\mathrm{(a)}}$ 称为 Kraft 不等式，编码 $C$ 满足 $\boxed{\mathrm{(b)}}$。对于 $\mathcal X$ 上的无记忆信源 $X$，其熵 $H(X)$ 及编码 $C$ 对应的平均码长 $L_C(X)$ 分别定义为

$$
\begin{aligned}
H(X)&=-\sum_{x\in\mathcal X}P_X(x)\log_2 P_X(x),\\
L_C(X)&=\sum_{x\in\mathcal X}P_X(x)\ell(x)
\end{aligned}
$$

其中 $P_X(x)$ 是信源 $X$ 取值 $x\in\mathcal X$ 的概率。此时，可唯一译码的编码 $C$ 的平均码长必定满足不等式 $\boxed{\mathrm{(c)}}$。

选项：

- (ア) $\displaystyle\sum_{x\in\mathcal X}1/\ell(x)>1$
- (イ) $\displaystyle\sum_{x\in\mathcal X}1/\log_2\ell(x)\le1$
- (ウ) $\displaystyle\sum_{x\in\mathcal X}2^{-\ell(x)}\le1$
- (エ) 当且仅当满足 Kraft 不等式时才可即时译码
- (オ) 可能满足 Kraft 不等式却不可即时译码
- (カ) 可能可即时译码却不满足 Kraft 不等式
- (キ) $L_C(X)\ge H(X)$
- (ク) $L_C(X)<H(X)+1$
- (ケ) $L_C(X)\le H(X)$

## **Kai**

### (1)

#### (1-1)

$t=1$ の経路表は

| 宛先 | インターフェース | 到達コスト |
|---|---|---:|
| $LN_1$ | IF#0 | 1 |
| $LN_2$ | IF#1 | 2 |
| $LN_5$ | IF#2 | 2 |

$t=2$ の経路表は

| 宛先 | インターフェース | 到達コスト |
|---|---|---:|
| $LN_1$ | IF#0 | 1 |
| $LN_2$ | IF#1 | 2 |
| $LN_3$ | IF#1 | 3 |
| $LN_4$ | IF#2 | 3 |
| $LN_5$ | IF#2 | 2 |

である。

#### (1-2)

各ノードで自分のローカルネットワークへの経路と、時計回りのデフォルト経路を持てばよい。ノード1では

| 宛先 | インターフェース | 到達コスト |
|---|---|---:|
| $LN_1$ | IF#0 | 1 |
| その他（default） | IF#1 | — |

となる。リング上の最悪の転送は $2n$ リンクであり、送信元と宛先のローカルネットワーク接続を各1本含むため

$$
\boxed{L_{\max}=2n+2}.
$$

#### (1-3)

ノード $i$ で、自分宛、時計回りのdefault、および反時計回りに近い

$$
LN_{i-1},LN_{i-2},\ldots,LN_{i-m},\qquad m=\min(k-2,n)
$$

への個別経路を持つ。個別経路のない最遠宛先まで時計回りに $2n-m$ リンクを要し、完全な経路表でもリングの直径 $n$ 未満にはできない。したがってリング内の最小最大長は

$$
\max\{n,2n+2-k\}.
$$

両端のローカルネットワーク接続を加えて

$$
\boxed{L_{\max}^{*}=\max\{n,2n+2-k\}+2}.
$$

追加できる個別経路は高々 $k-2$ 個なので、最大迂回距離の大きい宛先から割り当てても $2n+2-k$ の下界が残る。上の構成はこの下界を達成する。

### (2)

#### (2-1)

$C_2$ は固定長である。他の符号にはそれぞれ接頭語関係がある。したがって

$$
\boxed{C_2}
$$

のみである。

#### (2-2)

Sardinas–Patterson法で $C_1$ は

$$
S_1=\{0,1\},\qquad S_2=\{0,1,10,11\},\qquad S_3=S_2
$$

となり、空語を含まないので一意復号可能である。$C_2$ も固定長なので一意復号可能である。一方

$$
\begin{aligned}
C_3 &: d=101=1\,01=ba,\\
C_4 &: ad=100\,01=10\,001=bf,\\
C_5 &: ff=011\,011=01\,10\,11=bca
\end{aligned}
$$

という反例がある。よって

$$
\boxed{C_1,C_2}.
$$

#### (2-3)

クラフトの不等式は $\sum_x2^{-\ell(x)}\le1$ である。これは与えられた符号自体の瞬時復号可能性の十分条件ではない。また、一意復号可能な符号には $L_C(X)\ge H(X)$ が成立する。したがって

$$
\boxed{(a)=\text{ウ},\qquad(b)=\text{オ},\qquad(c)=\text{キ}}.
$$

## **Reference**

- [大阪大学公式原題（PDF 9, 10ページ）](https://www.ist.osaka-u.ac.jp/files/examinees/admission/past-exam/5_Information%20engineering_2022_JA.pdf)
