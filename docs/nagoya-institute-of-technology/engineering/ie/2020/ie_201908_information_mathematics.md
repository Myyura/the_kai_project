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

設問すべてについて解答すること。

### I

アルファベット $A=\{1,2,\ldots,N\}$ を取り得る $2$ つの確率変数 $X,Y$ が存在し、その同時確率は $P_{XY}(i,j)$、$i,j\in A$ で与えられるものとする。また、周辺化された $X,Y$ の確率をそれぞれ $P_X(i)$、$i\in A$ および $P_Y(j)$、$j\in A$ と表記し、$Y$ が与えられたときの $X$ の条件付き確率を $P_{X\mid Y}(i\mid j)$、$i,j\in A$ と表すこととする。以下の問いに答えよ。

(1) $P_X(i)$ および $P_{X\mid Y}(i\mid j)$ を、$P_{XY}(i,j)$ のみを用いて表せ。

(2) エントロピー $H(X)$ および条件付きエントロピー $H(X\mid Y)$ を、$P_{XY}(i,j)$ のみを用いて表せ。

(3) 相互情報量 $I(X;Y)$ は以下のダイバージェンスとして定義される。

$$
\begin{aligned}
I(X;Y)&=D(P_{XY}(i,j)\parallel P_X(i)P_Y(j))\\
&=\sum_{i=1}^N\sum_{j=1}^N P_{XY}(i,j)\log_2\frac{P_{XY}(i,j)}{P_X(i)P_Y(j)}.
\end{aligned}
$$

この定義式から $I(X;Y)=H(X)-H(X\mid Y)$ であることを示せ。

(4) 相互情報量 $I(X;Y)$ が非負であることをイェンゼン（Jensen）の不等式を用いて示せ。

(5) $N=2$ としたとき、相互情報量 $I(X;Y)$ が最小となる確率分布 $P_{XY}(i,j)$ の例を $1$ つ、理由とともに示せ。ただし、確率分布は以下の行列 $P$ の形式で記述すること。

$$
P=\begin{pmatrix}P_{XY}(1,1)&P_{XY}(2,1)\\P_{XY}(1,2)&P_{XY}(2,2)\end{pmatrix}
$$

(6) $N=2$ としたとき、相互情報量 $I(X;Y)$ が最大となる確率分布 $P_{XY}(i,j)$ をすべて、理由とともに示せ。ただし、確率分布は行列 $P$ の形式で記述すること。

### II

$\mathbb N$ を自然数の集合とし、$a,b$ をそれぞれ $2\le a\le5$、$b\le7$ を満たす自然数とする。$\mathbb N\times\mathbb N$ の部分集合として

$$
\begin{aligned}
X_a&=\{(x,y)\mid x,y\in\mathbb N,1\le x\le a,2\le y\le a\},\\
Y_b&=\{(x,x)\mid x\in\mathbb N,b\le x\le7\}
\end{aligned}
$$

を定めるとき、以下の問いに答えよ。

(1) $X_4\cap Y_3$ に含まれる要素をすべて列挙せよ。

(2) $2\le b\le a$ であるとき、$X_a\cup Y_b$ の要素数を $a,b$ の関数として表せ。

(3) 写像 $f:X_a\cup Y_b\to\mathbb N$ を $f((x,y))=x$ と定義するとき、$f$ が単射となるような $a,b$ の組をすべて答えよ。

### III

連結な無向グラフで閉路を持たないようなものを木と呼ぶ。このとき以下の問いに答えよ。

(1) 頂点数 $6$ の木で、その最大次数が最大となるもの、および最小となるものをそれぞれ $1$ つずつ図示せよ。記載する図において、頂点および辺にラベルを書き入れる必要はない。

(2) グラフ $T=(V,E)$ を任意の木とする。$T$ 中の任意の辺 $e\in E$ を除去して得られるグラフ $T-e=(V,E\setminus\{e\})$ が必ず非連結になることを、背理法を用いて証明せよ。

(3) 以下の重み付き無向グラフを考える。

![重み付き無向グラフ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-institute-of-technology/engineering/ie/2020/nitech_201908_info_28_graph.png)

このグラフの最小全域木（最小生成木）を $T_{\min}$ とする。$T_{\min}$ において頂点 D に接続している辺をすべて列挙せよ。ただし、グラフ中の各辺はその両端点のラベル $2$ つを要素とする集合で表現すること。

### 题目描述

回答全部问题。

**I** 设随机变量 $X,Y$ 的取值字母表为 $A=\{1,2,\ldots,N\}$，其联合概率为 $P_{XY}(i,j)$（$i,j\in A$）。将 $X,Y$ 的边缘概率分别记为 $P_X(i)$（$i\in A$）、$P_Y(j)$（$j\in A$），给定 $Y$ 时 $X$ 的条件概率记为 $P_{X\mid Y}(i\mid j)$（$i,j\in A$）。回答以下问题。

(1) 仅用 $P_{XY}(i,j)$ 表示 $P_X(i)$ 和 $P_{X\mid Y}(i\mid j)$。

(2) 仅用 $P_{XY}(i,j)$ 表示熵 $H(X)$ 和条件熵 $H(X\mid Y)$。

(3) 互信息 $I(X;Y)$ 定义为下列散度：

$$
\begin{aligned}
I(X;Y)&=D(P_{XY}(i,j)\parallel P_X(i)P_Y(j))\\
&=\sum_{i=1}^N\sum_{j=1}^N P_{XY}(i,j)\log_2\frac{P_{XY}(i,j)}{P_X(i)P_Y(j)}.
\end{aligned}
$$

由此定义证明 $I(X;Y)=H(X)-H(X\mid Y)$。

(4) 利用 Jensen 不等式证明互信息 $I(X;Y)$ 非负。

(5) 取 $N=2$，给出一个使互信息 $I(X;Y)$ 最小的概率分布 $P_{XY}(i,j)$，并说明理由。概率分布须以下列矩阵 $P$ 的形式表示：

$$
P=\begin{pmatrix}P_{XY}(1,1)&P_{XY}(2,1)\\P_{XY}(1,2)&P_{XY}(2,2)\end{pmatrix}.
$$

(6) 取 $N=2$，给出全部使互信息 $I(X;Y)$ 最大的概率分布 $P_{XY}(i,j)$，并说明理由。概率分布须以矩阵 $P$ 的形式表示。

**II** 设 $\mathbb N$ 为自然数集合，$a,b$ 为分别满足 $2\le a\le5$、$b\le7$ 的自然数。定义 $\mathbb N\times\mathbb N$ 的子集

$$
\begin{aligned}
X_a&=\{(x,y)\mid x,y\in\mathbb N,1\le x\le a,2\le y\le a\},\\
Y_b&=\{(x,x)\mid x\in\mathbb N,b\le x\le7\}.
\end{aligned}
$$

回答以下问题。

(1) 列出 $X_4\cap Y_3$ 的全部元素。

(2) 当 $2\le b\le a$ 时，将 $X_a\cup Y_b$ 的元素个数表示为 $a,b$ 的函数。

(3) 定义映射 $f:X_a\cup Y_b\to\mathbb N$ 为 $f((x,y))=x$。求全部使 $f$ 为单射的 $(a,b)$。

**III** 连通且不含环的无向图称为树。回答以下问题。

(1) 对于顶点数为 $6$ 的树，分别画出一个最大度达到最大、一个最大度达到最小的例子。图中不必标注顶点和边的标签。

(2) 设 $T=(V,E)$ 为任意一棵树。利用反证法证明：删除 $T$ 中任意一条边 $e\in E$ 所得图 $T-e=(V,E\setminus\{e\})$ 必定不连通。

(3) 考虑下列带权无向图。

![带权无向图](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-institute-of-technology/engineering/ie/2020/nitech_201908_info_28_graph.png)

记其最小生成树为 $T_{\min}$。列出 $T_{\min}$ 中与顶点 D 相连的全部边。每条边须表示为以其两个端点的标签为元素的集合。

## **Kai**

### I (1)–(2)

$p_{ij}=P_{XY}(i,j)$ と略記する。周辺化と条件付き確率の定義より、

$$
\boxed{\begin{gathered}
P_X(i)=\sum_jp_{ij},\\
P_{X\mid Y}(i\mid j)=\frac{p_{ij}}{\sum_kp_{kj}}
\end{gathered}}.
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
\boxed{\begin{gathered}
P=\begin{pmatrix}1/2&0\\0&1/2\end{pmatrix}\\
\text{または}\\
P=\begin{pmatrix}0&1/2\\1/2&0\end{pmatrix}
\end{gathered}}.
$$

### II

(1) 共通の対角点は $\boxed{\{(3,3),(4,4)\}}$。

(2) $|X_a|=a(a-1)$、$|Y_b|=8-b$、$|X_a\cap Y_b|=a-b+1$ より、

$$
\boxed{\begin{gathered}
|X_a\cup Y_b|=a(a-1)+(8-b)-(a-b+1)\\
=a^2-2a+7
\end{gathered}}.
$$

(3) $a\ge3$ では $(1,2),(1,3)\in X_a$ が同じ値1に写り、単射にならない。$a=2$ なら $X_2=\{(1,2),(2,2)\}$。$b=1$ は $(1,1)$ との衝突を生じるが、$b\ge2$ では新たな衝突はない。したがって

$$
\boxed{(a,b)=(2,2),(2,3),(2,4),(2,5),(2,6),(2,7)}.
$$

### III (1)

最大次数の最大値は5で、星型の木 $K_{1,5}$ が実現する。最小値は2で、道 $P_6$ が実現する。最大次数が1以下のグラフは六頂点で連結になれない。

![最大次数5の木](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-institute-of-technology/engineering/ie/2020/ie_201908_information_mathematics_answer_layout_1.svg)

![最大次数2の木](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-institute-of-technology/engineering/ie/2020/ie_201908_information_mathematics_answer_layout_2.svg)

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
