---
sidebar_label: "2022年8月実施 選択問題 [3]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Simplicial-and-Cellular-Homology
---

# 東北大学 理学研究科 数学専攻 2022年8月実施 選択問題 \[3\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#ad111230-fbf7-48f2-bdf6-b273c98b8cd0) refined with GPT 6 Astra)

## **Description**

$3$ 次元ユークリッド空間 $\mathbb R^3$ において

$$
\begin{aligned}
A={}&\{(x,y,z)\in\mathbb R^3\mid x^2+y^2+z^2=1\}\\
&\mathbin{\cup}\{(x,y,z)\in\mathbb R^3\mid x^2+y^2=1,\ z^2=1\}
\end{aligned}
$$

とおき、$B=A\times[-1,1]$ とする。$B$ 上の同値関係 $\sim$ を $(x,y,z,t),(x',y',z',t')\in B$ に対し、

$$
\begin{aligned}
(x,y,z,t)\sim(x',y',z',t')\quad\Longleftrightarrow\quad
& (x,y,z,t)=(x',y',z',t')\\
&\text{または }t=t'=1\\
&\text{または }t=t'=-1
\end{aligned}
$$

で定める（$\sim$ が同値関係になることは認めてよい）。$C=B/{\sim}$ を商位相空間とし、$p:B\to C$ を標準的な商写像とする。$B_1=A\times[0,1]$, $B_2=A\times[-1,0]$, $C_1=p(B_1)$, $C_2=p(B_2)$ とおく。以下の問いに答えよ。

(1) $C$ は弧状連結であることを示せ。

(2) $C_1$ が可縮であることを、ホモトピーを構成することにより示せ。

(3) 非負の整数 $q$ に対し、$C$ の整係数ホモロジー群 $H_q(C)$ を求めよ。

### 题目描述

在三维欧氏空间 $\mathbb R^3$ 中，令

$$
\begin{aligned}
A={}&\{(x,y,z)\in\mathbb R^3\mid x^2+y^2+z^2=1\}\\
&\mathbin{\cup}\{(x,y,z)\in\mathbb R^3\mid x^2+y^2=1,\ z^2=1\},
\end{aligned}
$$

并令 $B=A\times[-1,1]$。对 $(x,y,z,t),(x',y',z',t')\in B$，在 $B$ 上定义等价关系 $\sim$：

$$
\begin{aligned}
(x,y,z,t)\sim(x',y',z',t')\quad\Longleftrightarrow\quad
& (x,y,z,t)=(x',y',z',t')\\
&\text{或 }t=t'=1\\
&\text{或 }t=t'=-1.
\end{aligned}
$$

可以直接使用 $\sim$ 是等价关系这一事实。令 $C=B/{\sim}$ 为商拓扑空间，$p:B\to C$ 为标准商映射。令 $B_1=A\times[0,1]$, $B_2=A\times[-1,0]$, $C_1=p(B_1)$, $C_2=p(B_2)$。回答下列问题。

(1) 证明 $C$ 是道路连通的。

(2) 通过构造同伦，证明 $C_1$ 可缩。

(3) 对非负整数 $q$，求 $C$ 的整数系数同调群 $H_q(C)$。

## **Kai**

### (1)

$A$ の点を $a$ と略記し、$p(a,t)=[a,t]$ と書く。$t=1$ の点はすべて一つの点 $v_+$ に同一視される。

任意の点 $c\in C$ の代表元 $(a,t)\in B$ を一つ固定すると、

$$
\gamma_c(s)=[a,(1-s)t+s]\qquad(0\le s\le1)
$$

は $c$ と $v_+$ を結ぶ連続な道である。したがって任意の二点は $v_+$ を経由する道で結ばれ、$C$ は弧状連結である。

### (2)

$$
H:C_1\times[0,1]\to C_1,\qquad
H([a,t],s)=[a,(1-s)t+s]
$$

と定める。$C_1$ で代表元が一意でないのは $t=1$ のときだけであり、その場合は右辺も常に $v_+$ だから、この写像はよく定義される。商写像から誘導される写像として $H$ は連続で、

$$
H(c,0)=c,\qquad H(c,1)=v_+.
$$

よって $C_1$ は可縮である。

### (3)

$A$ は単位球面と、平面 $z=1,-1$ 上の半径 $1$ の円周との不交和である。したがって

$$
H_q(A)\cong
\begin{cases}
\mathbb Z^3 &(q=0),\\
\mathbb Z^2 &(q=1),\\
\mathbb Z &(q=2),\\
0 &(q\ge3).
\end{cases}
$$

$C$ の開被覆を

$$
U=p\bigl(A\times(-1/2,1]\bigr),\qquad
V=p\bigl(A\times[-1,1/2)\bigr)
$$

ととる。$U,V$ はそれぞれ上端、下端の頂点へ縮められるので可縮であり、$U\cap V\cong A\times(-1/2,1/2)$ は $A$ とホモトピー同値である。

Mayer–Vietoris 完全列から $q\ge2$ に対して

$$
H_q(C)\cong H_{q-1}(A)
$$

を得る。一方、低次の部分は

$$
0\longrightarrow H_1(C)\longrightarrow\mathbb Z^3
\xrightarrow{\phi}\mathbb Z^2
\longrightarrow H_0(C)\longrightarrow0,
$$

ただし

$$
\phi(a,b,c)=(a+b+c,-a-b-c)
$$

である。よって $\ker\phi\cong\mathbb Z^2$ であり、$H_1(C)\cong\mathbb Z^2$。また (1) より $H_0(C)\cong\mathbb Z$ である。以上をまとめると

$$
\boxed{H_q(C)\cong
\begin{cases}
\mathbb Z &(q=0,3),\\
\mathbb Z^2 &(q=1,2),\\
0 &(q\ge4).
\end{cases}}
$$

## **Reference**

- [東北大学公式問題（2023年度・選択問題、PDF 3ページ）](https://www.math.tohoku.ac.jp/exam/questions/2023_R5_sentaku.pdf)
- [L^2：2023年度の対応する解答](https://note.com/normalmath/n/n89152917de11#ad111230-fbf7-48f2-bdf6-b273c98b8cd0)
