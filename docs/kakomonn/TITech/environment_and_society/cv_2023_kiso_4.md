---
comments: false
title: 東京工業大学 環境・社会理工学院 土木・環境工学系 2023年度 基礎科目 4
tags:
  - TITech
---
# 東京工業大学 環境・社会理工学院 土木・環境工学系 2023年度 基礎科目 4

## **Author**
Miyake

## **Description**

## **Kai**
### (1)
確率を $P$ で表す。
$x \gt 0$ について、

$$
  \begin{aligned}
  P \left( X \leq x \right)
  &= P \left( Y \leq \ln x \right)
  \\
  &= \frac{1}{\sqrt{2 \pi} \zeta} \int_{-\infty}^{\ln x}
  \exp \left[ - \frac{(y-\lambda)^2}{2 \zeta^2} \right] dy
  \\
  \therefore \ \ 
  f_X(x)
  &= \frac{d}{dx} P \left( X \leq x \right)
  \\
  &= \frac{1}{\sqrt{2 \pi} \zeta x}
  \exp \left[ - \frac{(\ln x - \lambda)^2}{2 \zeta^2} \right]
  \end{aligned}
$$

である。

### (2)

$$
\begin{aligned}
\mu_X
&= E \left[ X \right]
\\
&= E \left[ e^Y \right]
\\
&= \frac{1}{\sqrt{2 \pi} \zeta} \int_{-\infty}^\infty
\exp \left[ y - \frac{(y-\lambda)^2}{2 \zeta^2} \right] dy
\\
&= \frac{1}{\sqrt{2 \pi} \zeta} \int_{-\infty}^\infty
\exp \left[ - \frac{y^2-2(\lambda + \zeta^2) y + \lambda^2}
{2 \zeta^2} \right] dy
\\
&= \frac{1}{\sqrt{2 \pi} \zeta} \int_{-\infty}^\infty \exp \left[
- \frac{(y-(\lambda+\zeta^2))^2 - 2 \lambda \zeta^2 - \zeta^4}
{2 \zeta^2} \right] dy
\\
&= \exp \left[ \lambda + \frac{\zeta^2}{2} \right]
\\
E \left[ X^2 \right]
&= E \left[ e^{2Y} \right]
\\
&= \frac{1}{\sqrt{2 \pi} \zeta} \int_{-\infty}^\infty
\exp \left[ 2y - \frac{(y-\lambda)^2}{2 \zeta^2} \right] dy
\\
&= \frac{1}{\sqrt{2 \pi} \zeta} \int_{-\infty}^\infty
\exp \left[ - \frac{y^2-2(\lambda + 2 \zeta^2) y + \lambda^2}
{2 \zeta^2} \right] dy
\\
&= \frac{1}{\sqrt{2 \pi} \zeta} \int_{-\infty}^\infty \exp \left[
- \frac{(y-(\lambda+2 \zeta^2))^2 - 4 \lambda \zeta^2 - 4 \zeta^4}
{2 \zeta^2} \right] dy
\\
&= \exp \left[ 2 \lambda + 2 \zeta^2 \right]
\\
\sigma_X^2
&= E \left[ X^2 \right] - E \left[ X \right]^2
\\
&= \exp \left[ 2 \lambda + 2 \zeta^2 \right]
- \exp \left[ 2 \lambda + \zeta^2 \right]
\\
&= \left( e^{\zeta^2} - 1 \right)
\exp \left[ 2 \lambda + \zeta^2 \right]
\end{aligned}
$$

### (3)
#### (a)

$$
\begin{aligned}
L (x_1, x_2, \cdots, x_n ; \lambda, \zeta)
&= \prod_{i=1}^n \frac{1}{\sqrt{2 \pi} \zeta x_i}
\exp \left[ - \frac{(\ln x_i - \lambda)^2}{2 \zeta^2} \right]
\\
&= \left( \sqrt{2 \pi} \zeta \right)^{-n}
\left( \prod_{i=1}^n x_i \right)^{-1}
\exp \left[ - \frac{1}{2 \zeta^2} \sum_{j=1}^n (\ln x_j - \lambda)^2 \right]
\end{aligned}
$$

#### (b)

$$
\begin{aligned}
\ln L (x_1, x_2, \cdots, x_n ; \lambda, \zeta)
&= - \frac{n}{2} \ln (2 \pi) - n \ln \zeta
- \sum_{i=1}^n \ln x_i
- \frac{1}{2 \zeta^2} \sum_{j=1}^n (\ln x_j - \lambda)^2
\\
\frac{\partial}{\partial \lambda}
\ln L (x_1, x_2, \cdots, x_n ; \lambda, \zeta)
&= \frac{1}{\zeta^2} \sum_{j=1}^n (\ln x_j - \lambda)
\\
&= \frac{n}{\zeta^2} \left( \frac{1}{n} \sum_{j=1}^n \ln x_j - \lambda \right)
\\
\frac{\partial}{\partial \zeta}
\ln L (x_1, x_2, \cdots, x_n ; \lambda, \zeta)
&= - \frac{n}{\zeta}
+ \frac{1}{\zeta^3} \sum_{j=1}^n (\ln x_j - \lambda)^2
\\
&= - \frac{n}{\zeta^3} \left( \zeta^2
- \frac{1}{n} \sum_{j=1}^n (\ln x_j - \lambda)^2 \right)
\end{aligned}
$$

なので、

$$
\begin{aligned}
\hat{\lambda} &= \frac{1}{n} \sum_{j=1}^n \ln x_j
\\
\hat{\zeta}
&= \sqrt{ \frac{1}{n} \sum_{j=1}^n
\left( \ln x_j - \hat{\lambda} \right)^2 }
\end{aligned}
$$

がわかる。

#### (\(c\))
