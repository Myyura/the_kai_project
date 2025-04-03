---
sidebar_label: "2019年8月実施 情報数理学 数学解析"
tags:
  - Osaka-University
---
# 大阪大学 情報科学研究科 情報数理学専攻 2019年8月実施 情報数理学 数学解析

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### 1.
まず、 $x_0(t) = e^{-t}$ は、すぐにわかる。
$x_1(t)$ については、

$$
\begin{aligned}
\frac{dx_1(t)}{dt}
&= - x_1(t) + x_0(t) \\
&= - x_1(t) + e^{-t}
\end{aligned}
$$

なので、適当な関数 $A(t)$ を使って $x_1(t) = A(t) e^{-t}$ と書いて、
上の微分方程式に代入すると、

$$
\begin{aligned}
\frac{dA(t)}{dt} = 1
\end{aligned}
$$

となるので、積分定数を $C$ として、

$$
\begin{aligned}
A(t) &= t + C
\\
\therefore \ \  x_1(t) &= (t + C) e^{-t}
\end{aligned}
$$

であるが、初期条件 $x_1(0)=0$ を満たすようにするには、 $C=0$ とすればよく、

$$
\begin{aligned}
x_1(t) = t e^{-t}
\end{aligned}
$$

を得る。
同様にして、

$$
\begin{aligned}
x_2(t) = \frac{1}{2} t^2 e^{-t}
\end{aligned}
$$

を得る。

以上より、 $k=0,1,2,\cdots$ について、

$$
\begin{aligned}
x_k(t) = \frac{1}{k!} t^k e^{-t}
\end{aligned}
$$

と予想できるが、これは確かに初期条件を満たし、
$k=1,2,\cdots$ について、

$$
\begin{aligned}
\frac{dx_k(t)}{dt}
&= \frac{1}{(k-1)!} t^{k-1} e^{-t} - \frac{1}{k!} t^k e^{-t}
\\
&= x_{k-1}(t) - x_k(t)
\end{aligned}
$$

であるから微分方程式も満たす。

### 2.

### 3.