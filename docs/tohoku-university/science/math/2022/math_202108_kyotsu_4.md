---
sidebar_label: "2021年8月実施 共通問題 問題4（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Gaussian-Integral
  - Mathematics.Calculus.Parametric-Differentiation
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Real-Analysis.Interchange-of-Limit-Derivative-and-Integral
---

# 東北大学 大学院理学研究科 数学専攻 2021年8月実施 共通問題 問題4

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$L>0$ とする．$t\in[0,L)$ に対し，

$$
I(t)=\int_0^{\infty}e^{-x^2}\cosh(tx)\,dx,
\qquad
J(t)=\int_0^{\infty}xe^{-x^2}\sinh(tx)\,dx
$$

とおく．ただし，$\sinh(x)$ と $\cosh(x)$ はそれぞれ

$$
\sinh(x)=\frac{e^x-e^{-x}}2,
\qquad \cosh(x)=\frac{e^x+e^{-x}}2
$$

で定義される関数とする．以下の問いに答えよ．

(1) $I(0)$ を求めよ．

(2) 広義積分 $I(t)=\displaystyle\int_0^{\infty}e^{-x^2}\cosh(tx)\,dx$ と $J(t)=\displaystyle\int_0^{\infty}xe^{-x^2}\sinh(tx)\,dx$ はともに $t$ に関し $[0,L)$ 上で一様収束することを示せ．

(3) $t\in(0,L)$ に対して $I'(t)=\dfrac t2I(t)$ が成り立つことを示せ．

(4) $I(t)$ を求めよ．

### 题目描述

设 $L>0$。对 $t\in[0,L)$，令

$$
I(t)=\int_0^{\infty}e^{-x^2}\cosh(tx)\,dx,
\qquad
J(t)=\int_0^{\infty}xe^{-x^2}\sinh(tx)\,dx.
$$

其中双曲正弦与双曲余弦分别定义为

$$
\sinh(x)=\frac{e^x-e^{-x}}2,
\qquad \cosh(x)=\frac{e^x+e^{-x}}2.
$$

回答下列问题。

(1) 求 $I(0)$。

(2) 证明广义积分 $I(t)=\displaystyle\int_0^{\infty}e^{-x^2}\cosh(tx)\,dx$ 和 $J(t)=\displaystyle\int_0^{\infty}xe^{-x^2}\sinh(tx)\,dx$ 关于 $t$ 都在 $[0,L)$ 上一致收敛。

(3) 对 $t\in(0,L)$，证明 $I'(t)=\dfrac t2 I(t)$。

(4) 求 $I(t)$。

## **Kai**

### (1)

$I(0)=\int_0^{\infty}e^{-x^2}\,dx>0$．平方して極座標に変換すると

$$
I(0)^2
=\int_0^{\pi/2}\int_0^{\infty}e^{-r^2}r\,dr\,d\theta
=\frac{\pi}{4}.
$$

したがって $I(0)=\sqrt{\pi}/2$．

### (2)

$0\le t<L$，$x\ge0$ に対して

$$
|e^{-x^2}\cosh(tx)|\le e^{-x^2+Lx},
\qquad |xe^{-x^2}\sinh(tx)|\le xe^{-x^2+Lx}.
$$

ここで $-x^2+Lx=-(x-L/2)^2+L^2/4$ だから，右辺はいずれも $[0,\infty)$ 上で可積分である．したがって

$$
\begin{aligned}
\sup_{0\le t<L}\left|\int_R^{\infty}e^{-x^2}\cosh(tx)\,dx\right|
&\le\int_R^{\infty}e^{-x^2+Lx}\,dx\longrightarrow0,\\
\sup_{0\le t<L}\left|\int_R^{\infty}xe^{-x^2}\sinh(tx)\,dx\right|
&\le\int_R^{\infty}xe^{-x^2+Lx}\,dx\longrightarrow0.
\end{aligned}
$$

ゆえに両広義積分は $t$ に関して一様収束する．

### (3)

被積分関数の $t$ 微分は $xe^{-x^2}\sinh(tx)$ であり，(2) の可積分な上界によって積分記号下の微分が正当化される．したがって $I'(t)=J(t)$．さらに部分積分により

$$
\begin{aligned}
J(t)
&=-\frac12\left[e^{-x^2}\sinh(tx)\right]_{0}^{\infty}
 +\frac t2\int_0^{\infty}e^{-x^2}\cosh(tx)\,dx\\
&=\frac t2I(t).
\end{aligned}
$$

境界項は $x=0$ では $\sinh0=0$，$x\to\infty$ では Gaussian の減衰によって $0$ となる．

### (4)

(3) より $\dfrac{d}{dt}(e^{-t^2/4}I(t))=0$．$t=0$ での連続性と (1) を用いて

$$
\boxed{I(t)=\frac{\sqrt{\pi}}2e^{t^2/4}\qquad(0\le t<L)}.
$$

## **Reference**

- [東北大学公式問題の保存版（2022年度・共通問題，第4ページ）](https://raw.githubusercontent.com/Zhang-HL-1/japan-study-journal/0a188193807a8b4fa38aa5347ff01691340713da/assets/past-papers/documents/6110ccabe6011778aebd2b7b2760cae02ff6a050fb05faeed14330c67bddee6d.pdf)
- [L^2：2022年度 共通問題・微積分 2](https://note.com/normalmath/n/n89152917de11#ad37f84b-70cf-4508-a269-d6afd2bc39d0)
