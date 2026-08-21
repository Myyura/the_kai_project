---
sidebar_label: "2020年8月実施 微积分"
tags:
  - Hosei-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Local-Extrema
  - Mathematics.Calculus.Differentiation
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2020年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[III] $f(x, y) = 4x^2 e^y - 2x^4 - e^{4y}$ とする。

(1) $f(x, y)$ の偏導関数 $\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial^2 f}{\partial x^2}, \frac{\partial^2 f}{\partial y^2}, \frac{\partial^2 f}{\partial x \partial y}$ をそれぞれ求めよ。

(2) $\frac{\partial f}{\partial x}(a, b) = \frac{\partial f}{\partial y}(a, b) = 0$ となる点 $(a, b)$ をすべて求めよ。さらに、それぞれの点 $(a, b)$ において、関数 $f(x, y)$ が極大値をとるか、極小値をとるか、極値をとらないかを判定せよ。

### 题目描述

【III】设

$$
f(x,y)=4x^2e^y-2x^4-e^{4y}.
$$

（1）分别求 $f(x,y)$ 的偏导数

$$
\frac{\partial f}{\partial x},\quad
\frac{\partial f}{\partial y},\quad
\frac{\partial^2f}{\partial x^2},\quad
\frac{\partial^2f}{\partial y^2},\quad
\frac{\partial^2f}{\partial x\partial y}.
$$

（2）求出所有满足

$$
\frac{\partial f}{\partial x}(a,b)
=\frac{\partial f}{\partial y}(a,b)=0
$$

的点 $(a,b)$。进一步对每个点分别判断函数 $f(x,y)$ 在该处取得极大值、极小值，还是不取得极值。

## **Kai**

解答

与えられた関数は $f(x, y) = 4x^2 e^y - 2x^4 - e^{4y}$ です。

(1) 偏導関数の計算

まず、1階の偏導関数を求めます。
$x$ に関する偏導関数：

$$
\frac{\partial f}{\partial x} = \frac{\partial}{\partial x} (4x^2 e^y - 2x^4 - e^{4y}) = 8x e^y - 8x^3
$$

$y$ に関する偏導関数：

$$
\frac{\partial f}{\partial y} = \frac{\partial}{\partial y} (4x^2 e^y - 2x^4 - e^{4y}) = 4x^2 e^y - 4e^{4y}
$$

次に、2階の偏導関数を求めます。

$$
\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x} (8x e^y - 8x^3) = 8e^y - 24x^2
$$

$$
\frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y} (4x^2 e^y - 4e^{4y}) = 4x^2 e^y - 16e^{4y}
$$

$$
\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial y} \right) = \frac{\partial}{\partial x} (4x^2 e^y - 4e^{4y}) = 8x e^y
$$

(2) 臨界点の探索と極値の判定

極値をとる可能性のある点（臨界点）を求めるため、1階の偏導関数を0とおきます。

$$
\begin{cases} \frac{\partial f}{\partial x} = 8x e^y - 8x^3 = 8x(e^y - x^2) = 0 & \cdots (1) \\ \frac{\partial f}{\partial y} = 4x^2 e^y - 4e^{4y} = 4(x^2 e^y - e^{4y}) = 0 & \cdots (2) \end{cases}
$$

式(1)より、 $x=0$ または $e^y = x^2$ のいずれかが成り立ちます。

ケース 1: $x=0$ の場合
$x=0$ を式(2)に代入すると、

$$
4(0^2 \cdot e^y - e^{4y}) = -4e^{4y} = 0
$$

しかし、任意の実数 $y$ に対して $e^{4y} > 0$ なので、この方程式を満たす解はありません。

ケース 2: $e^y = x^2$ の場合
$e^y > 0$ であるため、 $x^2 > 0$ 、すなわち $x \neq 0$ となります。
$e^y = x^2$ を式(2)に代入します。

$$
4(x^2(x^2) - e^{4y}) = 0 \implies x^4 = e^{4y} = (e^y)^4
$$

ここに再び $e^y = x^2$ を代入すると、

$$
x^4 = (x^2)^4 = x^8
$$

$$
x^8 - x^4 = 0 \implies x^4(x^4 - 1) = 0
$$

$x \neq 0$ なので、 $x^4 = 1$ となります。これを満たす実数 $x$ は $x=1$ と $x=-1$ です。

$x = \pm 1$ のときの $y$ の値を求めます。
$e^y = x^2 = (\pm 1)^2 = 1$ より、 $y = \ln(1) = 0$ となります。

したがって、臨界点は $(1, 0)$ と $(-1, 0)$ の2点です。

次に、これらの臨界点について極値を判定するために、2階偏導関数テスト（ヘッセ行列の判別式）を用います。
判別式 $D(x, y)$ は次式で与えられます。

$$
D(x, y) = f_{xx}(x,y) f_{yy}(x,y) - (f_{xy}(x,y))^2
$$

$$
D(x, y) = (8e^y - 24x^2)(4x^2 e^y - 16e^{4y}) - (8x e^y)^2
$$

点 $(1, 0)$ における判定
$x=1, y=0$ を代入します。

$$
f_{xx}(1, 0) = 8e^0 - 24(1)^2 = 8 - 24 = -16
$$

$$
f_{yy}(1, 0) = 4(1)^2 e^0 - 16e^0 = 4 - 16 = -12
$$

$$
f_{xy}(1, 0) = 8(1)e^0 = 8
$$

判別式 $D$ の値は、

$$
D(1, 0) = (-16)(-12) - (8)^2 = 192 - 64 = 128
$$

$D(1, 0) = 128 > 0$ かつ $f_{xx}(1, 0) = -16 < 0$ なので、関数 $f(x, y)$ は点 $(1, 0)$ で**極大値**をとります。

点 $(-1, 0)$ における判定
$x=-1, y=0$ を代入します。

$$
f_{xx}(-1, 0) = 8e^0 - 24(-1)^2 = 8 - 24 = -16
$$

$$
f_{yy}(-1, 0) = 4(-1)^2 e^0 - 16e^0 = 4 - 16 = -12
$$

$$
f_{xy}(-1, 0) = 8(-1)e^0 = -8
$$

判別式 $D$ の値は、

$$
D(-1, 0) = (-16)(-12) - (-8)^2 = 192 - 64 = 128
$$

$D(-1, 0) = 128 > 0$ かつ $f_{xx}(-1, 0) = -16 < 0$ なので、関数 $f(x, y)$ は点 $(-1, 0)$ で**極大値**をとります。

結論
- 臨界点は $(1, 0)$ と $(-1, 0)$ です。
- 点 $(1, 0)$ において、関数 $f(x, y)$ は極大値をとります。
- 点 $(-1, 0)$ において、関数 $f(x, y)$ は極大値をとります。
