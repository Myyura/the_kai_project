---
sidebar_label: '工学系研究科 2022年度 数学3'
sidebar_position: 14
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2022年度 数学3

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### I.
#### 1.
$I_1$ の被積分関数

$$
\begin{aligned}
f(z) = \frac{z}{(z-i)(z-1)}
\end{aligned}
$$

の極 $z=1,i$ における留数はそれぞれ

$$
\begin{aligned}
R_1 &= \frac{1}{1-i} = \frac{1+i}{2}
, \\
R_i &= \frac{i}{i-1} = \frac{1-i}{2}
\end{aligned}
$$

である。

$I_1$ は $z=1$ の周りを反時計回りに回る部分と $z=i$ の周りを時計回りに回る部分からなるから、

$$
\begin{aligned}
I_1
&= 2 \pi i \left( R_1 - R_i \right)
\\
&= -2 \pi
\end{aligned}
$$

である。

#### 2.
##### 2.1
$|z|=1$ を満たす複素数 $z$ は、 $z=e^{i \theta} \ \ (0 \leq \theta \lt 2 \pi)$ と書ける。
このとき、

$$
\begin{aligned}
dz &= i e^{i \theta} d \theta = iz d \theta
\\
z + \frac{1}{z} &= e^{i \theta} + e^{-i \theta} = 2 \cos \theta
\end{aligned}
$$

であるから、

$$
\begin{aligned}
I_2
&= \oint_{|z|=1} \frac{1}{10 + 4 \left( z + \frac{1}{z} \right)} \frac{dz}{iz}
\\
&= \oint_{|z|=1} \frac{-i}{2(z+2)(2z+1)} dz
\end{aligned}
$$

よって、

$$
\begin{aligned}
G(z) = \frac{-i}{2(z+2)(2z+1)}
\end{aligned}
$$

である。

##### 2.2
$G(z)$ の特異点は $z=-1/2, 2$ である。

##### 2.3
$G(z)$ の $z=-1/2$ における留数は $-i/6$ であるから、留数定理により、

$$
\begin{aligned}
I_2 = 2 \pi i \cdot \frac{-i}{6} = \frac{\pi}{3}
\end{aligned}
$$

を得る。

### II.