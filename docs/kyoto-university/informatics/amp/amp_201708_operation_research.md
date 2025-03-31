---
sidebar_label: "2017年8月実施 オペレーションズ・リサーチ"
sidebar_position: 13
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2017年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca

## **Description**
### 日本語版
$\Omega = \{\boldsymbol{x} \in \mathbb{R}^n| 0 \leqq x_i \leqq 1(i=1,\dots,n)\}$ とする。さらに, 関数 $f:\mathbb{R}^n \rightarrow \mathbb{R}$ は次の不等式を満たす連続的微分可能な関数とする。

$$
\alpha f(\boldsymbol{x}) + (1 - \alpha)f(\boldsymbol{y}) \geqq f(\alpha\boldsymbol{x} + (1 - \alpha)\boldsymbol{y}) + \alpha(1 - \alpha)(\boldsymbol{x - y})^{\top}(\boldsymbol{x - y})
$$

$$
\forall \boldsymbol{x,y} \in \mathbb{R}^n,\alpha \in [0,1]
$$

ただし, $\top$ は転置記号である。

&emsp;&emsp;次の非線形計画問題 $P$ を考える。

$$
\begin{aligned}
P: &\text{Minimize} \quad -f(\boldsymbol{x}) \\
&\text{subject to} \quad \boldsymbol{x} \in \Omega \\
\end{aligned}
$$

さらに, パラメータ $\boldsymbol{z} \in \Omega$ をもつ次の凸 $2$ 次計画問題 $Q(\boldsymbol{z})$ を考える。

$$
\begin{aligned}
Q(\boldsymbol{z}): &\text{Minimize} \quad -\nabla f(\boldsymbol{z})^{\top}\boldsymbol{x} + \frac{1}{2}(\boldsymbol{x - z})^{\top}(\boldsymbol{x - z}) \\
&\text{subject to} \quad \boldsymbol{x} \in \Omega \\
\end{aligned}
$$

ただし, 問題 $Q(\boldsymbol{z})$ の決定変数は $\boldsymbol{x} \in \mathbb{R}^n$ である。任意の $\boldsymbol{z} \in \Omega$ に対して, 問題 $Q(\boldsymbol{z})$ は唯一の最適解 $\bar{\boldsymbol{x}}(\boldsymbol{z})$ をもつ。

&emsp;&emsp;以下の問いに答えよ。

(i) 任意の $\boldsymbol{x}, \boldsymbol{y} \in \mathbb{R}^n$ に対して次の不等式が成り立つことを示せ。

$$
f(\boldsymbol{x}) - f(\boldsymbol{y}) \geqq \nabla f(\boldsymbol{y})^{\top}(\boldsymbol{x - y}) + (\boldsymbol{x - y})^{\top}(\boldsymbol{x - y})
$$

(ii) 問題 $Q(\boldsymbol{z})$ のカルーシュ $\cdot$ タッカー (Karush-Kuhn-Tucker) 条件を書け。

(iii) 任意の $\boldsymbol{z} \in \Omega$ に対して次の不等式が成り立つことを示せ。

$$
f(\boldsymbol{z}) - f(\bar{\boldsymbol{x}}(\boldsymbol{z})) \leqq -(\bar{\boldsymbol{x}}(\boldsymbol{z}) - \boldsymbol{z})^{\top}(\bar{\boldsymbol{x}}(\boldsymbol{z}) - \boldsymbol{z})
$$

(iv) 次の命題 (A) について, 真であれば証明を, 偽であれば反例を与えよ。

&emsp;&emsp; (A) $\boldsymbol{z} \in \Omega$ かつ $\bar{\boldsymbol{x}}(\boldsymbol{z}) = \boldsymbol{z}$ であれば, $\boldsymbol{z}$ は問題 $P$ の局所的最適解である。


### English Version

## **Kai**
### (i)

$$
\alpha f(x) + (1-\alpha)f(y) \geq f(\alpha x + (1-\alpha)y) + \alpha (1-\alpha)(x-y)^\top (x-y)
$$

and

$$
f(x)-f(y)\geq \frac {1}{\alpha}(f(y + \alpha(x-y)) -f(y) + \alpha(1-\alpha)(x-y)^\top(x-y))
$$

Let $\alpha \rightarrow 0$,

$$
f(x) - f(y) \geq \nabla f(y)^\top (x - y) + (x-y)^\top(x-y)
$$

### (ii)

$$
\begin{aligned}
(\text{Q}(z)): &\text{Minimize} &-\nabla f(z)^\top x + \frac 12 (x-z)^\top(x-z) \\
&\text{Subject to} &x \succeq 0\\
&\text{ } &x \preceq 1
\end{aligned}
$$

Lagrangian:

$$
L(x, \mu, \nu) = -\nabla f(z)^\top x + \frac 12 (x-z)^\top (x-z) + \lambda^\top (x-\boldsymbol{1}) + \nu^\top (-x)
$$

$$
\text{ KKT-conditions} \left\{
\begin{aligned}
-\nabla f(z) + x^* - z + \lambda & = 0 \\
\lambda   \succeq \boldsymbol{0}, \nu &\succeq \boldsymbol{0} \\
 x \succeq \boldsymbol{0}, \lambda(x^* - \boldsymbol{1}) &= 0 \\
 x \preceq \boldsymbol{1}, \nu (-x) &= 0
\end{aligned}
\right.
$$

### (iii)
#### Solution 1
Since $\bar{x}(z)$ minimize $\text{Q}(z)$, we obtain

$$
-\nabla f(z)^\top \bar{x}(z) + \frac 12 (\bar{x}(z) - z)^\top (\bar{x}(z) - z) \leq -\nabla f(z)^\top z
$$

$$
-\nabla f(z)^\top (\bar{x}(z) -z) \leq -\frac 12 (\bar{x}(z) - z)^\top (\bar{x}(z) -z)
$$

from (i) we have

$$
-\nabla f(z)^\top (\bar{x}(z) - z) \geq f(z) - f(\bar{x}(z)) + (z-\bar{x}(z))^\top (z-\bar{x}(z))
$$

by subtracting them, we obtain

$$
f(z) - f(\bar{x}(z)) \leq -\frac 32 (\bar{x}(z)-z)^\top (\bar{x}(z)-z) \leq - (\bar{x}(z)-z)^\top (\bar{x}(z)-z)
$$

#### Solution 2
From (i) we have

$$
f(z) - f(\bar{x}(z)) \leq -\nabla f(z)^\top (\bar{x}(z) - z)   - (z-\bar{x}(z))^\top (z-\bar{x}(z))$$

by KKT-conditons we have

$$
\nabla f(z) = \bar{x}(z) - z + \lambda - \nu
$$

then

$$
\nabla f(z)(\bar{x}(z) - z) = (\bar{x}(z) - z) ^\top (\bar{x}(z)-z) + \lambda (\bar{x}(z)-z) - \nu ^\top \bar{x}(z) + \nu z \geq 0
$$

thus

$$
f(z) - f(\bar{x}(z)) \leq 0 - (\bar{x}(z)-z)^\top(\bar{x}(z)-z)
$$

### (iv)
