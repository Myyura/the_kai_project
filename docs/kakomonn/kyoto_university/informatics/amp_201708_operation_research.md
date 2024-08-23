---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2018年8月実施 オペレーションズ・リサーチ
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2018年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca

## **Description**
### 日本語版



### English Version

## **Kai**
### (i)

$$\alpha f(x) + (1-\alpha)f(y) \geq f(\alpha x + (1-\alpha)y) + \alpha (1-\alpha)(x-y)^\top (x-y)$$
and 
$$f(x)-f(y)\geq \frac {1}{\alpha}(f(y + \alpha(x-y)) -f(y) + \alpha(1-\alpha)(x-y)^\top(x-y))$$
Let $\alpha \rightarrow 0$,
$$f(x) - f(y) \geq \triangledown f(y)^\top (x - y) + (x-y)^\top(x-y)$$

### (ii)

$
\begin{aligned}
(\text{Q}(z)) \quad \text{Minimize} \quad &-\triangledown f(z)^\top x + \frac 12 (x-z)^\top(x-z) \\
\qquad \text{Subject to} \quad   &x \succeq 0\\
&x \preceq 1
\end{aligned}
$

Lagrangian:
$$L(x, \mu, \nu) = -\triangledown f(z)^\top x + \frac 12 (x-z)^\top (x-z) + \lambda^\top (x-\boldsymbol{1}) + \nu^\top (-x)$$

$$
\text{ KKT-conditions} \left\{
\begin{aligned}
-\triangledown f(z) + x^* - z + \lambda & = 0 \\
\lambda   \succeq \boldsymbol{0}, \nu &\succeq \boldsymbol{0} \\
 x \succeq \boldsymbol{0}, \lambda(x^* - \boldsymbol{1}) &= 0 \\
 x \preceq \boldsymbol{1}, \nu (-x) &= 0
\end{aligned}
\right.
$$

### (iii)
solution(1)
since $\bar{x}(z)$ minimize Q$(z)$, we obtain
$$-\triangledown f(z)^\top \bar{x}(z) + \frac 12 (\bar{x}(z) - z)^\top (\bar{x}(z) - z) \leq -\triangledown f(z)^\top z$$


$$-\triangledown f(z)^\top (\bar{x}(z) -z) \leq -\frac 12 (\bar{x}(z) - z)^\top (\bar{x}(z) -z)$$
And from (i)
$$-\triangledown f(z)^\top (\bar{x}(z) - z) \geq f(z) - f(\bar{x}(z)) + (z-\bar{x}(z))^\top (z-\bar{x}(z))$$
And by subtracting them, we obtain
$$f(z) - f(\bar{x}(z)) \leq -\frac 32 (\bar{x}(z)-z)^\top (\bar{x}(z)-z) \leq - (\bar{x}(z)-z)^\top (\bar{x}(z)-z)$$

solution(2)
from (i)
$$f(z) - f(\bar{x}(z)) \leq -\triangledown f(z)^\top (\bar{x}(z) - z)   - (z-\bar{x}(z))^\top (z-\bar{x}(z))$$
from KKT-conditons
$$\triangledown f(z) = \bar{x}(z) - z + \lambda - \nu$$
then
$$\triangledown f(z)(\bar{x}(z) - z) = (\bar{x}(z) - z) ^top (\bar{x}(z)-z) + \lambda (\bar{x}(z)-z) - \nu ^\top \bar{x}(z) + \nu z \geq 0$$
thus 
$$f(z) - f(\bar{x}(z)) \leq 0 - (\bar{x}(z)-z)^\top(\bar{x}(z)-z)$$

### (iv)