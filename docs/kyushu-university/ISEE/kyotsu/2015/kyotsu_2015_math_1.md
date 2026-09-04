---
sidebar_label: "2015年度入学 数学 問1（線形代数）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
---
# 九州大学 システム情報科学府 情報学専攻・情報知能工学専攻・電気電子工学専攻 共通 2015年度入学 数学 問1（線形代数）

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

実ベクトル空間 $\mathbb{R}^N$ にベクトル $x_1, x_2, ..., x_k$ が与えられているとする。 $A = \sum_{i=1}^k x_i x_i^T \in \mathbb{R}^{N \times N}$ とおく。ただし、 $x_i^T$ は $x_i$ の転置を表す。また、実ベクトル $u \in \mathbb{R}^N$ に対し、

$$
\sigma_u = \sqrt{\sum_{i=1}^k (u^T x_i)^2}
$$

と定義する。このとき、以下の各問に答えよ。

(1) 任意の実ベクトル $u \in \mathbb{R}^N$ に対し、 $\sigma_u^2 = u^T A u$ が成り立つことを示せ。

(2) $A$ の固有値がすべて非負であることを示せ。

(3) ある実行列 $B$ が存在して、 $A = B^T B$ が成り立つことを示せ。
ヒント： $A$ は実対称行列なので対角化可能。

(4) 任意の $u, v \in \mathbb{R}^N$ に対し、 $\sigma_u + \sigma_v \geq \sigma_{u+v}$ が成り立つことを示せ。
ヒント：問(3) の行列 $B$ による変換 $z \mapsto \tilde{z} = Bz$ ( $z \in \mathbb{R}^N$ ) を用いよ。

### 题目描述

在实向量空间 $\mathbb R^N$ 中给定向量 $x_1,x_2,\ldots,x_k$，定义

$$
A=\sum_{i=1}^k x_ix_i^T\in\mathbb R^{N\times N},
$$

其中 $x_i^T$ 表示 $x_i$ 的转置。对任意实向量 $u\in\mathbb R^N$，再定义

$$
\sigma_u=\sqrt{\sum_{i=1}^k(u^Tx_i)^2}.
$$

回答下列问题：

1. 证明对任意 $u\in\mathbb R^N$，

   $$
   \sigma_u^2=u^TAu.
   $$

2. 证明 $A$ 的全部特征值均非负。
3. 证明存在实矩阵 $B$ 使

   $$
   A=B^TB.
   $$

   可使用提示：$A$ 是可对角化的实对称矩阵。
4. 证明对任意 $u,v\in\mathbb R^N$，

   $$
   \sigma_u+\sigma_v\ge\sigma_{u+v}.
   $$

   可使用提示：利用第 3 问的矩阵 $B$ 所定义的变换 $z\mapsto\widetilde z=Bz$。

## **Kai**

(1)  $\sigma_u^2 = \sum_{i=1}^k (u^T x_i)^2 = \sum_{i=1}^k (u^T x_i)(x_i^T u) = \sum_{i=1}^k u^T x_i x_i^T u = u^T (\sum_{i=1}^k x_i x_i^T) u = u^T A u$

(2) $A$ は実対称行列なので、直交行列 $P$ により $A = PDP^{-1} = PDP^T$ と対角化可能。ここで $D$ は対角行列であり、対角成分は $A$ の固有値である。任意のベクトル $x$ に対して、 $x^T A x = x^T (\sum_{i=1}^k x_i x_i^T) x = \sum_{i=1}^k x^T x_i x_i^T x = \sum_{i=1}^k (x^T x_i)^2 \geq 0$ 。したがって、 $A$ は半正定値行列であり、固有値はすべて非負である。

(3) (2)より、 $A$ は半正定値対称行列であり、固有値はすべて非負である。 $A = PDP^T$ と対角化する。 $D$ の対角成分は $A$ の固有値 $\lambda_i$ であり、 $\lambda_i \geq 0$ 。そこで、 $D^{1/2}$ を対角成分が $\sqrt{\lambda_i}$ である対角行列とする。すると、 $D = D^{1/2} D^{1/2}$ 。 $A = PDP^T = P D^{1/2} D^{1/2} P^T = (D^{1/2} P^T)^T (D^{1/2} P^T)$ 。 $B = D^{1/2} P^T$ とおくと、 $A = B^T B$ 。

(4) $\sigma_u = \sqrt{\sum_{i=1}^k (u^T x_i)^2} = \sqrt{u^T A u} = \sqrt{u^T B^T B u} = \sqrt{(Bu)^T (Bu)} = ||Bu||$ ここで、 $|| \cdot ||$ はユークリッドノルムである。すると、 $\sigma_u + \sigma_v = ||Bu|| + ||Bv|| \geq ||Bu + Bv|| = ||B(u+v)|| = \sigma_{u+v}$ 。これは三角不等式による。
