---
sidebar_label: "2021年8月実施 オペレーションズ・リサーチ"
sidebar_position: 30
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2021年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca

## **Description**
### 日本語版
$\boldsymbol{A} \in \mathbb{R}^{m \times n}, \boldsymbol{b} \in \mathbb{R}^m, \boldsymbol{C} \in \mathbb{R}^{n \times n}$ とする。
パラメータ $\boldsymbol{x} = (x_1, \ldots, x_n)^\top \in \mathbb{R}^n$ をもつ次の非線形計画問題を考える。

$$
\begin{aligned}
\text{P}(\boldsymbol{x}): \quad &\text{Minimize} \quad \sum_{i=1}^n (\boldsymbol{z}^i)^\top \boldsymbol{z}^i + \boldsymbol{y}^\top \boldsymbol{y} + \boldsymbol{x}^\top C \boldsymbol{x} \\
&\text{subject to} \quad \boldsymbol{y} - \sum_{i=1}^n x_i \boldsymbol{z}^i = \boldsymbol{A}\boldsymbol{x} - \boldsymbol{b}
\end{aligned}
$$

ここで、$\text{P}(\boldsymbol{x})$ の決定変数は $\boldsymbol{y}, \boldsymbol{z}^i \in \mathbb{R}^m \ (i = 1, \ldots, n)$ である。
また、$\top$ は転置記号を表す。さらに、任意の $\boldsymbol{x}$ に対して、問題 $\text{P}(\boldsymbol{x})$ の最適値が定義されているとし、その最適値を $f(\boldsymbol{x})$ と表す。

以下の問いに答えよ。

(i) 問題 $\text{P}(\boldsymbol{x})$ のカルーシュ・キューン・タッカー条件 (Karush-Kuhn-Tucker 条件) を書け。

(ii) 問題 $\text{P}(\boldsymbol{x})$ の目的関数が、$\boldsymbol{y}, \boldsymbol{z}^i \in \mathbb{R}^m \ (i = 1, \ldots, n)$ に対して凸であることを示せ。

(iii) $\boldsymbol{C}$ を正定値対称行列と仮定し、次の最適化問題を考える。

$$
\begin{aligned}
\text{P1:} \quad &\text{Minimize} \quad f(\boldsymbol{x}) \\
&\text{subject to} \quad \boldsymbol{x} \in \mathbb{R}^n
\end{aligned}
$$

$\boldsymbol{x}^* \in \mathbb{R}^n$ を問題 P1 の大域的最適解とするとき、以下の不等式が成り立つことを示せ。

$$
(\boldsymbol{x}^*)^\top \boldsymbol{x}^* \leqq \frac{\boldsymbol{b}^\top \boldsymbol{b}}{\lambda_{\min}(\boldsymbol{C})}
$$

ただし、$\lambda_{\min}(\boldsymbol{C})$ は $\boldsymbol{C}$ の最小固有値を表す。

(iv) $\boldsymbol{A}$ を $m \times n$ 零行列、$\boldsymbol{b}$ を $m$ 次元零ベクトルと仮定する。以下の最適化問題を考える。

$$
\begin{aligned}
\text{P2:} \quad &\text{Minimize} \quad f(\boldsymbol{x}) \\
&\text{subject to} \quad \boldsymbol{x}^\top \boldsymbol{x} \leqq \alpha
\end{aligned}
$$

ここで、$\alpha \in \mathbb{R}$ は正の実数である。$(\hat{\boldsymbol{x}}, \rho), (\bar{\boldsymbol{x}}, \rho) \in \mathbb{R}^n \times \mathbb{R}$ が共に問題 P2 のカルーシュ・キューン・タッカー条件を満たすとき、$f(\hat{\boldsymbol{x}}) = f(\bar{\boldsymbol{x}})$ が成り立つことを示せ。


### English Version

## **Kai**
### (i)
Lagrangian:

$$
L(y, z^i, \mu) = \sum_{i=1}^{n}(z^i)^\top z^i + y^\top y + x^\top C x + \mu^\top (y - \sum_{i=1}^{n}x_iz^i - Ax + b)
$$

and we get:

$$
\text{KKT-conditions } \left\{
\begin{aligned}
2y + \mu & = \mathbf{0} \\
2z^i - x_i \mu &=0 \\
y - \sum_{i=1}^{n}x_iz^i - Ax + b &= 0\\
\end{aligned}
\right.
$$

### (ii)
$(z^i)^\top z^i$ is convex, $y^\top y$ is convex, then the objective function is convex.

### (iii)
By (i) we have

$$
z^i = x_i y , y = \frac{Ax - b}{1 + x^\top x}
$$

and

$$
\begin{aligned}
\sum_{i=1}^{n} (z^i)^\top z^i + y^\top y + x^\top C x &= (1+x^\top x)\\
y^\top y + x^\top C x &= \frac{(Ax - b)^\top (Ax - b)}{ 1 + x^\top x} + x^\top X x = f(x)
\end{aligned}
$$

$$
f(x^*) \leq f(0)
$$

$$
b^\top b \geq \frac{(Ax^* - b)^\top(AX^* - b)}{1+(x^*)^2}
$$

since $C$ is symmetric positive difinete, $C$ can be decomposited as $C = P^{-1} \Lambda P $, and $P^{-1} = P^\top$

$$
\begin{aligned}
(x^*)^\top C x^* &= (Px^*)^\top \Lambda Px^* \\
&\geq \lambda_{min}(C)||(Px^*)^\top|| *||Px^*|| \\
&=\lambda_{min}(C) (x^*)^\top x^*
\end{aligned}
$$

Thus $(x^*)^\top x^* \leq \frac{b^\top b}{\lambda_{min}(C)}$

### (iv)

$$
\begin{aligned}
(P2) &\text{Minimize} & x^\top Cx \\
&\text{subject to} & x^\top x \leq \alpha
\end{aligned}
$$

Lagrangian:

$$
L(x,\rho) = x^\top Cx + \rho (x^\top x - \alpha)
$$

$$
\text{KKT-conditions } \left\{
\begin{aligned}
(C^\top + C)x + 2\rho x &= \mathbf{0} \\
\rho (x^\top x - \alpha) &= 0 \\
\rho  \geq  0, x^\top x^\top x - \alpha &\leq 0 \\
\end{aligned}
\right.
$$

$$
2\hat{x}^\top C \hat{x} = -2\rho \hat{x}^\top \hat{x}
$$

$$
2 \widetilde{x}^\top C \widetilde{x} = -2\rho \widetilde{x}^\top \widetilde{x}
$$

If $\rho \neq 0$, then $\hat{x}^2 = \widetilde{x}^2 = \alpha ,\hat{x}^\top C \hat{x} = -\rho \alpha = \widetilde{x}^\top C \widetilde{x}$.

If $\rho = 0$, then $\hat{x}^\top C \hat{x} = 0 = \widetilde{x}^\top C \widetilde{x}$.
