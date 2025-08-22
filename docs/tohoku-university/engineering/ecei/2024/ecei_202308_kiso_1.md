---
sidebar_label: "2023年8月実施 基礎科目 問題1 電磁気学"
tags:
  - Tohoku-University
  - Electromagnetism
---
# 東北大学 工学研究科 電気・情報系 2023年8月実施 基礎科目 問題1 電磁気学

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
Fig.1 に示すように、真空中に半径 $a$ の完全導体球 $1$ と、内、外半径がそれぞれ $b, c\ (c>
b> a)$ の完全導体球殻 $2$ からなる同心球コンデンサがある.
同心球コンデンサ内部 (1-2 間) は真空となっている。
導体球 $1$, 導体球殻 $2$ にそれぞれ電荷 $Q_1$ および $Q_2$ を与えたとき、以下の問に答えよ、ただし、導体球 $1$ と導体球殻 $2$ の中心 $O$ を原点とする径方向の座標を $r$、真空中の誘電率を $\varepsilon_0$ もとする。
また、無限遠の電位を基準としたときの (無限遠では電位は $0$) 導体球 $1$ の表面の電位を $V_a$、 導体球殻 $2$ の外表面の電位を $V_c$ とする。

(1) $r < a, a <r <b, b <r<c, c<r$ のそれぞれの領域における電界の大きさ $E(r)$ を、ガウスの法則を用いて求めよ。

(2) 電位 $V_a$ および $V_c$ を求めよ。

(3) 導体球殻 $2$ のみを接地したとき $(V_c = 0)$ の電位 $V_a$ を導出し、同心球コンデンサの静電容量 $C$を求めよ。

(4) 一方で、導体球 $1$ のみを接地したとき $(V_a = 0)$ の電位 $V_c$ を, $\varepsilon_0, Q_2, a, b, c$ を用いて表せ。また、同心球コンデンサの静電容量 $C'$ を求めよ。


<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_202308_kiso_1_electromagnetism.png" width="300"/>
</figure>


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