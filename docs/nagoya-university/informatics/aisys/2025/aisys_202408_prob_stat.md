---
sidebar_label: "2024年8月実施 確率・統計"
tags:
  - Nagoya-University
  - Probability-And-Statistics
---
# 名古屋大学 情報学研究科 知能システム学専攻 2024年8月実施 確率・統計

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**
解の導出過程も書くこと。

### \[1\]
次のように作られたコインが1つずつある。

- コインA: 表が出る確率が $1/3$, 裏が出る確率が $2/3$.
- コインB: 表が出る確率が $2/3$, 裏が出る確率が $1/3$.

以下の問いに既約分数で答えよ。

(a) コインAを $5$ 回投げるとき、表が $2$ 回だけ出る確率を求めよ。

(b) コインAを $4$ 回投げるとき、表が $2$ 回以上連続して出る確率を求めよ。

(c) コインを1つ無作為に選んで、$4$ 回投げて $1$ 回だけ表が出た場合、このコインがコインAである確率を求めよ。

### \[2\]
確率変数 $X$ は次の確率密度関数 $f(x)$ を持つとする。ただし、$k$ は定数とする。

$$
f(x) = \begin{cases}
  kx(2-x) &(0 \leq x \leq 2) \\
  0 &\text{otherwise} 
\end{cases}
$$

以下の問いに答えよ。

(a) 定数 $k$ を求めよ。

(b) 累積分布関数 $F(x)$ を求めよ。

(c) $F(x) = 1/2$ および $F(x) = 5/32$ のとき、それぞれに対応する $x$ の値を求めよ。

(d) 確率変数 $Y$ を $Y = 2X+1$ と定義する. $Y$ の確率密度関数 $g(y)$ を求めよ。

## **Kai**
### \[1\]
#### (a)

$$
  \begin{aligned}
  {}_5 \mathrm{C}_2 \left( \frac{1}{3} \right)^2 \left( \frac{2}{3} \right)^3
  = \frac{2^4 \cdot 5}{3^5}
  = \frac{80}{243}
  \end{aligned}
$$

#### (b)
表が $2$ 回以上連続して出ないのは、裏裏裏裏、表裏裏裏、裏表裏裏、裏裏表裏、裏裏裏表、表裏表裏、裏表裏表の7通りであり、これらの確率の和は

$$
  \begin{aligned}
  \left( \frac{2}{3} \right)^4
  + 4 \cdot \frac{1}{3} \cdot \left( \frac{2}{3} \right)^3
  + 2 \cdot \left( \frac{1}{3} \right)^2 \left( \frac{2}{3} \right)^2
  = \frac{2^4 + 2^5 + 2^3}{3^4}
  = \frac{56}{81}
  \end{aligned}
$$

である。よって、求める確率は

$$
  \begin{aligned}
  1 - \frac{56}{81}
  = \frac{25}{81}
  \end{aligned}
$$

である。

#### (c)
コインAを $4$ 回投げて $1$ 回だけ表が出る確率は

$$
  \begin{aligned}
  4 \cdot \frac{1}{3} \cdot \left( \frac{2}{3} \right)^3
  = \frac{32}{81}
  \end{aligned}
$$

であり、コインBを $4$ 回投げて $1$ 回だけ表が出る確率は

$$
  \begin{aligned}
  4 \cdot \frac{2}{3} \cdot \left( \frac{1}{3} \right)^3
  = \frac{8}{81}
  \end{aligned}
$$

である。よって、求める確率は

$$
  \begin{aligned}
  \frac{\frac{1}{2} \cdot \frac{32}{81}}
  {\frac{1}{2} \cdot \frac{32}{81} + \frac{1}{2} \cdot \frac{8}{81}}
  = \frac{4}{5}
  \end{aligned}
$$

である。

### \[2\]
#### (a)

$$
1=\int_{0}^{2}k\,x(2-x)\,dx
 =k\int_{0}^{2}(2x-x^{2})\,dx
 =k\Big[x^{2}-\frac{x^{3}}{3}\Big]_{0}^{2}
 =k\Big(4-\frac{8}{3}\Big)
 =k\cdot \frac{4}{3}.
$$

したがって

$$
\boxed{k=\frac{3}{4}}.
$$

#### (b)

$$
F(x)=P(X\le x)=
\begin{cases}
0, & x<0,\\[4pt]
\displaystyle \int_{0}^{x}\frac{3}{4}\,t(2-t)\,dt
=\frac{3x^{2}-x^{3}}{4}, & 0\le x\le 2,\\[8pt]
1, & x\ge 2.
\end{cases}
$$

#### (c)

* $F(x)=\frac12$:

  $$
  \frac{3x^{2}-x^{3}}{4}=\frac12
  \ \Rightarrow\ x^{3}-3x^{2}+2=0
  =(x-1)(x^{2}-2x-2)=0.
  $$

  区間 $[0,2]$ の解は $\boxed{x=1}$。

* $F(x)=\frac{5}{32}$:

  $$
  \frac{3x^{2}-x^{3}}{4}=\frac{5}{32}
  \ \Rightarrow\ 8x^{3}-24x^{2}+5=0.
  $$

  $x=\tfrac12$ が解（他の解は $[0,2]$ 外）。よって $\boxed{x=\tfrac12}$。

### (d)
単調変換より $x=\dfrac{y-1}{2}$, $\left|\dfrac{dx}{dy}\right|=\dfrac12$。

$$
g(y)=
\begin{cases}
f\!\left(\dfrac{y-1}{2}\right)\cdot \dfrac12
=\displaystyle \frac{3}{32}\,(y-1)(5-y), & 1\le y\le 5,\\[8pt]
0, & \text{otherwise}.
\end{cases}
$$
