---
sidebar_label: "2021年8月実施 微积分"
tags:
  - Meiji-University
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Integration
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2021年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

(1) 積分 $\int_{-\sqrt{3}}^{\sqrt{3}} \frac{dx}{x^2+1}$ を計算せよ.

次の不等式をすべて満たす点の集合として定まる $xy$ 平面の集合を $D$ とする.

$\begin{cases} x > 0 \\ 1 \leq x^2 - y^2 \leq 2 \\ -\frac{1}{\sqrt{3}}x \leq y \leq \frac{1}{\sqrt{3}}x \end{cases}$

(2) 集合 $D$ を図示せよ.

(3) 集合 $D$ において $\begin{cases} u = x^2 - y^2 \\ v = \frac{y}{x} \end{cases}$ と変数変換するとき, ヤコビ行列式 $\frac{\partial u}{\partial x} \frac{\partial v}{\partial y} - \frac{\partial u}{\partial y} \frac{\partial v}{\partial x}$ を $x, y$ で表せ. またこの変数変換によって, 集合 $D$ は, 次の集合 $E$ と 1対1に対応することを示せ.

$E = \{(u, v) | 1 \leq u \leq 2, -\frac{1}{\sqrt{3}} \leq v \leq \frac{1}{\sqrt{3}} \}.$

(4) $D$ 上の重積分 $\iint_D \frac{1}{x^2 + y^2} dxdy$ を計算せよ.

### 题目描述

(1) 计算积分

$$
\int_{-\sqrt{3}}^{\sqrt{3}}\frac{dx}{x^2+1}.
$$

设 $D$ 为 $xy$ 平面上同时满足下列全部不等式的点所组成的集合：

$$
\begin{cases}
x>0,\\
1\leq x^2-y^2\leq2,\\
-\dfrac{1}{\sqrt{3}}x\leq y\leq\dfrac{1}{\sqrt{3}}x.
\end{cases}
$$

(2) 画出集合 $D$。

(3) 在 $D$ 上作变量变换

$$
\begin{cases}
u=x^2-y^2,\\
v=\dfrac{y}{x}.
\end{cases}
$$

用 $x,y$ 表示 Jacobian 行列式

$$
\frac{\partial u}{\partial x}\frac{\partial v}{\partial y}
-\frac{\partial u}{\partial y}\frac{\partial v}{\partial x}.
$$

并证明该变量变换使集合 $D$ 与下列集合 $E$ 一一对应：

$$
E=\left\{(u,v)\,\middle|\,
1\leq u\leq2,\;
-\frac{1}{\sqrt{3}}\leq v\leq\frac{1}{\sqrt{3}}
\right\}.
$$

(4) 计算 $D$ 上的二重积分

$$
\iint_D\frac{1}{x^2+y^2}\,dx\,dy.
$$

## **Kai**

(1) $\int_{-\sqrt{3}}^{\sqrt{3}} \frac{dx}{x^2+1} = [\arctan x]_{-\sqrt{3}}^{\sqrt{3}} = \arctan(\sqrt{3}) - \arctan(-\sqrt{3}) = \frac{\pi}{3} - (-\frac{\pi}{3}) = \frac{2\pi}{3}$

(2) 集合 D は双曲線 $x^2 - y^2 = 1$ と $x^2 - y^2 = 2$ , および直線 $y = \frac{x}{\sqrt{3}}$ と $y = -\frac{x}{\sqrt{3}}$ で囲まれた領域のうち、 $x > 0$ の部分.

(3) $\frac{\partial u}{\partial x} = 2x, \frac{\partial u}{\partial y} = -2y, \frac{\partial v}{\partial x} = -\frac{y}{x^2}, \frac{\partial v}{\partial y} = \frac{1}{x}$

$\frac{\partial u}{\partial x} \frac{\partial v}{\partial y} - \frac{\partial u}{\partial y} \frac{\partial v}{\partial x} = 2x \cdot \frac{1}{x} - (-2y) \cdot (-\frac{y}{x^2}) = 2 - \frac{2y^2}{x^2} = 2(1 - \frac{y^2}{x^2}) = 2(1 - v^2)$

さらに、 $(u,v)\in E$ なら $|v|\leq1/\sqrt3<1$ かつ $u>0$ なので、

$$
x=\sqrt{\frac{u}{1-v^2}}>0,\qquad
y=v\sqrt{\frac{u}{1-v^2}}
$$

と一意に復元できる。この $(x,y)$ は $x^2-y^2=u$ 、 $y/x=v$ を満たし、従って $D$ に属する。逆に $D$ の各点からは定義により一意な $(u,v)\in E$ が得られるので、この変数変換は $D$ と $E$ の間の1対1対応である。

(4) $\iint_D \frac{1}{x^2 + y^2} dxdy = \iint_E \frac{1}{x^2 + y^2} |J| dudv$ , ここで $J$ はヤコビアン.

$u = x^2 - y^2, v = \frac{y}{x}$ より, $x^2 = \frac{u}{1 - v^2}, y^2 = \frac{uv^2}{1 - v^2}$ , $x^2 + y^2 = \frac{u}{1 - v^2} + \frac{uv^2}{1 - v^2} = \frac{u(1 + v^2)}{1 - v^2}$

$\frac{\partial(u, v)}{\partial(x, y)} = 2(1 - v^2)$ , より $\frac{\partial(x, y)}{\partial(u, v)} = \frac{1}{2(1 - v^2)}$

$\iint_D \frac{1}{x^2 + y^2} dxdy = \int_{-\frac{1}{\sqrt{3}}}^{\frac{1}{\sqrt{3}}} \int_1^2 \frac{1-v^2}{u(1+v^2)} \frac{1}{2(1-v^2)}dudv = \int_{-\frac{1}{\sqrt{3}}}^{\frac{1}{\sqrt{3}}} \int_1^2 \frac{1}{2u(1+v^2)}dudv = \int_{-\frac{1}{\sqrt{3}}}^{\frac{1}{\sqrt{3}}} \frac{1}{2(1+v^2)} [\ln u]_1^2 dv = \ln 2 \int_0^{\frac{1}{\sqrt{3}}} \frac{1}{1+v^2} dv = \ln 2 [\arctan v]_0^{\frac{1}{\sqrt{3}}} = \ln 2 \arctan \frac{1}{\sqrt{3}} = \frac{\pi}{6} \ln 2$ .
