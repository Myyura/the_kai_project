---
sidebar_label: "2022年度 数理科学 II [8]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 II \[8\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正の整数、$\mu$ は実数とする。$X_1,\ldots,X_n$ は独立な実数値の $N(\mu,1)$ 変数とし、その分布を $P_\mu$ と表す。$\overline X_n=n^{-1}\sum_iX_i$、標準正規分布関数を $\Phi$ とし、

$$
F_\mu(x)=P_\mu(\overline X_n\le x\mid\sqrt n\overline X_n>1.96)
$$

と定める。対応する密度を $f_\mu$ とする。

(1) $F_\mu$ を $\Phi$ で表せ。

(2) $x_2>x_1>1.96/\sqrt n$、$\mu_2>\mu_1$ に対し $f_{\mu_2}(x_2)/f_{\mu_1}(x_2)>f_{\mu_2}(x_1)/f_{\mu_1}(x_1)$ を示せ。

(3) $x>1.96/\sqrt n$、$\mu_2>\mu_1$ に対し

$$
\{1-F_{\mu_2}(x)\}F_{\mu_1}(x)>\{1-F_{\mu_1}(x)\}F_{\mu_2}(x)
$$

を示せ。

(4) $0<\alpha<1$ とする。$\mu\le0$ なら $P_\mu(\sqrt n\overline X_n\ge c_\alpha\mid\sqrt n\overline X_n>1.96)\le\alpha$、$\mu>0$ なら同確率が $\alpha$ より大きくなるような $c_\alpha$ を $\Phi$ とその逆関数 $\Phi^{-1}$ を用いて表せ。

## **Kai**

### (1)
$a=1.96/\sqrt n$ とおく。

$$
\boxed{F_\mu(x)=\begin{cases}
0&x\le a,\\
\dfrac{\Phi(\sqrt n(x-\mu))-\Phi(\sqrt n(a-\mu))}{1-\Phi(\sqrt n(a-\mu))}&x>a.
\end{cases}}
$$

### (2)
$x>a$ において、$x$ に依存しない正定数 $C$ を用いて

$$
\frac{f_{\mu_2}(x)}{f_{\mu_1}(x)}
=C\exp\left(n(\mu_2-\mu_1)x-\frac n2(\mu_2^2-\mu_1^2)\right).
$$

$\mu_2-\mu_1>0$ より狭義単調増加である。

### (3)
$a<s<x<t$ に対して (2) より

$$
f_{\mu_2}(t)f_{\mu_1}(s)>f_{\mu_1}(t)f_{\mu_2}(s).
$$

$s\in(a,x),t\in(x,\infty)$ 上で二重積分すれば所定の不等式を得る。これは $F_{\mu_2}(x)<F_{\mu_1}(x)$ と同値である。

### (4)
$\mu=0$ で条件付き上側確率を $\alpha$ にすれば、(3) の狭義単調性により両条件を満たす。

$$
\frac{1-\Phi(c_\alpha)}{1-\Phi(1.96)}=\alpha
$$

を解いて

$$
\boxed{c_\alpha=\Phi^{-1}\!\left(1-\alpha\{1-\Phi(1.96)\}\right)}.
$$
