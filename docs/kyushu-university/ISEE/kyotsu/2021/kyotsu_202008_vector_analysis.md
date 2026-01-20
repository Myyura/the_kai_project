---
sidebar_label: "2020年8月実施 ベクトル解析"
tags:
  - Kyushu-University
  - Vector-Calculus
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2020年8月実施 ベクトル解析

## **Author**
Yu

## **Description**
直交座標系において, $x,y,z$ 軸方向の単位ベクトルをそれぞれ $\mathbf{i},\mathbf{j},\mathbf{k}$ とする。次の各問に答えよ。

(1) $3$点 $(2,-6,2),(1,-10,-1)$ および $(-1,2,3)$ が決定する平面と点 $(2,-2,-2)$ との距離を求めよ。

(2) ベクトル場 $\mathbf{F}$ を $\mathbf{F} = \big(-\frac{xy}{4}\big)\mathbf{i} + (z - x)\mathbf{j} + (x + y)\mathbf{k}$ とする。曲線 $C:x = \frac{y^2}{8},y = -z$ に沿って, $(0,0,0)$ から $\big(\frac{9}{2},6,-6\big)$ までの線積分 $\int_{C} \mathbf{F} \cdot d \mathbf{r}$ を計算せよ。

## **Kai**
### (1)

$$
\begin{aligned}
\mathbf{v}_1 = \langle -1,-4,-3 &\rangle \quad \mathbf{v}_2 = \langle -3,8,1 \rangle \\
\mathbf{v}_1 \times \mathbf{v}_2&= \langle 20,10,-20 \rangle \\
\mathbf{n} &= \langle 2,1,-2 \rangle \\
2x + y &- 2z + d = 0\\
(2,-6,2)&\text{を代入して}, d=6\\
2x + y &- 2z + 6 = 0\\
\end{aligned} 
$$

$$
D = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}} = 4
$$

### (2)

$$
\begin{aligned}
\mathbf{F} = \langle -\frac{y^3}{32},&-y-\frac{y^2}{8},y + \frac{y^2}{8} \rangle \\
\mathbf{r} = \frac{y^2}{8}\mathbf{i} + y\mathbf{j} &- y\mathbf{k} \quad (0 \le y \le 6)\\
d\mathbf{r} = &\langle \frac{y}{4},1,-1 \rangle dy\\
\mathbf{F} \times d\mathbf{r} = \langle -\frac{y^3}{32},-y-\frac{y^2}{8},y + \frac{y^2}{8} \rangle &\times \langle \frac{y}{4},1,-1 \rangle dy = \langle 0,\frac{y^2}{4},\frac{y^2}{4} \rangle dy \\
\int_{C}\mathbf{F} \times d\mathbf{r} = \int_0^6 &\langle 0,\frac{y^2}{4},\frac{y^2}{4} \rangle dy = \langle 0,18,18 \rangle
\end{aligned}
$$