---
sidebar_label: '2025年8月実施 数学 第1問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Cauchy-Euler-Equation
  - Mathematics.Differential-Equations.Riccati-Equation
---

# 東京大学 工学系研究科 2025年8月実施 数学 第1問

## **Author**
GPT-5.6 Sol

## **Description**

### I

次の微分方程式の一般解 $y(x)$ を求めよ。

1.
   $$
   y''+6y'+8y-3e^{-x}=0.
   $$
2.
   $$
   x^2y''-2y-4x^3=0.
   $$

### II

微分方程式

$$
x(2x^3-1)y'+2x^2+y-2xy^2=0
$$

を考える。

1. 特解が $y=A_0+A_1x+A_2x^2$ の形で与えられるとき、$A_0,A_1,A_2$ を求めよ。
2. 1. の特解を用いて一般解を求めよ。

## **Kai**

### I.1

同次方程式の特性方程式は

$$
\lambda^2+6\lambda+8=(\lambda+2)(\lambda+4)=0
$$

である。右辺を $3e^{-x}$ とみて特解を $y_p=Ae^{-x}$ とおくと、

$$
(1-6+8)Ae^{-x}=3Ae^{-x}=3e^{-x}
$$

より $A=1$ である。したがって、

$$
\boxed{y=C_1e^{-2x}+C_2e^{-4x}+e^{-x}}
$$

を得る。

### I.2

$x\ne0$ の区間で Cauchy-Euler 型方程式として解く。同次解を $y=x^m$ とおくと、

$$
m(m-1)-2=(m-2)(m+1)=0,
$$

したがって $m=2,-1$ である。また特解を $y_p=Ax^3$ とおけば、

$$
x^2(6Ax)-2Ax^3=4Ax^3=4x^3
$$

より $A=1$ である。ゆえに、

$$
\boxed{y=C_1x^2+\frac{C_2}{x}+x^3}\qquad(x\ne0)
$$

となる。

### II.1

$y=A_0+A_1x+A_2x^2$ を代入して $x$ の各次数の係数を比較すると、

$$
\begin{aligned}
0={}&(-2A_2^2+4A_2)x^5+(-4A_1A_2+2A_1)x^4\\
&+(-4A_0A_2-2A_1^2)x^3+(-4A_0A_1-A_2+2)x^2\\
&-2A_0^2x+A_0.
\end{aligned}
$$

これを満たす係数は

$$
\boxed{A_0=0,\qquad A_1=0,\qquad A_2=2}
$$

であり、特解は

$$
y_p=2x^2
$$

である。

### II.2

Riccati 方程式を

$$
y'=\frac{2}{2x^3-1}y^2-\frac{1}{x(2x^3-1)}y-\frac{2x}{2x^3-1}
$$

と書き、既知の特解を用いて

$$
y=2x^2+\frac1u
$$

とおく。代入して整理すると、$u$ は線形方程式

$$
u'+\frac{8x^3-1}{x(2x^3-1)}u=-\frac{2}{2x^3-1}
$$

を満たす。ここで

$$
\frac{8x^3-1}{x(2x^3-1)}
=\frac1x+\frac{6x^2}{2x^3-1}
$$

なので、積分因子は

$$
\mu(x)=x(2x^3-1)
$$

である。したがって、

$$
\frac{d}{dx}\left[x(2x^3-1)u\right]=-2x
$$

より

$$
u=\frac{C-x^2}{x(2x^3-1)}.
$$

よって一般の一パラメータ解は

$$
\boxed{
y=2x^2+\frac{x(2x^3-1)}{C-x^2}
=\frac{x(2Cx-1)}{C-x^2}
}
$$

である。また、変数変換で除外された特解 $y=2x^2$ 自身も元の方程式を満たす。以上の式は分母および微分項の係数が零にならない区間ごとに考える。

## **Reference**

- [東京大学大学院工学系研究科 2026年度大学院入学試験問題 数学](https://www.t.u-tokyo.ac.jp/hubfs/admission/2026/M_J_E_2026.pdf)
