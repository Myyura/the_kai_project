---
comments: false
description: 東京大学 大学院 情報理工学研究科 2023年度 数学 第2問
keywords: Tokyo-University, 2023
---

## **Source**
東京大学 大学院 情報理工学研究科 2023年度 数学 第2問

## **Description**

## **Kai**
### (1)
まず、

$$
\begin{aligned}
\frac{d^2x}{dt^2} + 2 \frac{dx}{dt} + x = 0
\end{aligned}
$$

に $x=e^{\lambda t}$ （ $\lambda$ は $t$ によらない定数）を代入すると、

$$
\begin{aligned}
&\lambda^2 + 2 \lambda + 1 = 0
\\
&\therefore \ \ 
\lambda = -1
\ \ \ \ \text{ （重解） }
\end{aligned}
$$

となるので、この微分方程式の一般解は

$$
\begin{aligned}
x = Ce^{-x} + Dxe^{-x}
\ \ \ \ \ \ \ \ ( C, D \text{ は積分定数 } )
\end{aligned}
$$

である。

次に、与えられた微分方程式に
$x = A \sin (t) + B \cos (t)$ （ $A,B$ は $t$ によらない定数）を代入すると、

$$
\begin{aligned}
A = \frac{1}{2}, \ B = 0
\end{aligned}
$$

を得るので、

$$
\begin{aligned}
x = \frac{1}{2} \sin (t)
\end{aligned}
$$

は特殊解である。

以上より、与えられた微分方程式の一般解は

$$
\begin{aligned}
x = Ce^{-x} + Dxe^{-x} + \frac{1}{2} \sin (t)
\ \ \ \ \ \ \ \ ( C, D \text{ は積分定数 } )
\end{aligned}
$$

である。よって、 $t \to - \infty$ で有界である解は

$$
\begin{aligned}
x = \frac{1}{2} \sin (t)
\end{aligned}
$$

である。

### (2)
$z=x+y$ とおくと、

$$
\begin{aligned}
\frac{d^2z}{dt^2} + 2 \frac{dz}{dt} = \cos (t)
\end{aligned}
$$

が成り立ち、 (1) と同じように考えて、これの一般解は

$$
\begin{aligned}
z = A e^{-2t} + B + \frac{2}{5} \sin (t) - \frac{1}{5} \cos (t)
\ \ \ \ \ \ \ \ ( A, B \text{ は積分定数 } )
\end{aligned}
$$

であることがわかる。

$w=x-y$ とおくと、

$$
\begin{aligned}
\frac{d^2w}{dt^2} + 2 \frac{dw}{dt} + 2w = \cos (t)
\end{aligned}
$$

が成り立ち、 (1) と同じように考えて、これの一般解は

$$
\begin{aligned}
w = C e^{-t} \sin (t) + D e^{-t} \cos (t)
+ \frac{2}{5} \sin (t) + \frac{1}{5} \cos (t)
\ \ \ \ \ \ \ \ ( C, D \text{ は積分定数 } )
\end{aligned}
$$

であることがわかる。

以上より、与えられた微分方程式の一般解は

$$
\begin{aligned}
x
&= \frac{z+w}{2}
\\
&= A e^{-2t} + B + C e^{-t} \sin (t) + D e^{-t} \cos (t)
+ \frac{2}{5} \sin (t)
, \\
y
&= \frac{z-w}{2}
\\
&= A e^{-2t} + B - C e^{-t} \sin (t) - D e^{-t} \cos (t)
- \frac{1}{5} \cos (t)
\\
&( A, B, C, D \text{ は積分定数 } )
\end{aligned}
$$

である。よって、 $t \to - \infty$ で有界である解は

$$
\begin{aligned}
x
&= B + \frac{2}{5} \sin (t)
, \\
y
&= B - \frac{1}{5} \cos (t)
\\
&( B \text{ は任意定数 } )
\end{aligned}
$$

である。

### (3)
与えられた微分方程式はベルヌーイ方程式なので、
$y = 1/x$ とおくことで、線形な微分方程式が得られる：

$$
\begin{aligned}
\frac{dy}{dt}
&= - \frac{1}{x^2} \frac{dx}{dt}
\\
&= - \frac{1}{x^2} \frac{1}{2} \left( e^{-t} x^2 + x \right)
\\
&= - \frac{1}{2} \left( e^{-t} + \frac{1}{x} \right)
\\
&= - \frac{1}{2} \left( e^{-t} + y \right)
\\
\therefore \ \ 
2 \frac{dy}{dt} + y &= - e^{-t}
.
\end{aligned}
$$

この方程式に $y=f(t)e^{-t/2}$ を代入して整理すると、

$$
\begin{aligned}
\frac{df}{dt} &= - \frac{1}{2} e^{-\frac{1}{2}t}
\\
\therefore \ \ 
f(t) &= e^{-\frac{1}{2}t} + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{aligned}
$$

となるので、一般解

$$
\begin{aligned}
y(t)
&= \left( e^{-\frac{1}{2}t} + C \right) e^{-\frac{1}{2}t}
\\
&= e^{-t} + C e^{-\frac{1}{2}t}
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\\
\therefore \ \ 
x(t)
&= \frac{1}{e^{-t} + C e^{-\frac{1}{2}t}}
\\
&= \frac{e^t}{1 + C e^{\frac{1}{2}t}}
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{aligned}
$$

を得る。さらに、 $x(0)=1/2$ を使うと、

$$
\begin{aligned}
\frac{1}{1 + C} &= \frac{1}{2}
\\
\therefore \ \ 
C &= 1
\end{aligned}
$$

となるので、求める解は

$$
\begin{aligned}
x(t)
&= \frac{e^t}{1 + e^{\frac{1}{2}t}}
\end{aligned}
$$

である。