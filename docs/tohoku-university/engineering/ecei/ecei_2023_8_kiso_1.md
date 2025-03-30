---
sidebar_label: "2023年8月実施 基礎科目 問題1 電磁気学"
sidebar_position: 6
tags:
  - Tohoku-University
---
# 東北大学 工学研究科 電気・情報系 2023年8月実施 基礎科目 問題1 電磁気学

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (1)
$r \lt a$ では、導体の内部であるから、

$$
\begin{aligned}
E(r) = 0
\end{aligned}
$$

である。
$a \lt r \lt b$ では、ガウスの法則より、

$$
\begin{aligned}
4 \pi r^2 E(r) &= \frac{Q_1}{\varepsilon_0}
\\
\therefore \ \ 
E(r) &= \frac{Q_1}{4 \pi \varepsilon_0 r^2}
\end{aligned}
$$

である。
$b \lt r \lt c$ では、導体の内部であるから、

$$
\begin{aligned}
E(r) = 0
\end{aligned}
$$

である。
$c \lt r$ では、ガウスの法則より、

$$
\begin{aligned}
4 \pi r^2 E(r) &= \frac{Q_1+Q_2}{\varepsilon_0}
\\
\therefore \ \ 
E(r) &= \frac{Q_1+Q_2}{4 \pi \varepsilon_0 r^2}
\end{aligned}
$$

である。

### (2)

$$
\begin{aligned}
V_c
&= - \int_\infty^c E(r) dr
\\
&= - \frac{Q_1+Q_2}{4 \pi \varepsilon_0} \int_\infty^c \frac{dr}{r^2}
\\
&= \frac{Q_1+Q_2}{4 \pi \varepsilon_0} \left[ \frac{1}{r} \right]_\infty^c
\\
&= \frac{Q_1+Q_2}{4 \pi \varepsilon_0 c}
,\\
V_a
&= V_c - \int_\infty^c E(r) dr
\\
&= V_c - \frac{Q_1}{4 \pi \varepsilon_0} \int_b^a \frac{dr}{r^2}
\\
&= V_c + \frac{Q_1}{4 \pi \varepsilon_0} \left[ \frac{1}{r} \right]_b^a
\\
&= \frac{Q_1+Q_2}{4 \pi \varepsilon_0 c}
+ \frac{Q_1}{4 \pi \varepsilon_0} \left( \frac{1}{a} - \frac{1}{b} \right)
\end{aligned}
$$

### (3)
$V_c=0$ であるから、導体球殻2の内側に $-Q_1$ の電荷が分布する。
$a \lt r \lt b$ における $E(r)$ に変化はないから、

$$
\begin{aligned}
V_a
&= \frac{Q_1}{4 \pi \varepsilon_0} \left( \frac{1}{a} - \frac{1}{b} \right)
\end{aligned}
$$

であり、

$$
\begin{aligned}
C
&= \frac{Q_1}{V_a}
\\
&= \frac{4 \pi \varepsilon_0}{\frac{1}{a} - \frac{1}{b}}
\end{aligned}
$$

である。

### (4)
導体球殻2の電荷 $Q_2$ のうち、内側に $q$ 、外側に $Q_2-q$ が分布したとする。
導体球殻2の内部で電場はないから、導体球1の外側に $-q$ の電荷が分布する。
このとき、 (1), (2) と同じように考えて、

$$
\begin{aligned}
V_c
&= \frac{Q_2-q}{4 \pi \varepsilon_0 c}
,\\
V_a
&= V_c
- \frac{q}{4 \pi \varepsilon_0} \left( \frac{1}{a} - \frac{1}{b} \right)
\\
&= \frac{Q_2-q}{4 \pi \varepsilon_0 c}
- \frac{q}{4 \pi \varepsilon_0} \left( \frac{1}{a} - \frac{1}{b} \right)
\end{aligned}
$$

がわかる。
よって、 $V_a=0$ から、

$$
\begin{aligned}
\frac{Q_2-q}{c}
&= q \left( \frac{1}{a} - \frac{1}{b} \right)
\\
\therefore \ \ 
Q_2
&= \left( \frac{c}{a} - \frac{c}{b} + 1 \right) q
\\
&= \frac{bc - ac + ab}{ab} q
\\
\therefore \ \ 
q
&= \frac{ab}{bc - ac + ab} Q_2
\\
\therefore \ \ 
Q_2 - q
&= \frac{bc - ac}{bc - ac + ab} Q_2
\\
\therefore \ \ 
V_c
&= \frac{Q_2}{4 \pi \varepsilon_0} \frac{b - a}{bc - ac + ab}
\end{aligned}
$$

がわかり、

$$
\begin{aligned}
C'
&= \frac{Q_2}{V_c}
\\
&= 4 \pi \varepsilon_0 \frac{bc - ac + ab}{b - a}
\end{aligned}
$$

がわかる。