---
sidebar_label: "2021年7月実施 数理基礎 問題A"
tags:
  - Waseda-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Differentiation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年7月実施 数理基礎 問題A

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語

#### 小問A2

マクローリン展開 (Maclaurin series)

$$
f(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots
$$

を用いて、次の極限 (limit) を求めよ。

$$
\lim_{x \to 0} \frac{1}{x^3} \left\{\log_e(1 + \sin x) - x + \frac{x^2}{2}\right\}
$$

#### 小問A3

$z = f(r), r = \sqrt{x^2 + y^2}$ とするとき,

$$
\frac{\partial^2 z}{\partial x^2} + \frac{\partial^2 z}{\partial y^2} = 0
$$

を満たすような関数 (function) $f(r)$ を求めよ。

### 题目描述

#### 小问A2

使用麦克劳林展开

$$
f(x)=f(0)+\frac{f'(0)}{1!}x+\frac{f''(0)}{2!}x^2
+\frac{f'''(0)}{3!}x^3+\cdots
$$

求极限

$$
\lim_{x\to0}\frac1{x^3}
\left\{\log_e(1+\sin x)-x+\frac{x^2}{2}\right\}.
$$

#### 小问A3

设

$$
z=f(r),\qquad r=\sqrt{x^2+y^2}.
$$

求使

$$
\frac{\partial^2z}{\partial x^2}
+\frac{\partial^2z}{\partial y^2}=0
$$

成立的函数 $f(r)$。先求 $r>0$ 上的径向通解，并另行讨论若要求 $z$ 在原点也为 $C^2$ 调和函数时所受的限制。

## **Kai**

### 小問A2

Let $f(x) = \log_e(1 + \sin x)$ .
Using Maclaurin series expansion:

$$
\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots
$$

$$
\log_e(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots
$$

Therefore,

$$
\log_e(1+\sin x) = \sin x - \frac{(\sin x)^2}{2} + \frac{(\sin x)^3}{3} - \dots
$$

$$
\log_e(1+\sin x) = (x - \frac{x^3}{6} + \dots) - \frac{1}{2}(x - \frac{x^3}{6} + \dots)^2 + \frac{1}{3}(x - \frac{x^3}{6} + \dots)^3 - \dots
$$

$$
\log_e(1+\sin x) = x - \frac{x^3}{6} - \frac{1}{2}(x^2 - \frac{x^4}{3} + \dots) + \frac{1}{3}(x^3 - \dots) - \dots
$$

$$
\log_e(1+\sin x) = x - \frac{x^2}{2} - \frac{x^3}{6} + \frac{x^3}{3} + O(x^4) = x - \frac{x^2}{2} + \frac{x^3}{6} + O(x^4)
$$

$$
\log_e(1 + \sin x) - x + \frac{x^2}{2} = x - \frac{x^2}{2} + \frac{x^3}{6} - x + \frac{x^2}{2} + O(x^4) = \frac{x^3}{6} + O(x^4)
$$

$$
\lim_{x \to 0} \frac{1}{x^3} \left\{\log_e(1 + \sin x) - x + \frac{x^2}{2}\right\} = \lim_{x \to 0} \frac{1}{x^3} \left(\frac{x^3}{6} + O(x^4)\right) = \frac{1}{6}
$$

### 小問A3

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

For $r>0$, multiply the equation by $r$:

$$
r g'(r)+g(r)=\frac{d}{dr}(rg(r))=0.
$$

Hence $rg(r)=C$, where $C$ is any real constant, including zero. Thus $g(r)=C/r$; this method retains the constant solutions without dividing by $g$.

So $f'(r) = \frac{C}{r}$ . Integrating again, we get:

$f(r) = \int \frac{C}{r} dr = C \ln|r| + C_2$

Thus, $r>0$ では

$$
f(r)=A\ln r+B
$$

where $A$ and $B$ are constants. ただし原点 $r=0$ まで含む領域で $z=f(r)$ が $C^2$ 級かつ調和であることを要求する場合、 $\ln r$ は原点で発散するため $A=0$ でなければならず、解は定数関数 $f(r)=B$ に限られる。
