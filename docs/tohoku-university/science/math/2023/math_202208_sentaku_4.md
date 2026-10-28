---
sidebar_label: "2022年8月実施 選択問題 [4]"
tags:
  - Tohoku-University
  - Mathematics.Geometry.Differentiable-Manifolds-and-Regular-Values
---

# 東北大学 理学研究科 数学専攻 2022年8月実施 選択問題 \[4\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#238b1f5c-7047-4df7-b2f6-6a5929f7045a) refined with GPT 6 Astra)

## **Description**

$3$ 次元ユークリッド空間 $\mathbb R^3$ からそれ自身への写像 $f:\mathbb R^3\to\mathbb R^3$ を次で定義する。

$$
f(x,y,z)=\left(x+\frac{xy}{2},\ y+\frac{zx}{2},\ z\right)
\qquad((x,y,z)\in\mathbb R^3).
$$

以下の問いに答えよ。

(1) 点 $(x,y,z)\in\mathbb R^3$ における $f$ のヤコビ行列 $J(x,y,z)$ を計算せよ。

(2) 集合 $\{(x,y,z)\in\mathbb R^3\mid\operatorname{rank}J(x,y,z)=2\}$ は $\mathbb R^3$ の空でない部分多様体となることを示せ。

(3) $f$ を $2$ 次元球面 $S^2=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2+z^2=1\}$ に制限して得られる写像 $g=f|_{S^2}:S^2\to\mathbb R^3$ を考える。集合 $\{p\in S^2\mid\operatorname{rank}dg_p=2\}$ を求めよ。ただし、$dg_p:T_p(S^2)\to T_{f(p)}(\mathbb R^3)$ は点 $p\in S^2$ における $g$ の微分写像を表す。

### 题目描述

定义三维欧氏空间上的映射 $f:\mathbb R^3\to\mathbb R^3$：

$$
f(x,y,z)=\left(x+\frac{xy}{2},\ y+\frac{zx}{2},\ z\right)
\qquad((x,y,z)\in\mathbb R^3).
$$

回答下列问题。

(1) 计算 $f$ 在点 $(x,y,z)\in\mathbb R^3$ 处的雅可比矩阵 $J(x,y,z)$。

(2) 证明集合 $\{(x,y,z)\in\mathbb R^3\mid\operatorname{rank}J(x,y,z)=2\}$ 是 $\mathbb R^3$ 的非空子流形。

(3) 将 $f$ 限制在二维球面 $S^2=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2+z^2=1\}$ 上，得到映射 $g=f|_{S^2}:S^2\to\mathbb R^3$。求集合 $\{p\in S^2\mid\operatorname{rank}dg_p=2\}$。这里 $dg_p:T_p(S^2)\to T_{f(p)}(\mathbb R^3)$ 表示 $g$ 在 $p\in S^2$ 处的微分映射。

## **Kai**

### (1)

$$
\boxed{J(x,y,z)=
\begin{pmatrix}
1+y/2&x/2&0\\
z/2&1&x/2\\
0&0&1
\end{pmatrix}.}
$$

### (2)

第 $2,3$ 行、第 $2,3$ 列からなる小行列の行列式は常に $1$ なので、$J$ の階数は常に $2$ 以上である。また

$$
\det J=1+\frac y2-\frac{xz}{4}=
\frac{4+2y-xz}{4}.
$$

したがって求める集合は

$$
M=\{(x,y,z)\in\mathbb R^3\mid h(x,y,z)=0\},\qquad
h(x,y,z)=4+2y-xz
$$

である。$\partial h/\partial y=2$ より $0$ は $h$ の正則値であり、$M$ は $2$ 次元部分多様体である。例えば $(0,-2,0)\in M$ だから $M$ は空でない。

### (3)

$p=(x,y,z)\in S^2$ では $y\ge-1$ および

$$
xz\le\frac{x^2+z^2}{2}\le\frac12
$$

が成り立つ。よって

$$
4+2y-xz\ge4-2-\frac12=\frac32>0.
$$

したがって $J(p)$ は $S^2$ 上のすべての点で正則である。$dg_p$ はこの可逆な線形写像を $2$ 次元部分空間 $T_p(S^2)$ に制限したものなので単射であり、階数は $2$ である。ゆえに

$$
\boxed{\{p\in S^2\mid\operatorname{rank}dg_p=2\}=S^2.}
$$

## **Reference**

- [東北大学公式問題（2023年度・選択問題、PDF 3ページ）](https://www.math.tohoku.ac.jp/exam/questions/2023_R5_sentaku.pdf)
- [L^2：2023年度の対応する解答](https://note.com/normalmath/n/n89152917de11#238b1f5c-7047-4df7-b2f6-6a5929f7045a)
