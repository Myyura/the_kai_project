---
sidebar_label: "2023年実施 数学基礎 問題1-3"
sidebar_position: 2
tags:
  - Tohoku-University
---
# 東北大学 医工学研究科 医学系コース 2023年実施 数学基礎 問題1-3

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### 問題1
$f(x)$ の $1, 2, k (=3,4,\cdots)$ 階導関数をそれぞれ
$f'(x), f''(x), f^{(k)}(x)$ と書く。

#### (1)

$$
\begin{aligned}
f'(x) &= \frac{e^x}{e^x + 1},
\\
f''(x) &= \frac{e^x}{\left( e^x + 1 \right)^2},
\\
f(0) &= \log_e(2),
\\
f'(0) &= \frac{1}{2},
\\
f''(0) &= \frac{1}{4}
\end{aligned}
$$

なので、 $f(x)$ の第三項までのマクローリン展開は

$$
\begin{aligned}
f(x)
&= f(0) + f'(0)x + \frac{1}{2}f''(0)x^2 + \cdots
\\
&= \log_e(2) + \frac{1}{2} x + \frac{1}{8} x^2 + \cdots
\end{aligned}
$$

である。

#### (2)

$$
\begin{aligned}
f(x) &= \sin \left( 3x + \frac{\pi}{2} \right)
\\
&= \cos \left( 3x \right),
\\
f'(x) &= -3 \sin \left( 3x \right),
\\
f''(x) &= -9 \cos \left( 3x \right),
\\
f^{(3)}(x) &= 27 \sin \left( 3x \right),
\\
f^{(4)}(x) &= 81 \cos \left( 3x \right),
\\
f(0) &= 1,
\\
f'(0) &= 0,
\\
f''(0) &= -9,
\\
f^{(3)}(0) &= 0,
\\
f^{(4)}(0) &= 81
\end{aligned}
$$

なので、 $f(x)$ の第三項までのマクローリン展開は

$$
\begin{aligned}
f(x)
&= f(0) + f'(0) x + \frac{1}{2}f''(0) x^2
+ \frac{1}{6} f^{(3)} x^3 + \frac{1}{24} f^{(4)} x^4 + \cdots
\\
&= 1 - \frac{9}{2} x^2 + \frac{27}{8} x^4 + \cdots
\end{aligned}
$$

である。

### 問題2
積分定数を $C$ と書く。

#### (1)

$$
\begin{aligned}
\int \frac{4}{x^2 + 2x - 3} dx
&= \int \left( - \frac{1}{x+3} + \frac{1}{x-1} \right) dx
\\
&= - \log_e \left| x+3 \right| + \log_e \left| x-1 \right| + C
\\
&= \log_e \left| \frac{x-1}{x+3} \right| + C
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
\int \frac{e^x}{e^x + 2} dx
&= \int \frac{\left( e^x + 2 \right)'}{e^x + 2} dx
\\
&= \log_e \left( e^x + 2 \right) + C
\end{aligned}
$$

#### (3)

$$
\begin{aligned}
\int x e^{2x} dx
&= \frac{1}{2} x e^{2x} - \frac{1}{2} \int e^{2x} dx
\\
&= \frac{1}{2} x e^{2x} - \frac{1}{4} e^{2x} + C
\end{aligned}
$$

#### (4)

$$
\begin{aligned}
\int \frac{\sin x}{\cos x} dx
&= - \int \frac{\left( \cos x \right)'}{\cos x} dx
\\
&= - \log_e \left| \cos x \right| + C
\end{aligned}
$$

### 問題3

$$
\begin{aligned}
& 2 \int_0^1 \pi \left( -3x^2 + 3 \right)^2 dx
\\
= & 18 \pi \int_0^1 \left( x^4 - 2x^2 + 1 \right) dx
\\
= & 18 \pi \left[ \frac{x^5}{5} - \frac{2}{3} x^3 + x \right]_0^1
\\
= & \frac{48}{5} \pi
\end{aligned}
$$