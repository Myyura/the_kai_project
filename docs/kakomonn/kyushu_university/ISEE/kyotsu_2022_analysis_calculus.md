---
comments: false
title: 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2022年度 解析学・微積分
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2022年度 解析学・微積分

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

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