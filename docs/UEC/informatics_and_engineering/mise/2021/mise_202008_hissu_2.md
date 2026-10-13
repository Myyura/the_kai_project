---
sidebar_label: "2020年8月実施 必須問題（数学基礎）問2"
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Rank-Criterion-for-Linear-System-Consistency
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2020年8月実施 必須問題（数学基礎）問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

(1) 連立方程式

$$
x_1-2x_2-ax_3=1,\qquad2x_1-3x_2+3x_3=b,\qquad x_1+x_2+x_3=0
$$

が解をもつための定数 $a,b$ の条件を求めよ。

(2) 線形写像 $F:\mathbb R^3\to\mathbb R^2$ を

$$
F\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
=\begin{pmatrix}x_1+ax_3\\3x_1+x_2+x_3\end{pmatrix}
$$

と定義する。核 $\operatorname{Ker}F$ の基底の一つが $[1,b,1]^{\mathsf T}$ となるとき、$a,b$ を求めよ。

(3) $x=[x_1,x_2]^{\mathsf T},y=[y_1,y_2]^{\mathsf T}$ とする。二次形式 $x^{\mathsf T}Ax$ が標準形 $y^{\mathsf T}By$ に変換でき、

$$
A=\begin{pmatrix}1&12\\12&a\end{pmatrix},\qquad
B=\begin{pmatrix}-15&0\\0&b\end{pmatrix}
$$

であるとき、$a,b$ を求め、$y_1,y_2$ を $x_1,x_2$ で表せ。

#### 题目描述

(1) 求所示三元线性方程组有解的参数条件。(2) 给定从 $\mathbb R^3$ 到 $\mathbb R^2$ 的线性映射，若 $[1,b,1]^{\mathsf T}$ 是核的一组基，求 $a,b$。(3) 将对称矩阵 $A$ 对应二次型化成对角项为 $-15,b$ 的标准形，求参数及新坐标。第(3)问按正交主轴变换理解。

## **Kai**

### (1)

係数行列の行列式は $-5a-8$。$a\ne-8/5$ なら任意の $b$ に対して唯一解をもつ。

$a=-8/5$ のとき、第一式の5倍から第二式の3倍を引き第三式を加えると、左辺が0となる。整合条件は $5-3b=0$。係数行列の階数は2なので、この条件で無数の解をもつ。

$$
\boxed{a\ne-\frac85\ (b\text{ は任意}),\quad\text{または }a=-\frac85,\ b=\frac53.}
$$

### (2)

$F(1,b,1)^{\mathsf T}=(1+a,b+4)^{\mathsf T}=0$ より

$$
\boxed{a=-1,\quad b=-4}.
$$

このとき表現行列の階数は2、核の次元は1であるため、得られた非零ベクトルは実際に核の基底となる。

### (3)

標準形への変換を通常の直交主軸変換とする。トレースと行列式を比較すると

$$
1+a=-15+b,\qquad a-144=-15b,
$$

したがって $\boxed{a=-6,b=10}$。固有値 $-15,10$ に対応する正規直交固有ベクトルをそれぞれ $(3,-4)^{\mathsf T}/5,(4,3)^{\mathsf T}/5$ と選べば

$$
\boxed{y_1=\frac{3x_1-4x_2}{5},\qquad y_2=\frac{4x_1+3x_2}{5}}.
$$

実際に $x_1^2+24x_1x_2-6x_2^2=-15y_1^2+10y_2^2$。固有ベクトルの符号は任意である。一般の正則変換まで許すと係数の大きさを変更できるので、$a,b$ は一意には定まらない。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 4ページ](https://web.archive.org/web/20241224120234id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_mandatory202008.pdf)
