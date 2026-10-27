---
sidebar_label: "2016年8月実施 選択問題 [3]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Simplicial-and-Cellular-Homology
---

# 東北大学 理学研究科 数学専攻 2016年8月実施 選択問題 \[3\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#5c3783b3-2c3a-40d4-8f00-54b78c1c2cf0) refined with GPT 6 Astra)

## **Description**

問題は $9$ 題ある。$3$ 題を選択して解答すること。


$3$ 次元ユークリッド空間 $\mathbb R^3$ の以下の $4$ 点

$$
a_0=(0,0,0),\quad a_1=(1,0,0),\quad a_2=(0,1,0),\quad a_3=(0,0,1)
$$

をそれぞれ $0$-単体とみなす。また、$2$ 点 $a_i,a_j$ を頂点とする $1$-単体を $a_ia_j$ と書き、$3$ 点 $a_i,a_j,a_k$ を頂点とする $2$-単体を $a_ia_ja_k$ と書く。$X$ を

$$
a_0,a_1,a_2,a_0a_1,a_0a_2,a_1a_2
$$

からなる単体的複体とし、$Y$ を

$$
a_0,a_1,a_2,a_3,a_0a_1,a_0a_2,a_0a_3,a_1a_2,a_1a_3,a_2a_3,a_0a_1a_3
$$

からなる単体的複体とする。以下の問いに答えよ。

(1) 単体的複体 $X$ の整係数ホモロジー群を求めよ。

(2) 単体的複体 $Y$ の整係数ホモロジー群を求めよ。

(3) $X$ に属する単体全体の和集合を $|X|$ とし、$|Y|$ も同様に定める。ここで、写像 $f:|Y|\to|X|$ を $f(x,y,z)=(x,y,0)$ で定義する。このとき、$f$ から誘導される $f_*:H_1(Y,\mathbb Z)\to H_1(X,\mathbb Z)$ は全射であること、および、単射でないことを示せ。

### 题目描述

本卷共 $9$ 道题，请选择其中 $3$ 道作答。


把三维欧氏空间 $\mathbb R^3$ 中的四点

$$
a_0=(0,0,0),\quad a_1=(1,0,0),\quad a_2=(0,1,0),\quad a_3=(0,0,1)
$$

分别视为零维单形。以 $a_i,a_j$ 为顶点的一维单形记为 $a_ia_j$，以 $a_i,a_j,a_k$ 为顶点的二维单形记为 $a_ia_ja_k$。令 $X$ 为由

$$
a_0,a_1,a_2,a_0a_1,a_0a_2,a_1a_2
$$

组成的单纯复形，$Y$ 为由

$$
a_0,a_1,a_2,a_3,a_0a_1,a_0a_2,a_0a_3,a_1a_2,a_1a_3,a_2a_3,a_0a_1a_3
$$

组成的单纯复形。回答下列问题。

(1) 求单纯复形 $X$ 的整系数同调群。

(2) 求单纯复形 $Y$ 的整系数同调群。

(3) 用 $|X|$ 表示 $X$ 中所有单形的并，以同样方式定义 $|Y|$。定义映射 $f:|Y|\to|X|$ 为 $f(x,y,z)=(x,y,0)$。证明其诱导映射 $f_*:H_1(Y,\mathbb Z)\to H_1(X,\mathbb Z)$ 是满射，但不是单射。

## **Kai**

以下、係数はすべて $\mathbb Z$ とし、$e_{ij}=[a_i,a_j]$（$i<j$）と書く。

### (1)

$|X|$ は三角形の境界なので $S^1$ と同相である。したがって

$$
H_q(X;\mathbb Z)\cong
\begin{cases}
\mathbb Z & q=0,1,\\
0 & q\ge2.
\end{cases}
$$

$H_1(X;\mathbb Z)$ の生成元として $z_{012}=e_{01}+e_{12}-e_{02}$ を取れる。

### (2)

$Y$ の $1$-骨格は完全グラフ $K_4$ である。全域木 $e_{01},e_{02},e_{03}$ を選ぶと、そのサイクル群の基底は

$$
\begin{aligned}
z_{012}&=e_{01}+e_{12}-e_{02},\\
z_{013}&=e_{01}+e_{13}-e_{03},\\
z_{023}&=e_{02}+e_{23}-e_{03}
\end{aligned}
$$

である。実際、各サイクルの木に属さない辺の係数はそれぞれ $e_{12},e_{13},e_{23}$ の係数を自由に指定し、残る木の辺の係数は境界が $0$ という条件から一意に決まる。

唯一の $2$-単体 $[a_0,a_1,a_3]$ の境界は $z_{013}$ であり、$\partial_2:\mathbb Z\to C_1(Y)$ は単射である。よって

$$
H_1(Y;\mathbb Z)
=\frac{\mathbb Z z_{012}\oplus\mathbb Z z_{013}\oplus\mathbb Z z_{023}}
{\mathbb Z z_{013}}
\cong\mathbb Z^2,\qquad H_2(Y;\mathbb Z)=0.
$$

$Y$ は連結で $2$ 次元の複体だから、結論は

$$
H_q(Y;\mathbb Z)\cong
\begin{cases}
\mathbb Z & q=0,\\
\mathbb Z^2 & q=1,\\
0 & q\ge2.
\end{cases}
$$

### (3)

$f$ は $a_0,a_1,a_2$ を固定し、$a_3$ を $a_0$ に写す。この頂点写像は単体写像を定め、その実現が問題の $f$ である。

$z_{012}$ は固定される。一方、退化辺の像を $0$ とすれば

$$
f_\#(z_{023})=[a_0,a_2]+[a_2,a_0]-[a_0,a_0]=0.
$$

したがって上記の基底に関する誘導写像は

$$
f_*:\mathbb Z^2\longrightarrow\mathbb Z,\qquad (m,n)\longmapsto m.
$$

これは全射であり、非零の元 $[z_{023}]$ を $0$ に写すので単射ではない。

## **Reference**

- [東北大学の原試験問題（公開保存版：`sentaku2017(H29).pdf`、PDF 3 ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2017年度の対応する解答](https://note.com/normalmath/n/n89152917de11#5c3783b3-2c3a-40d4-8f00-54b78c1c2cf0)
