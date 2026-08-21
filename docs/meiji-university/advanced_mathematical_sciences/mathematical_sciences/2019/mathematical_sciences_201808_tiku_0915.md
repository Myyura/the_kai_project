---
sidebar_label: "2018年8月実施 微积分"
tags:
  - Meiji-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Local-Extrema
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Integration
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2018年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の問いに答えよ。

(1) $k$ を実数の定数で, $k \neq 0$ とするとき, $f(x, y) = x^3 - x + \frac{k}{2}y^2 + kxy$ とおく。
(a) $f(x, y)$ の1階偏導関数をすべて求めよ。
(b) $f(x, y)$ の極値点をすべて求めよ。

(2) $\mathbb{R}$ 上の連続関数 $f(x)$ が

$$
f(x) = e^x + \int_0^x e^{x-s}f(s) \, ds
$$

を満たすとする。
(a) $f(0)$ を求めよ。
(b) $\frac{d}{dx} \int_0^x e^{x-s}f(s) \, ds$ を求めよ。
(c) $f(x)$ の満たす微分方程式を求めよ。
(d) $f(x)$ を求めよ。

### 题目描述

回答下列问题。

(1) 设 $k$ 为满足 $k\neq 0$ 的实常数，并定义

$$
f(x,y)=x^3-x+\frac{k}{2}y^2+kxy.
$$

(a) 求 $f(x,y)$ 的全部一阶偏导数。

(b) 求 $f(x,y)$ 的全部极值点。

(2) 设定义在 $\mathbb{R}$ 上的连续函数 $f(x)$ 满足

$$
f(x)=e^x+\int_0^x e^{x-s}f(s)\,ds.
$$

(a) 求 $f(0)$。

(b) 求

$$
\frac{d}{dx}\int_0^x e^{x-s}f(s)\,ds.
$$

(c) 求 $f(x)$ 所满足的微分方程。

(d) 求 $f(x)$。

## **Kai**

(1)の解答

与えられた関数は $f(x, y) = x^3 - x + \frac{k}{2}y^2 + kxy$ であり, $k$ は $k \neq 0$ を満たす実数の定数である。

(a) 1階偏導関数

$f(x, y)$ を $x$ について偏微分する。

$$
f_x(x, y) = \frac{\partial f}{\partial x} = \frac{\partial}{\partial x} (x^3 - x + \frac{k}{2}y^2 + kxy) = 3x^2 - 1 + ky
$$

$f(x, y)$ を $y$ について偏微分する。

$$
f_y(x, y) = \frac{\partial f}{\partial y} = \frac{\partial}{\partial y} (x^3 - x + \frac{k}{2}y^2 + kxy) = ky + kx = k(x+y)
$$

よって、1階偏導関数は次の通りである。

$$
f_x(x, y) = 3x^2 - 1 + ky
$$

$$
f_y(x, y) = k(x+y)
$$

(b) 極値点

極値点であるための必要条件は、 $f_x(x, y) = 0$ かつ $f_y(x, y) = 0$ である。

$$
\begin{cases} 3x^2 - 1 + ky = 0 & \cdots (1) \\ k(x+y) = 0 & \cdots (2) \end{cases}
$$

$k \neq 0$ なので、(2)式より $x+y=0$ 、すなわち $y=-x$ となる。
これを(1)式に代入する。

$$
3x^2 - 1 + k(-x) = 0 \implies 3x^2 - kx - 1 = 0
$$

この $x$ に関する2次方程式を解の公式を用いて解くと、

$$
x = \frac{-(-k) \pm \sqrt{(-k)^2 - 4(3)(-1)}}{2(3)} = \frac{k \pm \sqrt{k^2 + 12}}{6}
$$

よって、臨界点は次の2つである。

$$
P_1 = \left( \frac{k + \sqrt{k^2 + 12}}{6}, -\frac{k + \sqrt{k^2 + 12}}{6} \right)
$$

$$
P_2 = \left( \frac{k - \sqrt{k^2 + 12}}{6}, -\frac{k - \sqrt{k^2 + 12}}{6} \right)
$$

次に、2階偏導関数を計算し、ヘッセ行列の判別式 $D(x, y)$ を用いてこれらの臨界点を分類する。

$$
f_{xx}(x, y) = \frac{\partial^2 f}{\partial x^2} = 6x
$$

$$
f_{yy}(x, y) = \frac{\partial^2 f}{\partial y^2} = k
$$

$$
f_{xy}(x, y) = \frac{\partial^2 f}{\partial y \partial x} = k
$$

判別式 $D(x, y)$ は、

$$
D(x, y) = f_{xx}f_{yy} - (f_{xy})^2 = (6x)(k) - k^2 = 6kx - k^2
$$

臨界点 $P_1$ について： $x_1 = \frac{k + \sqrt{k^2 + 12}}{6}$

$$
D(x_1, y_1) = 6k\left(\frac{k + \sqrt{k^2 + 12}}{6}\right) - k^2 = k(k + \sqrt{k^2 + 12}) - k^2 = k\sqrt{k^2 + 12}
$$

- $k > 0$ の場合: $D > 0$ かつ $f_{xx}(x_1, y_1) = 6x_1 = k + \sqrt{k^2+12} > 0$ 。よって、 $P_1$ は極小点である。
- $k < 0$ の場合: $D < 0$ 。よって、 $P_1$ は鞍点であり、極値点ではない。

臨界点 $P_2$ について： $x_2 = \frac{k - \sqrt{k^2 + 12}}{6}$

$$
D(x_2, y_2) = 6k\left(\frac{k - \sqrt{k^2 + 12}}{6}\right) - k^2 = k(k - \sqrt{k^2 + 12}) - k^2 = -k\sqrt{k^2 + 12}
$$

- $k > 0$ の場合: $D < 0$ 。よって、 $P_2$ は鞍点であり、極値点ではない。
- $k < 0$ の場合: $D > 0$ かつ $f_{xx}(x_2, y_2) = 6x_2 = k - \sqrt{k^2+12} < 0$ 。よって、 $P_2$ は極大点である。

結論として、極値点は以下の通り。
- $k > 0$ のとき、極小点 $\left( \frac{k + \sqrt{k^2 + 12}}{6}, -\frac{k + \sqrt{k^2 + 12}}{6} \right)$
- $k < 0$ のとき、極大点 $\left( \frac{k - \sqrt{k^2 + 12}}{6}, -\frac{k - \sqrt{k^2 + 12}}{6} \right)$

(2)の解答

与えられた積分方程式は $f(x) = e^x + \int_0^x e^{x-s}f(s) \, ds$ である。

(a) $f(0)$ を求める

与式に $x=0$ を代入すると、

$$
f(0) = e^0 + \int_0^0 e^{0-s}f(s) \, ds = 1 + 0 = 1
$$

よって、 $f(0) = 1$ である。

(b) $\frac{d}{dx} \int_0^x e^{x-s}f(s) \, ds$ を求める

積分項を $I(x) = \int_0^x e^{x-s}f(s) \, ds$ とおく。 $e^x$ は積分変数 $s$ に依存しないため、積分の外に出すことができる。

$$
I(x) = e^x \int_0^x e^{-s}f(s) \, ds
$$

積の微分法と微積分学の基本定理を用いると、

$$
\frac{dI}{dx} = \frac{d}{dx} \left( e^x \int_0^x e^{-s}f(s) \, ds \right)
$$

$$
= \left( \frac{d}{dx} e^x \right) \left( \int_0^x e^{-s}f(s) \, ds \right) + e^x \left( \frac{d}{dx} \int_0^x e^{-s}f(s) \, ds \right)
$$

$$
= e^x \int_0^x e^{-s}f(s) \, ds + e^x (e^{-x}f(x))
$$

$$
= I(x) + f(x)
$$

ここで、元の積分方程式 $f(x) = e^x + I(x)$ より $I(x) = f(x) - e^x$ であるから、これを代入すると、

$$
\frac{dI}{dx} = (f(x) - e^x) + f(x) = 2f(x) - e^x
$$

(c) $f(x)$ の満たす微分方程式を求める

元の積分方程式 $f(x) = e^x + \int_0^x e^{x-s}f(s) \, ds$ の両辺を $x$ で微分する。

$$
f'(x) = \frac{d}{dx}(e^x) + \frac{d}{dx} \left( \int_0^x e^{x-s}f(s) \, ds \right)
$$

(b)の結果を用いると、

$$
f'(x) = e^x + (2f(x) - e^x)
$$

$$
f'(x) = 2f(x)
$$

よって、 $f(x)$ が満たす微分方程式は $f'(x) - 2f(x) = 0$ である。

**(d) $f(x)$ を求める**

(c)で得られた微分方程式 $f'(x) = 2f(x)$ を解く。これは変数分離形の1階線形微分方程式である。

$$
\frac{f'(x)}{f(x)} = 2
$$

両辺を積分して、

$$
\int \frac{f'(x)}{f(x)} dx = \int 2 dx \implies \ln|f(x)| = 2x + C_1
$$

$$
|f(x)| = e^{2x+C_1} = e^{C_1}e^{2x}
$$

$C = \pm e^{C_1}$ とおくと、一般解は $f(x) = C e^{2x}$ となる。

(a)で求めた初期条件 $f(0) = 1$ を用いて定数 $C$ を決定する。

$$
f(0) = C e^{2 \cdot 0} = C e^0 = C
$$

よって $C=1$ である。

したがって、求める関数 $f(x)$ は、

$$
f(x) = e^{2x}
$$
