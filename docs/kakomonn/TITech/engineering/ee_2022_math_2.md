---
comments: false
title: 東京工業大学 工学院 電気電子系 2022年度 数学 2
tags:
  - TITech
---
# 東京工業大学 工学院 電気電子系 2022年度 数学 2

## **Author**
Miyake

## **Description**

## **Kai**
### 1)
#### a)
与えられた微分方程式 (2.1) の右辺を $0$ にした

$$
  \begin{aligned}
  \frac{dy}{dx} + y = 0
  \end{aligned}
$$

の一般解は、任意定数を $A$ として $y = Ae^{-x}$ である。
そこで、(2.1) に $y=A(x)e^{-x}$ を代入すると、

$$
  \begin{aligned}
  \frac{dA(x)}{dx} &= 1
  \\
  \therefore \ \ 
  A(x) &= x + C
  \end{aligned}
$$

を得る。
よって、 (2.1) の一般解は、 $C$ を任意定数として、

$$
  \begin{aligned}
  y &= (x + C)e^{-x}
  \end{aligned}
$$

#### b)
$y=e^{\lambda x}$ を (2.2) に代入すると、

$$
\begin{aligned}
\lambda^2 - 2 \lambda - 8 &= 0
\\
(\lambda - 4)(\lambda + 2) &= 0
\\
\therefore \ \ 
\lambda &= -2, 4
\end{aligned}
$$

なので、 (2.2) の一般解は、 $A, B$ を任意定数として、

$$
\begin{aligned}
y = A e^{-2x} + B e^{4x}
\end{aligned}
$$

### 2)
#### a)
(2.3) で $\alpha=1$ とした方程式に、$y=Ce^{-x}$ を代入すると、
$C = -1/5$ となる。
よって、一般解は、 $A, B$ を任意定数として、

$$
\begin{aligned}
y = A e^{-2x} + B e^{4x} - \frac{1}{5} e^{-x}
\end{aligned}
$$

#### b)
(2.3) で $\alpha=2$ とした方程式に、$y=Cxe^{-2x}$ を代入すると、
$C = -1/6$ となる。
よって、一般解は、 $A, B$ を任意定数として、

$$
\begin{aligned}
y = A e^{-2x} + B e^{4x} - \frac{1}{6} xe^{-2x}
\end{aligned}
$$