---
sidebar_label: "2019年8月実施 共通問題 問題3（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Continuity-and-Differentiability
---

# 東北大学 大学院理学研究科 数学専攻 2019年8月実施 共通問題 問題3

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は4題ある．全問に解答すること．

$\alpha$ を $\frac12$ 以上の実数とする．以下の問いに答えよ．

(1) 任意の $\theta\in[\frac\pi2,\pi]$ に対し，次が成り立つことを示せ．

$$
\cos\theta\le-1+\frac12(\theta-\pi)^2.
$$

(2) 次の広義積分の収束・発散を調べよ．

$$
\int_0^\pi\frac{d\theta}{(1+\cos\theta)^\alpha}.
$$

以下，これが収束する場合はその値を $I_\alpha$ とし，発散する場合は $I_\alpha=\infty$ とおく．

(3) 区間 $[0,\pi)$ 上で定義された関数

$$
\Phi_\alpha(x)=\int_0^x\frac{d\theta}{(1+\cos\theta)^\alpha}\qquad(0\le x<\pi)
$$

は，逆関数 $X_\alpha:[0,I_\alpha)\to[0,\pi)$ を持つことを示せ．また $X_\alpha(t)$ は $(0,I_\alpha)$ 上 $C^2$ 級で，次を満たすことを示せ．

$$
\frac{d^2}{dt^2}X_\alpha(t)=-\alpha(1+\cos X_\alpha(t))^{2\alpha-1}\sin X_\alpha(t)\qquad(0<t<I_\alpha).
$$

### 题目描述

本卷共有4题，全部作答。

设 $\alpha\ge\frac12$ 为实数。回答下列问题。

(1) 证明对任意 $\theta\in[\frac\pi2,\pi]$，有

$$
\cos\theta\le-1+\frac12(\theta-\pi)^2.
$$

(2) 判断下列广义积分收敛还是发散：

$$
\int_0^\pi\frac{d\theta}{(1+\cos\theta)^\alpha}.
$$

以下，若积分收敛，将其值记为 $I_\alpha$；若发散，令 $I_\alpha=\infty$。

(3) 证明定义在 $[0,\pi)$ 上的函数

$$
\Phi_\alpha(x)=\int_0^x\frac{d\theta}{(1+\cos\theta)^\alpha}\qquad(0\le x<\pi)
$$

存在逆函数 $X_\alpha:[0,I_\alpha)\to[0,\pi)$。并证明 $X_\alpha$ 在 $(0,I_\alpha)$ 上是 $C^2$ 函数，且满足

$$
X_\alpha''(t)=-\alpha(1+\cos X_\alpha(t))^{2\alpha-1}\sin X_\alpha(t)\qquad(0<t<I_\alpha).
$$

## **Kai**

### (1)

$u=\pi-\theta\in[0,\pi/2]$ とおく．$0\le\sin v\le v$ より

$$
1+\cos\theta=1-\cos u=\int_0^u\sin v\,dv\le\frac{u^2}{2},
$$

したがって求める不等式が成り立つ．

### (2)

(1) より，$\pi/2\le\theta<\pi$ では

$$
\frac1{(1+\cos\theta)^\alpha}\ge\frac{2^\alpha}{(\pi-\theta)^{2\alpha}}.
$$

$u=\pi-\theta>0$ と置換すると，比較する積分は

$$
2^\alpha\int_0^{\pi/2}u^{-2\alpha}\,du=\infty
$$

である．実際，$2\alpha=1$ では対数的に，$2\alpha>1$ ではべき的に発散する．よって与えられた積分は $+\infty$ に発散し，$I_\alpha=\infty$ である．

### (3)

$0\le x<\pi$ で被積分関数は連続かつ正なので，$\Phi_\alpha$ は連続で狭義単調増加し，$\Phi_\alpha(0)=0$ である．(2) より $\Phi_\alpha(x)\to\infty$（$x\to\pi-0$）だから，$\Phi_\alpha$ は $[0,\pi)$ から $[0,I_\alpha)=[0,\infty)$ への全単射であり，逆関数 $X_\alpha$ を持つ．

$(0,\pi)$ では $\Phi_\alpha$ は $C^\infty$ 級で

$$
\Phi_\alpha'(x)=(1+\cos x)^{-\alpha}>0.
$$

逆関数定理により $X_\alpha$ は $(0,I_\alpha)$ で $C^\infty$ 級，特に $C^2$ 級である．$\Phi_\alpha(X_\alpha(t))=t$ を微分して

$$
X_\alpha'(t)=(1+\cos X_\alpha(t))^\alpha.
$$

さらに微分すれば

$$
\begin{aligned}
X_\alpha''(t)
&=-\alpha(1+\cos X_\alpha(t))^{\alpha-1}\sin X_\alpha(t)X_\alpha'(t)\\
&=-\alpha(1+\cos X_\alpha(t))^{2\alpha-1}\sin X_\alpha(t).
\end{aligned}
$$

## **Reference**

- [東北大学公式問題の保存版（2020年度・共通問題，kyotsu2020(R2).pdf 第3ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2020年度 共通問題・微積分 1](https://note.com/normalmath/n/n89152917de11#10d6a918-e9fc-4d09-b0e4-12970f2ed43f)
