---
sidebar_label: "2023年度 基礎科目 [1] ~ [3]"
sidebar_position: 1
tags:
  - Kyoto-University
---
# 京都大学 理学研究科 数学・数理解析専攻 2024年度 基礎科目 \[1\] ~\[3\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
### \[2\]
$a$ を実数とし, 実 $2 \times 4$ 行列 $A, B$ を

$$
A = \begin{pmatrix}
1 & 0 & a & a+1 \\ 0 & 1 & 1 & 1
\end{pmatrix},
\ \ \ 
B = \begin{pmatrix}
0 & 0 & 1 & 1 \\ -1 & 3 & 3-a & 0
\end{pmatrix}
$$

と定める. これらを用いて, 線形写像 $f: \mathbb{R}^4 \rightarrow \mathbb{R}^2$, $g: \mathbb{R}^4 \rightarrow \mathbb{R}^2$ を $f(x) = Ax$, $g(x) = Bx \ \ (x \in \mathbb{R}^4 )$ と定義する. このとき,

$$
\text{dim}(\text{Ker}(f) \cap \text{Ker}(g)),\  \text{dim}(\text{Ker}(f) + \text{Ker}(g))
$$

を求めよ.

## **Kai**
### \[2\]
$\mathrm{Ker}(f)$ を求めるため

$$
\begin{aligned}
\begin{pmatrix} 1 & 0 & a & a+1 \\ 0 & 1 & 1 & 1 \end{pmatrix}
\begin{pmatrix} \alpha \\ \beta \\ \gamma \\ \delta \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、

$$
\begin{aligned}
\alpha &= -a \gamma - (a+1) \delta
, \\
\beta &= - \gamma - \delta
\end{aligned}
$$

となるので、

$$
\begin{aligned}
u_1 = \begin{pmatrix} -a \\ -1 \\ 1 \\ 0 \end{pmatrix}
, \ \ 
u_2 = \begin{pmatrix} -(a+1) \\ -1 \\ 0 \\ 1 \end{pmatrix}
\end{aligned}
$$

は $\mathrm{Ker}(f)$ の基底であることがわかる。

また、 $\mathrm{Ker}(g)$ を求めるため

$$
\begin{aligned}
\begin{pmatrix} 0 & 0 & 1 & 1 \\ -1 & 3 & 3-a & 0 \end{pmatrix}
\begin{pmatrix} \alpha \\ \beta \\ \gamma \\ \delta \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、

$$
\begin{aligned}
\delta &= - \gamma
, \\
\alpha &= 3 \beta + (3-a) \gamma
\end{aligned}
$$

となるので、

$$
\begin{aligned}
v_1 = \begin{pmatrix} 3 \\ 1 \\ 0 \\ 0 \end{pmatrix}
, \ \ 
v_2 = \begin{pmatrix} 3-a \\ 0 \\ 1 \\ -1 \end{pmatrix}
\end{aligned}
$$

は $\mathrm{Ker}(g)$ の基底であることがわかる。

そこで、実数 $r,s,t$ について
$r u_1 = s v_1 + t v_2$ が成り立つとすると
$r=s=t=0$ を得るので、 $u_1 \notin \mathrm{Ker}(g)$ がわかる。

同様に、 $r u_2 = s v_1 + t v_2$ が成り立つとすると
$r=s=t=0$ を得るので、 $u_2 \notin \mathrm{Ker}(g)$ もわかる。

よって、

$$
\begin{aligned}
\mathrm{dim} \left( \mathrm{Ker}(f) \cap \mathrm{Ker}(g) \right)
&= 0
, \\
\mathrm{dim} \left( \mathrm{Ker}(f) + \mathrm{Ker}(g) \right)
&= 4
\end{aligned}
$$

がわかる。