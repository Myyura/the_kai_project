---
sidebar_label: "2023年度 基礎科目 [6]"
tags:
  - Kyoto-University
  - Mathematics.Geometry.Differentiable-Manifolds-and-Regular-Values
---

# 京都大学 理学研究科 数学・数理解析専攻 2023年度 基礎科目 問題6

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$\mathbb R^3$ の部分集合 $X$ を

$$
X=\{(x,y,z)\in\mathbb R^3\mid x^4+y^4-z^3=1\}
$$

で定める。

1. $X$ は $\mathbb R^3$ の微分可能部分多様体であることを示せ。
2. $r\in\mathbb R$ について $H_r=\{(x,y,z)\in\mathbb R^3\mid z=r\}$ とする。$X\cap H_r$ が空集合ではない $\mathbb R^3$ の1次元微分可能部分多様体となるような $r$ の範囲を求めよ。

#### 题目描述

设 $X=\{(x,y,z)\in\mathbb R^3\mid x^4+y^4-z^3=1\}$。

1. 证明 $X$ 是 $\mathbb R^3$ 的可微子流形。
2. 对 $r\in\mathbb R$，令 $H_r=\{(x,y,z)\in\mathbb R^3\mid z=r\}$。求使 $X\cap H_r$ 为非空的一维可微子流形的 $r$ 的范围。

## **Kai**

### (1)

$F(x,y,z)=x^4+y^4-z^3$ とおくと

$$
\nabla F=(4x^3,4y^3,-3z^2)
$$

が消えるのは原点だけである。原点は $F^{-1}(1)$ に属さないので、$1$ は $F$ の正則値である。従って $X$ は2次元の微分可能部分多様体である。

### (2)

$X\cap H_r$ の方程式は $z=r$, $x^4+y^4=1+r^3$ である。

$r<-1$ なら空集合であり、$r=-1$ なら1点 $\{(0,0,-1)\}$ なので1次元ではない。

$r>-1$ なら $1+r^3>0$ である。写像 $G(x,y,z)=(x^4+y^4,z)$ の微分

$$
dG=\begin{pmatrix}4x^3&4y^3&0\\0&0&1\end{pmatrix}
$$

は $G^{-1}(1+r^3,r)$ 上で階数 $2$ を持つ。この集合は $((1+r^3)^{1/4},0,r)$ を含み、正則値定理から1次元部分多様体である。従って求める範囲は

$$
\boxed{r>-1}.
$$

## **Reference**

- [京都大学公式問題（2023年度・基礎科目、PDF 4ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2025-10/2022math_kiso_for2023_honshi.pdf)
- [照合用参考解答（R5-basic.pdf、PDF 6ページ）](https://drive.google.com/file/d/1lTgc8km3hinOVP0njyjlGOlPNSJ-Gq96/view)
