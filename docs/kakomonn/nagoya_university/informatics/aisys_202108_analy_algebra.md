---
comments: false
title: 名古屋大学 情報学研究科 知能システム学専攻 2021年8月実施 解析・線形代数
tags:
  - Nagoya-University
---
# 名古屋大学 情報学研究科 知能システム学専攻 2021年8月実施 解析・線形代数

## **Author**
Miyake

## **Description**

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