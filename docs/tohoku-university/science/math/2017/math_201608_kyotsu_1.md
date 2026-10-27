---
sidebar_label: "2016年8月実施 共通問題 [1]"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Commuting-Matrices
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Jordan-Normal-Form
---

# 東北大学 理学研究科 数学専攻 2016年8月実施 共通問題 \[1\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#13fe97a0-ce78-4f01-8100-991c473be5a5) refined with GPT 6 Astra)

## **Description**

問題は $4$ 題ある。全問に解答すること。$\mathbb R$ は実数全体のなす集合を表す。

$M_3(\mathbb R)$ を $3$ 次実正方行列全体のなす実ベクトル空間とする。$3$ 次実正方行列 $Z$ に対して、$M_3(\mathbb R)$ の部分空間 $V(Z)$ を

$$
V(Z)=\{X\in M_3(\mathbb R)\mid ZX=XZ\}
$$

と定める。以下の問いに答えよ。

(1) $A=\begin{pmatrix}8&-9&-2\\6&-7&-2\\-6&9&4\end{pmatrix}$ とする。$A$ の固有値と各固有値に対する固有ベクトルを求めよ。

(2) (1) の $A$ に対して、$V(A)$ の次元を求めよ。

(3) $B=\begin{pmatrix}-1&-2&1\\4&5&-2\\4&4&-1\end{pmatrix}$ に対して、$V(B)$ の次元を求めよ。

### 题目描述

试卷共 $4$ 道题，全部作答。$\mathbb R$ 表示实数集。

令 $M_3(\mathbb R)$ 为全体三阶实方阵组成的实向量空间。对于三阶实方阵 $Z$，定义 $M_3(\mathbb R)$ 的子空间

$$
V(Z)=\{X\in M_3(\mathbb R)\mid ZX=XZ\}.
$$

回答下列问题。

(1) 令 $A=\begin{pmatrix}8&-9&-2\\6&-7&-2\\-6&9&4\end{pmatrix}$。求 $A$ 的特征值及每个特征值对应的特征向量。

(2) 对第 (1) 问中的 $A$，求 $V(A)$ 的维数。

(3) 对 $B=\begin{pmatrix}-1&-2&1\\4&5&-2\\4&4&-1\end{pmatrix}$，求 $V(B)$ 的维数。

## **Kai**

### (1)

$$
\det(tI-A)=t^3-5t^2+8t-4=(t-1)(t-2)^2.
$$

したがって固有値は $1,2$ である。連立一次方程式を解くと

$$
\begin{aligned}
\ker(A-I)&=\mathbb R\begin{pmatrix}1\\1\\-1\end{pmatrix},\\
\ker(A-2I)&=\operatorname{span}_{\mathbb R}
\left\{\begin{pmatrix}1\\0\\3\end{pmatrix},\begin{pmatrix}0\\2\\-9\end{pmatrix}\right\}.
\end{aligned}
$$

例えばそれぞれ $\,{}^t(1,1,-1)$、${}^t(1,0,3)$ が対応する固有ベクトルである。

### (2)

(1) の三つの基底ベクトルを列に並べた正則行列を $P$ とすると

$$
P^{-1}AP=D=\operatorname{diag}(1,2,2).
$$

$X\mapsto P^{-1}XP$ は $V(A)$ と $V(D)$ の線形同型である。$DY=YD$ を成分ごとに比較すれば

$$
V(D)=\left\{\begin{pmatrix}a&0&0\\0&b&c\\0&d&e\end{pmatrix}
\ \middle|\ a,b,c,d,e\in\mathbb R\right\}.
$$

よって $\dim V(A)=5$ である。

### (3)

$N=B-I$ とおくと

$$
N=\begin{pmatrix}-2&-2&1\\4&4&-2\\4&4&-2\end{pmatrix},\qquad
N^2=O,\quad \operatorname{rank}N=1.
$$

したがって $B$ のジョルダン標準形は

$$
J=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}.
$$

相似変換は可換行列の空間の次元を保つ。$JY=YJ$ を解くと

$$
V(J)=\left\{\begin{pmatrix}a&b&c\\0&a&0\\0&d&e\end{pmatrix}
\ \middle|\ a,b,c,d,e\in\mathbb R\right\}.
$$

よって $\dim V(B)=5$ である。

## **Reference**

- [東北大学原問題の公開保存版（2017年度・共通問題、kyotsu2017(H29).pdf、PDF 2ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2017年度の解答](https://note.com/normalmath/n/n89152917de11#13fe97a0-ce78-4f01-8100-991c473be5a5)
