---
sidebar_label: "2019年8月実施 微积分"
tags:
  - Meiji-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Integration
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2019年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$C^2$ 級の関数 $f: (0, \infty) \to \mathbb{R}$ に対して、関数 $u$ を

$$
u(x, y, z) = f(\sqrt{x^2 + y^2 + z^2}) \quad ((x, y, z) \neq (0, 0, 0))
$$

で定めるとき、以下の問いに答えよ。

(1) $\frac{\partial u}{\partial x}$ を $f$ を用いて表せ。

(2) $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2}$ を $f$ を用いて表せ。

(3) $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} = 0$ が成り立つならば、ある定数 $C_1, C_2$ を用いて

$$
u(x, y, z) = \frac{C_1}{\sqrt{x^2 + y^2 + z^2}} + C_2
$$

と表されることを示せ。

(4) 原点中心の半径1の球を $\Omega$ とするとき、次の積分の値を計算せよ。

$$
I = \iiint_{\Omega} \frac{dx dy dz}{\sqrt{x^2 + y^2 + z^2}}
$$

### 题目描述

设 $f:(0,\infty)\to\mathbb{R}$ 为 $C^2$ 类函数，并对 $(x,y,z)\neq(0,0,0)$ 定义

$$
u(x,y,z)=f\!\left(\sqrt{x^2+y^2+z^2}\right).
$$

回答下列问题。

(1) 用 $f$ 表示 $\dfrac{\partial u}{\partial x}$。

(2) 用 $f$ 表示

$$
\frac{\partial^2u}{\partial x^2}
+\frac{\partial^2u}{\partial y^2}
+\frac{\partial^2u}{\partial z^2}.
$$

(3) 若

$$
\frac{\partial^2u}{\partial x^2}
+\frac{\partial^2u}{\partial y^2}
+\frac{\partial^2u}{\partial z^2}=0,
$$

证明存在常数 $C_1,C_2$，使

$$
u(x,y,z)=\frac{C_1}{\sqrt{x^2+y^2+z^2}}+C_2.
$$

(4) 设 $\Omega$ 为以原点为球心、半径为 $1$ 的球体，计算

$$
I=\iiint_{\Omega}\frac{dx\,dy\,dz}{\sqrt{x^2+y^2+z^2}}.
$$

## **Kai**

(1) Let $r = \sqrt{x^2 + y^2 + z^2}$ . Then $u(x, y, z) = f(r)$ .

$$
\frac{\partial u}{\partial x} = \frac{\partial f}{\partial r} \frac{\partial r}{\partial x} = f'(r) \cdot \frac{x}{\sqrt{x^2 + y^2 + z^2}} = \frac{x}{r}f'(r)
$$

(2)

$$
\frac{\partial^2 u}{\partial x^2} = \frac{\partial}{\partial x} \left( \frac{x}{r} f'(r) \right) = \frac{1}{r} f'(r) + x \frac{\partial}{\partial x} \left( \frac{f'(r)}{r} \right) = \frac{1}{r} f'(r) + x \left( \frac{f''(r) \frac{x}{r} r - f'(r) \frac{x}{r}}{r^2} \right) = \frac{1}{r} f'(r) + \frac{x^2}{r^2} f''(r) - \frac{x^2}{r^3} f'(r)
$$

Similarly,

$$
\frac{\partial^2 u}{\partial y^2} = \frac{1}{r} f'(r) + \frac{y^2}{r^2} f''(r) - \frac{y^2}{r^3} f'(r)
$$

$$
\frac{\partial^2 u}{\partial z^2} = \frac{1}{r} f'(r) + \frac{z^2}{r^2} f''(r) - \frac{z^2}{r^3} f'(r)
$$

Therefore,

$$
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} = \frac{3}{r} f'(r) + \frac{x^2 + y^2 + z^2}{r^2} f''(r) - \frac{x^2 + y^2 + z^2}{r^3} f'(r) = \frac{3}{r} f'(r) + f''(r) - \frac{1}{r} f'(r) = f''(r) + \frac{2}{r} f'(r)
$$

(3) If $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} = 0$ , then $f''(r) + \frac{2}{r} f'(r) = 0$ . Let $g(r) = f'(r)$ . Then $g'(r) + \frac{2}{r} g(r) = 0$ .

$$
\frac{g'(r)}{g(r)} = -\frac{2}{r} \Rightarrow \ln |g(r)| = -2 \ln |r| + C = \ln \frac{1}{r^2} + C \Rightarrow g(r) = f'(r) = \frac{C_1}{r^2}
$$

Thus, $f(r) = \int \frac{C_1}{r^2} dr = -\frac{C_1}{r} + C_2$ . Therefore, $u(x, y, z) = -\frac{C_1}{\sqrt{x^2 + y^2 + z^2}} + C_2 = \frac{C_1'}{\sqrt{x^2 + y^2 + z^2}} + C_2$ for some constant $C_1' = -C_1$ .

(4) In spherical coordinates, $x = \rho \sin \phi \cos \theta$ , $y = \rho \sin \phi \sin \theta$ , $z = \rho \cos \phi$ , where $0 \leq \rho \leq 1$ , $0 \leq \phi \leq \pi$ , $0 \leq \theta \leq 2\pi$ . Then $x^2 + y^2 + z^2 = \rho^2$ , and $dx dy dz = \rho^2 \sin \phi d\rho d\phi d\theta$ .

$$
I = \iiint_{\Omega} \frac{dx dy dz}{\sqrt{x^2 + y^2 + z^2}} = \int_0^1 \int_0^{\pi} \int_0^{2\pi} \frac{\rho^2 \sin \phi}{\sqrt{\rho^2}} d\theta d\phi d\rho = \int_0^1 \int_0^{\pi} \int_0^{2\pi} \rho \sin \phi d\theta d\phi d\rho
$$

$$
= \int_0^1 \rho d\rho \int_0^{\pi} \sin \phi d\phi \int_0^{2\pi} d\theta = \left[ \frac{\rho^2}{2} \right]_0^1 \cdot [-\cos \phi]_0^{\pi} \cdot [\theta]_0^{2\pi} = \frac{1}{2} \cdot (1 + 1) \cdot 2\pi = 2\pi
$$
