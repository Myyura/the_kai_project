---
sidebar_label: "2018年8月実施 専門科目 第2問"
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Laplace-Distribution-Moments-Cumulative-Distribution-Function-and-Quantiles
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Statistical-Power
---
# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2018年8月実施 専門科目 第2問

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

既知のパラメータ $\lambda>0$ と未知のパラメータ $\mu\ge0$ によって定まる確率分布 $P_{\lambda,\mu}$ に従う確率変数 $X$ を考える。確率分布 $P_{\lambda,\mu}$ の確率密度関数は次のように与えられている：

$$
f(x)=\frac\lambda2\exp(-\lambda|x-\mu|)\qquad(x\in\mathbb R).
$$

このとき，以下の問いに答えよ。

(2-1) 確率変数 $X$ の期待値と分散を求めよ。

(2-2) 確率分布 $P_{\lambda,\mu}$ の累積分布関数 $F(x)$（$x\in\mathbb R$）を求めよ。

(2-3) 確率分布 $P_{\lambda,\mu}$ の上側 $100\alpha\%$ 点を求めよ。ただし，$0<\alpha\le0.1$ とする。

(2-4) 未知パラメータ $\mu$ について，次の仮説検定を考える：

$$
H_0:\mu=0\quad\mathrm{vs.}\quad H_1:\mu>0.
$$

検定統計量を $X$，有意水準を $\alpha$（$0<\alpha\le0.1$）として，第2種の過誤確率が最も小さくなるような棄却域を構成せよ。

(2-5) (2-4) の検定における検出力関数 $\beta_\lambda(\mu)$（$\mu\ge0$）を求めよ。

### 题目描述

考虑服从概率分布 $P_{\lambda,\mu}$ 的随机变量 $X$，该分布由已知参数 $\lambda>0$ 和未知参数 $\mu\ge0$ 确定。其概率密度函数为

$$
f(x)=\frac\lambda2\exp(-\lambda|x-\mu|)\qquad(x\in\mathbb R).
$$

回答下列问题。

(2-1) 求随机变量 $X$ 的期望和方差。

(2-2) 求概率分布 $P_{\lambda,\mu}$ 的累积分布函数 $F(x)$（$x\in\mathbb R$）。

(2-3) 求概率分布 $P_{\lambda,\mu}$ 的上侧 $100\alpha\%$ 分位点，其中 $0<\alpha\le0.1$。

(2-4) 对未知参数 $\mu$ 考虑假设检验

$$
H_0:\mu=0\quad\mathrm{vs.}\quad H_1:\mu>0.
$$

以 $X$ 为检验统计量，以 $\alpha$（$0<\alpha\le0.1$）为显著性水平，构造使第二类错误概率最小的拒绝域。

(2-5) 求 (2-4) 中检验的功效函数 $\beta_\lambda(\mu)$（$\mu\ge0$）。

## **Kai**
### (2-1)
期待値, 分散をそれぞれ $E, V$ で表すと、

$$
\begin{aligned}
E(X)
&= \int_{- \infty}^\infty x f(x) dx\\
&= \frac{\lambda}{2} \int_{- \infty}^\infty x e^{- \lambda |x - \mu| } dx\\
&= \frac{\lambda}{2} \int_{- \infty}^\infty (y + \mu) e^{- \lambda |y| } dy
\ \ \ \ \ \ \ \ ( y = x - \mu )\\
&= \mu\\
E(X^2)
&= \int_{- \infty}^\infty x^2 f(x) dx\\
&= \frac{\lambda}{2} \int_{- \infty}^\infty x^2 e^{- \lambda |x - \mu| } dx\\
&= \frac{\lambda}{2} \int_{- \infty}^\infty
(y^2 + 2 \mu y + \mu^2) e^{- \lambda |y| } dy
\ \ \ \ \ \ \ \ ( y = x - \mu )\\
&= \lambda \int_0^\infty y^2 e^{- \lambda y } dy + \mu^2\\
\int_0^\infty y^2 e^{- \lambda y } dy
&= \frac{1}{\lambda^3}\int_0^\infty u^2e^{-u}\,du\\
&(u=\lambda y)\\
&= \frac{2}{\lambda^3}\\
E(X^2)
&= \lambda \cdot \frac{2}{\lambda^3} + \mu^2\\
&= \frac{2}{\lambda^2} + \mu^2\\
V(X) &= E(X^2) - E(X)^2\\
&= \frac{2}{\lambda^2} + \mu^2 - \mu^2\\
&= \frac{2}{\lambda^2}
\end{aligned}
$$

### (2-2)
(i) $x \leq \mu$ のとき、

$$
\begin{aligned}
F(x)
&= \frac{\lambda}{2} \int_{- \infty}^x e^{ \lambda (z - \mu) } dz\\
&= \frac{1}{2} \left[ e^{ \lambda (z - \mu) } \right]_{- \infty}^x\\
&= \frac{1}{2} e^{ \lambda (x - \mu) }
\end{aligned}
$$

(ii) $x \geq \mu$ のとき、

$$
\begin{aligned}
F(x)
&= \frac{1}{2} + \frac{\lambda}{2} \int_\mu^x e^{ - \lambda (z - \mu) } dz\\
&= \frac{1}{2} - \frac{1}{2} \left[ e^{ - \lambda (z - \mu) } \right]_\mu^x\\
&= 1 - \frac{1}{2} e^{ - \lambda (x - \mu) }
\end{aligned}
$$

### (2-3)
求める $x$ の値を $x_0 (\gt \mu)$ とすると、

$$
\begin{aligned}
&
F(x_0)
= 1 - \frac{1}{2} e^{ - \lambda (x_0 - \mu) }
= 1 - \alpha
\end{aligned}
$$

よって、

$$
\begin{aligned}
e^{ - \lambda (x_0 - \mu) } &= 2 \alpha
\\
- \lambda (x_0 - \mu) &= \log 2 \alpha
\\
\therefore \ \ 
x_0 &= \mu - \frac{\log 2 \alpha}{\lambda}
\end{aligned}
$$


### (2-4)

$$
\begin{aligned}
&
x \gt - \frac{\log 2 \alpha}{\lambda}
\end{aligned}
$$

任意の $\mu>0$ について尤度比は

$$
\frac{f_\mu(x)}{f_0(x)}=
\begin{cases}
e^{-\lambda\mu},&x\le0,\\
e^{\lambda(2x-\mu)},&0<x<\mu,\\
e^{\lambda\mu},&x\ge\mu.
\end{cases}
$$

これは $x$ の非減少関数である。上記棄却域は $H_0$ の下で確率 $\alpha$ を持ち、尤度比の大きい側から選ぶ領域なので Neyman–Pearson の補題により各 $\mu>0$ に対して最強力である（尤度比一定の部分では同順位の一部を選べる）。したがって一様最強力である。

### (2-5)
次のようにおく：

$$
\begin{aligned}
&
x_1 = - \frac{\log 2 \alpha}{\lambda}
\end{aligned}
$$

このとき、

$$
\begin{aligned}
&
e^{\lambda x_1} = \frac{1}{2 \alpha}
, \ \ \ \ 
e^{- \lambda x_1} = 2 \alpha
\end{aligned}
$$

である。

(i) $\mu \geq x_1$ のとき、

$$
\begin{aligned}
\beta_\lambda (\mu)
&= \frac{1}{2} + \frac{\lambda}{2} \int_{x_1}^\mu e^{\lambda (x-\mu)} dx
\\
&= \frac{1}{2} + \frac{1}{2} \left[ e^{\lambda (x-\mu)} \right]_{x_1}^\mu
\\
&= \frac{1}{2} + \frac{1}{2} \left( 1 - e^{\lambda (x_1-\mu)} \right)
\\
&= 1 - \frac{1}{2} e^{\lambda (x_1-\mu)}
\\
&= 1 - \frac{e^{- \lambda \mu}}{4 \alpha}
\end{aligned}
$$

(ii) $0 \leq \mu \leq x_1$ のとき、

$$
\begin{aligned}
\beta_\lambda (\mu)
&= \frac{\lambda}{2} \int_{x_1}^\infty e^{- \lambda (x-\mu)} dx
\\
&= - \frac{1}{2} \left[ e^{- \lambda (x-\mu)} \right]_{x_1}^\infty
\\
&= \frac{1}{2} e^{- \lambda (x_1-\mu)}
\\
&= \alpha e^{\lambda \mu}
\end{aligned}
$$

特に $\beta_\lambda(0)=\alpha$ であり、二つの式は $\mu=x_1$ でともに $1/2$ となる。

## **Reference**

- [大学公表の原題](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2019/06/f774c2437f9325b07575786cce17f10a.pdf)
