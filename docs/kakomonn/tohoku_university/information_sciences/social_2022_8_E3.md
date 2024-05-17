---
comments: false
title: 東北大学 情報科学研究科 社会科学群 2022年8月実施 問題 E-3
tags:
  - Tohoku-University
---
# 東北大学 情報科学研究科 社会科学群 2022年8月実施 問題 E-3

## **Author**
Miyake

## **Description**
### 日本語版
(1) 関数 $f(x)$ は閉区間 $x \in [3,10]$ において連続で、単調減少である。さらに、$f(3)=10$, $f(10)=5$, $\int_3^{10} f(x)dx = 42.5$ とする。積分 $\int_5^{10} f^{-1} (x) dx$ を計算しなさい。

(2) $J = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$ とし、$(J' + 2J^2)^{3n}$ を求めなさい。ただし、$J'$ は $J$ の転置行列であり、$n$ は自然数である。

### English Version
(1) Suppose $f(x)$ is continuous and decreasing on the closed interval $x \in [3,10]$.  Furthermore, $f(3)=10$, $f(10)=5$, and $\int_3^{10} f(x)dx = 42.5$ hold. Calculate $\int_5^{10} f^{-1} (x) dx$.

(2) Let $J = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$. Calculate $(J' + 2J^2)^{3n}$, where $J'$ is the transpose of $J$, and $n$ is a natural number.

## **Kai**
### (1)
$t = f^{-1}(x)$ とおくと、 $x=f(t), \ dx=f'(t)dt$ であり、次のように計算できる：

$$
\begin{aligned}
\int_5^{10} f^{-1}(x) dx
&= \int_{10}^3 t f'(t) dt
\\
&= \left[ t f(t) \right]_{10}^3 - \int_{10}^3 f(t) dt
\\
&= 3 \cdot 10 - 10 \cdot 5 + 42.5
\\
&= 22.5
\end{aligned}
$$

### (2)

$$
\begin{aligned}
J' + 2J^2 &= \begin{pmatrix} 0 & 0 & 2 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}
\\
\left( J' + 2J^2 \right)^2 &= \begin{pmatrix} 0 & 2 & 0 \\ 0 & 0 & 2 \\ 1 & 0 & 0 \end{pmatrix}
\\
\left( J' + 2J^2 \right)^3 &= 2 \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
\end{aligned}
$$

なので、自然数 $n$ について次が成り立つことがわかる：

$$
\begin{aligned}
\left( J' + 2J^2 \right)^{3n}
&= 2^n \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
\end{aligned}
$$