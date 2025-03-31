---
sidebar_label: "2017年度 数学 第3問"
sidebar_position: 19
tags:
  - Tokyo-University
---
# 東京大学 情報理工学研究科 2017年度 数学 第3問

## **Author**
[etsurin](https://zhuanlan.zhihu.com/p/561992447)

## **Description**
(1) 連続確率変数 $T$ の確率密度関数 $f(t)$ が $λ$ を正の定数として

$$
f(t) = 
\begin{cases} 
\lambda e^{-\lambda t} & (t \geq 0) \\
0 & (t < 0) 
\end{cases}
$$

で表されるとき、$T$ はパラメータ $λ$ の指数分布に従うという。
この確率変数の平均値を求めよ。
またこの指数分布の確率分布関数 $F(t) = P(T \leq t)$ を求めよ。
なお、$P(X)$ は事象 $X$ が起こる確率である。

(2) 設問 (1) の分布が無記憶であること、即ち任意の $s > 0, t > 0$ に対して

$$
P(T > s + t \mid T > s) = P(T > t)
$$

が成り立つことを示せ。
なお、$P(X \mid Y)$ は事象 $Y$ が起こった条件のもとで事象 $X$ が起こる確率である。

(3) 問題の解答を始めてから解答を終えるまでの時間を解答所要時間と呼ぶことにする。
ある問題に対して $n$ 人の学生の解答所要時間が全て同じパラメータ $\lambda_0$ の指数分布に従うものとする。
$n$ 人が同時に解答を始めたとき、最も早く解答を終える学生の解答所要時間の確率分布関数と平均値を示せ。
ただし、各学生の解答所要時間はそれぞれ独立であるとする。

(4) 学生 $A, B$ の解答所要時間がパラメータ $\lambda_A, \lambda_B$ の指数分布にそれぞれ従うものとする。
この二人が同時に解答を開始したときに、学生 $A$ の方が学生 $B$ より先に解答を終える確率を求めよ。

(5) 優秀な学生である秀夫君と、他 $10$ 名の学生に問題を同時に解かせる。
各学生の解答所要時間は指数分布に従うものとし、また秀夫君以外の各学生の平均解答所要時間は、すべて秀夫君の平均解答所要時間の $10$ 倍であるとする。
秀夫君が $1$ 番目に解答を終える確率、および $4$ 番目に解答を終える確率をそれぞれ求めよ。

## **Kai**
### (1)

$$
E[T] = \int_0^{\infty} \lambda t e^{-\lambda t} dt = \frac{1}{\lambda}
$$

对 $t > 0$

$$
P(T \leq t) = \int_0^t \lambda e^{-\lambda \xi} d\xi = 1 - e^{-\lambda t}
$$

$$
F(t) = \begin{cases}
    0 &t< 0 \\
    1-e^{-\lambda t} &t \geq 0
\end{cases}
$$

### (2)

$$
P(T > t) = 1 - F(t) = e^{-\lambda t}
$$

$$
P(T > s + t \mid T > s) = \frac{P(T > s+t, T>s)}{P(T > s)} = \frac{e^{-\lambda (s+t)}}{e^{-\lambda s}} = e^{-\lambda t}
$$

$$
\therefore P(T > s + t \mid T > s) = P(T > t)
$$

### (3)
设第 $n$ 个学生解答所用时间为 $X_n$，则其中解题最快的学生所用时间 $x = \min(X_1, X_2, \ldots, X_n)$

$$
\begin{aligned}
P(X \leq t) &= 1 - P(X > t) = 1 - P(X_1 > t)P(X_2 > t) \cdots P(X_n > t) \\
&= 1 - (e^{-\lambda_0 t})^n = 1 - e^{-\lambda_0 nt}
\end{aligned}
$$

对 $n$ 个服从参数为 $\lambda_0$ 的指数分布的随机变量，其中的最小值服从参数为 $n\lambda_0$ 的指数分布。

因此有

$$
E[X] = \frac{1}{n\lambda_0}
$$

### (4)
设二人解答时间分别为 $x_A, x_B$。则联合分布密度函数

$$
f_{X_A, X_B} (x_A, x_B) = \lambda_A \lambda_B e^{-\lambda_A x_A} e^{-\lambda_B x_B} \ (0 < x_A < \infty, 0 < x_B < \infty)
$$

$$
\begin{aligned}
    P(x_A < x_B) &= \int_{0}^{\infty} \int_0^{x_B} \lambda_A \lambda_B e^{-\lambda_A x_A} e^{-\lambda_B x_B} dx_A dx_B \\
    &= \lambda_B \int_0^{\infty} e^{-\lambda_B x_B} - e^{-(\lambda_A + \lambda_B)x_B} dx_B \\
    &= \frac{\lambda_A}{\lambda_A + \lambda_B}
\end{aligned}
$$

### (5)
设普通学生解答时间服从参数为 $\lambda$ 的指数分布，平均情况下秀夫只需要 $\frac{1}{10}$ 的时间，因此秀夫解答时间 $Y$ 服从参数为 $10 \lambda$ 的指数分布。

由 (3)，$10$ 人中最快的人所用时间 $X$ 服从参数为 $10\lambda$ 的指数分布。若秀夫最先解答完成，即有 $Y < X$，由 (4) 我们有

$$
P(Y < X) = \frac{10 \lambda}{10 \lambda + 10\lambda} = \frac{1}{2}
$$

记 $X_i$ 为第 $i$ 快的学生答题所需要的时间，$X = X_1$。
在 $Y > X_1$ 的条件下，根据指数分布的无记忆性，剩下 $9$ 位学生在 $X_1$ 时间之后还需要的解答时间仍服从参数为 $\lambda$ 的指数分布，其中的最小值服从参数为 $9\lambda$ 的指数分布。秀夫还需要的时间仍服从参数为 $10\lambda$ 的指数分布。

即有

$$
P(Y - X_1 < X_2 - X_1 \mid Y > X_1) = \frac{10 \lambda}{10 \lambda + 9\lambda} = \frac{10}{19}
$$

以此类推

$$
P(Y - X_2 < X_3 - X_2 \mid Y > X_2) = \frac{10 \lambda}{10 \lambda + 8 \lambda} = \frac{5}{9}
$$

$$
P(Y - X_3 < X_4 - X_3 \mid Y > X_3) = \frac{10 \lambda}{10 \lambda + 7 \lambda} = \frac{10}{17}
$$

秀夫第 $4$ 个完成解答，即 $X_1 < X_2 < X_3 < Y < X_4$ 的情况

$$
\begin{aligned}
    P(X_1 < X_2 < X_3 < Y < X_4) &= P(Y > X_1) P(Y > X_2 \mid Y > X_1) P(Y > X_3 \mid Y > X_2) P(Y < X_4 \mid Y > X_3) \\
    &= \frac{1}{2} \times \frac{9}{19} \times \frac{4}{9} \times \frac{10}{17} \\
    &= \frac{20}{323} 
\end{aligned}
$$
