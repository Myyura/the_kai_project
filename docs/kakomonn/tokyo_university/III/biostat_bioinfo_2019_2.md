---
comments: false
description: 東京大学 大学院 学際情報学府 学際情報学専攻 生物統計情報学コース 2019年度 専門科目 第2問
keywords: Tokyo-University, 2019
---

## Source
東京大学 大学院 学際情報学府 学際情報学専攻 生物統計情報学コース 2019年度 専門科目 第2問 （選択問題）

## Description

## Kai
### (2-1)
期待値, 分散をそれぞれ $E, V$ で表すと、

$$
\begin{align}
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
&= - \frac{1}{\lambda} \int_0^\infty y^2 \left( e^{- \lambda y } \right)' dy
= - \frac{2}{\lambda} \int_0^\infty y e^{- \lambda y } dy
\\
&= \frac{2}{\lambda^2} \int_0^\infty y \left( e^{- \lambda y } \right)' dy
= \frac{2}{\lambda^2} \int_0^\infty e^{- \lambda y } dy
\\
&= - \frac{2}{\lambda^3} \left[ e^{- \lambda y } \right]_0^\infty
= \frac{2}{\lambda^3}
\\
E(X^2)
&= \lambda \cdot \frac{2}{\lambda^3} + \mu^2
= \frac{2}{\lambda^2} + \mu^2
\\
V(X) &= E(X^2) - E(X)^2
= \frac{2}{\lambda^2} + \mu^2 - \mu^2
= \frac{2}{\lambda^2}
\end{align}
$$

### (2-2)
(i) $x \leq \mu$ のとき、

$$
\begin{align}
F(x)
&= \frac{\lambda}{2} \int_{- \infty}^x e^{ \lambda (z - \mu) } dz
= \frac{1}{2} \left[ e^{ \lambda (z - \mu) } \right]_{- \infty}^x
= \frac{1}{2} e^{ \lambda (x - \mu) }
\end{align}
$$

(ii) $x \geq \mu$ のとき、

$$
\begin{align}
F(x)
&= \frac{1}{2} + \frac{\lambda}{2} \int_\mu^x e^{ - \lambda (z - \mu) } dz
= \frac{1}{2} - \frac{1}{2} \left[ e^{ - \lambda (z - \mu) } \right]_\mu^x
= 1 - \frac{1}{2} e^{ - \lambda (x - \mu) }
\end{align}
$$

### (2-3)
求める $x$ の値を $x_0 (\gt \mu)$ とすると、

$$
\begin{align}
F(x_0)
= 1 - \frac{1}{2} e^{ - \lambda (x_0 - \mu) }
= 1 - \alpha
\end{align}
$$

よって、

$$
\begin{align}
e^{ - \lambda (x_0 - \mu) } &= 2 \alpha
\\
- \lambda (x_0 - \mu) &= \log 2 \alpha
\\
\therefore \ \ 
x_0 &= \mu - \frac{\log 2 \alpha}{\lambda}
\end{align}
$$


### (2-4)

$$
\begin{align}
x \gt - \frac{\log 2 \alpha}{\lambda}
\end{align}
$$

### (2-5)
次のようにおく：

$$
\begin{align}
x_1 = - \frac{\log 2 \alpha}{\lambda}
\end{align}
$$

このとき、

$$
\begin{align}
e^{\lambda x_1} = \frac{1}{2 \alpha}
, \ \ \ \ 
e^{- \lambda x_1} = 2 \alpha
\end{align}
$$

である。

(i) $\mu \geq x_1$ のとき、

$$
\begin{align}
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
\end{align}
$$

(ii) $0 \lt \mu \leq x_1$ のとき、

$$
\begin{align}
\beta_\lambda (\mu)
&= \frac{\lambda}{2} \int_{x_1}^\infty e^{- \lambda (x-\mu)} dx
\\
&= - \frac{1}{2} \left[ e^{- \lambda (x-\mu)} \right]_{x_1}^\infty
\\
&= \frac{1}{2} e^{- \lambda (x_1-\mu)}
\\
&= \alpha e^{\lambda \mu}
\end{align}
$$