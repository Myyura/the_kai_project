---
comments: false
description: 東京大学 大学院 工学系研究科 2023年度 数学 第1問
keywords: Tokyo-University, 2023
---

## **Source**
[東京大学 大学院 工学系研究科 2023年度 数学 第1問](https://www.t.u-tokyo.ac.jp/soe/admission/general-past)

## **Description**

## **Kai**
### I.

$$
\begin{align}
\lim_{x \to 0} \frac{b^x - c^x}{ax}
&= \lim_{x \to 0} \frac{e^{x \log b} - e^{x \log c}}{ax}
\\
&= \lim_{x \to 0}
\frac{\log b \cdot e^{x \log b} - \log c \cdot e^{x \log c}}{a}
\\
&= \frac{\log b - \log c}{a}
\\
&= \frac{1}{a} \log \frac{b}{c}
\end{align}
$$

### II.
#### 1.
$x$ の関数 $f(x)$ を使って、 $y=f(x)x$ を (2) に代入すると、

$$
\begin{align}
\frac{df(x)}{dx} x &= \log x
\\
\therefore \ \ 
f(x)
&= \int \frac{\log x}{x} dx
\\
&= \int \left( \log x \right)' \log x dx
\\
&= \left( \log x \right)^2 - \int \frac{\log x}{x} dx
\\
\therefore \ \ 
f(x) &= \frac{1}{2} \left( \log x \right)^2 + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{align}
$$

となるので、求める一般解は

$$
\begin{align}
y &= \frac{1}{2} x \left( \log x \right)^2 + Cx
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{align}
$$

である。

#### 2.
まず、

$$
\begin{align}
\frac{d^2y}{dx^2} - \frac{dy}{dx} - 2y = 0
\end{align}
$$

に $y=e^{\lambda x}$ （ $\lambda$ は $x$ によらない定数）
を代入すると、

$$
\begin{align}
\lambda^2 - \lambda - 2 &= 0
\\
(\lambda - 2)(\lambda + 1) &= 0
\\
\therefore \ \ \lambda &= 2, -1
\end{align}
$$

となるので、この微分方程式の一般解は

$$
\begin{align}
y = A e^{2x} + B e^{-x}
\ \ \ \ \ \ \ \ ( A, B \text{ は積分定数 } )
\end{align}
$$

である。

次に、 (3) に $y=Cx^2+Dx+E$ （ $C,D,E$ は $x$ によらない定数） を代入すると、

$$
\begin{align}
C = -1, \ \ D = 0, \ \ E = -1
\end{align}
$$

を得るので、

$$
\begin{align}
y = -x^2 - 1
\end{align}
$$

は (3) の特殊解である。

以上より、 (3) の一般解は

$$
\begin{align}
y = A e^{2x} + B e^{-x} -x^2 - 1
\ \ \ \ \ \ \ \ ( A, B \text{ は積分定数 } )
\end{align}
$$

である。

### III.

$$
\begin{align}
\frac{a_n}{a_{n+1}}
&= \frac{n!}{n^{n + \frac{1}{2}} e^{-n}}
\cdot \frac{(n+1)^{n + \frac{3}{2}} e^{-n-1}}{(n+1)!}
\\
&= \frac{1}{e} \cdot \left( 1 + \frac{1}{n} \right)^\frac{1}{2}
\cdot \left( 1 + \frac{1}{n} \right)^n
\\
&\xrightarrow{n \to \infty} 1
\end{align}
$$