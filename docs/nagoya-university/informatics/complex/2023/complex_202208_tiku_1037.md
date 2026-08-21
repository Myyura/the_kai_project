---
sidebar_label: "2022年8月実施 微积分"
tags:
  - Nagoya-University
  - Mathematics.Calculus.Integration
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2022年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$\theta$ によりパラメータ表示された、次の曲線について考えよう。ただし、 $a, b > 0$ とする。

$$
x = ae^{-b\theta} \cos\theta, \quad y = ae^{-b\theta} \sin\theta
$$

1) $xy$ 平面上に、 $0 \leq \theta \leq 4\pi$ での $(x, y)$ の軌跡の概形を描け。

2) 原点 $(0, 0)$ と $(x, y)$ を結ぶ線分の長さを $r$ とする。 $r$ と $\theta$ の関係式を求めよ。

3) $\theta$ が $\alpha$ から $\beta ( > \alpha)$ まで変化するときに、原点 $(0, 0)$ と $(x, y)$ を結ぶ線分が掃く部分の面積を $S_{\alpha, \beta}$ とする。微小角 $d\theta$ に対して、 $S_{\theta, \theta+d\theta} = \frac{1}{2}r^2 d\theta$ と表されることを示せ。

4) $S_{0, \pi}$ を求めよ。

5) $\theta$ が $\alpha$ から $\beta ( > \alpha)$ まで変化するときの $(x, y)$ の軌跡の長さを $L_{\alpha, \beta}$ とする。微小角 $d\theta$ に対して、 $L_{\theta, \theta+d\theta} = \sqrt{a^2(b^2 + 1)} e^{-b\theta} d\theta$ と表されることを示せ。

6) $L_{0, \infty}$ を求めよ。

### 题目描述

考察由 $\theta$ 参数化的曲线

$$
x=ae^{-b\theta}\cos\theta,\qquad
y=ae^{-b\theta}\sin\theta,
$$

其中 $a,b>0$。

1. 在 $xy$ 平面上画出 $0\le\theta\le4\pi$ 时点 $(x,y)$ 的轨迹概形；
2. 以 $r$ 表示原点 $(0,0)$ 与 $(x,y)$ 之间线段的长度，求 $r$ 与 $\theta$ 的关系；
3. 当 $\theta$ 从 $\alpha$ 变化到 $\beta$（$\beta>\alpha$）时，以 $S_{\alpha,\beta}$ 表示原点到 $(x,y)$ 的线段扫过的面积。证明对微小角 $d\theta$，

   $$
   S_{\theta,\theta+d\theta}
   =\frac12r^2\,d\theta;
   $$

4. 求 $S_{0,\pi}$；
5. 当 $\theta$ 从 $\alpha$ 变化到 $\beta$（$\beta>\alpha$）时，以 $L_{\alpha,\beta}$ 表示 $(x,y)$ 轨迹的长度。证明对微小角 $d\theta$，

   $$
   L_{\theta,\theta+d\theta}
   =\sqrt{a^2(b^2+1)}\,e^{-b\theta}\,d\theta;
   $$

6. 求 $L_{0,\infty}$。

## **Kai**

1) 軌跡は原点に向かって渦巻くような形になる。 $a, b > 0$ なので、 $\theta$ が大きくなるにつれて、 $e^{-b\theta}$ の値は小さくなる。

2) $r = \sqrt{x^2 + y^2} = \sqrt{(ae^{-b\theta}\cos\theta)^2 + (ae^{-b\theta}\sin\theta)^2} = \sqrt{a^2e^{-2b\theta}(\cos^2\theta + \sin^2\theta)} = ae^{-b\theta}$ 。したがって、 $r = ae^{-b\theta}$ 。

3) 扇形の面積は $\frac{1}{2}r^2 d\theta$ で近似できる。 $S_{\theta, \theta + d\theta} \approx \frac{1}{2}r^2 d\theta$ 。

4) $S_{0, \pi} = \int_{0}^{\pi} \frac{1}{2}r^2 d\theta = \frac{1}{2} \int_{0}^{\pi} (ae^{-b\theta})^2 d\theta = \frac{a^2}{2} \int_{0}^{\pi} e^{-2b\theta} d\theta = \frac{a^2}{2} \left[ \frac{e^{-2b\theta}}{-2b} \right]_0^{\pi} = \frac{a^2}{2} \left( \frac{e^{-2b\pi}}{-2b} - \frac{1}{-2b} \right) = \frac{a^2}{4b}(1 - e^{-2b\pi})$

5) 弧長は $L_{\theta, \theta+d\theta} = \sqrt{(dx)^2 + (dy)^2}$ で近似できる。
$\frac{dx}{d\theta} = -bae^{-b\theta}\cos\theta - ae^{-b\theta}\sin\theta = -ae^{-b\theta}(b\cos\theta + \sin\theta)$ 。
$\frac{dy}{d\theta} = -bae^{-b\theta}\sin\theta + ae^{-b\theta}\cos\theta = ae^{-b\theta}(\cos\theta - b\sin\theta)$ 。
$(\frac{dx}{d\theta})^2 + (\frac{dy}{d\theta})^2 = a^2e^{-2b\theta}(b^2\cos^2\theta + 2b\cos\theta\sin\theta + \sin^2\theta + \cos^2\theta - 2b\sin\theta\cos\theta + b^2\sin^2\theta) = a^2e^{-2b\theta}(b^2 + 1)$ 。
$L_{\theta, \theta+d\theta} = \sqrt{a^2(b^2+1)e^{-2b\theta}(d\theta)^2} = \sqrt{a^2(b^2+1)}e^{-b\theta} d\theta$ 。

6) $L_{0, \infty} = \int_{0}^{\infty} \sqrt{a^2(b^2+1)} e^{-b\theta} d\theta = a\sqrt{b^2+1} \int_{0}^{\infty} e^{-b\theta} d\theta = a\sqrt{b^2+1} \left[ \frac{e^{-b\theta}}{-b} \right]_{0}^{\infty} = a\sqrt{b^2+1} \left( 0 - \frac{1}{-b} \right) = \frac{a\sqrt{b^2+1}}{b}$
