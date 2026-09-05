---
sidebar_label: "2018年8月実施 専門科目 第2問"
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Laplace-Distribution-Moments-Cumulative-Distribution-Function-and-Quantiles
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.One-Sided-Test-and-Power-for-Laplace-Location
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Statistical-Power
---
# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2018年8月実施 専門科目 第2問

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 題意の要約

[公式問題 PDF](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2019/06/f774c2437f9325b07575786cce17f10a.pdf)

既知の $\lambda>0$ と未知の $\mu\ge0$ に対し $f_\mu(x)=\frac\lambda2e^{-\lambda|x-\mu|}$（$x\in\mathbb R$）。

1. 平均と分散。
2. 累積分布関数。
3. 上側 $100\alpha\%$ 点（$0<\alpha\le.1$）。
4. $H_0:\mu=0$ 対 $H_1:\mu>0$ について、水準 $\alpha$ で第二種過誤を最小にする棄却域。
5. その検出力関数 $\beta_\lambda(\mu)$（$\mu\ge0$）。

### 题目描述

已知 $\lambda>0$，未知参数 $\mu\geq0$。随机变量 $X$ 的密度为

$$
f(x)=\frac{\lambda}{2}\exp(-\lambda|x-\mu|),
\qquad x\in\mathbb R.
$$

1. 求 $X$ 的期望与方差。
2. 求累积分布函数 $F(x)$。
3. 求该分布的上侧 $100\alpha\%$ 分位点，其中 $0<\alpha\leq0.1$。
4. 对

   $$
   H_0:\mu=0\qquad\text{vs.}\qquad H_1:\mu>0
   $$

   以 $X$ 为检验统计量，在显著性水平 $\alpha$ 下构造使第二类错误概率最小的拒绝域。
5. 求第 4 问检验的功效函数 $\beta_\lambda(\mu)$。

## **Kai**
### (2-1)
期待値, 分散をそれぞれ $E, V$ で表すと、

$$
\begin{aligned}
E(X)
&= \int_{- \infty}^\infty x f(x) dx
\\
&= \frac{\lambda}{2} \int_{- \infty}^\infty x e^{- \lambda |x - \mu| } dx
\\
&= \frac{\lambda}{2} \int_{- \infty}^\infty (y + \mu) e^{- \lambda |y| } dy
\ \ \ \ \ \ \ \ ( y = x - \mu )
\\
&= \mu
\\
E(X^2)
&= \int_{- \infty}^\infty x^2 f(x) dx
\\
&= \frac{\lambda}{2} \int_{- \infty}^\infty x^2 e^{- \lambda |x - \mu| } dx
\\
&= \frac{\lambda}{2} \int_{- \infty}^\infty
(y^2 + 2 \mu y + \mu^2) e^{- \lambda |y| } dy
\ \ \ \ \ \ \ \ ( y = x - \mu )
\\
&= \lambda \int_0^\infty y^2 e^{- \lambda y } dy + \mu^2
\\
\int_0^\infty y^2 e^{- \lambda y } dy
&= \frac{1}{\lambda^3}\int_0^\infty u^2e^{-u}\,du
\qquad (u=\lambda y)
\\
&= \frac{2}{\lambda^3}
\\
E(X^2)
&= \lambda \cdot \frac{2}{\lambda^3} + \mu^2
= \frac{2}{\lambda^2} + \mu^2
\\
V(X) &= E(X^2) - E(X)^2
= \frac{2}{\lambda^2} + \mu^2 - \mu^2
= \frac{2}{\lambda^2}
\end{aligned}
$$

### (2-2)
(i) $x \leq \mu$ のとき、

$$
\begin{aligned}
F(x)
&= \frac{\lambda}{2} \int_{- \infty}^x e^{ \lambda (z - \mu) } dz
= \frac{1}{2} \left[ e^{ \lambda (z - \mu) } \right]_{- \infty}^x
= \frac{1}{2} e^{ \lambda (x - \mu) }
\end{aligned}
$$

(ii) $x \geq \mu$ のとき、

$$
\begin{aligned}
F(x)
&= \frac{1}{2} + \frac{\lambda}{2} \int_\mu^x e^{ - \lambda (z - \mu) } dz
= \frac{1}{2} - \frac{1}{2} \left[ e^{ - \lambda (z - \mu) } \right]_\mu^x
= 1 - \frac{1}{2} e^{ - \lambda (x - \mu) }
\end{aligned}
$$

### (2-3)
求める $x$ の値を $x_0 (\gt \mu)$ とすると、

$$
\begin{aligned}
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
x_1 = - \frac{\log 2 \alpha}{\lambda}
\end{aligned}
$$

このとき、

$$
\begin{aligned}
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
