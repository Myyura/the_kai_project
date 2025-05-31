---
sidebar_label: "2019年8月実施 解析・線形代数"
tags:
  - Nagoya-University
---
# 名古屋大学 情報学研究科 知能システム学専攻 2019年8月実施 解析・線形代数

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### \[1\]
#### (a)

$$
  \begin{aligned}
  z
  = \left( 1 + i \right)^8
  = \left( \sqrt{2} e^{ \frac{\pi}{4} i } \right)^8
  = 2^4 e^{ 2 \pi i }
  = 16
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  u=16, v=0
  \end{aligned}
$$

である。

#### (b)
$8 = |z| = 2^{n/2}$ より、 $n=6$ なので、

$$
  \begin{aligned}
  z
  = \left( 1 + i \right)^6
  = \left( \sqrt{2} e^{ \frac{\pi}{4} i } \right)^6
  = 2^3 e^{ \frac{3}{2} \pi i }
  = -8i
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  u=0, v=-8
  \end{aligned}
$$

である。

### \[2\]

### \[3\]
#### (a)
時刻 $t$ における P の速度の大きさを $v(t)$ とすると、

$$
\begin{aligned}
v(t)
&= \sqrt{ \left( \frac{dx}{dt} \right)^2 + \left( \frac{dy}{dt} \right)^2 }
\\
&= \sqrt{ 9 \sin^4 t \cos^2 t + 9 \sin^2 t \cos^4 t }
\\
&= \sqrt{ 9 \sin^2 t \cos^2 t }
\\
&= \frac{3}{2} \left| \sin 2t \right|
\end{aligned}
$$

であるから、求める長さ $l$ は

$$
\begin{aligned}
l
&= \int_0^{2 \pi} v(t) dt
\\
&= \frac{3}{2} \int_0^{2 \pi} \left| \sin 2t \right| dt
\\
&= 3 \int_0^{\pi} \left| \sin 2t \right| dt
\\
&= 3 \left( \int_0^{\pi/2} \sin 2t dt - \int_{\pi/2}^{\pi} \sin 2t dt \right)
\\
&= \frac{3}{2} \left(
- \left[ \cos 2t \right]_0^{\pi/2}
+ \left[ \cos 2t \right]_{\pi/2}^{\pi} \right)
\\
&= 6
\end{aligned}
$$

である。

#### (b)
$0 \lt t \lt \pi / 2$ において、

$$
  \begin{aligned}
  v(t) &= \frac{3}{2} \sin 2t
  \end{aligned}
$$

であるから、 $v(t)$ が最大になるのは、 $t = \pi / 4$ のときであり、
このとき、

$$
  \begin{aligned}
  x &= \sin^3 \frac{\pi}{4}
  = \left( \frac{1}{\sqrt{2}} \right)^3 = \frac{1}{2 \sqrt{2}}
  \\
  y &= \cos^3 \frac{\pi}{4}
  = \left( \frac{1}{\sqrt{2}} \right)^3 = \frac{1}{2 \sqrt{2}}
  \end{aligned}
$$

である。