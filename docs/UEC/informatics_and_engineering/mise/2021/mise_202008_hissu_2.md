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

以下の設問に答えよ。

(1) 次の $x_1,x_2,x_3$ に関する連立1次方程式が解をもつとき，定数 $a,b$ が満たすべき条件を求めよ。

$$
\begin{cases}
x_1-2x_2-ax_3=1,\\
2x_1-3x_2+3x_3=b,\\
x_1+x_2+x_3=0.
\end{cases}
$$

(2) $\mathbb R^n$ を $n$ 次元の実数空間とし，線形写像 $F:\mathbb R^3\to\mathbb R^2$ を次式で定義する。

$$
F:\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix}
\mapsto\begin{bmatrix}x_1+ax_3\\3x_1+x_2+x_3\end{bmatrix}.
$$

線形写像 $F$ の核 $\operatorname{Ker}F$ の基底の1つが $[1,b,1]^{\mathsf T}$ となるとき，定数 $a,b$ の値を求めよ。ただし，記号の右上に付した添え字 $\mathsf T$ は転置を表す。

(3) $\boldsymbol x=[x_1,x_2]^{\mathsf T}$，$\boldsymbol y=[y_1,y_2]^{\mathsf T}$ であり，2次形式 $\boldsymbol x^{\mathsf T}A\boldsymbol x$ が標準形 $\boldsymbol y^{\mathsf T}B\boldsymbol y$ に変換できるとする。ここで，

$$
A=\begin{bmatrix}1&12\\12&a\end{bmatrix},\qquad
B=\begin{bmatrix}-15&0\\0&b\end{bmatrix}
$$

である。このとき，定数 $a,b$ の値を求めよ。また，$x_1,x_2$ を用いて $y_1,y_2$ を表せ。

#### 题目描述

回答下列问题。

(1) 求下列关于 $x_1,x_2,x_3$ 的线性方程组有解时，常数 $a,b$ 应满足的条件。

$$
\begin{cases}
x_1-2x_2-ax_3=1,\\
2x_1-3x_2+3x_3=b,\\
x_1+x_2+x_3=0.
\end{cases}
$$

(2) 以 $\mathbb R^n$ 表示 $n$ 维实数空间，定义线性映射 $F:\mathbb R^3\to\mathbb R^2$ 如下。

$$
F:\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix}
\mapsto\begin{bmatrix}x_1+ax_3\\3x_1+x_2+x_3\end{bmatrix}.
$$

当线性映射 $F$ 的核 $\operatorname{Ker}F$ 的一个基为 $[1,b,1]^{\mathsf T}$ 时，求常数 $a,b$ 的值。其中右上角的上标 $\mathsf T$ 表示转置。

(3) 设 $\boldsymbol x=[x_1,x_2]^{\mathsf T}$，$\boldsymbol y=[y_1,y_2]^{\mathsf T}$，二次型 $\boldsymbol x^{\mathsf T}A\boldsymbol x$ 可以变换为标准形 $\boldsymbol y^{\mathsf T}B\boldsymbol y$。这里

$$
A=\begin{bmatrix}1&12\\12&a\end{bmatrix},\qquad
B=\begin{bmatrix}-15&0\\0&b\end{bmatrix}.
$$

求常数 $a,b$ 的值，并用 $x_1,x_2$ 表示 $y_1,y_2$。

## **Kai**

### (1)

係数行列の行列式は $-5a-8$。$a\ne-8/5$ なら任意の $b$ に対して唯一解をもつ。

$a=-8/5$ のとき、第一式の5倍から第二式の3倍を引き第三式を加えると、左辺が0となる。整合条件は $5-3b=0$。係数行列の階数は2なので、この条件で無数の解をもつ。

$$
\boxed{\begin{gathered}
a\ne-\frac85\ (b\text{ は任意}),\\
\text{または }a=-\frac85,\ b=\frac53.
\end{gathered}}
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
