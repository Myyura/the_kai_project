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

### 题目描述

回答下列问题：

1. 设 $0<x<\pi/2$，对函数 $f(x)=\log(1/\tan x)$ 求导。
2. 求极限

   $$
   \lim_{x\to-\infty}\left(x+2+\sqrt{x^2+4}\right).
   $$

3. 计算定积分

   $$
   \int_0^\pi e^{-x}\sin x\,dx.
   $$

#### 考点

- **微分**：需要对含对数与正切函数的复合函数 $f(x)=\log(1/\tan x)$ 正确求导并化简。
- **极限**：需要处理 $x\to-\infty$ 时 $x+\sqrt{x^2+4}$ 的无穷量相消，可通过有理化求出极限。
- **定积分**：需要求出 $e^{-x}\sin x$ 的原函数并代入区间端点 $0,\pi$。

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
