---
sidebar_label: "2017年7月実施 数理基礎 A"
tags:
  - Waseda-University
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Definite-Integral
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2017年7月実施 数理基礎 A

## **Author**
祭音Myyura

## **Description**

次の問いに答えよ。

1. $0<x<\pi/2$ とする。$f(x)=\log(1/\tan x)$ を微分せよ。
2. $\displaystyle\lim_{x\to-\infty}\left(x+2+\sqrt{x^2+4}\right)$ を求めよ。
3. $\displaystyle\int_0^\pi e^{-x}\sin x\,dx$ を求めよ。

## **Kai**

### [小問 1]

$$
f(x)=-\log(\tan x)
$$

より、

$$
\begin{aligned}
f'(x)
&=-\frac{\sec^2x}{\tan x}
=-\frac{1}{\sin x\cos x}
=\boxed{-\frac{2}{\sin2x}}.
\end{aligned}
$$

### [小問 2]

$x\to-\infty$ では $\sqrt{x^2+4}-x>0$ なので、有理化すると

$$
\begin{aligned}
x+\sqrt{x^2+4}
&=\frac{4}{\sqrt{x^2+4}-x}
\longrightarrow0.
\end{aligned}
$$

したがって

$$
\boxed{\lim_{x\to-\infty}\left(x+2+\sqrt{x^2+4}\right)=2}.
$$

### [小問 3]

原始関数は

$$
\int e^{-x}\sin x\,dx
=-\frac12e^{-x}(\sin x+\cos x)
$$

である。よって

$$
\begin{aligned}
\int_0^\pi e^{-x}\sin x\,dx
&=\left[-\frac12e^{-x}(\sin x+\cos x)\right]_0^\pi\\
&=\boxed{\frac{1+e^{-\pi}}{2}}.
\end{aligned}
$$
