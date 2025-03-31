---
sidebar_label: "2017年度 数学 第2問"
sidebar_position: 20
tags:
  - Tokyo-University
---
# 東京大学 情報理工学研究科 2017年度 数学 第2問

## **Author**
[etsurin](https://zhuanlan.zhihu.com/p/561992447)

## **Description**
実数値関数 $u(x, t)$ が $0 \leq x \leq 1, t \geq 0$ で定義されている。ここで、$x$ と $t$ は互いに独立である。
偏微分方程式

$$
\frac{\partial u}{\partial t} = \frac{\partial^2 u}{\partial x^2} \tag{*}
$$

の解を次の条件

$$
\begin{aligned}
&\text{境界条件}： u(0, t) = u(1, t) = 0 \\
&\text{初期条件}： u(x, 0) = x - x^2
\end{aligned}
$$

のもとで求める。ただし、定数関数 $u(x, t) = 0$ は明らかに解であるから、それ以外の解を考える。
以下の問いに答えよ。

(1) 次の式を計算せよ。ここで、$n, m$ はともに正の整数とする。

$$
\int_0^1 \sin (n \pi x) \sin (m \pi x) \, dx
$$

(2) $x$ のみの関数 $\xi (x)$ および $t$ のみの関数 $\tau (t)$ を用いて、$u(x, t) = \xi (x) \tau (t)$ とおけるとする。
任意の定数 $C$ を用いて、$\xi$ および $\tau$ が満たす常微分方程式をそれぞれ表せ。
関数 $f(x)$ と関数 $g(t)$ が任意の $x$ と $t$ について $f(x) = g(t)$ を満たす場合は、$f(x)$ と $g(t)$ が定数関数となることを用いてもよい。

(3) 設問 (2) の常微分方程式を解け。
次に、境界条件を満たす偏微分方程式 (*) の解の一つが次の式で表される $u_n (x, t)$ で与えられることを示し、$\alpha, \beta$ を正の整数 $n$ を用いて表せ。

$$
u_n (x, t) = e^{\alpha t} \sin (\beta x)
$$

(4) 境界条件と初期条件を満たす偏微分方程式 (*) の解は $u_n(x, t)$ の線形結合として次の式で表される。
$c_n$ を求めよ。設問 (1) の結果を用いてもよい。

$$
u(x, t) = \sum_{n=1}^\infty c_n u_n (x, t)
$$

## **Kai**
### (1)
$m \neq n$ 时

$$
\int_0^1 \sin (n \pi x) \sin (m \pi x) dx = \int_0^1 \frac{1}{2} \left( \cos ((m-n)\pi x) - \cos ((m+n) \pi x) \right) dx = 0
$$

$m = n$ 时

$$
\int_0^1 \sin^2(n \pi x) dx = \int_0^1 \frac{1}{2} - \frac{1}{2} \cos (2 \pi nx)dx = \frac{1}{2}
$$

### (2)
假设 $u(x,t)$ 有形式 $u(x, t) = \xi (x) \tau (t)$

$$
\frac{\partial u}{\partial t} = \xi (x) \tau'(t) \qquad \frac{\partial^2 u}{\partial x^2} = \xi''(x) \tau (t) \qquad \xi(x) \tau'(t) = \xi''(x) \tau(t)
$$

因此有 $\frac{\xi''(x)}{\xi(x)} = \frac{\tau'(t)}{\tau(t)} = -C$ ($C$ 为常数), 满足的微分方程式为

$$
\xi''(x) + C\xi (x) = 0 \qquad \tau'(t) + C \tau(t) = 0
$$

### (3)
$C < 0$ 时, $\xi(x) = c_1 e^{\sqrt{-C}x} + c_2 e^{-\sqrt{-C}x}$; 
$C = 0$ 时, $\xi(x) = c_1 x + c_2$ ($c_1, c_2$ 为常数), 代入边界条件 $\xi(0) = \xi(1) = 0$, 则 $c_1 = c_2 = 0$.

因此为使 $\xi(x)$ 有非零解, $C > 0$.

$C > 0$ 时, $\xi(x) = c_1 \sin(\sqrt{C}x) + c_2 \cos (\sqrt{C}x)$.
$\xi(0) = 0$, 则 $c_2 = 0$, $\xi(1) = 0$, 则 $\sqrt{C} = n \pi$.
$\tau(t) = e^{-Ct} = e^{-n^2 \pi^2 t}$.

因此，一个满足边界条件的解有如下形式

$$
u_n(x,t) = e^{\alpha t} \sin (\beta x)
$$

其中 $\alpha = -n^2 \pi^2, \beta = n \pi$.

#### (4)
由初始条件

$$
u(x,0) = \sum_{n=1}^{\infty} c_n \sin (n \pi x) = x - x^2
$$

两边同时乘 $\sin(k \pi x)$ 积分，由 (1)

$$
\frac{1}{2} c_k = \int_0^1 (x-x^2) \sin (k \pi x) dx
$$

而

$$
\int x \sin(k \pi x)dx = -\frac{1}{k \pi} \int x d(\cos (k \pi x)) = -\frac{1}{k \pi} (x \cos (k \pi x) - \frac{\sin(k \pi x)}{k \pi})
$$

$$
\begin{aligned}
    \int x^2 \sin(k \pi x)dx &= -\frac{1}{k \pi} \int x^2 d(\cos (k \pi x)) \\
    &= -\frac{1}{k \pi} x^2 \cos (k \pi x) + \frac{2}{k \pi} \int x \cos(k \pi x) dx \\
    &= -\frac{1}{k \pi} x^2 \cos (k \pi x) + \frac{2}{k^2 \pi^2} \int x d(\sin (k \pi x)) \\
    &= -\frac{1}{k \pi} x^2 \cos (k \pi x) + \frac{2}{k^2 \pi^2} x \sin (k \pi x) + \frac{2}{k^3 \pi^3} \cos (k \pi x)
\end{aligned}
$$

$$
c_k = 2 \int_0^1 (x - x^2) \sin (k \pi x) dx = 2(-\frac{2}{k^3 \pi^3}(-1)^k + \frac{2}{k^3 \pi^3})
$$

$$
c_{2n} = 0 \qquad c_{2n-1} = \frac{8}{(2n-1)^3 \pi^3}
$$

$$
u(x,t) = \sum_{n=1}^{\infty} \frac{8}{(2n - 1)^3 \pi^3} e^{-(2n-1)^2 \pi^2 t} \sin((2n - 1) \pi x)
$$