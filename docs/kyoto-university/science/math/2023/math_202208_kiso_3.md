---
sidebar_label: "2023年度 基礎科目 [3]"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Simultaneous-Diagonalization-of-Commuting-Operators
---

# 京都大学 理学研究科 数学・数理解析専攻 2023年度 基礎科目 問題3

## **Author**

[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

$V$ を有限次元複素ベクトル空間とし、$S,T : V \rightarrow V$ を対角化可能な線形写像で $ST = TS$ が成り立つものとする．
$r \geq 2$ を整数, $\alpha, \beta \in \mathbb{C}$ を複素数, $\lambda_1, \ldots, \lambda_r \in \mathbb{C}$ を相異なる複素数とする.
零ベクトルでない $V$ の元 $v, u_1, u_2, \ldots, u_r$ は

$$
v = u_1 + u_2 + \cdots + u_r
$$

を満たし, かつ $1 \leq j \leq r$ なるすべての整数 $j$ について $u_j$ は固有値 $\lambda_j$ に属する $S$ の固有ベクトルとする．
さらに $v$ は固有値 $\alpha$ に属する $T$ の固有ベクトルであり、$u_1$ は固有値 $\beta$ に属する $T$ の固有ベクトルとする．
このとき $\alpha = \beta$ が成り立つことを示せ．

#### 题目描述

设 $V$ 为有限维复向量空间，$S,T:V\to V$ 是可对角化且满足 $ST=TS$ 的线性映射。令整数 $r\geq2$，$\alpha,\beta\in\mathbb C$，且 $\lambda_1,\ldots,\lambda_r\in\mathbb C$ 两两不同。非零向量 $v,u_1,\ldots,u_r\in V$ 满足

$$
v=u_1+u_2+\cdots+u_r,
$$

并且对每个 $j=1,\ldots,r$，$u_j$ 都是 $S$ 关于特征值 $\lambda_j$ 的特征向量。进一步，$v$ 是 $T$ 关于特征值 $\alpha$ 的特征向量，$u_1$ 是 $T$ 关于特征值 $\beta$ 的特征向量。证明 $\alpha=\beta$。

## **Kai**

第三問**Video** : [院試数学解説（京大2023年度）線形代数：固有ベクトル](https://www.youtube.com/watch?v=ZctxGROqe6A)

$p(\lambda_1)=1$、$p(\lambda_j)=0\ (2\le j\le r)$ を満たす多項式 $p$ を取ると、
$p(S)v=u_1$ である。また $ST=TS$ より $p(S)T=Tp(S)$ なので、

$$
Tu_1=Tp(S)v=p(S)Tv=\alpha p(S)v=\alpha u_1.
$$

一方、仮定より $Tu_1=\beta u_1$ であり、$u_1\ne0$ だから $\alpha=\beta$ である。

## **Reference**

- [京都大学公式問題（2023年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2025-10/2022math_kiso_for2023_honshi.pdf)
- [照合用参考解答（R5-basic.pdf、PDF 3ページ）](https://drive.google.com/file/d/1lTgc8km3hinOVP0njyjlGOlPNSJ-Gq96/view)
