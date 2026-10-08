---
sidebar_label: "2020年度 専門科目 問題8"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.Energy-Estimates-for-Parabolic-Equations
  - Mathematics.Functional-Analysis.Uniform-Convergence
---

# 京都大学 理学研究科 数学・数理解析専攻 2020年度 専門科目 問題8

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$C^2$ 級関数 $u:[0,1]\times[0,\infty)\to\mathbb R$ は以下を満たすとする。

$$
\begin{cases}
u_t(x,t)=u_{xx}(x,t)-u(x,t)+\alpha,&0<x<1,\ t>0,\\
u_x(0,t)=u_x(1,t)=0,&t>0.
\end{cases}
$$

ここで、$\displaystyle\alpha=\int_0^1u(x,0)\,dx$ とする。

1. 任意の $t\ge0$ に対し、$\displaystyle\int_0^1u(x,t)\,dx=\alpha$ であることを示せ。
2. $\displaystyle E(t)=\int_0^1(u_x(x,t))^2\,dx$ と置くとき、$\displaystyle\lim_{t\to\infty}E(t)=0$ を示せ。
3. $\displaystyle\lim_{t\to\infty}\max_{x\in[0,1]}|\alpha-u(x,t)|=0$ を示せ。

#### 题目描述

设 $u\in C^2([0,1]\times[0,\infty))$ 为实值函数，满足

$$
u_t=u_{xx}-u+\alpha\quad(0<x<1,t>0),
\qquad u_x(0,t)=u_x(1,t)=0,
$$

其中 $\alpha=\int_0^1u(x,0)\,dx$。

1. 证明所有 $t\ge0$ 都有 $\int_0^1u(x,t)\,dx=\alpha$。
2. 令 $E(t)=\int_0^1u_x(x,t)^2\,dx$，证明 $E(t)\to0$。
3. 证明 $u(\cdot,t)$ 在 $[0,1]$ 上一致收敛到常数 $\alpha$。

## **Kai**

### (1)

$m(t)=\int_0^1u(x,t)\,dx$ と置く。方程式と境界条件から、$t>0$ で

$$
m'(t)=\int_0^1u_t\,dx
=[u_x]_0^1-m(t)+\alpha=-m(t)+\alpha.
$$

$m(0)=\alpha$ なので、この常微分方程式の解は $m(t)=\alpha$ である。

### (2)

$t>0$ において、部分積分と $u_x(0,t)=u_x(1,t)=0$ より

$$
\begin{aligned}
E'(t)
&=2\int_0^1u_xu_{xt}\,dx
=-2\int_0^1u_{xx}u_t\,dx\\
&=-2\int_0^1u_{xx}(u_{xx}-u+\alpha)\,dx\\
&=-2\int_0^1u_{xx}^2\,dx-2\int_0^1u_x^2\,dx
\le-2E(t).
\end{aligned}
$$

ここでは $\int_0^1u_{xx}\,dx=0$ と $\int_0^1u_{xx}u\,dx=-E(t)$ を用いた。したがって $e^{2t}E(t)$ は単調減少であり、$t=0$ での連続性から

$$
0\le E(t)\le E(0)e^{-2t}\longrightarrow0.
$$

### (3)

(1) より、任意の $x\in[0,1]$ に対して

$$
\begin{aligned}
|u(x,t)-\alpha|
&=\left|\int_0^1(u(x,t)-u(y,t))\,dy\right|\\
&\le\int_0^1|u_x(s,t)|\,ds
\le\sqrt{E(t)}.
\end{aligned}
$$

よって

$$
\max_{x\in[0,1]}|u(x,t)-\alpha|
\le\sqrt{E(0)}e^{-t}\longrightarrow0.
$$

## **Reference**

- [京都大学公式問題（2020年度・専門科目、PDF 4ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2019math_senmon_for2020.pdf)
- [照合用参考解答（2020年度・専門科目 問題8、PDF 6–8ページ）](https://drive.google.com/file/d/10upeyfZ8mq7YTmqu-jTKAehwFwgCszNS/view)
