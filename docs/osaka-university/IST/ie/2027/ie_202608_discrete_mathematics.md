---
sidebar_label: 2026年8月実施 3. 【選択問題】離散構造
sidebar_position: 3
tags:
  - Osaka-University
  - Discrete-Mathematics.Graph-Theory
  - Discrete-Mathematics.Graph-Theory.Graph-Basics
  - Discrete-Mathematics.Graph-Theory.Connectivity
---
# 大阪大学 情報科学研究科 情報工学 2026年8月実施 3. 【選択問題】離散構造

## **Author**

[xxxuuu](https://github.com/xxxuuu)

## **Description**

配点：(1-1) 30，(1-2) 20，(1-3) 20，(2-1) 20，(2-2) 20，(2-3) 15

本問題で取り扱われるすべてのグラフ（graph）は無向グラフ（undirected graph）であり，多重辺（parallel edge）や自己ループ（self-loop）を持たないものとする。グラフ $G$ は頂点（vertex）の有限集合（finite set）$V$，および異なる頂点の非順序対（unordered pair）の集まりである辺集合（edge set）$E$ の対（pair）により $G=(V,E)$ と表される。記号 $\emptyset$ は空集合（empty set）を表すものとする。グラフ $G=(V,E)$ および $G'=(V',E')$ が $V'\subseteq V$，$E'\subseteq E$ を満たすとき，$G'$ を $G$ の部分グラフ（subgraph）と呼び，$G'\subseteq G$ で表すものとする。また，特に部分集合 $V'\subseteq V$ に対して，$E'=\{\{x,y\}\mid x,y\in V'\text{ かつ }\{x,y\}\in E\}$ として定まる $G'=(V',E')$ を，$V'$ により誘導される（induced by $V'$）$G$ の部分グラフと呼び，$I_G(V')$ で表すものとする。

すべての頂点の次数（degree）が2の連結な（connected）グラフを閉路グラフ（cycle graph）と呼び，$C$ をすべての閉路グラフからなる集合とする。また，グラフ $G$ の部分グラフであり，かつ $C$ に属するものを $G$ の部分閉路グラフ（cycle subgraph）と呼ぶ。

$G=(V,E)$ とその部分閉路グラフ $H=(V',E')$ について，辺 $\{x,y\}\in E$ が以下の三つの条件を満たすとき，$\{x,y\}$ を $H$ の弦（chord）と呼ぶ。

- $\{x,y\}\in E$
- $\{x,y\}\notin E'$
- $x,y\in V'$

グラフ $G$ において，頂点数4以上のすべての部分閉路グラフが弦を持つとき，$G$ を弦グラフ（chordal graph）と呼ぶ。以下の各問に答えよ。

### (1)

以下の各小問に答えよ。

#### (1-1)

$G=(\{a,b,c,d,e,f,g,h,i,j\},E)$ を図1に示すグラフとする。(a)～(c)に挙げる $G$ の部分グラフをそれぞれ図示せよ。該当する部分グラフが複数存在する場合は任意の一つを図示すればよい。図中の頂点には頂点ラベルを付記すること。

(a) 頂点数3の部分集合により誘導される $G$ の部分グラフのうち，辺数最大のもの。

(b) 頂点数3の部分集合により誘導される $G$ の部分グラフのうち，辺数最小のもの。

(c) 弦を持つ部分閉路グラフ。

<svg viewBox="0 0 420 280" width="100%" height="280" role="img" aria-labelledby="figure-1-title" preserveAspectRatio="xMidYMid meet">
  <title id="figure-1-title">図1　頂点 a から j までを持つグラフ G</title>
  <g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" vector-effect="non-scaling-stroke">
    <line x1="210" y1="30" x2="165" y2="80" />
    <line x1="210" y1="30" x2="255" y2="80" />
    <line x1="210" y1="30" x2="210" y2="130" />
    <line x1="165" y1="80" x2="255" y2="80" />
    <line x1="165" y1="80" x2="210" y2="130" />
    <line x1="255" y1="80" x2="210" y2="130" />
    <line x1="210" y1="130" x2="150" y2="200" />
    <line x1="210" y1="130" x2="270" y2="200" />
    <line x1="150" y1="200" x2="270" y2="200" />
    <line x1="150" y1="200" x2="90" y2="160" />
    <line x1="150" y1="200" x2="90" y2="240" />
    <line x1="90" y1="160" x2="90" y2="240" />
    <line x1="270" y1="200" x2="330" y2="160" />
    <line x1="270" y1="200" x2="330" y2="240" />
    <line x1="330" y1="160" x2="330" y2="240" />
  </g>
  <g fill="var(--ifm-background-surface-color)" stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke">
    <circle cx="210" cy="30" r="11" />
    <circle cx="165" cy="80" r="11" />
    <circle cx="255" cy="80" r="11" />
    <circle cx="210" cy="130" r="11" />
    <circle cx="150" cy="200" r="11" />
    <circle cx="270" cy="200" r="11" />
    <circle cx="90" cy="160" r="11" />
    <circle cx="90" cy="240" r="11" />
    <circle cx="330" cy="160" r="11" />
    <circle cx="330" cy="240" r="11" />
  </g>
  <g fill="currentColor" font-family="serif" font-size="22" font-style="italic">
    <text x="190" y="22">g</text>
    <text x="142" y="76">e</text>
    <text x="273" y="76">f</text>
    <text x="181" y="145">d</text>
    <text x="137" y="228">c</text>
    <text x="272" y="228">h</text>
    <text x="65" y="156">a</text>
    <text x="65" y="260">b</text>
    <text x="347" y="156">i</text>
    <text x="347" y="260">j</text>
  </g>
</svg>

<div align="center">図1</div>

#### (1-2)

図2に示すグラフ $G_1$，$G_2$，$G_3$，$G_4$ のうち，弦グラフであるものをすべて挙げよ。

<svg viewBox="0 0 920 260" width="100%" height="260" role="img" aria-labelledby="figure-2-title" preserveAspectRatio="xMidYMid meet">
  <title id="figure-2-title">図2　グラフ G1，G2，G3，G4</title>
  <g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" vector-effect="non-scaling-stroke">
    <line x1="120" y1="40" x2="60" y2="105" />
    <line x1="120" y1="40" x2="180" y2="105" />
    <line x1="120" y1="40" x2="80" y2="180" />
    <line x1="120" y1="40" x2="160" y2="180" />
    <line x1="60" y1="105" x2="80" y2="180" />
    <line x1="60" y1="105" x2="160" y2="180" />
    <line x1="180" y1="105" x2="160" y2="180" />
    <line x1="350" y1="40" x2="290" y2="100" />
    <line x1="350" y1="40" x2="410" y2="100" />
    <line x1="350" y1="40" x2="390" y2="180" />
    <line x1="290" y1="100" x2="310" y2="180" />
    <line x1="290" y1="100" x2="390" y2="180" />
    <line x1="310" y1="180" x2="390" y2="180" />
    <line x1="310" y1="180" x2="410" y2="100" />
    <line x1="520" y1="100" x2="545" y2="180" />
    <line x1="545" y1="180" x2="575" y2="40" />
    <line x1="575" y1="40" x2="650" y2="100" />
    <line x1="650" y1="100" x2="630" y2="180" />
    <line x1="575" y1="40" x2="630" y2="180" />
    <line x1="745" y1="100" x2="770" y2="180" />
    <line x1="745" y1="100" x2="850" y2="180" />
    <line x1="815" y1="40" x2="770" y2="180" />
    <line x1="815" y1="40" x2="850" y2="180" />
    <line x1="815" y1="40" x2="875" y2="100" />
    <line x1="770" y1="180" x2="875" y2="100" />
    <line x1="875" y1="100" x2="850" y2="180" />
  </g>
  <g fill="var(--ifm-background-surface-color)" stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke">
    <circle cx="120" cy="40" r="10" />
    <circle cx="60" cy="105" r="10" />
    <circle cx="180" cy="105" r="10" />
    <circle cx="80" cy="180" r="10" />
    <circle cx="160" cy="180" r="10" />
    <circle cx="350" cy="40" r="10" />
    <circle cx="290" cy="100" r="10" />
    <circle cx="410" cy="100" r="10" />
    <circle cx="310" cy="180" r="10" />
    <circle cx="390" cy="180" r="10" />
    <circle cx="575" cy="40" r="10" />
    <circle cx="520" cy="100" r="10" />
    <circle cx="650" cy="100" r="10" />
    <circle cx="545" cy="180" r="10" />
    <circle cx="630" cy="180" r="10" />
    <circle cx="815" cy="40" r="10" />
    <circle cx="745" cy="100" r="10" />
    <circle cx="875" cy="100" r="10" />
    <circle cx="770" cy="180" r="10" />
    <circle cx="850" cy="180" r="10" />
  </g>
  <g fill="currentColor" font-family="serif" font-size="24" font-style="italic" text-anchor="middle">
    <text x="120" y="235">G₁</text>
    <text x="350" y="235">G₂</text>
    <text x="585" y="235">G₃</text>
    <text x="815" y="235">G₄</text>
  </g>
</svg>

<div align="center">図2</div>

#### (1-3)

以下の論理式が，命題「$G=(V,E)$ が弦グラフである」と同値になるように，空欄（A）を適切に埋めよ。数学記号だけでなく，日本語，英語を用いて解答してもよい。また，同値になる理由も2，3行で説明せよ。

$$
\forall S\subseteq V:\left(I_G(S)\in C\Rightarrow\boxed{\text{(A)}}\right)
$$

### (2)

二つの実数（real number）$x,y$（$x\leq y$）について，$x$ 以上 $y$ 以下の実数すべてからなる集合を閉区間（closed interval）と呼び，$[x,y]$ で表す。相異なる閉区間の集合 $S=\{[a_0,b_0],[a_1,b_1],\ldots,[a_{n-1},b_{n-1}]\}$（$n\geq1$）に対して，以下のように頂点集合 $V$ および辺集合 $E$ を定めて得られるグラフ $G=(V,E)$ を $S$ に対する区間グラフ（interval graph）と呼ぶ。

$$
V=S,
$$

$$
E=\left\{\left\{[a_i,b_i],[a_j,b_j]\right\}\mid i\ne j\text{ かつ }[a_i,b_i]\cap[a_j,b_j]\ne\emptyset\right\}.
$$

このとき，以下の各小問に答えよ。

#### (2-1)

$S=\{[1,3],[2,5],[4,7],[6,8],[2,7]\}$ に対する区間グラフを図示せよ。ただし，どの頂点がどの区間に対応するかを明記すること。

#### (2-2)

$S=\{[p_0,q_0],[p_1,q_1],\ldots,[p_{n-1},q_{n-1}]\}$（$n\geq1$）を相異なる閉区間からなる任意の集合とする。$S$ に対する区間グラフ $G=(V,E)$ が連結のとき，以下の式が成り立つことを示せ。

$$
\left[\left(\min_{0\leq i\leq n-1}p_i\right),\left(\max_{0\leq i\leq n-1}q_i\right)\right]
=\bigcup_{0\leq i\leq n-1}[p_i,q_i].
$$

#### (2-3)

任意の連結な区間グラフは弦グラフであることを証明せよ。ただし，必要ならば小問（2-2）の事実を用いてもよいものとする。
