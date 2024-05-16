---
comments: false
description: 東北大学 大学院 医工学研究科 医学系コース 2022年実施 数学基礎 問題1-3
keywords: Tohoku-University, 2022
---

## **Source**
東北大学 大学院 医工学研究科 医学系コース 2022年実施 数学基礎 問題1-3

By: Miyake

## **Description**

## **Kai**
### 問題1
ロピタルの定理を使って次のように計算できる。

#### (1)

$$
\begin{aligned}
\lim_{x \to 0} \frac{x^2}{1 - \cos x}
&= \lim_{x \to 0} \frac{2x}{\sin x}
\\
&= \lim_{x \to 0} \frac{2}{\cos x}
\\
&= 2
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
\lim_{x \to 0} \frac{\sqrt{x}}{\log x}
&= \lim_{x \to 0} \frac{\frac{1}{2} x^{-\frac{1}{2}}}{\frac{1}{x}}
\\
&= \frac{1}{2} \lim_{x \to 0} \sqrt{x}
\\
&= 0
\end{aligned}
$$

#### (3)

$$
\begin{aligned}
\lim_{x \to 0} \frac{\tan^{-1} x}{\sqrt{x}}
&= \lim_{x \to 0} \frac{\frac{1}{x^2+1}}{\frac{1}{2} x^{-\frac{1}{2}}}
\\
&= 2 \lim_{x \to 0} \frac{\sqrt{x}}{x^2+1}
\\
&= 0
\end{aligned}
$$

### 問題2
#### (1)

$$
\begin{aligned}
\int (6x-3)^5 dx
&= 3^5 \int t^5 \frac{dt}{2}
\ \ \ \ \ \ \ \ (t=2x-1)
\\
&= \frac{3^5}{2 \cdot 6} t^6 + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\\
&= \frac{81}{4} (2x-1)^6 + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
\int \frac{1}{\sqrt[3]{1-2x}} dx
&= \int t^{- \frac{1}{3}} \frac{-dt}{2}
\ \ \ \ \ \ \ \ (t=1-2x)
\\
&= - \frac{1}{2} \cdot \frac{3}{2} t^\frac{2}{3} + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\\
&= - \frac{3}{4} (1-2x)^\frac{2}{3} + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{aligned}
$$

#### (3)

$$
\begin{aligned}
\int x^2 \log x^2 dx
&= \frac{1}{3} x^3 \log x^2 - \frac{1}{3} \int x^3 \cdot \frac{2x}{x^2} dx
\\
&= \frac{1}{3} x^3 \log x^2 - \frac{2}{3} \int x^2 dx
\\
&= \frac{1}{3} x^3 \log x^2 - \frac{2}{9} x^3 + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{aligned}
$$

#### (4)

$$
\begin{aligned}
\int \frac{1}{3x^+2x-1} dx
&= \int \frac{1}{(x+1)(3x-1)} dx
\\
&= \frac{1}{4} \int \left( - \frac{1}{x+1} + \frac{3}{3x-1} \right) dx
\\
&= \frac{1}{4} \int \left( - \frac{1}{x+1}
+ \frac{1}{x-\frac{1}{3}} \right) dx
\\
&= - \frac{1}{4} \log |x+1|
+ \frac{1}{4} \log \left| x - \frac{1}{3} \right| + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{aligned}
$$

### 問題3
$t = \sqrt{x}$ として、

$$
\begin{aligned}
f(t)
&= \left( 2t - t^4 \right) - t^2
\\
&= - t^4 - t^2 + 2t
\\
&= -t(t-1) \left( t^2 + t + 2 \right)
\end{aligned}
$$

とおくと、 $f(t)=0$ となるのは $t=0,1$ のときであることがわかる。
また、これを $t$ で微分すると

$$
\begin{aligned}
f'(t)
&= - 4 t^3 - 2 t + 2
\end{aligned}
$$

であり、 $f'(0)=2 \gt 0, f'(1)=-4 \lt 0$ であるから、
$0 \leq t \leq 1$ において $f(t) \geq 0$ である。
よって、求める面積は、

$$
\begin{aligned}
\int_0^1 \left( 2 \sqrt{x} - x^2 - x \right) dx
&= \left[ 2 \cdot \frac{2}{3} x^\frac{3}{2}
- \frac{x^3}{3} - \frac{x^2}{2} \right]_0^1
\\
&= \frac{1}{2}
\end{aligned}
$$

である。