---
comments: false
title: 京都大学 理学研究科 地球惑星科学専攻 2023年度 基礎科目 問題1
tags:
  - Kyoto-University
---
# 京都大学 理学研究科 地球惑星科学専攻 2023年度 基礎科目 問題1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
### \[1\]
次の積分を計算せよ． 

$$
\int x \sqrt{1-x} \ \text{d}x
$$

### \[2\]
行列の対角成分の和をトレースと呼ぶ．$\boldsymbol{A}$ と $\boldsymbol{B}$ を $n \times n$ の正方行列とするとき，$\boldsymbol{A} \boldsymbol{B}$ と $\boldsymbol{B} \boldsymbol{A}$ のトレースが等しくなることを示せ． 

### \[3\]
次の行列の逆行列を求めよ． 

$$
\boldsymbol{C} = \begin{pmatrix}
3 & 0 & 5 & 0 \\ 0 & 8 & 0 & 2 \\ 2 & 0 & 3 & 0 \\ 0 & 2 & 0 & 1
\end{pmatrix}
$$

### \[4\]
次の微分方程式の一般解を求めよ． 

$$
\frac{d^2y}{dx^2} + \frac{dy}{dx} - 6y = e^{-3x}
$$

### \[5\]
以下の行列

$$
\boldsymbol{A} = \begin{pmatrix}
-2 & 1 \\
1 & -2
\end{pmatrix}
$$

について考える．$\boldsymbol{x}^t = (x_1, x_2)$ であるとき，以下の積分の値を求めよ．

$$
\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \exp (\boldsymbol{x}^t \boldsymbol{A} \boldsymbol{x})\ dx_1 dx_2
$$

ここで，上添え字の $t$ は転置を表す．なお，

$$
\int_{-\infty}^{\infty} \exp (-ax^2)\ dx = \sqrt{\frac{\pi}{a}}
$$

は，証明なしに用いてよい． 

## **Kai**
### \[1\]
$t=\sqrt{1-x}$ とおいて、次のように計算できる：

$$
\begin{aligned}
\int x \sqrt{1-x} dx
&= \int (1-t^2) t (-2tdt)
\\
&= 2 \int (t^4-t^2) dt
\\
&= \frac{2}{5}t^5 - \frac{2}{3}t^3 + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\\
&= \frac{2}{5}(1-x)^\frac{5}{2} - \frac{2}{3}(1-x)^\frac{3}{2} + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{aligned}
$$

### \[2\]
$\boldsymbol{A}, \boldsymbol{B}$ の $(i,j)$ 成分を $A_{ij}, B_{ij}$ とすると、

$\boldsymbol{A} \boldsymbol{B}, \boldsymbol{B} \boldsymbol{A}$ の $(i,j)$ 成分はそれぞれ

$$
\begin{aligned}
\left( \boldsymbol{A} \boldsymbol{B} \right)_{ij} &= \sum_k A_{ik} B_{kj}
\\
\left( \boldsymbol{B} \boldsymbol{A} \right)_{ij} &= \sum_k B_{ik} A_{kj}
\end{aligned}
$$

であり、
$\boldsymbol{A} \boldsymbol{B}, \boldsymbol{B} \boldsymbol{A}$ のトレースはそれぞれ

$$
\begin{aligned}
\mathrm{tr} \left( \boldsymbol{A} \boldsymbol{B} \right)
&= \sum_i \left( \boldsymbol{A} \boldsymbol{B} \right)_{ii}
\\
&= \sum_i \sum_k A_{ik} B_{ki}
\\
\mathrm{tr} \left( \boldsymbol{B} \boldsymbol{A} \right)
&= \sum_i \left( \boldsymbol{B} \boldsymbol{A} \right)_{ii}
\\
&= \sum_i \sum_k B_{ik} A_{ki}
\end{aligned}
$$

であるから、これらが等しいことがわかる。

### \[3\]

$$
\begin{aligned}
\begin{pmatrix} -3 & 0 & 5 & 0 \\ 0 & \frac{1}{4} & 0 & - \frac{1}{2} \\ 2 & 0 & -3 & 0 \\ 0 & -\frac{1}{2} & 0 & 2 \end{pmatrix}
\end{aligned}
$$

### \[4\]
まず、

$$
\begin{aligned}
\frac{d^2y}{dx^2} + \frac{dy}{dx} - 6y = 0
\end{aligned}
$$

に $y=e^{\lambda x}$ （ $\lambda$ は $x$ によらない定数）を代入すると、

$\lambda^2 + \lambda - 6 = (\lambda+3)(\lambda-2) = 0$ から

$\lambda=-3,2$ を得るので、この微分方程式の一般解は

$$
\begin{aligned}
y = c_1 e^{-3x} + c_2 e^{2x}
\ \ \ \ \ \ \ \ ( c_1, c_2 \text{ は積分定数 } )
\end{aligned}
$$

であることがわかる。

次に、与えられた微分方程式に $y=Axe^{-3x}$ （ $A$ は $x$ によらない定数）を代入すると、

$A=1/5$ を得るので、与えられた微分方程式の一般解は

$$
\begin{aligned}
y = c_1 e^{-3x} + c_2 e^{2x} + \frac{1}{5} xe^{-3x}
\ \ \ \ \ \ \ \ ( c_1, c_2 \text{ は積分定数 } )
\end{aligned}
$$

であることがわかる。

### \[5\]
$A$ の固有値は $-1,-3$ であり、それぞれに属する固有ベクトルは、

$$
\begin{aligned}
\boldsymbol{u}_1 = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \end{pmatrix}
, \ \ 
\boldsymbol{u}_2 = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ -1 \end{pmatrix}
\end{aligned}
$$

である。
そこで、

$$
\begin{aligned}
\boldsymbol{P} = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}
\end{aligned}
$$

とおくと、

$$
\begin{aligned}
\boldsymbol{P}^2 &= \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
,\\
\boldsymbol{P} \boldsymbol{A} \boldsymbol{P} &= \begin{pmatrix} -1 & 0 \\ 0 & -3 \end{pmatrix}
,\\
\det \boldsymbol{P} &= -1
\end{aligned}
$$

が成り立つ。
そこで、

$$
\begin{aligned}
\begin{pmatrix} y_1 \\ y_2 \end{pmatrix} = P \begin{pmatrix} x_1 \\ x_2 \end{pmatrix}
\end{aligned}
$$

とおいて、次のように計算できる：

$$
\begin{aligned}
\int_{-\infty}^\infty \int_{-\infty}^\infty \exp \left( \boldsymbol{x}^t \boldsymbol{A} \boldsymbol{x} \right) dx_1 dx_2
&= \int_{-\infty}^\infty \int_{-\infty}^\infty \exp \left( -y_1^2 -3y_2^2 \right) dy_1 dy_2
\\
&= \int_{-\infty}^\infty \exp \left( -y_1^2 \right) dy_1 \int_{-\infty}^\infty \exp \left( -3y_2^2 \right) dy_2
\\
&= \sqrt{\pi} \cdot \sqrt{\frac{\pi}{3}}
\\
&= \frac{\pi}{\sqrt{3}}
\end{aligned}
$$