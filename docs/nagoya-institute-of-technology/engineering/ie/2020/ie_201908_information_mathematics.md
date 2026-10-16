---
sidebar_label: "2019年8月実施 問題28 情報数学"
tags:
  - Nagoya-Institute-of-Technology
  - Computer-Science.Information-Theory.Mutual-Information
  - Discrete-Mathematics.Set-Theory.Cardinality
  - Operations-Research.Combinatorial-Optimization.Minimum-Spanning-Tree
  - Discrete-Mathematics.Graph-Theory.Spanning-Tree
---

# 名古屋工業大学 工学研究科 情報工学系 2019年8月実施 問題28 情報数学

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B7%A5%E6%A5%AD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E7%B3%BB/2020%E5%B9%B4%E5%BA%A6.html) refined with GPT 6 Astra)

## **Description**

### I

二つの確率変数 $X,Y$ は $A=\{1,2,\ldots,N\}$ の値を取る。同時確率を $P_{XY}(i,j)$、周辺確率を $P_X(i),P_Y(j)$、条件付き確率を $P_{X\mid Y}(i\mid j)$ とする。

1. $P_X(i)$ と $P_{X\mid Y}(i\mid j)$ を $P_{XY}$ のみを用いて表せ。
2. エントロピー $H(X)$ と条件付きエントロピー $H(X\mid Y)$ を $P_{XY}$ のみを用いて表せ。
3. 相互情報量を

$$
I(X;Y)=\sum_{i=1}^N\sum_{j=1}^N P_{XY}(i,j)\log_2\frac{P_{XY}(i,j)}{P_X(i)P_Y(j)}
$$

と定義する。この式から $I(X;Y)=H(X)-H(X\mid Y)$ を示せ。

4. Jensen の不等式を用いて $I(X;Y)\ge0$ を示せ。
5. $N=2$ の場合、$I(X;Y)$ が最小となる分布の例を一つ、理由とともに示せ。
6. $N=2$ の場合、$I(X;Y)$ が最大となる分布をすべて、理由とともに示せ。

5、6では次の行列形式を用いよ。

$$
P=\begin{pmatrix}P_{XY}(1,1)&P_{XY}(2,1)\\P_{XY}(1,2)&P_{XY}(2,2)\end{pmatrix}.
$$

### II

$\mathbb N$ を自然数の集合とし、自然数 $a,b$ は $2\le a\le5$、$b\le7$ を満たす。

$$
X_a=\{(x,y)\mid x,y\in\mathbb N,\ 1\le x\le a,\ 2\le y\le a\},\qquad
Y_b=\{(x,x)\mid x\in\mathbb N,\ b\le x\le7\}.
$$

1. $X_4\cap Y_3$ の全要素を列挙せよ。
2. $2\le b\le a$ のとき、$X_a\cup Y_b$ の要素数を $a,b$ の関数で表せ。
3. $f:X_a\cup Y_b\to\mathbb N$、$f((x,y))=x$ が単射となる $a,b$ の組をすべて答えよ。

### III

連結な無向グラフで閉路を持たないものを木と呼ぶ。

1. 頂点数6の木で、最大次数が最大となるものと最小となるものを一つずつ図示せよ。頂点や辺のラベルは不要である。
2. 任意の木 $T=(V,E)$ から任意の辺 $e$ を除いた $T-e=(V,E\setminus\{e\})$ が非連結となることを、背理法で証明せよ。
3. 下図の重み付き無向グラフの最小全域木を $T_{\min}$ とする。$T_{\min}$ で頂点 D に接続する辺をすべて列挙せよ。辺は両端のラベルを要素とする集合で表せ。

![重み付き無向グラフ](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/nagoya-institute-of-technology/engineering/ie/2020/nitech_201908_info_28_graph.png)

#### 题目描述

**I**：随机变量 $X,Y$ 取值于 $\{1,\ldots,N\}$，联合概率为 $P_{XY}(i,j)$。

1. 仅用联合概率写出边缘概率 $P_X(i)$ 和条件概率 $P_{X\mid Y}(i\mid j)$。
2. 仅用联合概率写出熵 $H(X)$ 与条件熵 $H(X\mid Y)$。
3. 从题给相互信息定义证明 $I(X;Y)=H(X)-H(X\mid Y)$。
4. 用 Jensen 不等式证明相互信息非负。
5. $N=2$ 时，举出使相互信息最小的一个分布并说明理由。
6. $N=2$ 时，给出使相互信息最大的全部分布并说明理由。后两问按题给矩阵形式作答（列对应 $X$，行对应 $Y$）。

**II**：自然数 $2\le a\le5,b\le7$，集合 $X_a,Y_b$ 定义见上式。

1. 列举 $X_4\cap Y_3$。
2. $2\le b\le a$ 时求 $|X_a\cup Y_b|$。
3. 求使映射 $(x,y)\mapsto x$ 为单射的全部 $(a,b)$。

**III**：树是连通且无环的无向图。

1. 分别画出六个顶点的树中，最大度达到最大、最小的例子。
2. 用反证法证明删除树的任意一条边都会使其不连通。
3. 对上图求最小生成树中与 D 相连的全部边，以两个端点组成的集合表示。

## **Kai**

### I (1)–(2)

$p_{ij}=P_{XY}(i,j)$ と略記する。周辺化と条件付き確率の定義より、

$$
\boxed{P_X(i)=\sum_jp_{ij},\qquad P_{X\mid Y}(i\mid j)=\frac{p_{ij}}{\sum_kp_{kj}}}.
$$

条件付き確率は $P_Y(j)>0$ の場合に定義する。エントロピーは

$$
\boxed{H(X)=-\sum_i\left(\sum_jp_{ij}\right)\log_2\left(\sum_jp_{ij}\right)},
$$

$$
\boxed{H(X\mid Y)=-\sum_{i,j:p_{ij}>0}p_{ij}\log_2\frac{p_{ij}}{\sum_kp_{kj}}}.
$$

$0\log0=0$ と約束する。

### I (3)

対数を分けて周辺化すると、

$$
\begin{aligned}
I(X;Y)&=-\sum_{i,j}p_{ij}\log_2P_X(i)
+\sum_{i,j:p_{ij}>0}p_{ij}\log_2\frac{p_{ij}}{P_Y(j)}\\
&=H(X)-H(X\mid Y).
\end{aligned}
$$

### I (4)

$q_{ij}=P_X(i)P_Y(j)$、$\mathcal S=\{(i,j):p_{ij}>0\}$ とする。$\log_2$ の凹性に Jensen の不等式を適用して、

$$
\begin{aligned}
I(X;Y)&=-\sum_{\mathcal S}p_{ij}\log_2\frac{q_{ij}}{p_{ij}}\\
&\ge-\log_2\left(\sum_{\mathcal S}q_{ij}\right)\ge-\log_21=0.
\end{aligned}
$$

最後の不等式は $\sum_{\mathcal S}q_{ij}\le\sum_{i,j}q_{ij}=1$ による。確率がゼロの組を除いているため、途中の和を常に1と置いてはいけない。

### I (5)

独立なら $p_{ij}=P_X(i)P_Y(j)$ で $I(X;Y)=0$。例えば

$$
\boxed{P=\begin{pmatrix}1/4&1/4\\1/4&1/4\end{pmatrix}}
$$

が最小値0を与える。

### I (6)

$0\le H(X\mid Y)$、$H(X)\le1$ より $I(X;Y)\le1$。等号には $X$ の一様性と、$Y$ から $X$ が確定することが必要十分である。二値の場合、その対応は恒等か交換の二通りしかないので、全解は

$$
\boxed{P=\begin{pmatrix}1/2&0\\0&1/2\end{pmatrix}\quad\text{または}\quad
P=\begin{pmatrix}0&1/2\\1/2&0\end{pmatrix}}.
$$

### II

(1) 共通の対角点は $\boxed{\{(3,3),(4,4)\}}$。

(2) $|X_a|=a(a-1)$、$|Y_b|=8-b$、$|X_a\cap Y_b|=a-b+1$ より、

$$
\boxed{|X_a\cup Y_b|=a(a-1)+(8-b)-(a-b+1)=a^2-2a+7}.
$$

(3) $a\ge3$ では $(1,2),(1,3)\in X_a$ が同じ値1に写り、単射にならない。$a=2$ なら $X_2=\{(1,2),(2,2)\}$。$b=1$ は $(1,1)$ との衝突を生じるが、$b\ge2$ では新たな衝突はない。したがって

$$
\boxed{(a,b)=(2,2),(2,3),(2,4),(2,5),(2,6),(2,7)}.
$$

### III (1)

最大次数の最大値は5で、星型の木 $K_{1,5}$ が実現する。最小値は2で、道 $P_6$ が実現する。最大次数が1以下のグラフは六頂点で連結になれない。

![六頂点の星型の木と道](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/nagoya-institute-of-technology/engineering/ie/2020/nitech_201908_info_28_trees.svg)

### III (2)

$e=\{u,v\}$ を除いても連結であると仮定する。そのとき $T-e$ 内に $u$ と $v$ を結ぶ道が存在する。その道に $e$ を加えると $T$ に閉路ができ、木の定義と矛盾する。よって $T-e$ は非連結である。

### III (3)

重みの小さい順に閉路を避けて辺を採用する。$AB(2),AD(3),BC(4),DF(5)$ を採用すると、$CF(6),BD(7)$ は閉路を作るので除外する。最後に $DE(8)$ を採用して六頂点を連結する。したがって D に接続する辺は

$$
\boxed{\{A,D\},\quad\{D,F\},\quad\{D,E\}}.
$$

## **Reference**

- [大学公式問題（10–11ページ（公式PDFの保存版））](https://web.archive.org/web/20210506151616id_/https://www.nitech.ac.jp/examination/test/files/2020joho.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B7%A5%E6%A5%AD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E7%B3%BB/2020%E5%B9%B4%E5%BA%A6.html)
