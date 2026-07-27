---
sidebar_label: 2021年8月実施 解析学・微積分
tags:
  - Kyushu-University
  - Mathematics.Calculus.Chain-Rule
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
  - Mathematics.Complex-Analysis.Cauchy-Integral-Formula
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2021年8月実施 解析学・微積分

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
(1) $\mathbb{R}^m$ 上で微分可能な実数値関数 $f(x)$ $(x = (x_1, x_2, ..., x_m))$ について、$x_i = v_i(t)$ $(i = 1, 2, ..., m)$ とおく。ただし、各 $v_i$ は $\mathbb{R}$ 上で微分可能な関数とする。次の各問いに答えよ。

- (a) $\frac{df}{dt}$ を $\frac{\partial f}{\partial x_i}$ と $\frac{dv_i}{dt}$ $(i = 1, 2, ..., m)$ で表せ。
- (b) $m = 2$, $f(x) = x_1^2 + x_1x_2 + 2x_2^2$, $v_1(t) = \sin t$, $v_2(t) = e^t$ のとき、$\frac{df}{dt}$ を求めよ。

(2) 次の微分方程式の一般解を求めよ。  

$$
   \frac{dy}{dx} - 2xy = e^{x^2}
$$

(3) 閉曲線 $C$ に沿った複素積分  

$$
   \oint_C \frac{\cos z}{(2z - \pi)^3} dz
$$

を求めよ。ただし、$C$ は円 $|z| = 2$ とする。


### 题目描述

1. 设 $f(x)$ 是 $\mathbb R^m$ 上可微的实值函数，$x=(x_1,\ldots,x_m)$，并令 $x_i=v_i(t)$，其中每个 $v_i$ 都在 $\mathbb R$ 上可微。
   - 用 $\partial f/\partial x_i$ 与 $dv_i/dt$（$i=1,\ldots,m$）表示 $df/dt$。
   - 当 $m=2$、
     $$
     f(x)=x_1^2+x_1x_2+2x_2^2,\quad
     v_1(t)=\sin t,\quad v_2(t)=e^t
     $$
     时，求 $df/dt$。
2. 求微分方程
   $$
   \frac{dy}{dx}-2xy=e^{x^2}
   $$
   的通解。
3. 设 $C$ 为圆 $|z|=2$，计算
   $$
   \oint_C\frac{\cos z}{(2z-\pi)^3}\,dz.
   $$

#### 考点

- **多元复合函数链式法则**：推导沿参数曲线的全导数公式，并代入具体二元函数计算。
- **一阶线性微分方程**：选取积分因子求非齐次方程的通解。
- **柯西积分公式**：把三阶分母化为 $(z-z_0)^3$，使用高阶导数形式的积分公式。

## **Kai**
### (1)
#### (a)

$$
  \begin{aligned}
  \frac{df}{dt}
  = \sum_{i=1}^m \frac{\partial f}{\partial x_i} \frac{dv_i}{dt}
  \end{aligned}
$$

#### (b)

$$
  \begin{aligned}
  \frac{df}{dt}
  = (2x_1+x_2) \cos t + (x_1+4x_2)e^t
  \end{aligned}
$$

あるいは、 $x_1, x_2$ は使わず $t$ のみで表すと、

$$
  \begin{aligned}
  \frac{df}{dt}
  = \sin 2t + e^t \cos t + e^t \sin t + 4 e^{2t}
  \end{aligned}
$$

### (2)
まず、与えられた微分方程式の右辺を $0$ とした方程式

$$
  \begin{aligned}
  \frac{dy}{dx} - 2xy = 0
  \end{aligned}
$$

を考えると、これは

$$
  \begin{aligned}
  \frac{dy}{y} = 2x dx
  \end{aligned}
$$

と変形できるので、一般解は、$A$ を任意定数として、次のように求まる：

$$
  \begin{aligned}
  y = A e^{x^2}
  .
  \end{aligned}
$$

そこで、 $A$ を $x$ の関数と考えて、
$y = A(x)e^{x^2}$ を与えられた微分方程式に代入すると、

$$
  \begin{aligned}
  \frac{dA(x)}{dx} &= 1
  \\
  \therefore \ \ 
  A(x) &= x + C
  \end{aligned}
$$

を得るので、求める一般解は

$$
  \begin{aligned}
  y = (x+C) e^{x^2}
  \end{aligned}
$$

である。
ただし、 $C$ は任意定数である。

### (3)
$w=z-\pi/2$ として、次のように $w=0$ においてローラン展開できる：

$$
  \begin{aligned}
  \frac{\cos z}{(2z - \pi)^3}
  &= - \frac{1}{8} \frac{\sin w}{w^3}
  \\
  &= - \frac{1}{8w^3} \left( w - \frac{1}{6} w^3 + \cdots \right)
  \\
  &= - \frac{1}{8} \left( \frac{1}{w^2} - \frac{1}{6} + \cdots \right)
  .
  \end{aligned}
$$

よって、

$$
  \begin{aligned}
  \oint_C \frac{\cos z}{(2 \pi - z)^2} = 0
  \end{aligned}
$$

がわかる。
