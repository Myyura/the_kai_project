---
sidebar_label: "2022年8月実施 解析・線形代数 [3]"
tags:
  - Nagoya-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Local-Extrema
---
# 名古屋大学 情報学研究科 知能システム学専攻 2022年8月実施 解析・線形代数 [3]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

関数 $f(x,y) = (x+y)e^{-x^2-y^2}$ について、次の問いに答えよ.

(a) $f$ の停留点をすべて求めよ.

(b) (a)で求めた停留点ごとにヘッセ行列 $H = \begin{bmatrix} \frac{\partial^2 f(x,y)}{\partial x^2} & \frac{\partial^2 f(x,y)}{\partial x \partial y} \\ \frac{\partial^2 f(x,y)}{\partial x \partial y} & \frac{\partial^2 f(x,y)}{\partial y^2} \end{bmatrix}$ とその固有値を求めよ.

(c) (b)で求めた固有値を用いて、(a)で求めた停留点がそれぞれ極大点, 極小点, 鞍点のいずれであるかを示せ.

### 题目描述

给定函数

$$
f(x,y)=(x+y)e^{-x^2-y^2}.
$$

1. 求 $f$ 的全部驻点；
2. 对第 1 问求得的每个驻点，分别计算 Hessian 矩阵

   $$
   H=
   \begin{bmatrix}
   \dfrac{\partial^2f(x,y)}{\partial x^2}&
   \dfrac{\partial^2f(x,y)}{\partial x\partial y}\\[6pt]
   \dfrac{\partial^2f(x,y)}{\partial x\partial y}&
   \dfrac{\partial^2f(x,y)}{\partial y^2}
   \end{bmatrix}
   $$

   及其全部特征值；
3. 利用第 2 问所得特征值，说明第 1 问的每个驻点分别是极大点、极小点还是鞍点。

## **Kai**

関数

$$
f(x,y)=(x+y)e^{-x^2-y^2}
$$

について考える．

(a)
停留点は

$$
\frac{\partial f}{\partial x}
=\frac{\partial f}{\partial y}
=0
$$

を満たす点である．まず，

$$
\frac{\partial f}{\partial x}
=e^{-x^2-y^2}\bigl(1-2x(x+y)\bigr),
\qquad
\frac{\partial f}{\partial y}
=e^{-x^2-y^2}\bigl(1-2y(x+y)\bigr)
$$

である． $e^{-x^2-y^2}>0$ であるから，

$$
1-2x(x+y)=0,
\qquad
1-2y(x+y)=0
$$

を解けばよい．両式を比較すると，

$$
x(x+y)=y(x+y)
$$

より，

$$
x^2=y^2
$$

が従う．

まず $x=y$ とすると，

$$
1-2x(2x)=0
$$

より，

$$
x^2=\frac{1}{4}
$$

となる．したがって，

$$
\left(\frac{1}{2},\frac{1}{2}\right),
\qquad
\left(-\frac{1}{2},-\frac{1}{2}\right)
$$

が停留点である．

一方 $x=-y$ の場合には

$$
1-2x(x+y)=1
$$

となり，条件を満たさない．

(b)
次にヘッセ行列を求める．二階偏微分は

$$
\frac{\partial^2 f}{\partial x^2}
=e^{-x^2-y^2}\bigl[-2x(1-2x(x+y))-2(2x+y)\bigr],
$$

$$
\frac{\partial^2 f}{\partial y^2}
=e^{-x^2-y^2}\bigl[-2y(1-2y(x+y))-2(x+2y)\bigr],
$$

$$
\frac{\partial^2 f}{\partial x\partial y}
=e^{-x^2-y^2}\bigl[-2y(1-2x(x+y))-2x\bigr]
$$

である．

停留点 $\left(\frac{1}{2},\frac{1}{2}\right)$ においては，

$$
H\left(\frac{1}{2},\frac{1}{2}\right)
=e^{-\frac12}
\begin{pmatrix}
-3 & -1\\
-1 & -3
\end{pmatrix}
$$

を得る．

同様に，停留点 $\left(-\frac{1}{2},-\frac{1}{2}\right)$ においては，

$$
H\left(-\frac{1}{2},-\frac{1}{2}\right)
=e^{-\frac12}
\begin{pmatrix}
3 & 1\\
1 & 3
\end{pmatrix}
$$

となる．

(c)
(b) の結果を用いて極値の判定を行う．

行列

$$
\begin{pmatrix}
-3 & -1\\
-1 & -3
\end{pmatrix}
$$

の固有値は $-2,-4$ であり，ともに負である．
したがって，実際のヘッセ行列の固有値は

$$
-2e^{-1/2},\qquad -4e^{-1/2}
$$

であり，ともに負である．
したがって，

$$
H\left(\frac{1}{2},\frac{1}{2}\right)
$$

は負定値であり，

$$
\left(\frac{1}{2},\frac{1}{2}\right)
$$

は極大点である．

一方，

$$
\begin{pmatrix}
3 & 1\\
1 & 3
\end{pmatrix}
$$

の固有値は $2,4$ であり，ともに正である．
したがって，実際のヘッセ行列の固有値は

$$
2e^{-1/2},\qquad 4e^{-1/2}
$$

であり，ともに正である．
したがって，

$$
H\left(-\frac{1}{2},-\frac{1}{2}\right)
$$

は正定値であり，

$$
\left(-\frac{1}{2},-\frac{1}{2}\right)
$$

は極小点である．
