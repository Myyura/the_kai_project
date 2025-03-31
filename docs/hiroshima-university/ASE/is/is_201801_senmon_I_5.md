---
sidebar_label: "2018年1月実施 専門科目I 問題5"
sidebar_position: 5
tags:
  - Hiroshima-University
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2018年1月実施 専門科目I 問題5


## **Author**
祭音Myyura

## **Description**
(1) $(a+b)^5$ を展開したとき、$a^3b^2$ の項の係数を求めよ。

(2) 以下の等式の $X_1$, $X_2$, $X_3$ の各係数値を求めよ。

$$
(a+b)^n = X_0 a^n + X_1 a^{n-1}b + X_2 a^{n-2}b^2 + X_3 a^{n-3}b^3 + \cdots + X_{n-1}ab^{n-1} + X_nb^n
$$

(3) $11^5 = (10 + 1)^5$ を計算せよ。

(4) $(a + b + c)^7$ を展開したとき、$a^2 b^3 c^2$ の項の係数を求めよ。

(5) $(2a + b + c)^7$ を展開したとき、$a^2 b^3 c^2$ の項の係数を求めよ。

--------------------------------------

(1) Consider the expansion of $(a+b)^5$. Answer the coefficient of $a^3b^2$.

(2) Answer each value of the coefficients $X_1$, $X_2$, $X_3$ of the following equation.

$$
(a+b)^n = X_0 a^n + X_1 a^{n-1}b + X_2 a^{n-2}b^2 + X_3 a^{n-3}b^3 + \cdots + X_{n-1}ab^{n-1} + X_nb^n
$$

(3) Calculate $11^5 = (10 + 1)^5$.

(4) Consider the expansion of $(a + b + c)^7$. Answer the coefficient of $a^2 b^3 c^2$.

(5) Consider the expansion of $(2a + b + c)^7$. nswer the coefficient of $a^2 b^3 c^2$.

## **Kai**
### (1)

$$
(a+b)^5 = a^5 + 5 a^4 b + 10 a^3 b^2 + 10 a^2 b^3 + 5 a b^4 + b^5
$$

Hence the coefficient of $a^3b^2$ is $10$.

### (2)
([Binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient))

$$
(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n-k}
$$

Hence $X_1 = n$, $X_2 = \frac{n(n-1)}{2}$, $X_3 = \frac{n(n-1)(n-2)}{6}$.

### (3)

$$
\begin{aligned}
11^5 &= (10 + 1)^5 \\
&= 10^5 + 5 \times 10^4 + 10 \times 10^3 + 10 \times 10^2 + 5 \times 10 + 1\\
&= 100000 + 50000 + 10000 + 1000 + 50 + 1 \\
&= 161051
\end{aligned}
$$

### (4)

$$
\begin{aligned}
(a+b+c)^7 &= ((a+b) + c)^7 \\
&= (a+b)^7 + 7 (a+b)^6 c + 21 (a+b)^5 c^2 + \cdots
\end{aligned}
$$

$$
\begin{aligned}
21 (a+b)^5 c^2 = 21(a^5 + 5 a^4 b + 10 a^3 b^2 + 10 a^2 b^3 + 5 a b^4 + b^5)c^2
\end{aligned}
$$

Hence the coefficient of $a^2b^3c^2$ is $21 \times 10 = 210$.

### (5)

$$
\begin{aligned}
(2a+b+c)^7 &= ((2a+b) + c)^7 \\
&= (2a+b)^7 + 7 (2a+b)^6 c + 21 (2a+b)^5 c^2 + \cdots
\end{aligned}
$$

$$
\begin{aligned}
21 (2a+b)^5 c^2 = 21(2^5a^5 + 5 \times 2^4a^4 b + 10 \times 2^3 a^3 b^2 + 10 \times 2^2 a^2 b^3 + 5 \times 2 a b^4 + b^5)c^2
\end{aligned}
$$

Hence the coefficient of $a^2b^3c^2$ is $21 \times 10 \times 2^2 = 840$.
