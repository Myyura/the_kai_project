---
sidebar_label: "2022年8月実施 数2 [2]"
tags:
  - Nagoya-University
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2022年8月実施 数2 [2]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2022/09/153686fd38b76aec8fe63b4c47663818.pdf)


以下の各問に答えよ。

1) $y' = f(y/x)$ の形の微分方程式は、 $v = y/x$ と変数変換することにより、変数分離形に帰着できることを示せ。

2) 微分方程式 $y' = \frac{x - y}{x + y}$ を解け。

### 题目描述

回答下列问题。

1. 证明形如

   $$
   y'=f\left(\frac yx\right)
   $$

   的微分方程经变量代换 $v=y/x$ 后可化为可分离变量方程；
2. 求解微分方程

   $$
   y'=\frac{x-y}{x+y}.
   $$

## **Kai**

1) On an interval with $x\ne0$, let $y = vx$ . Then $y' = v + xv'$ .  Substituting into the given differential equation, we have

$$
v + xv' = f(v)
$$

$$
xv' = f(v) - v
$$

$$
\frac{dv}{dx} = \frac{f(v) - v}{x}
$$

$$
\frac{dv}{f(v) - v} = \frac{dx}{x}
$$

This is a separable differential equation. ただし、この割り算は $f(v)-v\neq0$ の範囲で行っている。$f(v_0)=v_0$ を満たす定数 $v_0$ がある場合には、$v\equiv v_0$、すなわち $y=v_0x$ も別に解として加える必要がある。

2)  $y' = \frac{x - y}{x + y}$ . Let $y = vx$ . Then $y' = v + xv'$ .  Substituting into the given differential equation, we have

$$
v + xv' = \frac{x - vx}{x + vx} = \frac{1 - v}{1 + v}
$$

$$
xv' = \frac{1 - v}{1 + v} - v = \frac{1 - v - v - v^2}{1 + v} = \frac{1 - 2v - v^2}{1 + v}
$$

$$
\frac{dv}{dx} = \frac{1 - 2v - v^2}{x(1 + v)}
$$

$$
\frac{1 + v}{1 - 2v - v^2} dv = \frac{dx}{x}
$$

$$
\int \frac{1 + v}{1 - 2v - v^2} dv = \int \frac{dx}{x}
$$

Let $u = 1 - 2v - v^2$ . Then $du = (-2 - 2v) dv = -2(1 + v) dv$ .  So $(1 + v) dv = -\frac{1}{2} du$ .

$$
-\frac{1}{2} \int \frac{1}{u} du = \int \frac{dx}{x}
$$

$$
-\frac{1}{2} \ln |u| = \ln |x| + C
$$

$$
-\frac{1}{2} \ln |1 - 2v - v^2| = \ln |x| + C
$$

$$
\ln |1 - 2v - v^2| = -2 \ln |x| + C'
$$

$$
\ln |1 - 2 \frac{y}{x} - \frac{y^2}{x^2}| = \ln x^{-2} + C'
$$

$$
1 - 2 \frac{y}{x} - \frac{y^2}{x^2} = kx^{-2}
$$

$$
x^2 - 2xy - y^2 = k
$$

$x^2 - 2xy - y^2 = C$

なお、変数分離の際に除いた $1-2v-v^2=0$ の定数解は

$$
v=-1\pm\sqrt2,
\qquad
y=(-1\pm\sqrt2)x
$$

である。これらは上の陰関数表示で $C=0$ としたときの二つの枝に対応する。


解は $x+y\ne0$ を満たす連結な枝に制限する。この条件の下では
陰関数の微分から $y'=(x-y)/(x+y)$ が得られるため，陰関数表示は
$x=0$ を通る枝にも適用できる。ただし $(0,0)$ は元の方程式の定義域外である。
