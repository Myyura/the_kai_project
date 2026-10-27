---
sidebar_label: "2019年8月実施 選択問題 [3]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Simplicial-and-Cellular-Homology
---

# 東北大学 理学研究科 数学専攻 2019年8月実施 選択問題 \[3\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#8c55d1c9-37b5-43c3-8bc6-b57f74bdf0cb) refined with GPT 6 Astra)

## **Description**

問題は $8$ 題ある。$3$ 題を選択して解答すること。


$4$ 次元ユークリッド空間 $\mathbb R^4$ の部分集合を次のように定める。

$$
\begin{aligned}
Y_1&=\{(x,y,z,w)\in\mathbb R^4\mid x^2+y^2+z^2+w^2=1\},\\
Y_2&=\{(x,y,z,w)\in\mathbb R^4\mid x^2+y^2+z^2=w^2,\ |w|\le1\}.
\end{aligned}
$$

また、$X=Y_1\cup Y_2$ とし、写像 $f:X\to X$ を

$$
f(x,y,z,w)=(-x,-y,-z,-w)
$$

と定める。以下の問いに答えよ。

(1) $Y_2$ が可縮であることを示せ。

(2) 非負整数 $q$ に対し、$X$ の整係数ホモロジー群 $H_q(X,\mathbb Z)$ を求めよ。

(3) 写像 $f$ と恒等写像 $\operatorname{id}_X$ がホモトピックかどうか、理由とともに答えよ。

### 题目描述

本卷共 $8$ 道题，请选择其中 $3$ 道作答。


定义四维欧氏空间 $\mathbb R^4$ 的子集

$$
\begin{aligned}
Y_1&=\{(x,y,z,w)\in\mathbb R^4\mid x^2+y^2+z^2+w^2=1\},\\
Y_2&=\{(x,y,z,w)\in\mathbb R^4\mid x^2+y^2+z^2=w^2,\ |w|\le1\}.
\end{aligned}
$$

令 $X=Y_1\cup Y_2$，并定义映射 $f:X\to X$ 为

$$
f(x,y,z,w)=(-x,-y,-z,-w).
$$

回答下列问题。

(1) 证明 $Y_2$ 可缩。

(2) 对每个非负整数 $q$，求 $X$ 的整系数同调群 $H_q(X,\mathbb Z)$。

(3) 判断 $f$ 与恒等映射 $\operatorname{id}_X$ 是否同伦，并说明理由。

## **Kai**

以下、係数はすべて $\mathbb Z$ とする。

### (1)

$p\in Y_2$ と $0\le t\le1$ に対して $(1-t)p\in Y_2$ である。実際、定義の二次方程式はすべての座標を同じ倍率で縮小しても保存され、$|(1-t)w|\le1$ も満たされる。したがって

$$
H:Y_2\times[0,1]\longrightarrow Y_2,\qquad H(p,t)=(1-t)p
$$

は恒等写像と原点への定値写像を結ぶホモトピーであり、$Y_2$ は可縮である。

### (2)

$Y_1=S^3$ であり、共通部分 $A=Y_1\cap Y_2$ は

$$
A=A_+\sqcup A_-,\qquad
A_\pm=\left\{(x,y,z,w)\mid x^2+y^2+z^2=\frac12,\ w=\pm\frac1{\sqrt2}\right\}.
$$

従って $A\cong S^2\sqcup S^2$ である。$Y_1$ を二つの緯度球面 $A_+,A_-$ で分割し、$Y_2$ を二つの円錐とその外側の襟に分割すれば、$A$ を共通の部分複体とする有限 CW 構造を取れる。よってこの分解に Mayer–Vietoris 完全列を適用できる。

高次の部分は

$$
0\longrightarrow\mathbb Z\longrightarrow H_3(X)
\longrightarrow\mathbb Z^2\longrightarrow0,
\qquad 0\longrightarrow H_2(X)\longrightarrow0
$$

となる。右端の $\mathbb Z^2$ は自由なので最初の列は分裂し、

$$
H_3(X)\cong\mathbb Z^3,\qquad H_2(X)=0.
$$

低次の部分は

$$
0\longrightarrow H_1(X)\xrightarrow{\delta}H_0(A)\cong\mathbb Z^2
\xrightarrow{\phi}\mathbb Z^2\longrightarrow H_0(X)\longrightarrow0,
$$

ただし $\phi(a,b)=(a+b,-a-b)$ である。よって

$$
\operatorname{im}\delta=\ker\phi
=\mathbb Z(1,-1)\cong\mathbb Z,
\qquad \operatorname{coker}\phi\cong\mathbb Z.
$$

以上より

$$
\boxed{
H_q(X;\mathbb Z)\cong
\begin{cases}
\mathbb Z & q=0,1,\\
\mathbb Z^3 & q=3,\\
0 & q=2\text{ または }q\ge4.
\end{cases}}
$$

### (3)

$f$ は $Y_1,Y_2$ をそれぞれ保ち、共通部分の二つの連結成分 $A_+,A_-$ を交換する。したがって

$$
(f|_A)_*:H_0(A)\longrightarrow H_0(A),\qquad(a,b)\longmapsto(b,a).
$$

Mayer–Vietoris 完全列の自然性より

$$
\delta\circ f_*=(f|_A)_*\circ\delta.
$$

$\delta$ は $H_1(X)$ と $\mathbb Z(1,-1)$ の同型であり、$(1,-1)$ は交換によって $-(1,-1)$ に写る。ゆえに

$$
f_*=-\operatorname{id}\quad\text{on }H_1(X;\mathbb Z)\cong\mathbb Z.
$$

恒等写像が誘導する写像は $+\operatorname{id}$ である。ホモトピックな写像は同じホモロジー準同型を誘導するので、

$$
\boxed{f\text{ と }\operatorname{id}_X\text{ はホモトピックではない。}}
$$

## **Reference**

- [東北大学の原試験問題（公開保存版：`sentaku2020(R2).pdf`、PDF 3 ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2020年度の対応する解答](https://note.com/normalmath/n/n89152917de11#8c55d1c9-37b5-43c3-8bc6-b57f74bdf0cb)
