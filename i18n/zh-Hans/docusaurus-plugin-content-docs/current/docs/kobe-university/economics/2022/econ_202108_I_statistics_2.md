---
sidebar_label: "2021年8月実施 第I期 統計学 第2問"
tags:
  - Kobe-University
---
# 神戸大学 経済学研究科 2021年8月実施 第I期 統計学 第2問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
確率変数 $X$ の密度関数を $f(x; \theta)$ とし、パラメータ $\theta$ は $0$ か $1$ のいずれかの値しかをとらないものとする。
また、$f(x; 0)$ と $f(x; 1)$ はそれぞれ、以下のように与えられるものとする。

$$
f(x; 0) = 
\begin{cases} 
1 & 0 \leq x \leq 1 \\ 
0 & \text{その他} 
\end{cases} 
$$

$$
f(x; 1) = 
\begin{cases} 
ax & 0 \leq x \leq 1 \\ 
0 & \text{その他} 
\end{cases} 
$$

(1) $a$ の値を求めなさい。(15点)

(2) $\theta = 0$ のとき、$X$ の期待値と分散を求めなさい。(20点)

(3) $\theta = 0$ のとき、$X$ の積率母関数を求めなさい。(15点)

(4) $f(x; \theta)$ からの無作為標本を $X_1, X_2, \ldots, X_n$ とする。 $\theta$ の最尤推定量を求めなさい。(20点)

## **Kai**
### (1)
確率密度関数の規格化の条件

$$
  \begin{aligned}
  1
  &= \int_{- \infty}^\infty f(x;1) dx
  = a \int_0^1 x \ dx
  = \frac{a}{2}
  \end{aligned}
$$

から $a = 2$ がわかる。

### (2)
$\theta=0$ のとき、 $X$ の期待値 $E(X)$ 、 $X^2$ の期待値 $E(X^2)$ 、
$X$ の分散 $V(X)$ は、それぞれ次のように計算できる：

$$
  \begin{aligned}
  E \left( X \right) &= \int_0^1 x \ dx = \frac{1}{2}
  \\
  E \left( X^2 \right) &= \int_0^1 x^2 \ dx = \frac{1}{3}
  \\
  V \left( X \right)
  &= E \left( X^2 \right) - E \left( X \right)^2
  = \frac{1}{12}
  \end{aligned}
$$

### (3)
求める積率母関数は、次のように計算できる：

$$
  \begin{aligned}
  M(t)
  &= \int_0^1 e^{tx} \ dx
  \\
  &= \frac{1}{t} \left[ e^{tx} \right]_0^1
  \\
  &= \frac{e^t - 1}{t}
  \end{aligned}
$$

### (4)
尤度

$$
  \begin{aligned}
  l(\theta) = f(x_1;\theta) f(x_2;\theta) \cdots f(x_n;\theta)
  \end{aligned}
$$

は、今の場合、

$$
  \begin{aligned}
  l(0) &= 1
  \\
  l(1) &= 2^n x_1 x_2 \cdots x_n
  \end{aligned}
$$

となるので、 $\theta$ の最尤推定量は次のように求まる：

$$
  \begin{aligned}
  \hat{\theta}
  = \begin{cases}
  0 &, X_1 X_2 \cdots X_n \lt 1/2^n \\
  1 &, X_1 X_2 \cdots X_n \gt 1/2^n
  \end{cases}
  \end{aligned}
$$