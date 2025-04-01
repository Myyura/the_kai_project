---
sidebar_label: "数学 第3問"
tags:
  - Tokyo-University
---
# 東京大学 情報理工学研究科 2022年度 数学 第3問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
$xy$平面上に、$0<x<1$かつ$0<y<1$で定義される領域$R$を考える．$R$上にランダムに1点を選び、それを点$A$とする．ただし,点$A$は$R$上に一様に分布するとする．図に表すように,点$A$から$y$軸への垂線を$AB$,点$A$から$x$軸への垂線を$AC$とする．原点を$O$としたとき、長方形$OCAB$を$\lceil$点$A$の長方形$\rfloor$と呼ぶ．また、点$A$の長方形の面積を表す確率変数を$S$とする．以下の問いに答えよ．

(1)、$S$の期待値を求めよ．

(2)、$S\leq r$となる確率を求めよ．ただし$0<r<1$とする．

(3)、$S$の確率密度関数を求めよ．

再び、領域$R$を考える．$n$を正の整数とする．$R$上にランダムに$n$点を選び,それらを点$A_{1},A_{2},...,A_{n}$とする．ただし、各点は$R$上に一様に分布し、$i\neq j$である$A_{i}$と$A_{j}$は独立に選ばれるとする．次の問いに答えよ．

(4)、点$A_{i}$の長方形の面積を表す確率変数を$S_{i}$とする．$Z$を$S_{1},S_{2},...,S_{n}$の最小値を表す確率変数とする．この時、$Z$の確率密度関数を求めよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/kyotsu_2022_math_3_p1.png" width="300" height="300" alt=""/>
</figure>

## **Kai**
確率を $P$ ，期待値を $E$ で表す。

### (1)
A の座標を $(X,Y)$ とすると、 $X,Y$ は互いに独立な確率変数であり、
それぞれ $0$ から $1$ までの一様分布に従う。
よって、求める期待値は、

$$
\begin{aligned}
E(S)
&= E(XY)
\\
&= E(X)E(Y)
\\
&= \frac{1}{4}
\end{aligned}
$$

### (2)
求める確率は、

$$
\begin{aligned}
P(S \leq r)
&= r + \int_r^1 \frac{r}{x} dx
\\
&= r + r \left[ \log x \right]_r^1
\\
&= r - r \log r
\end{aligned}
$$

### (3)
$S$ の確率密度関数 $f(s)$ は、 $0 \lt s \lt 1$ では

$$
\begin{aligned}
f(s)
&= \frac{d}{ds} P(S \leq s)
\\
&= - \log s
\end{aligned}
$$

であり、それ以外では $0$ である。

### (4)
$0 \lt z \lt 1$ について

$$
\begin{aligned}
P(Z \leq z)
&= 1 - P(Z \gt z)
\\
&= 1 - P(S_1 \gt z \text{ and } S_2 \gt z \text{ and } \cdots
\text{ and } S_n \gt z )
\\
&= 1 - P(S_1 \gt z) P(S_2 \gt z) \cdots P(S_n \gt z)
\\
&= 1 - \left( 1 - z + z \log z \right)^n
\end{aligned}
$$

よって、求める確率密度関数 $g(z)$ は、

$$
\begin{aligned}
g(z)
&= \frac{d}{dz} P(Z \leq z)
\\
&= -n \log z \left( 1 - z + z \log z \right)^{n-1}
\end{aligned}
$$

である。
また、 $z \lt 0, \ z \gt 1$ では $g(z)=0$ である。