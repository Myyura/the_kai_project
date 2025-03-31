---
sidebar_label: "2020年8月実施 線形計画"
sidebar_position: 24
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2020年8月実施 線形計画

## **Author**
Casablanca

## **Description**
### 日本語版
パラメータ $\boldsymbol{y} = (y_1, y_2, \ldots, y_n)^{\top} \in \mathbb{R}^n$ をもつ次の線形計画問題 $\text{P}(\boldsymbol{y})$ を考える．

$$
\begin{aligned}
\text{P}(\boldsymbol{y}): \ \text{Maximize } \ &\boldsymbol{y}^{\top} \boldsymbol{x} \\
\text{subject to } \ &\sum_{i=1}^n i x_i = 1 \\
&\boldsymbol{x} \geqq \boldsymbol{0}
\end{aligned}
$$

ただし，$\text{P}(\boldsymbol{y})$ の決定変数は $\boldsymbol{x} = (x_1, x_2, \ldots, x_n)^{\top} \in \mathbb{R}^n$ であり，$\top$ は転置記号を表す．

以下の問 (i) と (ii) に答えよ．

(i) 問題 $\text{P}(\boldsymbol{y})$  の双対問題を書け．

(ii) 任意の $\boldsymbol{y} \in \mathbb{R}^n$ に対して，問題 $\text{P}(\boldsymbol{y})$ が最適解をもつことを示せ．

与えられた  $\boldsymbol{y} \in \mathbb{R}^n$ に対して，問題 $\text{P}(\boldsymbol{y})$ の最適値 (最大値) を $f(\boldsymbol{y})$ とする．

以下の問 (iii) と (iv) に答えよ．

(iii) 任意の $\alpha \in [0, 1]$ と $\boldsymbol{y}, \boldsymbol{z} \in \mathbb{R}^n$ に対して，次の不等式が成り立つことを示せ．

$$
f(\alpha \boldsymbol{y} + (1 - \alpha) \boldsymbol{z}) \leqq \alpha f(\boldsymbol{y}) + (1 - \alpha) f(\boldsymbol{z})
$$

(iv) 次の最適化問題 Q を考える．

$$
\begin{aligned}
\text{Q}: \ \text{Minimize } \ &f(\boldsymbol{y}) \\
\text{subject to } \ &\sum_{i=1}^n \frac{y_i}{i} = 1
\end{aligned}
$$

ただし，Q の決定変数は $\boldsymbol{y} \in \mathbb{R}^n$ である．問題 Q の最適値 (最小値) は $\frac{1}{n}$ であることを示せ．

### English Version


## **Kai**
### (i)

$$
\begin{aligned}
L(x,\mu) = & -y^\top x + \mu (\sum ix_i - 1)\\
=&(-y^\top + \mu N^\top)x - \mu, \quad N^\top = [1,2, \ldots , n]
\end{aligned}
$$

$$
g(\mu) = -\mu, \quad -y^\top + \mu N^\top \succeq 0
$$

The dual problem:

$$
\begin{aligned}
\text{(D)}: \text{Minimize } \ &\mu \\
\text{subject to } \ &-y + \mu N \succeq \boldsymbol{0}
\end{aligned}
$$

### (ii)
From (D), we have $\mu \geq \frac 1i y_i, i = 1, 2, \ldots, n$.
Thus for any $y$, $\mu = \max \{\frac{y_i}{i} \}$.

Hence (D) has an optimal solution. Hence (P) also has an optimal solution according to duality.

### (iii)

$$
\begin{aligned}
f(\alpha y + (1-\alpha)z) &= \max \{ \frac{\alpha y_i +(1-\alpha)z_i }{i} \} \\
& \leq \max \{ \alpha \frac{y_p}{p} \} + \max \{ (1-\alpha)\frac{z_q}{q} \} \\
& = \alpha f(y) + (1-\alpha)f(z)
\end{aligned}
$$

#### (iv)
We write Q as:

$$
\begin{aligned}
(Q):\ \text{Minimize } \ &\max \{ \frac{y_i}{i}\} \\
\text{subject to} \ & \sum_{i=1}^{n} \frac{y_i}{i} = 1
\end{aligned}
$$

And further, let $w_i = \frac{y_i}{i}$, we get

$$
\begin{aligned}
(Q'): \text{Minimize } \ &t \\
\text{subject to } \ &\sum_{i=1}^{n} w_i = 1 \\
&t \geq w_i
\end{aligned}
$$

Obviously,

$$
nt \geq \sum_{i=1}^{n}w_i = 1
$$

$$
t\geq \frac{1}{n}
$$

and when $w_1 = w_2 = \ldots = w_n$, $t = \frac{1}{n}$.
