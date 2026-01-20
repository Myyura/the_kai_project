---
sidebar_label: "2023年8月実施 解析学・微積分"
tags:
  - Kyushu-University
  - Calculus
  - Differential-Equation
  - Complex-Analysis
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2023年8月実施 解析学・微積分

## **Author**
Casablanca, [Miyake](https://miyake.github.io/exams/index.html)

## **Description**
(1) 積分

$$
I = \int_{0}^{\infty}x^5\exp(-x^4)dx
$$

を計算せよ。ただし, $\int_{-\infty}^{\infty}\exp(-x^2)dx = \sqrt{\pi}$ を証明なしに用してよい。

(2) 次の微分方程式の一般解を求めよ。

$$
\frac{dy}{dx} + y = x\sinh x
$$

(3) 複素関数 $f(z) = \frac{1}{z^4 + 1}$ を考える。次の各問いに答えよ。

- (a) $f(z)$ の極をすべて求めよ。

- (b) 下図に示す半円 $C$ に沿った複素積分 $\oint_{C}f(z)dz$ を求めよ。ただし, $R > 1$ とする。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/kyotsu_2024_analysis_calculus_p1.png" width="555" height="395" alt=""/>
</figure>

## **Kai** - By Casablanca
### (1)

$$
\begin{aligned}
% (\int_{-\infty}^{\infty}e^{-x^2}dx)^2 &= \int e^{-x^2}dx \int e^{-y^2}dy = \int e^{-(x^2+y^2)dxdy} = \pi \\
\left(\int_{-\infty}^{\infty}e^{-x^2}dx \right)^2 &= \pi \\
\int x^5 e^{-x^4}dx &= \int-\frac{x^2}{4}de^{-x^4} = -\frac{1}{4}x^2e^{-x^4} + \frac{1}{4}\int e^{-x^4}dx^2 \\
\int_0^{\infty}x^5 e^{-x^4}dx &= \frac{1}{4}\int_0^{\infty}e^{-t^2}dt = \sqrt{\pi}/8
\end{aligned}
$$

### (2)

$$
\begin{aligned}
\frac{dy}{dx} + y &= x(e^x - e^{-x})/2 \\
e^x(y' + y) &= \frac{1}{2}x(e^{2x} - 1) \\
(e^x y)' &= \frac{1}{2}xe^{2x} - \frac{1}{2}x \\
\int (\frac{1}{2}xe^{2x} - \frac{1}{2}x)dx &= \frac{1}{4}xe^{2x} - \frac{1}{8}e^{2x} - \frac{x^2}{4} + C,
\end{aligned}
$$

$$
y = \frac{1}{4}xe^x - \frac{1}{8}e^x - \frac{1}{4}x^2e^{-x} + Ce^{-x}
$$

where $C$ is a constant.

### (3)
#### (a)
Consider $z^4 = -1$,

we get

$$
z_1 = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i , z_2 = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i , z_3 = -\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i , z_4 = -\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i
$$

and these are the poles

#### (b)

$$
\begin{aligned}
\oint_Cf(z)dz &= 2\pi i \text{Res}[f(z),\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i] + 2\pi i \text{Res}[f(z),\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i] \\
&= \frac{\sqrt{2}}{2}\pi
\end{aligned}
$$

## **Kai** - By Miyake
### (1)
$\exp(-x^2)$ は偶関数であるから、

$$
  \begin{align}
  \int_{- \infty}^\infty \exp \left( -x^2 \right) dx = \sqrt{\pi}
  \end{align}
$$

より、

$$
  \begin{align}
  \int_0^\infty \exp \left( -x^2 \right) dx = \frac{\sqrt{\pi}}{2}
  \tag{A}
  \end{align}
$$

がわかる。

$y=x^2$ とおくと、 $dy=2xdx$ であり、次のように計算できる：

$$
  \begin{align}
  I
  &= \frac{1}{2} \int_0^\infty y^2 \exp \left( - y^2 \right) dy
  \\
  &= \frac{1}{2} \int_0^\infty y
  \left( - \frac{1}{2} \exp \left( - y^2 \right) \right)' dy
  & \left( \ ' \text{ は } y { による微分 } \right)
  \\
  &= - \frac{1}{4}
  \left[ y \exp \left( - y^2 \right) \right]_0^\infty
  + \frac{1}{4} \int_0^\infty \exp \left( - y^2 \right) dy
  \\
  &= \frac{\pi}{8}
  .
  & ( \because \text{ 式 (A) } )
  \end{align}
$$

### (2)

$$
  \begin{align}
  \frac{dy}{dx} + y = 0
  \end{align}
$$

の一般解は

$$
  \begin{align}
  y &= Ce^{-x}
  & ( C \text{ は積分定数 } )
  \end{align}
$$

である。このことを考慮して、与えられた微分方程式

$$
  \begin{align}
  \frac{dy}{dx} + y = x \sinh x
  \end{align}
$$

に $y=ze^{-x}$ ( $z$ は $x$ の関数 ) を代入すると、

$$
  \begin{align}
  \frac{dz}{dx} e^{-x} - z e^{-x} + z e^{-x} &= x \sinh x
  \\
  \frac{dz}{dx} e^{-x} &= x \frac{e^x - e^{-x}}{2}
  \\
  \frac{dz}{dx} &= \frac{1}{2} \left( x e^{2x} - x \right)
  \\
  \therefore \ \ 
  z
  &= \frac{1}{2} \int \left( x e^{2x} - x \right) dx
  \\
  &= \frac{1}{2}
  \left( \frac{1}{2} x e^{2x} - \frac{1}{4} e^{2x} - \frac{x^2}{2} \right)
  + C
  & ( C \text{ は積分定数 } )
  \end{align}
$$

を得るので、求める一般解は

$$
  \begin{align}
  y &=
  \frac{1}{4} x e^x - \frac{1}{8} e^x - \frac{1}{4} x^2 e^{-x} + C e^{-x}
  & ( C \text{ は積分定数 } )
  \end{align}
$$

であることがわかる。

### (3)
#### (a)
$z^4+1=0$ に $z= r e^{i \theta}$ ( $r \gt 0, \theta$ は実数) を代入すると

$$
  \begin{align}
  r^4 e^{4i \theta} = -1
  \end{align}
$$

であり、

$$
  \begin{align}
  r = 1
  , \ \ 
  4 \theta = \pi + 2 \pi \cdot \text{ 整数 }
  \end{align}
$$

となる。よって、 $f(z)$ は

$$
  \begin{align}
  z
  &= e^{\pi/4}, e^{3\pi/4}, e^{5\pi/4}, e^{7\pi/4}
  \\
  &= \frac{1+i}{\sqrt{2}}, \frac{1-i}{\sqrt{2}},
  \frac{-1-i}{\sqrt{2}}, \frac{-1+i}{\sqrt{2}}
  \end{align}
$$

に1位の極をもつ。

#### (b)
(a) で求めた4つの極は

$$
  \begin{align}
  z_0 &= e^{\pi/4} = \frac{1+i}{\sqrt{2}},
  \\
  z_1 &= e^{3\pi/4} = \frac{-1+i}{\sqrt{2}},
  \\
  z_2 &= e^{5\pi/4} = \frac{-1-i}{\sqrt{2}},
  \\
  z_3 &= e^{7\pi/4} = \frac{1-i}{\sqrt{2}}
  \end{align}
$$

であるが、このうち $C$ の内側にあるのは $z_0, z_1$ である。

$$
  \begin{align}
  z_0 - z_1 &= \frac{2}{\sqrt{2}} = \sqrt{2}
  ,\\
  z_0 - z_2 &= \frac{2+2i}{\sqrt{2}} = \sqrt{2} (1+i)
  ,\\
  z_0 - z_3 &= \frac{2i}{\sqrt{2}} = \sqrt{2} i
  ,\\
  z_1 - z_0 &= \frac{-2}{\sqrt{2}} = - \sqrt{2}
  ,\\
  z_1 - z_2 &= \frac{2i}{\sqrt{2}} = \sqrt{2} i
  ,\\
  z_1 - z_3 &= \frac{-2+2i}{\sqrt{2}} = \sqrt{2} (-1+i)
  \end{align}
$$

なので、 $z_0$ における留数は

$$
  \begin{align}
  \lim_{z \to z_0} (z-z_0) f(z)
  &=
  \frac{1}{(z_0-z_1)(z_0-z_2)(z_0-z_3)}
  \\
  &=
  \frac{1}{2 \sqrt{2} (-1+i)}
  \\
  &= - \frac{1}{4 \sqrt{2}} (1+i)
  \end{align}
$$

であり、 $z_1$ における留数は

$$
  \begin{align}
  \lim_{z \to z_1} (z-z_1) f(z)
  &=
  \frac{1}{(z_1-z_0)(z_1-z_2)(z_1-z_3)}
  \\
  &=
  \frac{1}{2 \sqrt{2} (1-i)}
  \\
  &= \frac{1}{4 \sqrt{2}} (1-i)
  \end{align}
$$

である。よって、留数定理より

$$
  \begin{align}
  \oint_C f(z) dz
  &= 2 \pi i
  \left( - \frac{1}{4 \sqrt{2}} (1+i) + \frac{1}{4 \sqrt{2}} (1-i) \right)
  \\
  &= \frac{\pi}{\sqrt{2}}
  \end{align}
$$

がわかる。
