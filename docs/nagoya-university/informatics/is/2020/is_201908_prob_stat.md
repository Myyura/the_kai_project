---
sidebar_label: "2019年8月実施 確率・統計 [1]–[2]"
tags:
  - Nagoya-University
  - Probability-Statistics.Stochastic-Processes.Waiting-Time-for-Runs
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Basics.Marginal-Densities-and-Independence-Test
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2019年8月実施 確率・統計 [1]–[2]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), [思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### \[1\]

#### 日本語

表 (head) が出る確率と裏 (tail) が出る確率がともに $1/2$ であるコイン (coin) 1枚を連続して投げ、『裏表表』、『表表表』のような事前に決めた系列 (sequence) が出現したら終了するものとする。このとき、以下の問いに答えよ。

(1) 『裏表表』という系列に決めた場合に3回で終了する確率、すなわち、1回目が裏,2回目が表、3回目が表となる確率を求めよ。

(2) 『裏表表』という系列に決めた場合にちょうど4回で終了する確率を求めよ.

(3) 『表表表』という系列に決めた場合にちょうど4回で終了する確率を求めよ.

(4) 初めて表が出るまでにコインを投げる回数の期待値を $E(\text{表})$ と書くとき $E(\text{表})$ を求めよ。

(5) 初めて2回続けて表が出るまでにコインを投げる回数の期待値を $E(\text{表表})$ と書くとき $E(\text{表表})$ を求めよ。なお、初めて表が出た直後に表が出た場合はその時点で2回続けて表が出たことになり、裏が出た場合はその後2回続けて表が出るまでにコインを投げる回数の期待値が $E(\text{表表})$ と等しくなることから以下の式が成立する.

$$
E(\text{表表}) = \frac{E(\text{表})+1}{2} + \frac{E(\text{表})+1+E(\text{表表})}{2}
$$

(6) 『表表表』という系列に決めた場合のコインを投げる回数の期待値を求めよ.

#### 题目描述

连续投掷一枚公平硬币，正面与反面出现的概率均为 $1/2$。事先指定一个序列，例如“反正正”或“正正正”；一旦连续投掷结果中首次出现该序列，试验即结束。

1. 指定序列为“反正正”时，求试验在第 $3$ 次投掷后结束的概率，即前三次依次为反面、正面、正面的概率；
2. 指定序列为“反正正”时，求试验恰在第 $4$ 次投掷后结束的概率；
3. 指定序列为“正正正”时，求试验恰在第 $4$ 次投掷后结束的概率；
4. 以 $E(\text{正})$ 表示首次出现正面前所需投掷次数的期望，求 $E(\text{正})$；
5. 以 $E(\text{正正})$ 表示首次出现连续两个正面前所需投掷次数的期望，求 $E(\text{正正})$。若首次出现正面后的下一次仍为正面，此时即完成连续两个正面；若下一次为反面，则从此以后完成连续两个正面所需投掷次数的期望仍为 $E(\text{正正})$。因此可使用

   $$
   E(\text{正正})
   =\frac{E(\text{正})+1}{2}
   +\frac{E(\text{正})+1+E(\text{正正})}{2};
   $$

6. 指定序列为“正正正”时，求试验结束前投掷次数的期望。

### \[2\]

#### 日本語

確率変数X,Yの同時確率密度関数 $f_{X,Y}(x,y)$ が次式で与えられている。ただし、 $a$ は定数である。このとき、以下の問いに答えよ。

$$
f_{X,Y}(x,y) = \begin{cases} a(x^2 - y^2)e^{-x} & (0 \leq x, -x \leq y \leq x) \\ 0 & (otherwise) \end{cases}
$$

(1) $f_{X,Y}(x,y)$ が最大となる $x, y$ の値を求めよ。

(2) 周辺密度関数 $f_X(x)$ を定数 $a$ を用いて表せ。

(3) 定数 $a$ の値を求めよ。

(4) 確率変数 $X$ の期待値 $\mu_X$ を求めよ。

#### 题目描述

随机变量 $X,Y$ 的联合概率密度函数为

$$
f_{X,Y}(x,y)=
\begin{cases}
a(x^2-y^2)e^{-x},&0\le x,\ -x\le y\le x,\\
0,&\text{其他},
\end{cases}
$$

其中 $a$ 为常数。

1. 求使 $f_{X,Y}(x,y)$ 取得最大值的 $x,y$；
2. 用常数 $a$ 表示 $X$ 的边缘概率密度函数 $f_X(x)$；
3. 求 $a$；
4. 求 $X$ 的期望 $\mu_X$。

## **Kai**

### \[1\]
#### (1)

$$
  \begin{aligned}
  \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{8}
  \end{aligned}
$$

#### (2)

第4投で初めて「裏表表」が完成する列は「表裏表表」と「裏裏表表」の2通りである。したがって確率は $2/16=1/8$ となる。

$$
  \begin{aligned}
  1 \cdot \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{8}
  \end{aligned}
$$

#### (3)

$$
  \begin{aligned}
  \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2}
  = \frac{1}{16}
  \end{aligned}
$$

#### (4)
求める期待値 $E(\text{表})$ は、

$$
\begin{aligned}
E \left( \text{表} \right)
=
1 \cdot \frac{1}{2}
+ 2 \cdot \left( \frac{1}{2} \right)^2
+ 3 \cdot \left( \frac{1}{2} \right)^3
+ \cdots
\end{aligned}
$$

であるが、両辺 $1/2$ 倍すると、

$$
\begin{aligned}
\frac{1}{2} E \left( \text{表} \right)
=
1 \cdot \left( \frac{1}{2} \right)^2
+ 2 \cdot \left( \frac{1}{2} \right)^3
+ 3 \cdot \left( \frac{1}{2} \right)^4
+ \cdots
\end{aligned}
$$

となる。
1番目の式から2番目の式を引くと、

$$
\begin{aligned}
\frac{1}{2} E \left( \text{表} \right)
&=
\frac{1}{2}
+ \left( \frac{1}{2} \right)^2
+ \left( \frac{1}{2} \right)^3
+ \cdots
\\
&=
\frac{1}{2} \frac{1}{1 - \frac{1}{2}}
\\
&=
1
\end{aligned}
$$

となるから、

$$
\begin{aligned}
E \left( \text{表} \right) = 2
\end{aligned}
$$

を得る。

#### (5)
与えられた式を整理して、

$$
\begin{aligned}
E \left( \text{表表} \right)
&=
2 E \left( \text{表} \right) + 2
\\
&=
6
\end{aligned}
$$

を得る。

#### (6)

末尾に連続している表の個数が0, 1, 2である状態から、初めて「表表表」が完成するまでの追加投数の期待値をそれぞれ $E_0,E_1,E_2$ とする。次の1投について場合分けすると、

$$
\begin{aligned}
E_0&=1+\frac12E_0+\frac12E_1,\\
E_1&=1+\frac12E_0+\frac12E_2,\\
E_2&=1+\frac12E_0.
\end{aligned}
$$

第1式から $E_0=2+E_1$ である。また、

$$
E_1=1+\frac12E_0+\frac12\left(1+\frac12E_0\right)
=\frac32+\frac34E_0.
$$

したがって、

$$
E_0=2+\frac32+\frac34E_0
\quad\Longrightarrow\quad
\frac14E_0=\frac72,
$$

よって求める期待値は

$$
\boxed{E_0=14}.
$$

### \[2\]
#### (1)

$f_{X,Y}$ は確率密度であり恒等的に $0$ ではないから $a>0$ である。固定した $x\geq0$ に対して $x^2-y^2$ は $y=0$ で最大となるため、全体の最大値を求めるには $a x^2e^{-x}$ を $x\geq0$ で最大化すればよい。そこで微分を計算する。

$\frac{d}{dx} (x^2 e^{-x}) = 2x e^{-x} - x^2 e^{-x} = x e^{-x} (2 - x)$ .

この導関数が 0 になるのは $x = 0$ または $x = 2$ の時である。
$x=0$ では $f_{X,Y}(x,y) = 0$ となるので、 $x=2$ が最大値を与える可能性がある。
$x = 2$ の時、 $y = 0$ である。
よって、 $x = 2$ , $y = 0$ が $f_{X,Y}(x,y)$ を最大にする。

#### (2)

$$
\begin{aligned}
f_X(x)
&=
a e^{-x} \int_{-x}^x ( x^2 - y^2 ) dy
\\
&=
\frac{4}{3} a x^3 e^{-x}
\end{aligned}
$$

#### (3)

$$
\begin{aligned}
1
&=
\int_0^\infty f_X(x) dx
\\
&=
\frac{4}{3} a \int_0^\infty x^3 e^{-x} dx
\\
&=
8a
\end{aligned}
$$

であるから、

$$
\begin{aligned}
a = \frac{1}{8}
\end{aligned}
$$

である。

#### (4)

$$
\begin{aligned}
\mu_x
&=
\int_0^\infty x f_X(x) dx
\\
&=
\frac{1}{6} \int_0^\infty x^4 e^{-x} dx
\\
&=
4
\end{aligned}
$$
