---
sidebar_label: "2017年8月実施 数学 第2問"
tags:
  - Tokyo-University
---
# 東京大学 情報理工学研究科 2017年8月実施 数学 第2問

## **Author**
[etsurin](https://zhuanlan.zhihu.com/p/561992447)

## **Description**
関数 $f_1$ を $[0,1]$ 上で定義される正値の定数関数とし、$f_1(x) = c$ とおく。
また、正の実数 $p, q$ を $1/p + 1/q = 1$ を満たすものとする。
これらに対し、$[0,1]$ 上で定義される関数の列 $\{f_n\}$ を

$$
f_{n+1}(x) = p \int_0^x (f_n(t))^{1/q} \, dt \quad (n = 1, 2, \ldots)
$$

で定める。以下の問いに答えよ。

(1) $a_1 = 0, \, c_1 = c$ かつ

$$
\begin{aligned}
a_{n+1} &= q^{-1} a_n + 1 \quad (n = 1, 2, \ldots), \\
c_{n+1} &= \frac{p \left( c_n \right)^{1/q}}{a_{n+1}} \quad (n = 1, 2, \ldots)
\end{aligned}
$$

で定まる実数列 $\{a_n\}$ と $\{c_n\}$ を用いて $f_n(x) = c_n x^{a_n}$ と表されることを示せ。

(2) $n \geq 2$ に対し $[0,1]$ 上で定義される関数 $g_n$ を $g_n(x) = x^{a_n} - x^p$ とおく。
$n \geq 2$ に対し $a_n \geq 1$ となることに注意して、$g_n$ がある点 $x = x_n$ で最大値をとることを示し、この $x_n$ を求めよ。

(3) 任意の $x \in [0,1]$ に対して $\lim_{n \to \infty} g_n(x) = 0$ となることを示せ。

(4) $d_n = (c_n)^{q^n}$ とおく。$d_{n+1}/d_n$ が $n \to \infty$ のとき有限な正の値に収束することを示せ。
なお、$\lim_{t \to \infty} (1 - 1/t)^t = 1/e$ となることは用いて良い。

(5) $\lim_{n \to \infty} c_n$ の値を求めよ。

(6) 任意の $x \in [0,1]$ に対して $\lim_{n \to \infty} f_n(x) = x^p$ となることを示せ。

## **Kai**
### (1)
使用归纳法证明。

$n = 1$ 时，$f_1(x) = c_1 x^{a_1} = c$ 成立。

假设 $n = k$ 时，$f_k(x) = c_k x^{a_k}$ 成立，对 n = k + 1 的情况

$$
\begin{aligned}
f_{k+1} (x) &= p \int_0^x (c_k t^{a_k})^{1/q} dt \\
&= pc^{1/q}_k \int_0^x t^{a_k / q} dt \\
&= \frac{pc^{1/q}_k}{a_k/q + 1} x^{a_k/q + 1} \\
&= c_{k+1} x^{a_{k + 1}}
\end{aligned}
$$

因此，$f_n(x) = c_n x^{a_n}$ 对任意 $n \geq 1$ 成立。

### (2)

$$
a_{n+1} = a_n/q + 1 \Rightarrow a_{n+1} + \frac{q}{1-q} = \frac{1}{q}(a_n + \frac{q}{1-q}) \Rightarrow a_n = \frac{q}{1-q}((1/q)^{n-1} - 1)
$$

对 $g_n(x)$ 求导，令 $g'_n(x) = 0$，则有

$$
\begin{aligned}
g'_n(x) &= a_n x^{a_n - 1} - px^{p-1} \\
&= \frac{q}{q-1} \left( 1-(1/q)^{n-1} \right) x^{\frac{1}{q-1} - \frac{q}{q-1}(1/q)^{n-1}} - \frac{q}{q-1}x^{\frac{1}{q-1}} \\
&= \frac{q}{q-1} x^{\frac{1}{q-1} - \frac{q}{q-1}(1/q)^{n-1}} \left( (1 - (1/q)^{n-1}) - x^{\frac{q}{q-1} (1/q)^{n-1}} \right) \\
&= 0
\end{aligned}
$$

即有

$$
x_n = \left( 1 - (1/q)^{n-1} \right)^{(q-1)q^{n-2}}
$$

$q > 1$，因此 $1 - (1/q)^{n-1} \in (0, 1), (q-1)q^{n-2} > 0, x_n \in (0, 1)$。

$x \in (0, x_n)$ 时，$g'_n(x) > 0$，$x \in (x_n, 1)$ 时，$g'_n(x) < 0$。$g_n(x)$ 在 $x_n$ 处取得最大值。

### (3)

$$
\lim_{n \to \infty} a_n = \frac{q}{q-1} = p \qquad \lim_{n \to \infty} g_n(x) = x^p - x^p = 0
$$

### (4)

$$
\begin{aligned}
\frac{d_{n+1}}{d_n} &= \frac{(c_{n+1})^{q^{n+1}}}{(c_n)^{q^n}} \\
&= \left( \frac{p}{a_{n+1}} \right)^{q^{n+1}} \frac{((c_n)^{1/q})^{q^{n+1}}}{(c_n)^{q^n}} \\
&= \left( \frac{p}{\frac{q}{q-1}(1 - (1/q)^n)} \right)^{q^{n+1}} \\
&= \frac{1}{((1 - 1/q^n)^{q^n})^q}
\end{aligned}
$$

$n \to \infty$ 取极限，得到

$$
\lim_{n \to \infty} \frac{d_{n+1}}{d_n} = \frac{1}{(1/e)^q} = e^q
$$

### (5)
对 (4) 的结论取对数

$$
\lim_{n \to \infty} (q^{n+1} \ln c_{n+1} - q^n \ln c_n) = q
$$

假设 $\lim_{n \to \infty} \ln c_n = A$，则有

$$
\lim_{n \to \infty} (q^n A - q^{n-1}A) = 1 \qquad A = \lim_{n \to \infty} \frac{1}{q^{n-1}(q - 1)}
$$

$q > 1$，因此 $A = 0$，即有 $\lim_{n \to \infty} c_n = 1$。

### (6)

$$
\lim_{n \to \infty} c_n = 1 \qquad \lim_{n \to \infty} a_n = p
$$

$$
\lim_{n \to \infty} f_n(x) = \lim_{n \to \infty} c_n x^{a_n} = x^p
$$