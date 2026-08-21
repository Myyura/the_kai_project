---
sidebar_label: "2021年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Differentiation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$z = f(r), r = \sqrt{x^2 + y^2}$ とするとき,

$$
\frac{\partial^2 z}{\partial x^2} + \frac{\partial^2 z}{\partial y^2} = 0
$$

を満たすような関数 (function) $f(r)$ を求めよ。

### 题目描述

设

$$
z=f(r),\qquad r=\sqrt{x^2+y^2}.
$$

求使

$$
\frac{\partial^2z}{\partial x^2}
+\frac{\partial^2z}{\partial y^2}=0
$$

成立的函数 $f(r)$。原题未说明区域是否包含 $r=0$，也未给出原点处的光滑性要求；因此应先求 $r>0$ 上的径向通解，并另行说明若要求 $z$ 在原点也为 $C^2$ 调和函数时所受的限制。

## **Kai**

We are given that $z = f(r)$ and $r = \sqrt{x^2 + y^2}$ . We want to find $f(r)$ such that $\frac{\partial^2 z}{\partial x^2} + \frac{\partial^2 z}{\partial y^2} = 0$ .

First, we find the first partial derivatives:

$\frac{\partial z}{\partial x} = \frac{df}{dr} \frac{\partial r}{\partial x} = f'(r) \frac{x}{\sqrt{x^2+y^2}} = f'(r) \frac{x}{r}$
$\frac{\partial z}{\partial y} = \frac{df}{dr} \frac{\partial r}{\partial y} = f'(r) \frac{y}{\sqrt{x^2+y^2}} = f'(r) \frac{y}{r}$

Next, we find the second partial derivatives:

$\frac{\partial^2 z}{\partial x^2} = \frac{\partial}{\partial x} (f'(r) \frac{x}{r}) = f''(r) \frac{x}{r} \frac{x}{r} + f'(r) \frac{r - x(\frac{x}{r})}{r^2} = f''(r) \frac{x^2}{r^2} + f'(r) \frac{r^2 - x^2}{r^3} = f''(r) \frac{x^2}{r^2} + f'(r) \frac{y^2}{r^3}$
$\frac{\partial^2 z}{\partial y^2} = \frac{\partial}{\partial y} (f'(r) \frac{y}{r}) = f''(r) \frac{y}{r} \frac{y}{r} + f'(r) \frac{r - y(\frac{y}{r})}{r^2} = f''(r) \frac{y^2}{r^2} + f'(r) \frac{r^2 - y^2}{r^3} = f''(r) \frac{y^2}{r^2} + f'(r) \frac{x^2}{r^3}$

Now, we add the second partial derivatives:

$\frac{\partial^2 z}{\partial x^2} + \frac{\partial^2 z}{\partial y^2} = f''(r) \frac{x^2}{r^2} + f'(r) \frac{y^2}{r^3} + f''(r) \frac{y^2}{r^2} + f'(r) \frac{x^2}{r^3} = f''(r) \frac{x^2 + y^2}{r^2} + f'(r) \frac{x^2 + y^2}{r^3} = f''(r) \frac{r^2}{r^2} + f'(r) \frac{r^2}{r^3} = f''(r) + \frac{f'(r)}{r}$

We are given that this sum equals 0, so we have:

$f''(r) + \frac{f'(r)}{r} = 0$

Let $g(r) = f'(r)$ . Then $g'(r) = f''(r)$ , so we have:

$g'(r) + \frac{g(r)}{r} = 0$
$\frac{dg}{dr} = -\frac{g}{r}$
$\frac{dg}{g} = -\frac{dr}{r}$

Integrating both sides, we get:

$\int \frac{dg}{g} = -\int \frac{dr}{r}$
$\ln|g| = -\ln|r| + C_1$
$g(r) = e^{-\ln|r| + C_1} = e^{C_1} e^{-\ln|r|} = \frac{C}{r}$

So $f'(r) = \frac{C}{r}$ . Integrating again, we get:

$f(r) = \int \frac{C}{r} dr = C \ln|r| + C_2$

Thus, $r>0$ では

$$
f(r)=A\ln r+B
$$

where $A$ and $B$ are constants. ただし原点 $r=0$ まで含む領域で $z=f(r)$ が $C^2$ 級かつ調和であることを要求する場合、 $\ln r$ は原点で発散するため $A=0$ でなければならず、解は定数関数 $f(r)=B$ に限られる。
