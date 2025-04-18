---
sidebar_label: "2018年8月実施 専門科目 第2問"
tags:
  - Tokyo-University
---
# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2018年8月実施 専門科目 第2問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

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

(ii) $0 \lt \mu \leq x_1$ のとき、

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