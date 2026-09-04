---
sidebar_label: "2017年8月実施 数2 [2]"
tags:
  - Nagoya-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2017年8月実施 数2 [2]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

非線形常微分方程式

$$
\frac{d^2y}{dt^2} - c\left(\frac{dy}{dt}\right)^2 + g = 0 \quad (t \geq 0)
$$

を考える。ただし、 $c$ および $g$ は正定数である。

1) $v(t) = \frac{dy}{dt}$ として、 $t=0$ のときの条件 $v(0) = 0$ のもとで $v(t)$ の微分方程式を解け。 $t \to \infty$ での $v(\infty)$ の値を求めよ。

2) $t=0$ のときの条件 $y(0) = h(>0)$ のもとで $y(t)$ の微分方程式を解け。

3) 解 $y(t)$ を $t-y$ 平面上に図示せよ。 $t \to \infty$ で解が漸近する直線とその傾き, 切片の値を明記せよ。

### 题目描述

考察非线性常微分方程

$$
\frac{d^2y}{dt^2}
-c\left(\frac{dy}{dt}\right)^2+g=0,
\qquad t\ge0,
$$

其中 $c,g$ 均为正常数。

1. 令 $v(t)=\dfrac{dy}{dt}$，在初始条件 $v(0)=0$ 下求解 $v(t)$ 所满足的微分方程，并求

   $$
   v(\infty)=\lim_{t\to\infty}v(t);
   $$

2. 在初始条件 $y(0)=h$（$h>0$）下求解 $y(t)$；
3. 在 $t$–$y$ 平面上画出解 $y(t)$，并明确写出 $t\to\infty$ 时解所趋近的渐近直线，以及该直线的斜率和截距。

## **Kai**

1) Let $v(t) = \frac{dy}{dt}$ . Then $\frac{d^2y}{dt^2} = \frac{dv}{dt}$ . The equation becomes

$$
\frac{dv}{dt} - cv^2 + g = 0
$$

$$
\frac{dv}{dt} = cv^2 - g
$$

初期値 $v(0)=0$ に合う枝は

$$
\boxed{v(t)=-\sqrt{\frac gc}\,
\tanh(\sqrt{cg}\,t)}
$$

である。実際、

$$
v'=-g\,\operatorname{sech}^2(\sqrt{cg}\,t)
=cv^2-g
$$

かつ $v(0)=0$ である。したがって

$$
\boxed{\lim_{t\to\infty}v(t)=-\sqrt{\frac gc}}.
$$

2) $v=y'$ を積分すると

$$
y(t)
=h-\sqrt{\frac gc}\int_0^t
\tanh(\sqrt{cg}\,s)\,ds
=\boxed{h-\frac1c\log\cosh(\sqrt{cg}\,t)}.
$$

この式は $y(0)=h$ を満たし、二回微分すれば元の方程式へ直接戻る。

3) $t\ge0$ で $y'(t)\le0$ 、 $y''(t)=-g\,\operatorname{sech}^2(\sqrt{cg}\,t)<0$ なので、グラフは $(0,h)$ から水平な接線で出発し、上に凸のまま減少する。また

$$
\log\cosh(\sqrt{cg}\,t)
=\sqrt{cg}\,t-\log2+o(1)
$$

より、漸近直線は

$$
\boxed{
y=-\sqrt{\frac gc}\,t+h+\frac{\log2}{c}
}.
$$

その傾きは $-\sqrt{g/c}$ 、切片は $h+(\log2)/c$ である。
