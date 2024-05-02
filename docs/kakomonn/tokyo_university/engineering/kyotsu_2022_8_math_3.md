---
comments: false
description: 東京大学 大学院 工学系研究科 2022年度 数学3
keywords: Tokyo-University, 2022-8
---

## Source
[東京大学 大学院 工学系研究科 2022年度 数学3 (主に「関数論・複素数」と「確率・統計，情報数学，その他」)](https://www.t.u-tokyo.ac.jp/soe/admission/general-past)

## Description

## Kai
### I.
#### 1.
$I_1$ の被積分関数

$$
\begin{align}
f(z) = \frac{z}{(z-i)(z-1)}
\end{align}
$$

の極 $z=1,i$ における留数はそれぞれ

$$
\begin{align}
R_1 &= \frac{1}{1-i} = \frac{1+i}{2}
, \\
R_i &= \frac{i}{i-1} = \frac{1-i}{2}
\end{align}
$$

である。

$I_1$ は $z=1$ の周りを反時計回りに回る部分と $z=i$ の周りを時計回りに回る部分からなるから、

$$
\begin{align}
I_1
&= 2 \pi i \left( R_1 - R_i \right)
\\
&= -2 \pi
\end{align}
$$

である。

#### 2.
##### 2.1
$|z|=1$ を満たす複素数 $z$ は、 $z=e^{i \theta} \ \ (0 \leq \theta \lt 2 \pi)$ と書ける。
このとき、

$$
\begin{align}
dz &= i e^{i \theta} d \theta = iz d \theta
\\
z + \frac{1}{z} &= e^{i \theta} + e^{-i \theta} = 2 \cos \theta
\end{align}
$$

であるから、

$$
\begin{align}
I_2
&= \oint_{|z|=1} \frac{1}{10 + 4 \left( z + \frac{1}{z} \right)} \frac{dz}{iz}
\\
&= \oint_{|z|=1} \frac{-i}{2(z+2)(2z+1)} dz
\end{align}
$$

よって、

$$
\begin{align}
G(z) = \frac{-i}{2(z+2)(2z+1)}
\end{align}
$$

である。

##### 2.2
$G(z)$ の特異点は $z=-1/2, 2$ である。

##### 2.3
$G(z)$ の $z=-1/2$ における留数は $-i/6$ であるから、留数定理により、

$$
\begin{align}
I_2 = 2 \pi i \cdot \frac{-i}{6} = \frac{\pi}{3}
\end{align}
$$

を得る。

### II.