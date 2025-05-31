---
sidebar_label: '2022年8月実施 数学 第1問'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2022年8月実施 数学 第1問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

[2023年度大学院入学試験問題 数学](https://github.com/Myyura/the_kai_project_assets/blob/2672b44819e556e6b7835902e6d69059ff935039/kakomonn/tokyo_university/engineering/Description/M_J_E_2023.pdf)

## **Kai**
### I.

$$
\begin{aligned}
\lim_{x \to 0} \frac{b^x - c^x}{ax}
&= \lim_{x \to 0} \frac{e^{x \log b} - e^{x \log c}}{ax}
\\
&= \lim_{x \to 0}
\frac{\log b \cdot e^{x \log b} - \log c \cdot e^{x \log c}}{a}
\\
&= \frac{\log b - \log c}{a}
\\
&= \frac{1}{a} \log \frac{b}{c}
\end{aligned}
$$

### II.
#### 1.
$x$ の関数 $f(x)$ を使って、 $y=f(x)x$ を (2) に代入すると、

$$
\begin{aligned}
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
\end{aligned}
$$

となるので、求める一般解は

$$
\begin{aligned}
y &= \frac{1}{2} x \left( \log x \right)^2 + Cx
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{aligned}
$$

である。

#### 2.
まず、

$$
\begin{aligned}
\frac{d^2y}{dx^2} - \frac{dy}{dx} - 2y = 0
\end{aligned}
$$

に $y=e^{\lambda x}$ （ $\lambda$ は $x$ によらない定数）
を代入すると、

$$
\begin{aligned}
\lambda^2 - \lambda - 2 &= 0
\\
(\lambda - 2)(\lambda + 1) &= 0
\\
\therefore \ \ \lambda &= 2, -1
\end{aligned}
$$

となるので、この微分方程式の一般解は

$$
\begin{aligned}
y = A e^{2x} + B e^{-x}
\ \ \ \ \ \ \ \ ( A, B \text{ は積分定数 } )
\end{aligned}
$$

である。

次に、 (3) に $y=Cx^2+Dx+E$ （ $C,D,E$ は $x$ によらない定数） を代入すると、

$$
\begin{aligned}
C = -1, \ \ D = 0, \ \ E = -1
\end{aligned}
$$

を得るので、

$$
\begin{aligned}
y = -x^2 - 1
\end{aligned}
$$

は (3) の特殊解である。

以上より、 (3) の一般解は

$$
\begin{aligned}
y = A e^{2x} + B e^{-x} -x^2 - 1
\ \ \ \ \ \ \ \ ( A, B \text{ は積分定数 } )
\end{aligned}
$$

である。

### III.

$$
\begin{aligned}
\frac{a_n}{a_{n+1}}
&= \frac{n!}{n^{n + \frac{1}{2}} e^{-n}}
\cdot \frac{(n+1)^{n + \frac{3}{2}} e^{-n-1}}{(n+1)!}
\\
&= \frac{1}{e} \cdot \left( 1 + \frac{1}{n} \right)^\frac{1}{2}
\cdot \left( 1 + \frac{1}{n} \right)^n
\\
&\xrightarrow{n \to \infty} 1
\end{aligned}
$$