---
sidebar_label: "2011年度入学 数学 問4（複素関数論）"
tags:
  - Kyushu-University
  - Mathematics.Complex-Analysis.Complex-Numbers
---
# 九州大学 システム情報科学府 情報学専攻・情報知能工学専攻・電気電子工学専攻 共通 2011年度入学 数学 問4（複素関数論）

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

複素変数 $z = x + iy$ ( $z \neq 0$ )の対数を考える.

$$
w(z) = \ln z = u(x, y) + iv(x, y)
$$

ここで、 $x$ と $y$ は実数に値を取る変数， $u(x,y)$ と $v(x, y)$ は実数値関数である.

(1) 関数 $u(x,y)$ と $v(x,y)$ を求めよ。

(2) 偏導関数 $\frac{\partial u}{\partial x}$ , $\frac{\partial u}{\partial y}$ , $\frac{\partial v}{\partial x}$ , $\frac{\partial v}{\partial y}$ を求めよ.

(3) 導関数 $\frac{dw}{dz}$ を求めよ.

### 题目描述

令

$$
z=x+iy\neq0,\qquad
w(z)=\ln z=u(x,y)+iv(x,y),
$$

其中 $x,y$ 为实变量，$u(x,y),v(x,y)$ 为实值函数。这里的复对数是多值的；若把它作为单值函数讨论，须在不穿过所选支割的区域内固定一个连续的辐角分支。回答下列问题：

1. 求 $u(x,y)$ 与 $v(x,y)$，并说明辐角带来的多值性。
2. 在所选对数分支的定义域内，求

   $$
   \frac{\partial u}{\partial x},\quad
   \frac{\partial u}{\partial y},\quad
   \frac{\partial v}{\partial x},\quad
   \frac{\partial v}{\partial y}.
   $$

3. 求导数 $dw/dz$。

## **Kai**

(1) $z=x+iy=re^{i\theta}$ とおくと、複素対数は多価であり

$$
\log z=\log r+i(\arg z+2\pi k),\qquad k\in\mathbb Z
$$

と表される。したがって

$$
u(x,y)=\frac12\log(x^2+y^2),\qquad
v(x,y)=\arg z+2\pi k.
$$

一価の関数として扱う場合は、原点から延びる半直線を除いた領域で偏角の連続な一つの枝 $\operatorname{Arg}z$ を選び、

$$
\operatorname{Log}z=\frac12\log(x^2+y^2)+i\operatorname{Arg}z
$$

とする。単なる $\arctan(y/x)$ では象限を区別できず、 $x=0$ でも定義できない。

(2) 選んだ偏角の枝の領域内では

$$
\frac{\partial u}{\partial x}=\frac{x}{x^2+y^2},\qquad
\frac{\partial u}{\partial y}=\frac{y}{x^2+y^2},
$$

$$
\frac{\partial v}{\partial x}=-\frac{y}{x^2+y^2},\qquad
\frac{\partial v}{\partial y}=\frac{x}{x^2+y^2}.
$$

これらは Cauchy--Riemann 方程式を満たす。

(3) 従って、任意の正則な対数の枝で

$$
\begin{aligned}
\frac{dw}{dz}
&=\frac{\partial u}{\partial x}
+i\frac{\partial v}{\partial x}\\
&=\frac{x-iy}{x^2+y^2}
=\frac1z.
\end{aligned}
$$

すなわち

$$
\boxed{\frac{d}{dz}\operatorname{Log}z=\frac1z}.
$$

ただし、 $\mathbb C\setminus\{0\}$ 全体では単価の正則な対数を定義できない。
