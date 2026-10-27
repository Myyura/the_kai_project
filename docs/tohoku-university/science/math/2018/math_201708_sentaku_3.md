---
sidebar_label: "2017年8月実施 選択問題 [3]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Simplicial-and-Cellular-Homology
---

# 東北大学 理学研究科 数学専攻 2017年8月実施 選択問題 \[3\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#580b5c0b-1fa3-46e0-83fb-ab9592dc0f63) refined with GPT 6 Astra)

## **Description**

問題は $8$ 題ある。$3$ 題を選択して解答すること。


$0\le r\le2$ とし、

$$
\begin{aligned}
A_r&=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2+z^2=r^2\},\\
B&=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2=1\},\\
C&=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2+z^2\le9\}
\end{aligned}
$$

とする。以下の問いに答えよ。

(1) 各 $0<r\le2$ に対して、$A_r\cup B$ が可微分多様体にならない $r$ の範囲を理由と共に答えよ。理由は簡潔に書くこと。

(2) $r=1$ のとき、$A_r\cup(B\cap C)$ の整係数ホモロジー群を求めよ。

(3) 各 $0\le r<1$ および $1<r\le2$ に対して、$A_r\cup(B\cap C)$ の整係数ホモロジー群を求めよ。

### 题目描述

本卷共 $8$ 道题，请选择其中 $3$ 道作答。


设 $0\le r\le2$，并令

$$
\begin{aligned}
A_r&=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2+z^2=r^2\},\\
B&=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2=1\},\\
C&=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2+z^2\le9\}.
\end{aligned}
$$

回答下列问题。

(1) 对 $0<r\le2$，给出 $A_r\cup B$ 不是可微流形的 $r$ 的范围，并简要说明理由。

(2) 当 $r=1$ 时，求 $A_r\cup(B\cap C)$ 的整系数同调群。

(3) 分别对 $0\le r<1$ 以及 $1<r\le2$，求 $A_r\cup(B\cap C)$ 的整系数同调群。

## **Kai**

以下、係数はすべて $\mathbb Z$ とし、$D=B\cap C$、$X_r=A_r\cup D$ とおく。

### (1)

求める範囲は

$$
\boxed{1\le r\le2}
$$

である。$0<r<1$ のとき、球面 $A_r$ と円柱面 $B$ は交わらず、その非交和は $2$ 次元可微分多様体である。

$r\ge1$ では共通部分は $z=\pm\sqrt{r^2-1}$ 上の円である（$r=1$ では一つの円）。交わりの各点の近傍では、球面と円柱面のそれぞれが共通の円弧で二分され、四つの半円板がその円弧に沿って貼り合わされる。この近傍は平面の開集合と同相ではないので、多様体にならない。$r=1$ で接平面が一致していても、この局所的な分岐は残る。

### (2)

$$
D=\{(x,y,z)\mid x^2+y^2=1,\ -\sqrt8\le z\le\sqrt8\}
\cong S^1\times[-\sqrt8,\sqrt8].
$$

$r=1$ のとき $A_1\cap D$ は赤道 $z=0$ である。$A_1$ を固定したまま、$D$ 上では $(x,y,z)\mapsto(x,y,(1-t)z)$ と動かすことで、$X_1$ は $A_1\cong S^2$ に強変形収縮する。したがって

$$
H_q(X_1)\cong
\begin{cases}
\mathbb Z & q=0,2,\\
0 & q=1\text{ または }q\ge3.
\end{cases}
$$

### (3)

$r=0$ では $A_0$ は一点であり、$D$ と交わらない。$D\simeq S^1$ なので

$$
H_q(X_0)\cong
\begin{cases}
\mathbb Z^2 & q=0,\\
\mathbb Z & q=1,\\
0 & q\ge2.
\end{cases}
$$

$0<r<1$ では $X_r=A_r\sqcup D\simeq S^2\sqcup S^1$ なので

$$
H_q(X_r)\cong
\begin{cases}
\mathbb Z^2 & q=0,\\
\mathbb Z & q=1,2,\\
0 & q\ge3.
\end{cases}
$$

最後に $1<r\le2$ とする。$h=\sqrt{r^2-1}$ は $0<h\le\sqrt3<\sqrt8$ を満たし、

$$
A_r\cap D=\{x^2+y^2=1,\ z=h\}\sqcup\{x^2+y^2=1,\ z=-h\}
\cong S^1\sqcup S^1.
$$

これら二つの円を部分複体とする有限 CW 分割を $A_r,D$ に取って、Mayer–Vietoris 完全列を用いる。両方の円を同じ角度方向に向き付けると、$H_1(A_r\cap D)\to H_1(A_r)\oplus H_1(D)$ は、全体の符号を除き

$$
\mathbb Z^2\longrightarrow\mathbb Z,\qquad(a,b)\longmapsto a+b
$$

である。よって完全列は

$$
0\longrightarrow\mathbb Z\longrightarrow H_2(X_r)
\longrightarrow\mathbb Z^2\xrightarrow{(a,b)\mapsto a+b}\mathbb Z
\longrightarrow H_1(X_r)\longrightarrow\mathbb Z^2
\xrightarrow{(a,b)\mapsto(a+b,-a-b)}\mathbb Z^2
\longrightarrow H_0(X_r)\longrightarrow0
$$

となる。和を取る写像は全射、その核は $\mathbb Z$ である。したがって $0\to\mathbb Z\to H_2(X_r)\to\mathbb Z\to0$ は分裂し、$H_2(X_r)\cong\mathbb Z^2$。さらに低次の写像の核も $\mathbb Z$ なので $H_1(X_r)\cong\mathbb Z$ である。結論は

$$
\boxed{
H_q(X_r)\cong
\begin{cases}
\mathbb Z & q=0,1,\\
\mathbb Z^2 & q=2,\\
0 & q\ge3
\end{cases}
\qquad(1<r\le2).}
$$

## **Reference**

- [東北大学の原試験問題（公開保存版：`sentaku2018(H30).pdf`、PDF 3 ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2018年度の対応する解答](https://note.com/normalmath/n/n89152917de11#580b5c0b-1fa3-46e0-83fb-ab9592dc0f63)
