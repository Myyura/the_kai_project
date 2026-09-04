---
sidebar_label: "2014年8月実施 確率・統計 [1]"
tags:
  - Nagoya-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 名古屋大学 情報科学研究科 情報システム学専攻 2014年8月実施 確率・統計 [1]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

袋に赤玉2つと白玉5つの計7つの玉が入っている。袋から無作為に玉を1つずつ取り出す試行を、袋が空になるまで繰り返す。一度取り出した玉は袋に戻さない。2つ目の赤玉が出るときの試行回数を $X$ ( $2 \leq X \leq 7$ ) とする。以下の問いに答えよ。但し、答えは既約分数で示せ。

(1) 確率 $P(X = 3)$ を求めよ。

(2) 確率 $P(X \leq 4)$ を求めよ。

(3) 期待値 $E[X]$ を求めよ。

### 题目描述

袋中装有 $2$ 个红球和 $5$ 个白球，共 $7$ 个球。每次从袋中随机取出一个球，取出后不放回，重复试验直至袋空。令 $X$ 表示第二个红球被取出时的试验次数，因此 $2\le X\le7$。下列答案均写成最简分数。

1. 求 $P(X=3)$；
2. 求 $P(X\le4)$；
3. 求期望 $E[X]$。

## **Kai**

2個の赤玉が現れる位置の組は、 $\binom72=21$ 通りの中で等確率である。 $X=k$ となるには、2個目の赤玉が位置 $k$ にあり、1個目が位置 $1,\ldots,k-1$ のいずれかにあればよい。したがって、

$$
P(X=k)=\frac{k-1}{\binom72}=\frac{k-1}{21}
\qquad(k=2,\ldots,7).
$$

(1)

$$
\boxed{P(X=3)=\frac2{21}}.
$$

(2)

$$
P(X\leq4)
=\frac{\binom42}{\binom72}
=\frac6{21}
=\boxed{\frac27}.
$$

(3)

$$
\begin{aligned}
E[X]
&=\sum_{k=2}^7k\frac{k-1}{21}\\
&=\frac{2+6+12+20+30+42}{21}\\
&=\boxed{\frac{16}{3}}.
\end{aligned}
$$
