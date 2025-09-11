---
sidebar_label: "2021年8月実施 確率・統計"
tags:
  - Nagoya-University
  - Probability-And-Statistics
---
# 名古屋大学 情報学研究科 知能システム学専攻 2021年8月実施 確率・統計

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
解の導出過程も書くこと、問題を解く上で必要なら表に示す対数の値を用いてもよい。

### \[1\]
長さ $1$ の線分上の無作為に選ばれた位置に点を配置し、この点で線分を切断する。切断後の全ての線分の長さは $0$ より大きいとする。このとき、以下の問いに答えよ。

(1) 点を1つ配置し、線分を切断して2つに分ける、切断後の線分の中で少なくとも1つの長さが $0.7$ より長くなる確率を求めよ。

(2) 点を2つ配置し、線分を切断して3つに分ける. 切断後の線分の中で少なくとも1つの長さが $0.5$ より長くなる確率を求めよ。

### \[2\]
確率変数 $x$ は区間 $[1,3]$ における連続一様分布に従う。

(1) $X$ の確率密度関数を書け。

(2) $Y = X^2 + 2$ とおくとき $Y$ の確率密度関数を求めよ。

### \[3\]
$1$ から $6$ の目が全て同一の確率で出るサイコロがある。

(1) サイコロを $n$ 回振ったとき $1$ の目が出る回数を $X$ とおく、$1$ の目が $X$ 回出る確率 $P(X)$ を書け。

(2) $1$ の目が全く出ない確率を $0.4$ 以上とするためには、サイコロを何回まで振ることができるか。

(3) サイコロを $10$ 回振ったとき、$1$ の目が出る回数が $1$ 回以下となる確率は $0.5$ 以上になるか、理由を添えて答えよ。

##### <center> 对数 $\log_e x$ の値

|$\log_e 2$|$\log_e 3$|$\log_e 4$|$\log_e 5$|$\log_e 6$|$\log_e 7$|$\log_e 8$|$\log_e 9$|
|-|-|-|-|-|-|-|-|
|$0.6931$|$1.0986$|$1.3863$|$1.6094$|$1.7918$|$1.9459$|$2.0794$|$2.1972$|


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