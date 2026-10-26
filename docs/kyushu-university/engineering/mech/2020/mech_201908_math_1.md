---
sidebar_label: "2019年8月実施 問1（数学）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Quadratic-Form
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
---

# 九州大学 工学府 機械系専攻 2019年8月実施 数学 問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$xy$ 平面上の方程式

$$
(a-1)(x^2+y^2)+4xy-1=0
\tag{*}
$$

について、以下の問いに答えよ。ただし、$a$ は1以外の実数の定数とする。（50点）

(1) $\boldsymbol x=[x,y]^{\mathsf T}\in\mathbb R^2$ とする。対称行列 $A\in\mathbb R^{2\times2}$ を用いて与式(*)を $\boldsymbol x^{\mathsf T}A\boldsymbol x=1$ の形で表せ。ただし、行列 $A$ の要素を具体的に示すこと。

(2) (1)で求めた行列 $A$ の2つの固有値を $\lambda_l,\lambda_s$（$\lambda_l>\lambda_s$）とする。$\lambda_l=5$ であるとき、定数 $a$ およびもう一つの固有値 $\lambda_s$ をそれぞれ求めよ。

(3) (2)で求めた固有値 $\lambda_s$ についての大きさ1の固有ベクトルを $\boldsymbol p\in\mathbb R^2$、固有値 $\lambda_l=5$ についての大きさ1の固有ベクトルを $\boldsymbol q\in\mathbb R^2$ とする。行列 $P=[\boldsymbol p,\boldsymbol q]\in\mathbb R^{2\times2}$ を求めよ。

(4) いま、(3)で求めた行列 $P$ について、$\boldsymbol X=[X,Y]^{\mathsf T}\in\mathbb R^2$ とすると、$\boldsymbol x=P\boldsymbol X$ が成立している。

i) 与式(*)を $X,Y$ を用いて表せ。

ii) i)で求めた方程式が、$XY$ 平面上に描く図形を図示せよ。ただし、図形の形状を決める根拠となる値は図中で示すこと。

(5) 与式(*)が、$xy$ 平面上に描く図形を図示せよ。ただし、$a$ は(2)で求めた値とし、図形の形状を決める根拠となる値は図中で示すこと。

### 题目描述

对于 $xy$ 平面上的方程

$$
(a-1)(x^2+y^2)+4xy-1=0,
\tag{*}
$$

回答以下各问，其中 $a$ 是不等于1的实常数。（50分）

(1) 设 $\boldsymbol x=[x,y]^{\mathsf T}\in\mathbb R^2$。用对称矩阵 $A\in\mathbb R^{2\times2}$ 将式(*)表示为 $\boldsymbol x^{\mathsf T}A\boldsymbol x=1$，并具体写出 $A$ 的元素。

(2) 将(1)所得矩阵 $A$ 的两个特征值记为 $\lambda_l,\lambda_s$，且 $\lambda_l>\lambda_s$。当 $\lambda_l=5$ 时，分别求常数 $a$ 和另一个特征值 $\lambda_s$。

(3) 设 $\boldsymbol p\in\mathbb R^2$ 为(2)所得特征值 $\lambda_s$ 对应的单位特征向量，$\boldsymbol q\in\mathbb R^2$ 为特征值 $\lambda_l=5$ 对应的单位特征向量。求矩阵 $P=[\boldsymbol p,\boldsymbol q]\in\mathbb R^{2\times2}$。

(4) 对于(3)所得的矩阵 $P$，令 $\boldsymbol X=[X,Y]^{\mathsf T}\in\mathbb R^2$，且满足 $\boldsymbol x=P\boldsymbol X$。

i) 用 $X,Y$ 表示式(*)。

ii) 画出i)所得方程在 $XY$ 平面上表示的图形，并在图中标出用于确定图形形状的数值。

(5) 取(2)所得的 $a$ 值，画出式(*)在 $xy$ 平面上表示的图形，并在图中标出用于确定图形形状的数值。

## **Kai**

### (1)

$$
\boxed{A=\begin{pmatrix}a-1&2\\2&a-1\end{pmatrix}}.
$$

### (2)

特性方程式は $(a-1-\lambda)^2-4=0$。よって $\lambda_l=a+1$、$\lambda_s=a-3$ であり、

$$
\boxed{a=4,\qquad\lambda_s=1}.
$$

### (3)

$(A-I)\boldsymbol p=0$、$(A-5I)\boldsymbol q=0$ より、一例として

$$
\begin{gathered}
\boldsymbol p=\frac1{\sqrt2}\binom{-1}{1},\\
\boldsymbol q=\frac1{\sqrt2}\binom{1}{1},\\
\boxed{P=\frac1{\sqrt2}\begin{pmatrix}-1&1\\1&1\end{pmatrix}}.
\end{gathered}
$$

$P^{\mathsf T}P=I$、$P^{\mathsf T}AP=\operatorname{diag}(1,5)$ である。

### (4)

#### i)

$$
\begin{gathered}
1=\boldsymbol X^{\mathsf T}P^{\mathsf T}AP\boldsymbol X\\
\Longrightarrow\\
\boxed{X^2+5Y^2=1}.
\end{gathered}
$$

#### ii)

原点中心、$X$ 軸方向の半径 $1$、$Y$ 軸方向の半径 $1/\sqrt5$ の楕円である。

![XY平面の楕円と半軸の長さ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/kyushu_201908_math1_xy.svg)

### (5)

$\boldsymbol x=X\boldsymbol p+Y\boldsymbol q$ より、長軸は $y=-x$、短軸は $y=x$ に沿う。$P$ は直交行列なので半軸の長さは保存される。長軸端点は $\pm(-1,1)/\sqrt2$、短軸端点は $\pm(1,1)/\sqrt{10}$。座標軸との交点は $(\pm1/\sqrt3,0),(0,\pm1/\sqrt3)$ である。

![xy平面の楕円、主軸および端点](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/kyushu_201908_math1_xy_original.svg)

## **Reference**

- [九州大学 2020年度 数学 公式問題（PDF 1ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-math.pdf)
