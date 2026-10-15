---
sidebar_label: "2018年度 問2（数学）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
---

# 九州大学 工学府 機械系専攻 2018年度 数学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

行列

$$
A=\begin{pmatrix}5&a&0\\1&5-a&1\\0&a&5\end{pmatrix}
$$

について、以下の問いに答えよ。ただし、$a$ を実数とする。（50点）

1. 行列 $A$ が対角化できないときの $a$ を求めよ。
2. $a=1$ のとき、行列 $A$ が対角化できるとする。このときの行列 $A$ のすべての固有値と固有ベクトルを求めよ。
3. (2) のとき、$P^{\mathsf T}AP$ が対角行列となる直交行列 $P$ を求めよ。
4. 楕円面 $S$ の方程式 $5x^2+4y^2+5z^2+2xy+2yz+\sqrt6x-2\sqrt6y+\sqrt6z=0$ を $a=1$ のときの行列 $A$ を用いて表せ。
5. 楕円面 $S$ を行列 $P$ で変換した楕円面 $S'$ で囲まれる領域の中心座標と体積を求めよ。

#### 题目描述

对给定的含实参数矩阵求不能对角化的参数。令 $a=1$ 后，求全部特征值、特征向量及正交对角化矩阵，再将给定椭球方程写为矩阵形式，求在新坐标系中的中心和体积。

## **Kai**

### (1)

$t=\lambda-5$ とおくと

$$
\det(\lambda I-A)=t(t^2+at-2a),\qquad
\lambda=5,\quad 5+\frac{-a\pm\sqrt{a^2+8a}}2.
$$

$a>0$ または $a<-8$ では異なる3実固有値を持つ。$-8<a<0$ では非実固有値を持つため、実数上では対角化できない。

$a=0$ では固有値は5のみで、$\dim\ker(A-5I)=2<3$。$a=-8$ では固有値9が重根で、$\dim\ker(A-9I)=1<2$。よって実数上での答えは

$$
\boxed{-8\le a\le0}.
$$

なお、複素数上での対角化を許す場合は、内部の $-8<a<0$ では3固有値が相異なるので、対角化できない値は $\boxed{a=-8,0}$ のみである。

### (2)

$a=1$ では固有値は $3,5,6$。対応する正規化固有ベクトルを

$$
v_1=\frac1{\sqrt6}\begin{pmatrix}-1\\2\\-1\end{pmatrix},\qquad
v_2=\frac1{\sqrt2}\begin{pmatrix}1\\0\\-1\end{pmatrix},\qquad
v_3=\frac1{\sqrt3}\begin{pmatrix}1\\1\\1\end{pmatrix}
$$

と取れる。各固有空間はそれぞれ $v_1,v_2,v_3$ の非零定数倍からなる。

### (3)

$$
\boxed{P=(v_1\ v_2\ v_3)=\frac1{\sqrt6}
\begin{pmatrix}-1&\sqrt3&\sqrt2\\2&0&\sqrt2\\-1&-\sqrt3&\sqrt2\end{pmatrix}},
\qquad P^{\mathsf T}AP=\operatorname{diag}(3,5,6).
$$

$v_i^{\mathsf T}v_j=\delta_{ij}$ より $P^{\mathsf T}P=I$。

### (4)

$X=(x,y,z)^{\mathsf T}$、$b=\sqrt6(1,-2,1)^{\mathsf T}$ とおくと

$$
\boxed{X^{\mathsf T}AX+b^{\mathsf T}X=0}.
$$

### (5)

$X=PU$、$U=(u,v,w)^{\mathsf T}$ とする。$P^{\mathsf T}b=(-6,0,0)^{\mathsf T}$ より

$$
3u^2+5v^2+6w^2-6u=0
\quad\Longleftrightarrow\quad
(u-1)^2+\frac{v^2}{3/5}+\frac{w^2}{1/2}=1.
$$

したがって新座標での中心は $\boxed{(1,0,0)}$、半軸長は $1,\sqrt{3/5},1/\sqrt2$ であり、

$$
\boxed{V=\frac{4\pi}{3}\sqrt{\frac35}\frac1{\sqrt2}
=\frac{2\sqrt{30}\pi}{15}}.
$$
