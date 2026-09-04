---
sidebar_label: "2024年7月実施 数理基礎 問題1"
tags:
  - Waseda-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Local-Extrema
  - Mathematics.Calculus.Integration
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Integration-by-Substitution
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2024年7月実施 数理基礎 問題1

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語

#### 小問1

$y = f(x), x = \sqrt{s^2 + t^2 + u^2}$ とするとき、二階偏微分の和 $\frac{\partial^2 y}{\partial s^2} + \frac{\partial^2 y}{\partial t^2} + \frac{\partial^2 y}{\partial u^2}$ を $x, f'(x), f''(x)$ を用いて表せ。

#### 小問2

関数 $z = f(x, y) = x^4 + y^4 - 9(x+y)^2$ に対し、関数の停留点と極値を全て求めよ。

#### 小問3

領域Dを

$$
D = \{(x, y)| x^2 + y^2 \leq 2\}
$$

のように定義するとき、次の二重積分を求めよ。

$$
\iint_{D} \sqrt{\frac{2-x^2-y^2}{2+x^2+y^2}}dxdy
$$

### 题目描述

#### 小问1

设

$$
y=f(x),\qquad x=\sqrt{s^2+t^2+u^2}.
$$

用 $x,f'(x),f''(x)$ 表示

$$
\frac{\partial^2y}{\partial s^2}
+\frac{\partial^2y}{\partial t^2}
+\frac{\partial^2y}{\partial u^2}.
$$

原题没有说明原点处的光滑性；因此一般公式应在 $x>0$ 上给出。若还讨论 $x=0$，须另行说明使径向函数在原点二次可微所需的条件及原点处的取值。

#### 小问2

对函数

$$
z=f(x,y)=x^4+y^4-9(x+y)^2,
$$

求出全部驻点，并确定所有极值。

#### 小问3

定义区域

$$
D=\{(x,y)\mid x^2+y^2\leq2\}.
$$

求二重积分

$$
\iint_D
\sqrt{\frac{2-x^2-y^2}{2+x^2+y^2}}\,dx\,dy.
$$

## **Kai**

### 小問1

Let $x = \sqrt{s^2 + t^2 + u^2}$ . Then $x^2 = s^2 + t^2 + u^2$ . We have

$\frac{\partial x}{\partial s} = \frac{s}{\sqrt{s^2 + t^2 + u^2}} = \frac{s}{x}$
$\frac{\partial x}{\partial t} = \frac{t}{\sqrt{s^2 + t^2 + u^2}} = \frac{t}{x}$
$\frac{\partial x}{\partial u} = \frac{u}{\sqrt{s^2 + t^2 + u^2}} = \frac{u}{x}$

Now, we compute the second derivatives:

$\frac{\partial^2 y}{\partial s^2} = \frac{\partial}{\partial s} \left( \frac{\partial y}{\partial s} \right) = \frac{\partial}{\partial s} \left( f'(x) \frac{\partial x}{\partial s} \right) = \frac{\partial}{\partial s} \left( f'(x) \frac{s}{x} \right)$

$\frac{\partial^2 y}{\partial s^2} = f''(x) \frac{\partial x}{\partial s} \frac{s}{x} + f'(x) \frac{x - s \frac{\partial x}{\partial s}}{x^2} = f''(x) \frac{s^2}{x^2} + f'(x) \frac{x - \frac{s^2}{x}}{x^2} = f''(x) \frac{s^2}{x^2} + f'(x) \frac{x^2 - s^2}{x^3}$

Similarly,

$\frac{\partial^2 y}{\partial t^2} = f''(x) \frac{t^2}{x^2} + f'(x) \frac{x^2 - t^2}{x^3}$
$\frac{\partial^2 y}{\partial u^2} = f''(x) \frac{u^2}{x^2} + f'(x) \frac{x^2 - u^2}{x^3}$

Thus,

$\frac{\partial^2 y}{\partial s^2} + \frac{\partial^2 y}{\partial t^2} + \frac{\partial^2 y}{\partial u^2} = f''(x) \frac{s^2 + t^2 + u^2}{x^2} + f'(x) \frac{3x^2 - (s^2 + t^2 + u^2)}{x^3} = f''(x) \frac{x^2}{x^2} + f'(x) \frac{3x^2 - x^2}{x^3} = f''(x) + f'(x) \frac{2x^2}{x^3} = f''(x) + \frac{2}{x} f'(x)$

Therefore,

For $x>0$ ,

$$
\boxed{
\frac{\partial^2 y}{\partial s^2}
+\frac{\partial^2 y}{\partial t^2}
+\frac{\partial^2 y}{\partial u^2}
=f''(x)+\frac{2}{x}f'(x)
}.
$$

At $x=0$ , the divisions by $x$ used above are not valid. If the radial function $f(\sqrt{s^2+t^2+u^2})$ is twice differentiable at the origin, then necessarily $f'(0)=0$ , and direct differentiation along the three coordinate axes gives

$$
\left.
\left(
\frac{\partial^2 y}{\partial s^2}
+\frac{\partial^2 y}{\partial t^2}
+\frac{\partial^2 y}{\partial u^2}
\right)\right|_{(0,0,0)}
=3f''(0).
$$

Without these regularity conditions, the second partial derivatives at the origin need not exist.

### 小問2

首先，求偏导数：

$$
\frac{\partial f}{\partial x} = 4x^3 - 18(x+y)
$$

$$
\frac{\partial f}{\partial y} = 4y^3 - 18(x+y)
$$

令偏导数为0，得到方程组：

$$
4x^3 - 18(x+y) = 0
$$

$$
4y^3 - 18(x+y) = 0
$$

因此， $4x^3 = 4y^3$ ，得到 $x = y$ 。
将 $x = y$ 代入第一个方程：

$$
4x^3 - 18(x+x) = 0
$$

$$
4x^3 - 36x = 0
$$

$$
4x(x^2 - 9) = 0
$$

$$
4x(x-3)(x+3) = 0
$$

所以，x = 0, x = 3, x = -3
对应的 y 值也相等，所以得到三个驻点：(0, 0), (3, 3), (-3, -3)

接下来，求二阶偏导数：

$$
\frac{\partial^2 f}{\partial x^2} = 12x^2 - 18
$$

$$
\frac{\partial^2 f}{\partial y^2} = 12y^2 - 18
$$

$$
\frac{\partial^2 f}{\partial x \partial y} = -18
$$

令 $A = \frac{\partial^2 f}{\partial x^2}, B = \frac{\partial^2 f}{\partial x \partial y}, C = \frac{\partial^2 f}{\partial y^2}$ ，计算 $AC - B^2$

对于 $(0, 0)$ : $A = -18$ , $B = -18$ , $C = -18$ , $AC - B^2 = (-18)(-18) - (-18)^2 = 0$ , 无法确定极值。
对于 $(3, 3)$ : $A = 12(3^2) - 18 = 108 - 18 = 90$ , $B = -18$ , $C = 90$ , $AC - B^2 = (90)(90) - (-18)^2 = 8100 - 324 = 7776 > 0$ , $A > 0$ , 所以 $(3, 3)$ 是极小值点, 极小值为 $f(3,3) = 3^4 + 3^4 - 9(3+3)^2 = 81 + 81 - 9(36) = 162 - 324 = -162$ 。
对于 $(-3, -3)$ : $A = 12(-3)^2 - 18 = 108 - 18 = 90$ , $B = -18$ , $C = 90$ , $AC - B^2 = (90)(90) - (-18)^2 = 8100 - 324 = 7776 > 0$ , $A > 0$ , 所以 $(-3, -3)$ 是极小值点, 极小值为 $f(-3,-3) = (-3)^4 + (-3)^4 - 9(-3-3)^2 = 81 + 81 - 9(36) = 162 - 324 = -162$ 。

对于 $(0,0)$ ，需要进一步分析。沿 $y=0$ ，

$$
f(x,0)=x^4-9x^2<0\qquad(0<|x|<3),
$$

而沿 $y=-x$ ，

$$
f(x,-x)=2x^4>0\qquad(x\ne0).
$$

因此任意小的原点邻域内都有正值和负值，故 $(0,0)$ 是鞍点。

此外，

$$
x^4+y^4-9(x+y)^2
\geq\frac12(x^2+y^2)^2-18(x^2+y^2)\longrightarrow+\infty
$$

当 $x^2+y^2\to\infty$ 。所以两个极小值点 $(3,3)$ 和 $(-3,-3)$ 也是全局最小值点，全局最小值为 $\boxed{-162}$ ；不存在极大值。

### 小問3

首先，将直角坐标转换为极坐标： $x = r\cos\theta, y = r\sin\theta$ , 并且 $x^2+y^2=r^2$ , $dxdy = rdrd\theta$ 。
积分区域D变为 $0 \leq r \leq \sqrt{2}, 0 \leq \theta \leq 2\pi$ 。

原积分变为：

$$
\iint_{D} \sqrt{\frac{2-x^2-y^2}{2+x^2+y^2}}dxdy = \int_0^{2\pi} \int_0^{\sqrt{2}} \sqrt{\frac{2-r^2}{2+r^2}}rdrd\theta
$$

令 $u = r^2$ , 则 $du = 2rdr$ , 所以 $rdr = \frac{1}{2}du$ 。
当 $r=0$ 时, $u=0$ 。当 $r=\sqrt{2}$ 时, $u=2$ 。

积分变为：

$$
\int_0^{2\pi} \int_0^{2} \sqrt{\frac{2-u}{2+u}}\frac{1}{2}dud\theta = \frac{1}{2} \int_0^{2\pi} \int_0^{2} \sqrt{\frac{2-u}{2+u}}dud\theta
$$

考虑积分 $\int_0^{2} \sqrt{\frac{2-u}{2+u}}du$ 。
令 $u = 2\cos(2v)$ , 则 $du = -4\sin(2v)dv$ 。
当 $u=0$ 时, $2\cos(2v) = 0$ , 则 $2v = \frac{\pi}{2}$ , $v = \frac{\pi}{4}$ 。
当 $u=2$ 时, $2\cos(2v) = 2$ , 则 $\cos(2v) = 1$ , $2v = 0$ , $v = 0$ 。
因此,

$$
\sqrt{\frac{2-u}{2+u}} = \sqrt{\frac{2-2\cos(2v)}{2+2\cos(2v)}} = \sqrt{\frac{1-\cos(2v)}{1+\cos(2v)}} = \sqrt{\frac{2\sin^2(v)}{2\cos^2(v)}} = \sqrt{\tan^2(v)} = \tan(v)
$$

则积分变为:

$$
\int_{\pi/4}^{0} \tan(v)(-4\sin(2v))dv = 4\int_0^{\pi/4} \tan(v)(2\sin(v)\cos(v))dv = 8 \int_0^{\pi/4} \frac{\sin(v)}{\cos(v)} \sin(v)\cos(v)dv = 8\int_0^{\pi/4} \sin^2(v)dv
$$

$$
\int_0^{\pi/4} \sin^2(v)dv = \int_0^{\pi/4} \frac{1 - \cos(2v)}{2}dv = \frac{1}{2} \left[v - \frac{\sin(2v)}{2}\right]_0^{\pi/4} = \frac{1}{2} \left[\frac{\pi}{4} - \frac{\sin(\pi/2)}{2}\right] = \frac{1}{2} \left(\frac{\pi}{4} - \frac{1}{2}\right) = \frac{\pi}{8} - \frac{1}{4}
$$

因此，

$$
\int_0^{2} \sqrt{\frac{2-u}{2+u}}du = 8\left(\frac{\pi}{8} - \frac{1}{4}\right) = \pi - 2
$$

原积分变为:

$$
\frac{1}{2} \int_0^{2\pi} (\pi - 2) d\theta = \frac{1}{2} (\pi - 2) \int_0^{2\pi} d\theta = \frac{1}{2} (\pi - 2) [\theta]_0^{2\pi} = \frac{1}{2} (\pi - 2) (2\pi) = \pi(\pi - 2) = \pi^2 - 2\pi
$$

因此，

$$
\iint_{D} \sqrt{\frac{2-x^2-y^2}{2+x^2+y^2}}dxdy = \pi^2 - 2\pi
$$
