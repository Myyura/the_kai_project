---
sidebar_label: "2024年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Differentiation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2024年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$y = f(x), x = \sqrt{s^2 + t^2 + u^2}$ とするとき、二階偏微分の和 $\frac{\partial^2 y}{\partial s^2} + \frac{\partial^2 y}{\partial t^2} + \frac{\partial^2 y}{\partial u^2}$ を $x, f'(x), f''(x)$ を用いて表せ。

### 题目描述

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

## **Kai**

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
