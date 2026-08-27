---
sidebar_label: 2021年8月実施 必須問題（数学）問1
tags:
  - University-of-Electro-Communications
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Differential-Equations.Bernoulli-Equation
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2021年8月実施 必須問題（数学）問1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

領域

$$
D=\{(x,y)\mid1\le x+y\le2,\ 0\le x-y\le1\}
$$

上の

$$
\iint_D\frac{\tan^{-1}(x-y)}{x+y}\,dx\,dy
$$

を求めよ。また、次の微分方程式の一般解を求めよ。

$$
\text{(i) }\frac{dy}{dx}-y=xy^2,
\qquad
\text{(ii) }y''-2y'+y=e^x\cos x.
$$

### 题目描述

通过线性变量代换计算二重积分，并求一个 Bernoulli 方程和一个常系数二阶方程的通解。

## **Kai**

### (1)

$u=x+y,\ v=x-y$ とおくと $dx\,dy=\frac12\,du\,dv$ である。したがって、

$$
\begin{aligned}
I
&=\frac12\int_1^2\frac{du}{u}\int_0^1\tan^{-1}v\,dv\\
&=\frac12\log2\left(\frac{\pi}{4}-\frac12\log2\right)\\
&=\boxed{\frac{\pi\log2}{8}-\frac{(\log2)^2}{4}}.
\end{aligned}
$$

### (2)

#### (i)

$y\ne0$ とし、$z=1/y$ とおくと、

$$
z'+z=-x.
$$

ゆえに $z=Ce^{-x}-x+1$ であり、

$$
\boxed{y=\frac1{Ce^{-x}-x+1}}.
$$

なお、$\boxed{y=0}$ も解である。

#### (ii)

$y=e^xu$ とおくと $y''-2y'+y=e^xu''$ となる。よって $u''=\cos x$ から、

$$
\boxed{y=e^x(C_1x+C_2-\cos x)}
$$

を得る。
