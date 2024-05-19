---
comments: false
title: 名古屋大学 情報学研究科 知能システム学専攻 2021年8月実施 確率・統計
tags:
  - Nagoya-University
---
# 名古屋大学 情報学研究科 知能システム学専攻 2021年8月実施 確率・統計

## **Author**
Miyake

## **Description**

## **Kai**
### \[1\]
配置する点の位置を、線分の一端からの長さで表す。

#### (1)
点の位置を $X$ とすると、
切断後の線分の中で少なくとも1つの長さが $0.7$ より長くなるのは、
$0 \lt X \lt 0.3$ または $0.7 \lt X \lt 1$ のときなので、
求める確率は $0.6$ である。

#### (2)
2点の位置を $X_1, X_2$ とする。
切断後の線分の中で少なくとも1つの長さが $0.5$ より長くなるのは

$$
\begin{aligned}
&\text{ (i) } 0 \lt X_1 \lt 0.5 \text{ かつ } 0 \lt X_2 \lt 0.5
\text{ : 確率 } 0.25
\\
&\text{ (ii) } 0 \lt X_1 \lt 0.5 \text{ かつ } 0.5 + X_1 \lt X_2 \lt 1
\text{ : 確率 } 0.125
\\
&\text{ (iii) } 0.5 \lt X_1 \lt 1 \text{ かつ } 0.5 \lt X_2 \lt 1
\text{ : 確率 } 0.25
\\
&\text{ (iv) } 0.5 \lt X_1 \lt 1 \text{ かつ } 0 \lt X_2 \lt X_1 - 0.5
\text{ : 確率 } 0.125
\end{aligned}
$$

のときなので、求める確率は $0.75$ である。

### \[2\]
#### (1)
$X$ の確率密度関数 $f(x)$ は、 $1 \leq x \leq 3$ において、

$$
  \begin{aligned}
  f(x) = \frac{1}{2}
  \end{aligned}
$$

であり、それ以外では $0$ である。

#### (2)
$Y$ の確率密度関数 $g(y)$ は、 $0$ でないのは $3 \leq y \leq 11$ のときであり、このとき

$$
\begin{aligned}
g(y)
&= f(x) \left| \frac{dx}{dy} \right|
\\
&= \frac{1}{2} \cdot \frac{1}{2 \sqrt{y-2}}
\\
&= \frac{1}{4 \sqrt{y-2}}
\end{aligned}
$$

である。

### \[3\]
#### (1)

$$
\begin{aligned}
P(X) = {}_n \mathrm{C}_X \left( \frac{1}{6} \right)^X \left( \frac{5}{6} \right)^{n-X}
\end{aligned}
$$

#### (2)
サイコロを振る回数を $n$ とすると、求める条件は、

$$
\begin{aligned}
\left( \frac{5}{6} \right)^n
&\geq 0.4
\\
&= \frac{2}{5}
\\
n \log_e \frac{5}{6} & \geq \log_e \frac{2}{5}
\\
n &\leq \frac{\log_e \frac{2}{5}}{\log_e \frac{5}{6}}
\\
&= \frac{\log_e 5 - \log_e 2}{\log_e 6 - \log_e 5}
\\
&\approx \frac{1.6094 - 0.6931}{1.7918 - 1.6094}
\\
&\approx 5.02
\end{aligned}
$$

であるから、5回まで振ることができる。

#### (3)
サイコロを10回振ったとき1の目が出る回数が1回以下となる確率を $p$ とすると、

$$
\begin{aligned}
p
&= \left( \frac{5}{6} \right)^{10}
+ 10 \cdot \frac{1}{6} \cdot \left( \frac{5}{6} \right)^9
\\
&= \left( \frac{5}{6} \right)^9 \cdot \frac{5}{2}
\end{aligned}
$$

なので、

$$
\begin{aligned}
\log_e p
&= 9 (\log_e 5 - \log_e 6) + \log_e 5 - \log_e 2
\\
&= 10 \log_e 5 - 9 \log_e 6 - \log_e 2
\\
&\approx -0.7253
\end{aligned}
$$

である。
一方、

$$
\begin{aligned}
\log_e 0.5
&= \log_e \frac{1}{2}
\\
&= - \log_e 2
\\
&\approx - 0.6931
\end{aligned}
$$

である。
よって、

$$
\begin{aligned}
\log_e p \lt \log_e 0.5
\end{aligned}
$$

であり、 $\log_e x$ は単調増加関数なので、 $p$ は $0.5$ 以上ではない。