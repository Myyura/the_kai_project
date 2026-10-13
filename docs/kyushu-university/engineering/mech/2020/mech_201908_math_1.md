---
sidebar_label: "2020年度 問1（数学）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Quadratic-Form
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
---

# 九州大学 工学府 機械系専攻 2020年度 数学 問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$xy$ 平面上の方程式

$$
(a-1)(x^2+y^2)+4xy-1=0\tag{*}
$$

について、以下の問いに答えよ。ただし、$a$ は $1$ 以外の実数の定数とする。

1. $\boldsymbol{x}=[x,y]^{\mathsf T}\in\mathbb R^2$ とする。対称行列 $A\in\mathbb R^{2\times2}$ を用いて (*) を $\boldsymbol{x}^{\mathsf T}A\boldsymbol{x}=1$ と表せ。ただし、$A$ の要素を具体的に示せ。
2. $A$ の固有値を $\lambda_l,\lambda_s$（$\lambda_l>\lambda_s$）とする。$\lambda_l=5$ のとき、$a$ と $\lambda_s$ を求めよ。
3. (2) の $\lambda_s$ に対する大きさ $1$ の固有ベクトルを $\boldsymbol p$、$\lambda_l=5$ に対する大きさ $1$ の固有ベクトルを $\boldsymbol q$ とする。$P=[\boldsymbol p\ \boldsymbol q]$ を求めよ。
4. $\boldsymbol X=[X,Y]^{\mathsf T}$、$\boldsymbol x=P\boldsymbol X$ とする。i) (*) を $X,Y$ で表せ。ii) 得られた式が $XY$ 平面に描く図形を図示し、形状を決める根拠となる値を図中に示せ。
5. $a$ を (2) の値として、(*) が $xy$ 平面に描く図形を図示し、形状を決める根拠となる値を図中に示せ。

#### 题目描述

考虑 $a\ne1$ 时的曲线 $(a-1)(x^2+y^2)+4xy=1$。① 写出对应的实对称矩阵 $A$。② 已知较大特征值为 $5$，求 $a$ 和较小特征值。③ 按较小、较大特征值的顺序取单位特征向量组成 $P$。④ 令 $\boldsymbol x=P\boldsymbol X$，求新坐标下的方程并画图，标明决定形状的数值。⑤ 在原 $xy$ 平面画图并标明相应数值。

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
\boldsymbol p=\frac1{\sqrt2}\binom{-1}{1},\qquad
\boldsymbol q=\frac1{\sqrt2}\binom{1}{1},\qquad
\boxed{P=\frac1{\sqrt2}\begin{pmatrix}-1&1\\1&1\end{pmatrix}}.
$$

$P^{\mathsf T}P=I$、$P^{\mathsf T}AP=\operatorname{diag}(1,5)$ である。

### (4)

#### i)

$$
1=\boldsymbol X^{\mathsf T}P^{\mathsf T}AP\boldsymbol X
\quad\Longrightarrow\quad\boxed{X^2+5Y^2=1}.
$$

#### ii)

原点中心、$X$ 軸方向の半径 $1$、$Y$ 軸方向の半径 $1/\sqrt5$ の楕円である。

![XY平面の楕円と半軸の長さ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-university/engineering/mech/2020/kyushu_2020_math1_xy.svg)

### (5)

$\boldsymbol x=X\boldsymbol p+Y\boldsymbol q$ より、長軸は $y=-x$、短軸は $y=x$ に沿う。$P$ は直交行列なので半軸の長さは保存される。長軸端点は $\pm(-1,1)/\sqrt2$、短軸端点は $\pm(1,1)/\sqrt{10}$。座標軸との交点は $(\pm1/\sqrt3,0),(0,\pm1/\sqrt3)$ である。

![xy平面の楕円、主軸および端点](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-university/engineering/mech/2020/kyushu_2020_math1_xy_original.svg)

## **Reference**

- [九州大学 2020年度 数学 公式問題（PDF 1ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-math.pdf)
