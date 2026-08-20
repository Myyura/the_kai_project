---
sidebar_label: "2022年8月実施 数学一般 その1"
tags:
  - Waseda-University
  - Mathematics.Calculus.Implicit-Function-Local-Power-Series
---
# 早稲田大学 先進理工学研究科 共同原子力専攻 2022年8月実施 数学一般 その1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

### 题目描述

1. 对函数

   $$
   f(x,y)=x^3+xy-y^3-1,
   $$

   在 $(x,y)=(1,1)$ 附近考虑由 $f(x,y)=0$ 确定的隐函数 $y=g(x)$。若 $g(x)$ 在 $x=1$ 附近展开为

   $$
   g(x)=a_0+a_1(x-1)+a_2(x-1)^2+\cdots,
   $$

   分别求系数 $a_0,a_1,a_2$。
2. 求微分方程

   $$
   y''(t)+y(t)=\cos t+\sin t
   $$

   的通解。

## **Kai**
### (1)
まず、 $y=g(x)$ が $(x,y)=(1,1)$ を通ることから、 $a_0=1$ がわかる。

次に、 $t=x-1$ とおくと、

$$
  \begin{aligned}
  f(x,y)
  &= (t+1)^3 + (t+1) y - y^3 - 1
  \\
  &= t^3 + 3t^2 + 3t + (t+1)y - y^3
  \\
  g(x)
  &= 1 + a_1 t + a_2 t^2 + \cdots
  \\
  f(x,g(x))
  &= (-2a_1+4)t + (-3a_1^2+a_1-2a_2+3)t^2 + \cdots
  \end{aligned}
$$

である。

$1$ に十分近い $x$ （ $0$ に十分近い $t$ ）について
$f(x,g(x))=0$ であることから、

$$
  \begin{aligned}
  -2a_1+4 &= 0, \ -3a_1^2+a_1-2a_2+3 = 0
  \\
  \therefore \ \ 
  a_1 &= 2, \ a_2 = - \frac{7}{2}
  \end{aligned}
$$

がわかる。

### (2)

右辺が同次方程式の解と共鳴するので、特殊解を

$$
y_p(t)=t(A\cos t+B\sin t)
$$

とおく。代入すると $-2A\sin t+2B\cos t=\cos t+\sin t$ より
$A=-1/2$, $B=1/2$ である。したがって通解は

$$
\boxed{y(t)=C_1\cos t+C_2\sin t+\frac{t}{2}(\sin t-\cos t)}.
$$
