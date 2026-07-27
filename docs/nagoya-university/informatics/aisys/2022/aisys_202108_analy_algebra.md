---
sidebar_label: "2021年8月実施 解析・線形代数"
tags:
  - Nagoya-University
  - Mathematics.Complex-Analysis.Complex-Roots
  - Mathematics.Calculus.Hessian-Test-for-Multivariable-Extrema
  - Mathematics.Linear-Algebra.Quadratic-Form
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
  - Mathematics.Differential-Equations.Cauchy-Euler-Equation
  - Mathematics.Differential-Equations.Reduction-of-Order
---
# 名古屋大学 情報学研究科 知能システム学専攻 2021年8月実施 解析・線形代数

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原 Description 为空；以下题意可由现有解答确认。

1. 求复方程
   $$
   (z+1)^2=2i
   $$
   的全部解。
2. 对
   $$
   f(x,y)=x^3+y^3-3xy,
   $$
   求全部驻点，并用 Hessian 判断其为极值点还是鞍点；给出极值。
3. 给定二次型
   $$
   Q(x,y)=ax^2+2(a+1)xy+ay^2.
   $$
   - 写出对应的实对称矩阵 $A$；
   - 求 $A$ 的特征值；
   - 求使 $Q$ 为定号二次型的参数 $a$ 的范围。
4. 在 $x>0$ 上求 Cauchy–Euler 方程
   $$
   x^2y''-3xy'+4y=0
   $$
   的通解：
   - 先以 $y=x^m$ 求一个幂函数解；
   - 再令 $y=x^2u(x)$、$z=u'(x)$，导出 $z$ 的一阶方程；
   - 求第二个线性无关解及通解。

#### 考点

- **复数开方**：把 $2i$ 写成极形式或直接比较实虚部求平方根。
- **二元函数 Hessian 判别**：求驻点并用 Hessian 特征值的符号区分鞍点与极小点。
- **二次型与正负定性**：由对称矩阵特征值判断二次型何时定号。
- **Cauchy–Euler 方程与降阶**：由重特征根得到一个幂函数解，再通过已知解降阶得到 $x^2\log x$。

## **Kai**
### \[1\]

$$
  \begin{aligned}
  (z+1)^2 &= 2i
  \\
  z+1 &= \pm \sqrt{2} \cdot \frac{1+i}{\sqrt{2}}
  \\
  &= \pm (1+i)
  \\
  \therefore \ \ 
  z &= i, -2-i
  \end{aligned}
$$

### \[2\]
まず、

$$
\begin{aligned}
\frac{\partial f}{\partial x} = 3x^2 - 3y
&, \ \ 
\frac{\partial f}{\partial y} = 3y^2 - 3x
, \\
\frac{\partial^2 f}{\partial x^2} = 6x
, \ \ 
\frac{\partial^2 f}{\partial y^2} = 6y
&, \ \ 
\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x} = -3
\end{aligned}
$$

であり、
$\partial f/\partial x = \partial f/\partial y = 0$
となるのは、
$(x,y)=(0,0),(1,1)$
のときである。

$(x,y)=(0,0)$ でのヘッセ行列は、

$$
\begin{aligned}
\begin{pmatrix} 0 & -3 \\ -3 & 0 \end{pmatrix}
\end{aligned}
$$

であり、これの2つの固有値を $\alpha, \beta$ とすると、
$\alpha \beta = -9$ から異符号である。
よって、この点は鞍点であり、極値を与えない。

$(x,y)=(1,1)$ でのヘッセ行列は、

$$
\begin{aligned}
\begin{pmatrix} 6 & -3 \\ -3 & 6 \end{pmatrix}
\end{aligned}
$$

であり、これの2つの固有値を $\alpha, \beta$ とすると、
$\alpha + \beta = 12, \alpha \beta = 27$ から、どちらも正である。
よって、この点で極小値をとり、その値は $f(1,1)=-2$ である。

### \[3\]
#### (a)

$$
  \begin{aligned}
  A = \begin{pmatrix} a & a+1 \\ a+1 & a \end{pmatrix}
  \end{aligned}
$$

#### (b)
$A$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0 &= \det \begin{pmatrix} a - \lambda & a+1 \\ a+1 & a - \lambda \end{pmatrix}
\\
&= (\lambda + 1)(\lambda - 2a - 1)
\\
\therefore \ \ 
\lambda &= -1, 2a+1
\end{aligned}
$$

である。

#### (\(c\))
2次形式 $Q$ が定符号であるということは、
対称行列 $A$ の2つの固有値が同符号であるということなので、
求める範囲は

$$
\begin{aligned}
2a+1 &\lt 0
\\
\therefore \ \ 
a &\lt - \frac{1}{2}
\end{aligned}
$$

である。

### \[4\]
#### (a)
$y=x^m$ とすると、

$$
\begin{aligned}
\frac{dy}{dx} &= m x^{m-1}
\\
\frac{d^2 y}{dx^2} &= m(m-1) x^{m-2}
\end{aligned}
$$

であり、これらを与えられた微分方程式 (*) に代入して、 $x \gt 0$ に注意して整理すると、

$$
\begin{aligned}
(m-2)^2 &= 0
\\
\therefore \ \ 
m &= 2
\end{aligned}
$$

を得る。
実際、

$$
\begin{aligned}
y = x^2
\end{aligned}
$$

が (*) の解であることは簡単に確かめられる。

#### (b)
$y=x^2 u(x)$ として、 $z = du/dx$ を使うと、

$$
\begin{aligned}
\frac{dy}{dx} &= 2xu + x^2 z
\\
\frac{d^2 y}{dx^2} &= 2u + 4xz + x^2 \frac{dz}{dx}
\end{aligned}
$$

であり、これらを与えられた微分方程式 (*) に代入して、 $x \gt 0$ に注意して整理すると、

$$
\begin{aligned}
x \frac{dz}{dx} + z = 0
\end{aligned}
$$

を得る。

#### (\(c\))
(b) で得られた微分方程式を積分して、積分定数を適当に選ぶと、

$$
\begin{aligned}
z &= \frac{1}{x}
\\
u &= \log x
\end{aligned}
$$

を得る。
実際、 $y = x^2 \log x$ は (*) を満たす。
以上より、 (*) の一般解は、任意定数を $A,B$ として、

$$
\begin{aligned}
y = A x^2 + B x^2 \log x
\end{aligned}
$$

である。
