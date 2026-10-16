---
sidebar_label: "例題集 数学 問題1"
tags:
  - Chiba-University
  - Mathematics.Calculus.Implicit-Differentiation
  - Mathematics.Calculus.Arc-Length
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---

# 千葉大学 電気電子系コース 入学試験問題例題集 数学 問題1

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%8D%83%E8%91%89%E5%A4%A7%E5%AD%A6/%E8%9E%8D%E5%90%88%E7%90%86%E5%B7%A5%E5%AD%A6%E5%BA%9C_%E5%9F%BA%E5%B9%B9%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E9%9B%BB%E6%B0%97%E9%9B%BB%E5%AD%90%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/%E4%BE%8B%E9%A1%8C%E9%9B%86_%E6%95%B0%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

次の設問に答えよ。

(1) 陰関数で表された曲線 $x^3+y^3-4xy=0$ 上の点 $(2,2)$ における接線の方程式を求めよ。

(2) 曲線 $x(t)=t-\sin t$、$y(t)=1-\cos t$（$0\le t\le2\pi$）の長さを求めよ。

(3) 次の写像のヤコビ行列を求めよ。

$$
f:\mathbb R^2\to\mathbb R^3,\qquad
f\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}xe^y+\cos y\\x\\x+e^y\end{pmatrix}.
$$

#### 题目描述

1. 求隐式曲线 $x^3+y^3-4xy=0$ 在 $(2,2)$ 的切线方程。
2. 求参数曲线 $x=t-\sin t,y=1-\cos t$（$0\le t\le2\pi$）的长度。
3. 求映射 $f(x,y)=(xe^y+\cos y,x,x+e^y)^{\mathsf T}$ 的 Jacobian 矩阵。

## **Kai**

### (1)

$F(x,y)=x^3+y^3-4xy$ とおく。$F_y(2,2)=3\cdot2^2-4\cdot2=4\ne0$ なので、近傍で $y$ は $x$ の微分可能な関数として表される。

$$
y'=-\frac{F_x}{F_y}=-\frac{3x^2-4y}{3y^2-4x},\qquad y'(2)=-1.
$$

よって接線は $y-2=-(x-2)$、すなわち $\boxed{x+y-4=0}$。

### (2)

$x'=1-\cos t$、$y'=\sin t$ から、

$$
\begin{aligned}
L&=\int_0^{2\pi}\sqrt{(1-\cos t)^2+\sin^2t}\,dt\\
&=2\int_0^{2\pi}\left|\sin\frac t2\right|\,dt
=2\int_0^{2\pi}\sin\frac t2\,dt=\boxed8.
\end{aligned}
$$

### (3)

各成分を $x,y$ で偏微分すると、

$$
\boxed{Df(x,y)=\begin{pmatrix}
e^y&xe^y-\sin y\\1&0\\1&e^y
\end{pmatrix}}.
$$

## **Reference**

- [大学公式問題（3ページ）](https://www.te.chiba-u.jp/sites/default/files/doc/probs.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E5%8D%83%E8%91%89%E5%A4%A7%E5%AD%A6/%E8%9E%8D%E5%90%88%E7%90%86%E5%B7%A5%E5%AD%A6%E5%BA%9C_%E5%9F%BA%E5%B9%B9%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E9%9B%BB%E6%B0%97%E9%9B%BB%E5%AD%90%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/%E4%BE%8B%E9%A1%8C%E9%9B%86_%E6%95%B0%E5%AD%A6.html)
