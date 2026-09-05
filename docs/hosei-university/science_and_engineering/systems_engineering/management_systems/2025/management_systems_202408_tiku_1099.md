---
sidebar_label: "2024年8月実施 微积分"
tags:
  - Hosei-University
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Integration
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2024年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

累次积分

$$
I = \int_0^{\sqrt{3}} \left\{ \int_0^{\sqrt{3-x^2}} \log(1 + x^2 + y^2) dy \right\} dx
$$

について考える。

(1) 累次積分 $I$ を2重積分

$$
\iint_D \log(1 + x^2 + y^2) dxdy
$$

であらわすときの、積分領域 $D$ を図示せよ。

(2) 積分変数変換をして積分の値を求めよ。

### 题目描述

考虑累次积分

$$
I=\int_0^{\sqrt3}
\left\{\int_0^{\sqrt{3-x^2}}
\log(1+x^2+y^2)\,dy\right\}dx.
$$

（1）将 $I$ 写成二重积分

$$
\iint_D\log(1+x^2+y^2)\,dx\,dy
$$

时，在平面上画出积分区域 $D$。

（2）进行积分变量变换，并求 $I$ 的值。

## **Kai**

(1) 積分領域 D は $0 \leq x \leq \sqrt{3}, 0 \leq y \leq \sqrt{3-x^2}$ であり、これは $x^2 + y^2 \leq 3, x \geq 0, y \geq 0$ を満たす領域である。

つまり、中心が原点、半径が $\sqrt{3}$ の円の第一象限の部分である。

![積分領域の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hosei_university/science_and_engineering/systems_engineering/management_systems/2025/hosei-2024-quarter-disk.svg)

(2) 極座標変換 $x = r\cos\theta, y = r\sin\theta$ を行うと、 $x^2 + y^2 = r^2$ となり、積分領域は $0 \leq r \leq \sqrt{3}, 0 \leq \theta \leq \frac{\pi}{2}$ となる。

したがって、ヤコビアンは $r$ であるから、

$$
I = \iint_D \log(1 + x^2 + y^2) dxdy = \int_0^{\frac{\pi}{2}} \int_0^{\sqrt{3}} \log(1 + r^2) r dr d\theta
$$

ここで、 $t = 1 + r^2$ とおくと、 $dt = 2r dr$ より、 $r dr = \frac{1}{2} dt$ であり、 $r = 0$ のとき $t = 1$ , $r = \sqrt{3}$ のとき $t = 4$ となる。

$$
I = \int_0^{\frac{\pi}{2}} \int_1^4 \log(t) \frac{1}{2} dt d\theta = \frac{1}{2} \int_0^{\frac{\pi}{2}} d\theta \int_1^4 \log(t) dt
$$

$\int_0^{\frac{\pi}{2}} d\theta = \frac{\pi}{2}$ であり、部分積分法より、

$$
\int_1^4 \log(t) dt = [t\log(t)]_1^4 - \int_1^4 t \cdot \frac{1}{t} dt = 4\log(4) - 1\log(1) - \int_1^4 dt = 4\log(4) - [t]_1^4 = 4\log(4) - (4 - 1) = 4\log(4) - 3 = 8\log(2) - 3
$$

したがって、

$$
I = \frac{1}{2} \cdot \frac{\pi}{2} (8\log(2) - 3) = \frac{\pi}{4} (8\log(2) - 3) = \pi(2\log(2) - \frac{3}{4})
$$

よって、 $I = \pi(2\log 2 - \frac{3}{4})$
