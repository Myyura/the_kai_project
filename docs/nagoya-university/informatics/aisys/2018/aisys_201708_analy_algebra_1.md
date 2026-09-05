---
sidebar_label: "2017年8月実施 解析・線形代数 [1]"
tags:
  - Nagoya-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Local-Extrema
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Integration
---
# 名古屋大学 情報学研究科 知能システム学専攻 2017年8月実施 解析・線形代数 [1]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

出典：[名古屋大学・2018年度知能システム学専攻入試問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/0418e4d9b838956c155278f11a9e0bbf.pdf)、解析・線形代数。導出過程も示す。


次の関数 $f$ について、以下の問いに答えよ。

$$
f(x, y) = \sin x + \sin y + \sin(x+y) \quad (0 < x < \pi, 0 < y < \pi)
$$

(a) $f$ の停留点を求めよ。

(b) (a)で求めた停留点に対して極値をとるかどうかを判定し、 $f$ の極値を求めよ。

### 题目描述

给定函数

$$
f(x,y)=\sin x+\sin y+\sin(x+y),
\qquad0<x<\pi,\quad0<y<\pi.
$$

1. 求 $f$ 的全部驻点；
2. 对第 1 问所得各驻点，判断 $f$ 是否在该点取得极值，并求相应的极值。

## **Kai**

(a) $f$ の停留点を求めるために、偏導関数を計算し、それらが $0$ となる点を求めます。
まず、 $f(x,y)$ を $x$ と $y$ でそれぞれ偏微分します。

$$
\frac{\partial f}{\partial x} = f_x(x,y) = \cos x + \cos(x+y)
$$

$$
\frac{\partial f}{\partial y} = f_y(x,y) = \cos y + \cos(x+y)
$$

停留点では $f_x = 0$ かつ $f_y = 0$ ですので、次の方程式系を解きます。

$$
\begin{cases} \cos x + \cos(x+y) = 0 & (1) \\ \cos y + \cos(x+y) = 0 & (2) \end{cases}
$$

(1)と(2)から、 $\cos x = \cos y$ が得られます。
定義域が $0 < x < \pi$ , $0 < y < \pi$ なので、 $\cos x = \cos y$ から $x=y$ が導かれます。

この結果を式(1)に代入すると、

$$
\cos x + \cos(x+x) = 0
$$

$$
\cos x + \cos(2x) = 0
$$

倍角の公式 $\cos(2x) = 2\cos^2 x - 1$ を用いて、

$$
\cos x + (2\cos^2 x - 1) = 0
$$

$$
2\cos^2 x + \cos x - 1 = 0
$$

これは $\cos x$ に関する二次方程式です。これを解くと、

$$
(2\cos x - 1)(\cos x + 1) = 0
$$

よって、 $\cos x = \frac{1}{2}$ または $\cos x = -1$ となります。
$0 < x < \pi$ の範囲で考えると、
1. $\cos x = \frac{1}{2}$ の場合、 $x = \frac{\pi}{3}$ です。
2. $\cos x = -1$ の場合、 $x = \pi$ ですが、これは定義域に含まれません。

したがって、 $x = \frac{\pi}{3}$ のみが解となります。
$x=y$ なので、 $y = \frac{\pi}{3}$ です。
よって、停留点は $(\frac{\pi}{3}, \frac{\pi}{3})$ です。

(b) 次に、停留点 $(\frac{\pi}{3}, \frac{\pi}{3})$ が極値をとるかどうかを判定するために、二階偏導関数を計算します。

$$
f_{xx}(x,y) = \frac{\partial^2 f}{\partial x^2} = -\sin x - \sin(x+y)
$$

$$
f_{yy}(x,y) = \frac{\partial^2 f}{\partial y^2} = -\sin y - \sin(x+y)
$$

$$
f_{xy}(x,y) = \frac{\partial^2 f}{\partial x \partial y} = -\sin(x+y)
$$

停留点 $(\frac{\pi}{3}, \frac{\pi}{3})$ におけるこれらの値を計算します。

$$
A = f_{xx}\left(\frac{\pi}{3}, \frac{\pi}{3}\right) = -\sin\left(\frac{\pi}{3}\right) - \sin\left(\frac{2\pi}{3}\right) = -\frac{\sqrt{3}}{2} - \frac{\sqrt{3}}{2} = -\sqrt{3}
$$

$$
C = f_{yy}\left(\frac{\pi}{3}, \frac{\pi}{3}\right) = -\sin\left(\frac{\pi}{3}\right) - \sin\left(\frac{2\pi}{3}\right) = -\frac{\sqrt{3}}{2} - \frac{\sqrt{3}}{2} = -\sqrt{3}
$$

$$
B = f_{xy}\left(\frac{\pi}{3}, \frac{\pi}{3}\right) = -\sin\left(\frac{2\pi}{3}\right) = -\frac{\sqrt{3}}{2}
$$

ヘッセ行列の判別式 $D = AC - B^2$ を計算します。

$$
D = (-\sqrt{3})(-\sqrt{3}) - \left(-\frac{\sqrt{3}}{2}\right)^2 = 3 - \frac{3}{4} = \frac{9}{4}
$$

$D > 0$ かつ $A < 0$ なので、点 $(\frac{\pi}{3}, \frac{\pi}{3})$ で $f$ は極大値をとります。

最後に、その極大値を計算します。

$$
f\left(\frac{\pi}{3}, \frac{\pi}{3}\right) = \sin\left(\frac{\pi}{3}\right) + \sin\left(\frac{\pi}{3}\right) + \sin\left(\frac{\pi}{3}+\frac{\pi}{3}\right)
$$

$$
= \sin\left(\frac{\pi}{3}\right) + \sin\left(\frac{\pi}{3}\right) + \sin\left(\frac{2\pi}{3}\right)
$$

$$
= \frac{\sqrt{3}}{2} + \frac{\sqrt{3}}{2} + \frac{\sqrt{3}}{2} = \frac{3\sqrt{3}}{2}
$$

したがって、極値は極大値 $\frac{3\sqrt{3}}{2}$ です。
