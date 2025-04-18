---
sidebar_label: "2022年8月実施 数学A 1"
tags:
  - Tohoku-University
---
# 東北大学 工学研究科 機械系 2022年8月実施 数学A 1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
以下の問いに答えよ。

(1) 次の積分を求めよ。

$$
\int \frac{1}{\cosh x + 1}\ dx
$$

(2) 次の極限値を求めよ。

$$
\lim_{x \rightarrow 0} \frac{x \cos x - \log_e (1+x)}{x \sin x}
$$

(3) 次の積分を求めよ。

$$
\iint_D \sqrt{\frac{1 - x^2 - y^2}{1 + x^2 + y^2}}\ dxdy
$$

ただし領域 $D$ は

$$
D = \{(x, y) \mid x^2 + y^2 \le 1\}
$$

により与えられる。

## **Kai**
### (1)

$$
\begin{aligned}
\int \frac{1}{\cosh x + 1} dx
&= \int \frac{2}{e^x + e^{-x} + 2} dx
\\
&= \int \frac{2}{t + \frac{1}{t} + 2} \frac{dt}{t}
\ \ \ \ \ \ \ \ \left( t = e^x \right)
\\
&= 2 \int \frac{dt}{(t+1)^2}
\\
&= - \frac{2}{t+1} + C
\ \ \ \ \ \ \ \ \left( C \text{ は積分定数 } \right)
\\
&= - \frac{2}{e^x+1} + C
\end{aligned}
$$

### (2)

$$
\begin{aligned}
\lim_{x \to 0} \frac{x \cos x - \log_e (1+x)}{x \sin x}
&= \lim_{x \to 0} \frac{\cos x - x \sin x - \frac{1}{1+x}}{\sin x + x \cos x}
\\
&= \lim_{x \to 0} \frac{- \sin x - \sin x - x \cos x + \frac{1}{(1+x)^2}}
{\cos x + \cos x - x \sin x}
\\
&= \lim_{x \to 0} \frac{- 2 \sin x - x \cos x + \frac{1}{(1+x)^2}}
{2 \cos x - x \sin x}
\\
&= \frac{1}{2}
\end{aligned}
$$

### (3)
$x = r \cos \theta, y = r \sin \theta$ によって極座標 $r,\theta$
を導入して、次のように計算できる：

$$
\begin{aligned}
\iint_D \sqrt{\frac{1-x^2-y^2}{1+x^2+y^2}} dx dy
&= \int_0^{2 \pi} d \theta \int_0^1 dr r \sqrt{\frac{1-r^2}{1+r^2}}
\\
&= 2 \pi \int_1^0 \frac{-2t dt}{(1+t^2)^2} \cdot t
\ \ \ \ \ \ \ \ \left( t = \sqrt{\frac{1-r^2}{1+r^2}} \right)
\\
&= 4 \pi \int_0^1 \frac{t^2}{(1+t^2)^2} dt
\\
&= 4 \pi \int_0^\frac{\pi}{4} \frac{\tan^2 \theta}{(1+\tan^2 \theta)^2}
\frac{d \theta}{\cos^2 \theta}
\ \ \ \ \ \ \ \ \left( t = \tan \theta \right)
\\
&= 4 \pi \int_0^\frac{\pi}{4} \sin^2 \theta d \theta
\\
&= 2 \pi \int_0^\frac{\pi}{4} \left( 1 - \cos 2 \theta \right) d \theta
\\
&= 2 \pi \left[ \theta - \frac{1}{2} \sin 2 \theta \right]_0^\frac{\pi}{4}
\\
&= 2 \pi \left( \frac{\pi}{4} - \frac{1}{2} \right)
\\
&= \frac{\pi (\pi - 2)}{2}
\end{aligned}
$$