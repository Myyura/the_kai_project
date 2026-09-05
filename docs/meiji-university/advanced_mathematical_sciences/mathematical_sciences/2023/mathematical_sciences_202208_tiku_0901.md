---
sidebar_label: "2022年8月実施 微积分"
tags:
  - Meiji-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Extrema
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2022年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[I] 関数

$$
f(x) = e^x - \frac{1}{2}x^2 - x - 1
$$

について、極限

$$
\lim_{x \to 0} \frac{f(x)}{x^k}
$$

が正の一定値に収束するような整数kと、そのときの極限値を求めよ。

[II] xy 平面の領域Dを

$$
D = \{(x, y) \in \mathbb{R}^2 | 0 \leq x \leq 2\pi, 0 \leq y \leq 2\pi\}
$$

で定める。Dで定義された2変数関数

$$
f(x, y) = \sin x + \sin y + \sin(x+y)
$$

について、次の問に答えよ。

(1) 関数g(t)を

$$
g(t) = f(t,t)
$$

で定める。関数g(t) の $0 \leq t \leq 2\pi$ における増減を調べ、グラフの概形を描け。

(2) 偏導関数

$$
\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}
$$

をそれぞれ求めよ。

(3) 関数 f(x,y) の値が最大、最小になる (x,y) $\in$ Dおよび最大値、最小値を求めよ。

(4)重積分

$$
\iint_D f(x, y)^2 dxdy
$$

を求めよ。

### 题目描述

I. 对函数

$$
f(x)=e^x-\frac12x^2-x-1,
$$

求使极限

$$
\lim_{x\to0}\frac{f(x)}{x^k}
$$

收敛到正常数的整数 $k$，并求此时的极限值。

II. 定义 $xy$ 平面上的区域

$$
D=\left\{(x,y)\in\mathbb{R}^2\,\middle|\,
0\leq x\leq2\pi,\;
0\leq y\leq2\pi
\right\}.
$$

对于定义在 $D$ 上的二元函数

$$
f(x,y)=\sin x+\sin y+\sin(x+y),
$$

回答下列问题。

(1) 定义

$$
g(t)=f(t,t).
$$

研究 $g(t)$ 在 $0\leq t\leq2\pi$ 上的增减性，并画出其图像的大致形状。

(2) 分别求偏导数

$$
\frac{\partial f}{\partial x},
\qquad
\frac{\partial f}{\partial y}.
$$

(3) 求使 $f(x,y)$ 取得最大值、最小值的全部 $(x,y)\in D$，以及相应的最大值、最小值。

(4) 计算二重积分

$$
\iint_D f(x,y)^2\,dx\,dy.
$$

## **Kai**

解答：

[I]  求  $\lim_{x \to 0} \frac{f(x)}{x^k}$ ， 其中 $f(x) = e^x - \frac{1}{2}x^2 - x - 1$ ，求k和极限值。

泰勒展开： $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + O(x^5)$ ，

那么， $f(x) = (1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \frac{x^4}{24} + O(x^5)) - \frac{1}{2}x^2 - x - 1 = \frac{x^3}{6} + \frac{x^4}{24} + O(x^5)$ .

如果 $k=3$ ，那么 $\lim_{x \to 0} \frac{f(x)}{x^3} = \lim_{x \to 0} \frac{\frac{x^3}{6} + \frac{x^4}{24} + O(x^5)}{x^3} = \lim_{x \to 0} (\frac{1}{6} + \frac{x}{24} + O(x^2)) = \frac{1}{6}$ .

[II]
(1) $g(t)$ 的定义与导数计算：
$g(t) = f(t,t) = \sin t + \sin t + \sin(t+t) = 2\sin t + \sin 2t = 2\sin t (1 + \cos t)$ .

求导得：
$g'(t) = 2\cos t + 2\cos 2t = 2\cos t + 2(2\cos^2 t - 1) = 4\cos^2 t + 2\cos t - 2$
$= 2(2\cos^2 t + \cos t - 1) = 2(2\cos t - 1)(\cos t + 1)$ .

令 $g'(t) = 0$ ：
考虑到定义域 $0 \le t \le 2\pi$ ，
1) $2\cos t - 1 = 0 \implies \cos t = \frac{1}{2} \implies t = \frac{\pi}{3}, \frac{5\pi}{3}$ .
2) $\cos t + 1 = 0 \implies \cos t = -1 \implies t = \pi$ .

单调性分析：
由于对于任意实数 $t$ 都有 $(\cos t + 1) \ge 0$ ，因此 $g'(t)$ 的符号由 $(2\cos t - 1)$ 决定。

- 当 $0 \le t < \frac{\pi}{3}$ 时： $\cos t > \frac{1}{2} \implies g'(t) > 0$ (单调递增)。
- 当 $\frac{\pi}{3} < t < \frac{5\pi}{3}$ (且 $t \ne \pi$ ) 时： $\cos t < \frac{1}{2} \implies g'(t) < 0$ (单调递减)。
- 当 $\frac{5\pi}{3} < t \le 2\pi$ 时： $\cos t > \frac{1}{2} \implies g'(t) > 0$ (单调递增)。

注意：在 $t=\pi$ 处虽然 $g'(t)=0$ ，但导数符号未发生改变（保持为负），因此 $g(t)$ 在 $[\frac{\pi}{3}, \frac{5\pi}{3}]$ 区间内持续单调递减。

增减表如下：

$$
\begin{array}{c|ccccccccc}
t
& 0 & \cdots & \frac{\pi}{3} & \cdots & \pi & \cdots & \frac{5\pi}{3} & \cdots & 2\pi \\ \hline
g'(t)
& + & + & 0 & - & 0 & - & 0 & + & + \\ \hline
g(t)
& 0 & \nearrow & \frac{3\sqrt{3}}{2} & \searrow & 0 & \searrow & -\frac{3\sqrt{3}}{2} & \nearrow & 0
\end{array}
$$

结论：
$g(t)$ 在区间 $[0, \frac{\pi}{3}]$ 和 $[\frac{5\pi}{3}, 2\pi]$ 上单调递增。
$g(t)$ 在区间 $[\frac{\pi}{3}, \frac{5\pi}{3}]$ 上单调递减。
极大值为 $\frac{3\sqrt{3}}{2}$ (当 $t = \frac{\pi}{3}$ 时)。
极小值为 $-\frac{3\sqrt{3}}{2}$ (当 $t = \frac{5\pi}{3}$ 时)。

![関数 g の概形](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/meiji_university/advanced_mathematical_sciences/mathematical_sciences/2023/meiji-2022-trigonometric-graph.svg)

(2)  $\frac{\partial f}{\partial x} = \cos x + \cos(x+y)$ ,  $\frac{\partial f}{\partial y} = \cos y + \cos(x+y)$ .

(3) 求 $f(x, y)$ 的最大值和最小值。

第一步：求驻点
由偏导数方程组：

$$
\begin{cases}
\frac{\partial f}{\partial x} = \cos x + \cos(x+y) = 0 \quad \cdots (1) \\
\frac{\partial f}{\partial y} = \cos y + \cos(x+y) = 0 \quad \cdots (2)
\end{cases}
$$

(1) - (2) 得 $\cos x - \cos y = 0$ ，即 $\cos x = \cos y$ 。
在区域 $0 \le x, y \le 2\pi$ 内，这意味 $x = y$ 或者 $y = 2\pi - x$ 。

情况 1：当 $x = y$ 时
代入 (1) 式得：
$\cos x + \cos 2x = 0 \implies \cos x + (2\cos^2 x - 1) = 0$
$2\cos^2 x + \cos x - 1 = 0 \implies (2\cos x - 1)(\cos x + 1) = 0$
解得 $\cos x = \frac{1}{2}$ 或 $\cos x = -1$ 。
对应的点为： $(\frac{\pi}{3}, \frac{\pi}{3})$ ， $(\frac{5\pi}{3}, \frac{5\pi}{3})$ ， $(\pi, \pi)$ 。

情况 2：当 $y = 2\pi - x$ 时
代入 (1) 式得：
$\cos x + \cos(2\pi) = 0 \implies \cos x + 1 = 0 \implies x = \pi$ 。
此时 $y = \pi$ ，得到的点 $(\pi, \pi)$ 与情况 1 重合。

第二步：比较函数值
计算驻点处的函数值：
1. $f(\frac{\pi}{3}, \frac{\pi}{3}) = \sin\frac{\pi}{3} + \sin\frac{\pi}{3} + \sin\frac{2\pi}{3} = \frac{\sqrt{3}}{2} + \frac{\sqrt{3}}{2} + \frac{\sqrt{3}}{2} = \frac{3\sqrt{3}}{2}$
2. $f(\frac{5\pi}{3}, \frac{5\pi}{3}) = \sin\frac{5\pi}{3} + \sin\frac{5\pi}{3} + \sin\frac{10\pi}{3} = -\frac{\sqrt{3}}{2} - \frac{\sqrt{3}}{2} - \frac{\sqrt{3}}{2} = -\frac{3\sqrt{3}}{2}$
3. $f(\pi, \pi) = \sin\pi + \sin\pi + \sin 2\pi = 0$

此外，考察边界情况（例如 $x=0$ 或 $y=0$ ）：
$f(0, y) = \sin y + \sin y = 2\sin y$ ，其最大值为 2，最小值为 -2。
由于 $\frac{3\sqrt{3}}{2} \approx 2.598 > 2$ ，且 $-\frac{3\sqrt{3}}{2} \approx -2.598 < -2$ 。

结论：
最大值为 $\frac{3\sqrt{3}}{2}$ ，在点 $(\frac{\pi}{3}, \frac{\pi}{3})$ 处取得。
最小值为 $-\frac{3\sqrt{3}}{2}$ ，在点 $(\frac{5\pi}{3}, \frac{5\pi}{3})$ 处取得。

(4) 计算二重积分 $\iint_D f(x, y)^2 \, dxdy$ 。

步骤 1：展开被积函数

$$
\begin{aligned}
f(x,y)^2 &= (\sin x + \sin y + \sin(x+y))^2 \\
&= \underbrace{\sin^2 x}_{\text{i}} + \underbrace{\sin^2 y}_{\text{ii}} + \underbrace{\sin^2(x+y)}_{\text{iii}} \\
&\quad + \underbrace{2\sin x \sin y}_{\text{iv}} + \underbrace{2\sin x \sin(x+y)}_{\text{v}} + \underbrace{2\sin y \sin(x+y)}_{\text{vi}}
\end{aligned}
$$

利用积分区域 $D = [0, 2\pi] \times [0, 2\pi]$ 的周期性，逐项计算。

步骤 2：计算平方项 i, ii, iii
利用公式 $\int_0^{2\pi} \sin^2 \theta \, d\theta = \int_0^{2\pi} \frac{1-\cos 2\theta}{2} \, d\theta = \pi$ 。

项 i： $\iint_D \sin^2 x \, dxdy = \int_0^{2\pi} dy \int_0^{2\pi} \sin^2 x \, dx = 2\pi \cdot \pi = 2\pi^2$ 。

项 ii： 同理， $\iint_D \sin^2 y \, dxdy = 2\pi^2$ 。

项 iii： $\iint_D \sin^2(x+y) \, dxdy$ 。
令 $u=x+y$ ，利用周期性可知在一整个周期内积分值相同：

$$
\iint_D \frac{1 - \cos(2x+2y)}{2} \, dxdy = \frac{1}{2} \iint_D 1 \, dxdy - \frac{1}{2} \iint_D \cos(2x+2y) \, dxdy
$$

第一部分为 $\frac{1}{2} \times (2\pi)^2 = 2\pi^2$ 。
第二部分由于在全周期内积分，结果为 0。
故 项 iii $= 2\pi^2$ 。

步骤 3：计算交叉项 iv, v, vi
利用 $\int_0^{2\pi} \sin \theta \, d\theta = 0$ 和 $\int_0^{2\pi} \cos \theta \, d\theta = 0$ 。

项 iv：

$$
\iint_D 2\sin x \sin y \, dxdy = 2 \left(\int_0^{2\pi} \sin x \, dx\right) \left(\int_0^{2\pi} \sin y \, dy\right) = 2 \cdot 0 \cdot 0 = 0
$$

项 v： $\iint_D 2\sin x \sin(x+y) \, dxdy$ 。
利用积化和差公式 $2\sin A \sin B = \cos(A-B) - \cos(A+B)$ ：

$$
2\sin x \sin(x+y) = \cos(x - (x+y)) - \cos(x + x + y) = \cos(-y) - \cos(2x+y) = \cos y - \cos(2x+y)
$$

积分：

$$
\iint_D \cos y \, dxdy - \iint_D \cos(2x+y) \, dxdy
$$

第一部分： $\int_0^{2\pi} dx \int_0^{2\pi} \cos y \, dy = 2\pi \cdot 0 = 0$ 。
第二部分：对 $x$ 积分 $\int_0^{2\pi} \cos(2x+y) \, dx = [\frac{1}{2}\sin(2x+y)]_0^{2\pi} = 0$ 。
故项 v $= 0$ 。

项 vi：同理，由对称性可知项 vi $= 0$ 。

步骤 4：求和

$$
\iint_D f(x, y)^2 \, dxdy = \underbrace{2\pi^2}_{\text{i}} + \underbrace{2\pi^2}_{\text{ii}} + \underbrace{2\pi^2}_{\text{iii}} + \underbrace{0}_{\text{iv}} + \underbrace{0}_{\text{v}} + \underbrace{0}_{\text{vi}} = 6\pi^2
$$
