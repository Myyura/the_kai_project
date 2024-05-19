---
comments: false
title: 名古屋大学 工学研究科 機械航空系 2021年度 基礎部門 問題 1
tags:
  - Nagoya-University
---
# 名古屋大学 工学研究科 機械航空系 2021年度 基礎部門 問題 1

## **Author**
Miyake

## **Description**

## **Kai**
### (1)
$t = \sin x$ とおくと、 $dt = \cos x dx$ であるから、次のように計算できる：

$$
  \begin{aligned}
  \int \sin^4 x \cos^3 x dx
  &= \int t^4 \left( 1 - t^2 \right) dt
  \\
  &= \int \left( t^4 - t^6 \right) dt
  \\
  &= \frac{1}{5} t^5 - \frac{1}{7} t^7 + C
  \ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
  \\
  &= \frac{1}{5} \sin^5 x - \frac{1}{7} \sin^7 x + C
  \ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
  \end{aligned}
$$

### (2)
#### 1)
$x = a \tan \theta$ とおくと、 $dx = ad \theta / \cos^2 \theta$ であるから、次のように計算できる：

$$
\begin{aligned}
\int \frac{1}{x^2+a^2} dx
&= \frac{1}{a^2} \int \frac{1}{\tan^2 \theta + 1} \frac{a d \theta}{\cos^2 \theta}
\\
&= \frac{1}{a} \int d \theta
\\
&= \frac{\theta}{a} + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\\
&= \frac{1}{a} \arctan \frac{x}{a} + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{aligned}
$$

#### 2)

$$
\begin{aligned}
\frac{d}{dx} \int \frac{1}{(x^2+a^2)^{n+1}} dx
&= \frac{1}{(x^2+a^2)^{n+1}}
,
\\
\frac{d}{dx} \left( \frac{x}{2na^2(x^2+a^2)^n} + \frac{2n-1}{2na^2} \int \frac{1}{(x^2+a^2)^n} \right)
&= \frac{1}{2na^2} \frac{(x^2+a^2)^n - 2x^2 (x^2+a^2)^{n-1}}{(x^2+a^2)^{2n}} + \frac{2n-1}{2na^2} \frac{1}{(x^2+a^2)^n}
\\
&= \frac{1}{(x^2+a^2)^{n+1}}
\end{aligned}
$$

であるから、与えられた式が成り立つことがわかる。

#### 3)

$$
  \begin{aligned}
  \int \frac{1}{(x^2+4)^3} dx
  &= \frac{x}{16(x^2+4)^2} + \frac{3}{16} \int \frac{1}{(x^2+4)^2} + C_0
  \ \ \ \ \ \ \ \ ( C_0 \text{ は任意定数 } )
  \\
  &= \frac{x}{16(x^2+4)^2} + \frac{3}{16} \frac{x}{8(x^2+4)} + \frac{3}{16} \frac{1}{8} \int \frac{1}{x^2+4} + C_1
  \ \ \ \ \ \ \ \ ( C_1 \text{ は任意定数 } )
  \\
  &= \frac{x}{16(x^2+4)^2} + \frac{3}{16} \frac{x}{8(x^2+4)} + \frac{3}{16} \frac{1}{8} \frac{1}{2} \arctan \frac{x}{2} + C_2
  \ \ \ \ \ \ \ \ ( C_2 \text{ は任意定数 } )
  \\
  &= \frac{x}{16(x^2+4)^2} + \frac{3x}{128(x^2+4)} + \frac{3}{256} \arctan \frac{x}{2} + C_2
  \ \ \ \ \ \ \ \ ( C_2 \text{ は任意定数 } )
  \end{aligned}
$$

### (3)
極座標の面積公式より

$$
\begin{aligned}
S &= \dfrac{1}{2}\int_0^{2\pi}r^2d\theta\\
&= \dfrac{a^2}{2} \int_0^{2\pi} (1+\cos\theta)^2d \theta\\
&= \dfrac{a^2}{2} \int_0^{2\pi} \left(1+2\cos\theta+\frac{1+\cos 2\theta}{2}\right) d\theta
\end{aligned}
$$

ここで，$\cos \theta, \cos 2\theta$ は一周期ぶん積分すると $0$ になるので，$S = \frac{a^2}{2} \cdot \frac{3}{2} \cdot 2 \pi = \frac{3}{2} \pi a^2$ を得る。

曲線の長さ

$$
\begin{aligned}
l &= 2 \int_0^{\pi} \sqrt{r^2+\left(\frac{dr}{d\theta}\right)^2} d\theta\\
&=2 \int_0^{\pi} \sqrt{a^2(1+\cos\theta)^2+a^2\sin^2\theta} d\theta\\
&=2 \int_0^{\pi} \sqrt{2a^2+2a^2\cos\theta} d\theta\\
&=2a \int_0^{\pi} \sqrt{4\cos^2\frac{\theta}{2}} d\theta\\
&=4a \int_0^{\pi} \cos\frac{\theta}{2} d\theta\\
&=8a
\end{aligned}
$$