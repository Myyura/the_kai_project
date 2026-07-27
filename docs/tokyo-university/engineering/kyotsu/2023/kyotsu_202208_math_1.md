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

### 题目描述

原 Description 仅提供 2023 年数学原卷链接，具体题干缺失。根据本地 Kai，可以确认：

1. 第一部分要求计算极限
   $$
   \lim_{x\to0}\frac{b^x-c^x}{ax},
   $$
   其中 Kai 使用对数和洛必达法则；原题对参数 $a,b,c$ 的取值条件未保存在本地。
2. 第二部分含两个微分方程：
   - 第一小问令 $y=x f(x)$ 后得到 $x f'(x)=\log x$，并要求一般解；Kai 得到
     $y=\tfrac12x(\log x)^2+Cx$。原方程 (2) 的完整书写形式缺失。
   - 第二小问的齐次算子为 $y''-y'-2y$，并以二次多项式作待定特解；Kai 给出非齐次方程 (3) 的一般解
     $y=Ae^{2x}+Be^{-x}-x^2-1$。原方程右端未直接保存在本地，故不补写。
3. 第三部分研究数列
   $$
   a_n=\frac{n!}{n^{\,n+1/2}e^{-n}},
   $$
   本地解答计算 $a_n/a_{n+1}$ 并证明其极限为 $1$；Kai 未保存原题是否还有进一步要求。

#### 考点

- 指数函数极限：把 $b^x,c^x$ 写成自然指数并用一阶展开或洛必达法则求极限。
- 一阶线性微分方程：通过 $y=xf(x)$ 降低方程结构并积分求一般解。
- 常系数非齐次二阶方程：由特征方程求齐次解，再用待定系数法求多项式特解。
- 阶乘数列的渐近比值：化简相邻项之比并使用 $(1+1/n)^n\to e$。

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
