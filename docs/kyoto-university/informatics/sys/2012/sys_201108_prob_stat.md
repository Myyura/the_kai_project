---
sidebar_label: 2011年8月実施 専門科目 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Statistical-Power
---
# 京都大学 情報学研究科 システム科学専攻 2011年8月実施 専門科目 確率統計

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
(i) $X\sim N(0,\sigma^2)$ のとき、$X\operatorname{sgn}X=|X|$ の平均、分散を求めよ。$\operatorname{sgn}$ は符号関数である。

(ii) $X,Y$ の同時密度を

$$
f(x,y)=\frac1{2\pi\sigma_x\sigma_y\sqrt{1-\rho^2}}
\exp\left[-\frac1{2(1-\rho^2)}\left(\frac{x^2}{\sigma_x^2}-\frac{2\rho xy}{\sigma_x\sigma_y}+\frac{y^2}{\sigma_y^2}\right)\right]
$$

とする。$\sigma_x,\sigma_y>0$、$-1<\rho<1$ である。指数内を平方完成して変数変換することにより、$\sigma_x,\sigma_y$ は各変数の標準偏差、$\rho$ は相関係数であることを示せ。

(iii) $r=E[X\operatorname{sgn}Y]$ を $r=\int_{-\infty}^{\infty}\int_0^\infty h(x,y)dx\,dy$ と表すとき、$h$ を $f$ などで表せ。

(iv) (ii) と同様にして

$$
r=\frac1{2\pi\sigma_x}\int_{-\infty}^{\infty}xe^{-x^2/\sigma_x^2}[g(x;\rho)-g(x;-\rho)]dx,
\qquad g(x;\rho)=\int_{-\rho x/(\sigma_y\sqrt{1-\rho^2})}^{\infty}e^{-z^2/2}dz
$$

であることを示せ。

(v) 部分積分法で $r$ を求めよ。

### 問題2
$X_1,\ldots,X_n$ は独立に $N(\mu,\sigma^2)$ に従い、$\sigma^2$ は既知とする。標準正規変数 $Z$ に対して $P(Z>z_\alpha)=\alpha$、$\Phi(x)=P(Z\le x)$ と定義する。

(i) $\overline X=n^{-1}\sum_iX_i$ の分布を示せ。

(ii) $H_0:\mu=\mu_0$ 対 $H_1:\mu\ne\mu_0$ の有意水準 $\alpha$ の両側検定を述べよ。

(iii) 対立仮説が $\mu>\mu_0$ の右片側検定、および $\mu<\mu_0$ の左片側検定を同じ有意水準で述べよ。

(iv) 両側、右片側、左片側検定の検出力を $P_{D1},P_{D2},P_{D3}$ とし、$\Phi$ で表せ。また $\Phi(-x)=1-\Phi(x)$ に注意し、$\sqrt n|\mu-\mu_0|/\sigma<z_\alpha$ を満たす $\mu$ に対し、右および左片側検定の検出力が両側検定より大きいことを示せ。

(v) 右片側検定で $H_0:\mu\le\mu_0$、左片側検定で $H_0:\mu\ge\mu_0$ としても、(iii) の手続きの有意水準が $\alpha$ 以下であることを示せ。

#### 题目描述

**问题1** (i) 若 $X\sim N(0,\sigma^2)$，求 $X\operatorname{sgn}X=|X|$ 的期望和方差。(ii) 对密度

$$
f(x,y)=\frac{\exp\{-\frac1{2(1-\rho^2)}[\frac{x^2}{\sigma_x^2}-\frac{2\rho xy}{\sigma_x\sigma_y}+\frac{y^2}{\sigma_y^2}]\}}{2\pi\sigma_x\sigma_y\sqrt{1-\rho^2}},
$$

其中 $\sigma_x,\sigma_y>0$、$-1<\rho<1$，通过平方完成、变量代换证明这两个 $\sigma$ 是标准差、$\rho$ 是相关系数。(iii) 令 $r=E[X\operatorname{sgn}Y]$，求使 $r=\int_{-\infty}^{\infty}\int_0^\infty h(x,y)dx\,dy$ 成立的 $h$。(iv) 证明题面给出的积分式：

$$
r=\frac1{2\pi\sigma_x}\int_{-\infty}^{\infty}xe^{-x^2/\sigma_x^2}[g(x;\rho)-g(x;-\rho)]dx,\quad
g(x;\rho)=\int_{-\rho x/(\sigma_y\sqrt{1-\rho^2})}^{\infty}e^{-z^2/2}dz.
$$

(v) 用分部积分求 $r$。

**问题2** 已知方差 $\sigma^2$，独立样本 $X_i\sim N(\mu,\sigma^2)$，令 $\overline X=n^{-1}\sum_iX_i$。标准正态分布函数记为 $\Phi$，上尾 $\alpha$ 分位数满足 $P(Z>z_\alpha)=\alpha$。(i) 求样本均值分布。(ii) 给出 $H_0:\mu=\mu_0$ 对 $\mu\ne\mu_0$ 的水平 $\alpha$ 双侧检验。(iii) 给出对 $\mu>\mu_0$、$\mu<\mu_0$ 的水平 $\alpha$ 单侧检验。(iv) 用 $\Phi$ 表示三种检验的功效；题面还要求证明当 $\sqrt n|\mu-\mu_0|/\sigma<z_\alpha$ 时，左右单侧检验的功效都大于双侧检验。(v) 证明分别将原假设扩展为 $\mu\le\mu_0$、$\mu\ge\mu_0$ 时，同样的单侧检验规则仍使第一类错误概率不超过 $\alpha$。

## **Kai**

### 問題1
(i) 正規密度を半直線で積分して $E|X|=\sigma\sqrt{2/\pi}$。また $E|X|^2=\sigma^2$ より

$$
\boxed{E|X|=\sigma\sqrt{\frac2\pi}},\qquad
\boxed{V(|X|)=\sigma^2\left(1-\frac2\pi\right)}.
$$

(ii) $U=X/\sigma_x$、$V=(Y/\sigma_y-\rho U)/\sqrt{1-\rho^2}$ とおく。平方完成およびヤコビアンによって密度は $(2\pi)^{-1}e^{-(u^2+v^2)/2}$ となり、$U,V$ は独立な標準正規変数である。従って

$$
X=\sigma_xU,\quad Y=\sigma_y(\rho U+\sqrt{1-\rho^2}V),
\quad V(X)=\sigma_x^2,\ V(Y)=\sigma_y^2,\ \operatorname{Cov}(X,Y)=\rho\sigma_x\sigma_y.
$$

これより所定の標準偏差と相関係数を得る。

(iii) 負の $x$ の積分で $x\mapsto-x$ と変換すれば $\boxed{h(x,y)=x\operatorname{sgn}(y)[f(x,y)-f(-x,y)]}$。

(iv) 今度は $y$ の正負で積分を分ける。条件付き分布は $Y\mid X=x\sim N(\rho\sigma_yx/\sigma_x,\sigma_y^2(1-\rho^2))$ である。従って正しくは

$$
\widetilde g(x;\rho)=\int_{-\rho x/(\sigma_x\sqrt{1-\rho^2})}^{\infty}e^{-z^2/2}dz,
\qquad
\boxed{r=\frac1{2\pi\sigma_x}\int_{-\infty}^{\infty}xe^{-x^2/(2\sigma_x^2)}[\widetilde g(x;\rho)-\widetilde g(x;-\rho)]dx}.
$$

(v) $a=\rho/(\sigma_x\sqrt{1-\rho^2})$、$G(x)=\widetilde g(x;\rho)-\widetilde g(x;-\rho)$ とすると $G'(x)=2ae^{-a^2x^2/2}$。部分積分の境界項は零であり、

$$
r=\frac{\sigma_x}{2\pi}\int_{-\infty}^{\infty}e^{-x^2/(2\sigma_x^2)}G'(x)dx
=\frac{a\sigma_x}{\pi}\sqrt{\frac{2\pi}{\sigma_x^{-2}+a^2}}
=\boxed{\rho\sigma_x\sqrt{\frac2\pi}}.
$$

### 問題2
(i) $\boxed{\overline X\sim N(\mu,\sigma^2/n)}$。

(ii) $T=\sqrt n(\overline X-\mu_0)/\sigma$ とする。$H_0$ のもとで $T\sim N(0,1)$ なので、$\boxed{|T|>z_{\alpha/2}}$ のとき棄却する。

(iii) 右片側は $\boxed{T>z_\alpha}$、左片側は $\boxed{T<-z_\alpha}$ のとき棄却する。

(iv) $\delta=\sqrt n(\mu-\mu_0)/\sigma$ とすると

$$
\boxed{P_{D1}=\Phi(\delta-z_{\alpha/2})+\Phi(-\delta-z_{\alpha/2})},
\quad\boxed{P_{D2}=\Phi(\delta-z_\alpha)},
\quad\boxed{P_{D3}=\Phi(-\delta-z_\alpha)}.
$$

両片側の検出力がともに大きいという主張は成立しない。例えば $\alpha=0.05,\delta=0.5<z_{0.05}$ では

$$
P_{D1}\simeq0.0791,\qquad P_{D2}\simeq0.1261,\qquad P_{D3}\simeq0.0160.
$$

右片側は大きいが、左片側は小さい。

(v) 右片側で $\mu\le\mu_0$ なら $\delta\le0$ なので $P_\mu(T>z_\alpha)=\Phi(\delta-z_\alpha)\le\Phi(-z_\alpha)=\alpha$。左片側も $\delta\ge0$ より $P_\mu(T<-z_\alpha)=\Phi(-\delta-z_\alpha)\le\alpha$。

