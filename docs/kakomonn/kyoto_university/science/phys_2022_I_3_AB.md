---
comments: false
title: 京都大学 理学研究科 物理学・宇宙物理学専攻 2022年度 I-3 (AB)
tags:
  - Kyoto-University
---
# 京都大学 理学研究科 物理学・宇宙物理学専攻 2022年度 I-3 (AB)

## **Author**
Miyake

## **Description**
### I-3A (力学)
慣性系 $S$ に対して一定角速度 $\vec{\omega}$ で回転する系 $S'$ ′ を考える．
回転系 $S'$ で見た時間微分は $\frac{d'}{dt}$ で表すことにする．
回転系 $S'$ で静止しているベクトル $\vec{A}$ の慣性系における時間変化は $\frac{d\vec{A}}{dt} = \vec{\omega}\times \vec{A}$ であり，
回転系から見た時間変化 $\frac{d'\vec{A}}{dt}$ もゼロでない場合には $\frac{d\vec{A}}{dt} = \frac{d'\vec{A}}{dt} + \vec{\omega}\times \vec{A}$  となる．
これは一般のベクトルに対して成立し，位置ベクトル $\vec{r}$ に関しても，

$$
\frac{d\vec{r}}{dt} = \frac{d'\vec{r}}{dt} + \vec{\omega}\times \vec{r} \tag{A} \label{A}
$$

である．

(1) 式 ($\ref{A}$) を慣性系でさらに時間微分して，慣性系での加速度 $\frac{d^2 \vec{r}}{dt^2}$ と，
一定角速度 $\vec{\omega}$ で回転する回転系 $S'$ から見た時の加速度 $\frac{d'^2 \vec{r}}{dt^2}$，速度 $\frac{d' \vec{r}}{dt}$ の関係式を表せ．
どの項がコリオリの力に相当し，どの項が遠心力に相当するか書け．

(2) 質量 $m$, 電荷 $q$ を持つ荷電粒子が，中心力 $\vec{F}(\vec{r})$ の作用を受けて運動している．

$$
m \frac{d^2 \vec{r}}{dt^2} = \vec{F}(\vec{r}) \tag{B} \label{B}
$$

この系に，一様な弱い磁場（磁束密度がどこでも $\vec{B}$ ）を加えた時の運動を
考える．磁場方向の単位ベクトルを $\vec{k}$ として，力の中心のまわりに $\vec{\omega} = \omega \vec{k}$
で回転する回転系から見た運動方程式を書け．

(3) 回転系から見た速度と磁場による力と，コリオリの力とが打ち消し合うため
には，$\vec{\omega}$ はどうであれば良いか．$m$, $q$, $\vec{B}$ で表せ．

### I-3B (熱力学)
シュテファン・ボルツマンの法則を，熱力学的考察から求めたい．

(1) 気体の内部エネルギー $U(S, V)$（$S$ はエントロピー，$V$ は体積）の全微分 $dU$
を，温度 $T$ と圧力 $p$ も用いて表せ．また，気体の自由エネルギー $F = U − TS$
に関して，$F(T, V)$ として，全微分 $dF$ を表せ．

(2) 気体の温度 $T$ と体積 $V$ の関数としての内部エネルギー $U(T, V )$ の全微分
$dU$ を考えることで，$\big(\frac{\partial U}{\partial V} \big)_T$ を，温度 $T$ と圧力 $p$ を用いて表せ．

(3) 光子気体の圧力 $p$ は，エネルギー密度 $\tilde{u}$ すなわち単位体積当たりの内部エネルギー $\frac{U}{V}$ の $\frac{1}{3}$ に等しく，$p = \frac{1}{3} \frac{U}{V} = \frac{1}{3} \tilde{u}$ である．
このことから，熱放射場のエネルギー密度 $\tilde{u}$ が温度 $T$ の何乗に比例するか求めよ．導出過程を簡潔に示すこと．


## **Kai**
### I-3A (力学)
#### (1)

$$
\begin{aligned}
\frac{d^2 \vec{r}}{dt^2}
&= \frac{d}{dt} \frac{d \vec{r}}{dt}
\\
&= \frac{d'}{dt} \frac{d \vec{r}}{dt} + \vec{\omega} \times \frac{d \vec{r}}{dt}
\\
&= \frac{d'}{dt} \left( \frac{d' \vec{r}}{dt} + \vec{\omega} \times \vec{r} \right)
+ \vec{\omega} \times \left( \frac{d' \vec{r}}{dt} + \vec{\omega} \times \vec{r} \right)
\\
&= \frac{d'^2 \vec{r}}{dt^2}
+ 2 \vec{\omega} \times \frac{d' \vec{r}}{dt}
+ \vec{\omega} \times \left( \vec{\omega} \times \vec{r} \right)
\end{aligned}
$$

最後の表式の第2項がコリオリの力に相当し、第3項が遠心力に相当する。

#### (2)
$B = |\vec{B}|$ とする。
慣性系 $S$ での運動方程式は

$$
\begin{aligned}
m \frac{d^2 \vec{r}}{dt^2}
= \vec{F} \left( \vec{r} \right) + q \frac{d \vec{r}}{dt} \times \vec{B}
\end{aligned}
$$

なので、 (1) より、回転系 $S'$ での運動方程式は次のようになる：

$$
\begin{aligned}
m \left( \frac{d'^2 \vec{r}}{dt^2}
+ 2 \omega \vec{k} \times \frac{d' \vec{r}}{dt}
+ \omega^2 \vec{k} \times \left( \vec{k} \times \vec{r} \right)
\right)
= \vec{F} \left( \vec{r} \right) + qB \left(
\frac{d' \vec{r}}{dt} + \omega \vec{k} \times \vec{r} \right) \times \vec{k}
\\
\therefore \ \ 
m \frac{d^2 \vec{r}}{dt^2}
= \vec{F} \left( \vec{r} \right)
+ (qB+2m \omega) \frac{d' \vec{r}}{dt} \times \vec{k}
- (qB \omega + m \omega^2 ) \vec{k} \times \left( \vec{k} \times \vec{r} \right)
\end{aligned}
$$

#### (3)
求める条件は、

$$
\begin{aligned}
\omega &= - \frac{qB}{2m}
\\
\therefore \ \ 
\vec{\omega} &= - \frac{q}{2m} \vec{B}
\end{aligned}
$$

である。

### I-3B (熱力学)
#### (1)

$$
\begin{aligned}
dU &= TdS - pdV
\\
dF &= d(U-TS)
\\
&= -SdT - pdV
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
\left( \frac{\partial U}{\partial V} \right)_T
&= T \left( \frac{\partial S}{\partial V} \right)_T - p
\\
&= -T \frac{\partial^2 F}{\partial V \partial T} - p
\\
&= -T \frac{\partial^2 F}{\partial T \partial V} - p
\\
&= T \left( \frac{\partial p}{\partial T} \right)_V - p
\end{aligned}
$$

#### (3)
(2) で得た式に

$$
\begin{aligned}
U(T,V) = V \tilde{u}(T)
, \ \ 
p(T,V) = \frac{1}{3} \tilde{u}(T)
\end{aligned}
$$

を代入すると、

$$
\begin{aligned}
\tilde{u}(T) &= T \cdot \frac{1}{3} \frac{d \tilde{u}(T)}{dT} - \frac{1}{3} \tilde{u}(T)
\\
\therefore \ \ 
\frac{d \tilde{u}}{\tilde{u}} &= \frac{4}{T} dT
\\
\therefore \ \ 
\log \tilde{u}
&= 4 \log T + C
\ \ \ \ \ \ \ \ \text{ ( $C$ は積分定数 )}
\\
&= \log T^4 + C
\end{aligned}
$$

となるので、 $\tilde{u}$ は $T$ の4乗に比例することがわかる。