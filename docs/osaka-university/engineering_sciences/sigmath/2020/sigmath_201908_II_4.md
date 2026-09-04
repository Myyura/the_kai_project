---
sidebar_label: "2019年8月実施 数理科学 II [4]"
tags:
  - Osaka-University
  - Mathematics.Real-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 II \[4\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$t>0,x\in\mathbb R$ に対して $\varphi(t,x)=\log\cosh(x/t)$ と定める。ただし、$a\in\mathbb R$ に対して $\cosh a=(e^a+e^{-a})/2$ である。次の極限を求めよ。

(1) $\lim_{t\downarrow0}t\varphi(t,x)$。

(2) $\lim_{t\uparrow\infty}t^2\varphi(t,x)$。

(3) $\displaystyle\lim_{t\downarrow0}\int_{-\infty}^\infty t\varphi(t,x)\frac3{1+|x|^3}\,dx$。

(4) $\displaystyle\lim_{t\uparrow\infty}\int_{-\infty}^\infty t^2\varphi(t,x)e^{-|x|^3/3}\,dx$。

## **Kai**

### (1)

$$
t\log\cosh(x/t)=|x|+t\log\frac{1+e^{-2|x|/t}}2\longrightarrow\boxed{|x|}.
$$

### (2)
$\log\cosh u=u^2/2+o(u^2)$ より、極限は $\boxed{x^2/2}$。

### (3)
$0\le t\log\cosh(x/t)\le|x|$ であり、$3|x|/(1+|x|^3)$ は可積分。優収束定理より

$$
6\int_0^\infty\frac{x}{1+x^3}\,dx
=\boxed{\frac{4\pi}{\sqrt3}}.
$$

### (4)
$u\ge0$ に対し $\tanh u\le u$ を積分すると $0\le\log\cosh u\le u^2/2$。偶性から全実数で成り立つ。したがって優収束定理により

$$
\frac12\int_{-\infty}^\infty x^2e^{-|x|^3/3}\,dx
=\int_0^\infty x^2e^{-x^3/3}\,dx=\boxed1.
$$
