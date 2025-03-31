---
sidebar_label: "2021年8月実施 専門科目 S-3"
sidebar_position: 22
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2021年8月実施 専門科目 S-3

## **Author**
祭音Myyura

## **Description**
2次元実数空間におけるデータ点 $(x, y)$ が、確率密度関数 $f(x, y)$ をもつ確率分布に従うとする。
この確率分布は、クラス $A$ と $B$ に対応する2つの確率分布の混合分布であり、それぞれが以下の確率密度関数をもつ：

$$
f_A(x, y) = \frac{1}{\pi} \exp\left(-\frac{x^2}{a} - ay^2\right), \ f_B(x, y) = \frac{1}{\pi} \exp\left(-(x-2)^2 - (y-3)^2\right).
$$

また、クラス $A$, $B$ の事前確率（混合重み） $p_A, p_B$ は、それぞれ

$$
p_A = \frac{1}{1 + \exp(b)}, \quad p_B = 1 - p_A
$$

とする。なお、$a$ は正の実数定数、$b$ は実数定数とする。

設問1 クラス $A$ に属することが予め分かっている3つのデータ点 $(1,1), (2,2), (0,1)$ が与えられたときの、$a$ の最尤推定値を求めよ。

設問2 $a = 1$ とする。あるデータ点 $(x, y)$ がクラス $A$ と $B$ のいずれに属するかを、クラスの事後確率の大小を比較することで判定する。データ点 $(x, y)$ がクラス $A$ に属すると判定する条件を与えよ。

設問3 データ点 $(1,1)$ がクラス $A$ に属する事後確率が、クラス $A$ の事前確率と一致する時の $a$ の値を求めよ。

設問4 $a = 0.5$ とする。2つのデータ点 $(0,0), (1,2)$ が観測されたときの、$b$ の最尤推定値を求めよ。なお、$\exp(-10) \approx 0$ としてよい。

## **Kai**
### 設問1
We only need to find the value of $a$ that maximizes the log-joint likelihood function $L(a)$

$$
\begin{aligned}
L(a)
&= \ln \prod_{i=1}^{n}\left\{p_{A}f_{A}(x_{i},y_{i})+p_{B}f_{B}(x_{i},y_{i})\right\}\\
&\propto \ln \prod_{i=1}^{n}f_{A}(x_{i},y_{i})
= -n\ln \pi -\frac{1}{a}\sum_{i=1}^{n}x_{i}^{2}-a\sum_{i=1}^{n}y_{i}^{2}\\
\end{aligned}
$$

Then,

$$
\frac{\partial L(a)}{\partial a}
= \frac{1}{a^{2}}\sum_{i=1}^{n}x_{i}^{2}-\sum_{i=1}^{n}y_{i}^{2} = 0 \Rightarrow a = \sqrt{\frac{\sum_{i=1}^{n}x_{i}^{2}}{\sum_{i=1}^{n}y_{i}^{2}}}
$$

Therefore, the maximum likelihood estimate of $a$ is

$$
a = \sqrt{\frac{1^{2}+2^{2}+0^{2}}{1^{2}+2^{2}+1^{2}}}  = \frac{\sqrt{30}}{6}
$$

### 設問2
Let $f'_A(x,y)$ and $f'_B(x,y)$ denote the posterior class probabilities of a data point $(x,y)$ belongs to $A$ and $B$, resp.
Let $P(x,y)$ denote the joint probability density function of $x$ and $y$.
From the Bayes' theorem, we have

$$
\begin{aligned}
f'_A(x,y) &= \frac{f_A(x,y)p_A}{P(x,y)}\\
f'_B(x,y) &= \frac{f_B(x,y)p_B}{P(x,y)}
\end{aligned}
$$

by comparing the posterior class probabilities we have



$$
f_A(x,y) p_A > f_B(x,y) p_b \Rightarrow 
\frac{1}{\pi(1+e^{b})}e^{-\frac{x^2}{a} - ay^2} >\frac{e^{b}}{\pi(1+e^{b})}e^{-(x-2)^{2}-(y-3)^{2}}
$$

by set $a = 1$ we have

$$
\frac{1}{\pi(1+e^{b})}e^{-x^{2}-y^{2}} >\frac{e^{b}}{\pi(1+e^{b})}e^{-(x-2)^{2}-(y-3)^{2}}
$$

which can be simplied to

$$
6y+2x+b-13 < 0
$$

### 設問3
Since the prior probability and posterior probability is equal, we have

$$
f'_A(x,y) = \frac{f_A(x,y)p_A}{P(x,y)} = p_A
$$

which implies that

$$
f_A(x,y) = P(x, y).
$$

Note that $P(x,y) = p_{A}f_{A}(x,y)+p_{B}f_{B}(x,y)$, hence

$$
(1-p_{A})f_{A}(x,y) = (1-p_{A})f_{B}(x,y)
$$

i.e., $f_A(x,y) = f_B(x,y)$, which implies that

$$
\begin{align}
-\frac{x^{2}}{a}-ay^{2} = -(x-2)^{2}-(y-3)^{2} \tag{i}
\end{align}
$$

solving (i) by substituting $(x,y) = (1,1)$, we have

$$
a= \frac{5\pm \sqrt{21}}{2}
$$

### 設問4
The objective is

$$
\begin{aligned}
T(b) &= \ln \prod_{i=1}^{n}f(x_{i},y_{i})\\
&=  \ln \prod_{i=1}^{n}\left(p_{A}f_{A}(x_{i},y_{i})+p_{B}f_{B}(x_{i},y_{i})\right)\\
&= \sum_{i=1}^{n} \ln \left(p_{A}f_{A}(x_{i},y_{i})+p_{B}f_{B}(x_{i},y_{i})\right)\\
\end{aligned}
$$

by solving the following equations (note that when $a = 0.5$, we have $f_{A}(0,0)=1/\pi$, $f_{A}(1,2)=e^{-4}/\pi$, $f_{B}(0,0)=e^{-13}/\pi\approx 0$, $f_{B}(1,2)=e^{-2}/\pi$.)

$$
\begin{aligned}
\frac{\partial T(b)}{\partial b}
&= \frac{e^{b}}{1+e^{b}}\sum_{i=1}^{n}\frac{-f_{A}(x_{i},y_{i})+f_{B}(x_{i},y_{i})}{f_{A}(x_{i},y_{i})+e^{b}f_{B}(x_{i},y_{i})} = 0
\end{aligned}
$$

we have

$$
\frac{-e^{-4}+e^{-2}}{e^{-4}+e^{b-2}} = 1 \Rightarrow b = \ln(e^{2}-2)-2
$$
