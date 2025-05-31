---
sidebar_label: "2022年8月実施 数学一般 その1"
tags:
  - Waseda-University
---
# 早稲田大学 先進理工学研究科 共同原子力専攻 2022年8月実施 数学一般 その1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

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