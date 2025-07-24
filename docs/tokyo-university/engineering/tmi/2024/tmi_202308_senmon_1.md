---
sidebar_label: '2023年8月実施 専門試験 問題1'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 技術経営戦略学専攻 2023年8月実施 専門試験 問題1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**
### I.
以下の微分方程式の一般解を求めよ。

1. $\frac{d^2y}{dx^2} -4\frac{dy}{dx} + 3y=0$
2. $\frac{d^2y}{dx^2} -4\frac{dy}{dx} + 3y=\cos 2x$
3. $\frac{d^2y}{dx^2} -4\frac{dy}{dx} + 3y=\cos 2x + xe^{-3x}$

### II.
$a,b$ を非負の実数とするとき，以下の行列 $A$ に関する問いに答えよ。

$$
A = \begin{pmatrix}
  a & b & 0 \\
  0 & -a & a \\
  a & 0 & b
\end{pmatrix}
$$

1. $a = 2,b=3$ のとき，行列 $A$ のすべての固有値を求めよ。
2. 問 II.1 で求めた各固有値に対応する長さ $1$ の固有ベクトルをすべて求めよ。
3. 行列 $A$ が対角化可能であるために𝑎,𝑏が満たすべき必要十分条件を求めよ。 

### III.
連続型確率変数 $X$ のとり得る値 $x$ が以下の確率密度関数 $P(x)$ に従うとき，以下の問いに答えよ。ただし $\alpha, \beta$ は正の定数とする。 

$$
P(x) = \begin{cases}
  axe^{-\beta x} &(x \geq 0) \\
  0 &(x < 0)
\end{cases}
$$

1. $\alpha$ を $\beta$ を用いて表わせ。 
2. $\beta$ を用いて確率変数 $X$ の期待値を表わせ。 
3. $\beta$ を用いて確率変数 $X$ の分散を表わせ。 

### IV.
クラウド上のあるアプリケーションで，$2$ 人以上のユーザのログイン試行をサーバが同時刻に受け付けるとログインエラーが必ず発生するという不具合が発見された。ただし，ここでいう「同時刻」とは，小数点以下切り捨ての秒単位で表示された時刻が一致することで定義される。

このとき，ある $1$ 分間にこのエラーが発生する確率に関する以下の問いに答えよ。なお，以下を仮定せよ。1) この $1$ 分間において，エラーが発生したかどうかに関わらず各ユーザは一度しかログインを試行することができず，2) ログイン試行はユーザごとに独立でかつ各ユーザがログインを試行する確率はこの $1$ 分間で一様に分布しており，また 3) ユーザによるログインの試行からサーバが受け付けるまでに要する時間は無視できるものとする。

1. この $1$ 分間に $2$ 人のユーザからのログイン試行をサーバが受け付けたとき，エラーが発生する確率を求めよ。 
2. この $1$ 分間に $3$ 人のユーザからのログイン試行をサーバが受け付けたとき，エラーが発生する確率を求めよ。
3. この $1$ 分間に $10$ 人のユーザからのログイン試行をサーバが受け付けたとき，少なくとも $1$ 件以上のエラーが発生する確率は $50\%$ より大きいと言えるか，根拠とともに述べよ。なお，$e$ を自然対数の底として，$\log_e (0.5) = -0.693$, $\log_e (60) = 4.094$, $\sum_{k=51}^{60} \log_e k = 40.15$ としてよい。

## **Kai**
### I.
#### 1.
$y=e^{\lambda x}$ （ $\lambda$ は $x$ によらない定数）を代入すると、

$$
  \begin{aligned}
  \lambda^2 - 4 \lambda + 3 = 0
  \\
  \therefore \ \ 
  \left( \lambda - 1 \right) \left( \lambda - 3 \right) = 0
  \\
  \therefore \ \ 
  \lambda = 1, 3
  \end{aligned}
$$

なので、(1) の一般解は

$$
  \begin{aligned}
  y &= A e^x + B e^{3x}
  & \left( A, B \text{ は積分定数 } \right)
  \end{aligned}
$$

である。

#### 2.
$y = C \sin 2x + D \cos 2x$（ $C, D$ は $x$ によらない定数）を代入して整理すると、

$$
  \begin{aligned}
  \left( - C + 8D \right) \sin 2x + \left( - 8C - D - 1 \right) \cos 2x = 0
  \\
  \therefore \ \ 
  C = - \frac{8}{65}, \ \ D = - \frac{1}{65}
  \end{aligned}
$$

を得るので、

$$
  \begin{aligned}
  y = - \frac{8}{65} \sin 2x - \frac{1}{65} \cos 2x
  \end{aligned}
$$

は 2. の特殊解であり、 1. を考慮して、

$$
  \begin{aligned}
  y &= A e^x + B e^{3x} - \frac{8}{65} \sin 2x - \frac{1}{65} \cos 2x
  & \left( A, B \text{ は積分定数 } \right)
  \end{aligned}
$$

は 2. の一般解であることがわかる。

#### 3.

$$
\begin{aligned}
  \frac{d^2 y}{dx^2} -4 \frac{d y}{dx} + 3y = x e^{-3x}
  \end{aligned}
$$

に $y = E e^{-3x} + Fx e^{-3x}$（ $E, F$ は $x$ によらない定数）を代入して整理すると、

$$
  \begin{aligned}
  \left( 24E - 10F \right) + \left( 24F - 1 \right) x = 0
  \\
  \therefore \ \ 
  E = \frac{5}{288}, \ \ F = \frac{1}{24}
  \end{aligned}
$$

を得るので、 2. も考慮して、

$$
  \begin{aligned}
  y = - \frac{8}{65} \sin 2x - \frac{1}{65} \cos 2x
  + \frac{5}{288} e^{-3x} + \frac{1}{24} x e^{-3x}
  \end{aligned}
$$

は 3. の特殊解であり、さらに 1. を考慮して、

$$
  \begin{aligned}
  y &= A e^x + B e^{3x} - \frac{8}{65} \sin 2x - \frac{1}{65} \cos 2x
  + \frac{5}{288} e^{-3x} + \frac{1}{24} x e^{-3x}
  & \left( A, B \text{ は積分定数 } \right)
  \end{aligned}
$$

は 3. の一般解であることがわかる。

### II.
#### 1.

$$
-\lambda^3 + 3\lambda^2 +4\lambda = 0 \Rightarrow \lambda_1 = 4, \lambda_2 = -1, \lambda_3 = 0
$$

#### 2.

$$
v_1 = (3,2,6), v_2 = (-2,2,1), v_3=(-3,2,2)
$$

#### 3.
$A$ の固有値を $\lambda$ とすると、

$$
  \begin{aligned}
  0
  &= \det \begin{pmatrix}
  a - \lambda & b & 0 \\ 0 & -a - \lambda & a \\ a & 0 & b - \lambda
  \end{pmatrix}
  \\
  &= - \lambda^3 + b \lambda^2 + a^2 \lambda
  \\
  &= - \lambda \left( \lambda^2 - b \lambda - a^2 \right)
  \\
  \therefore \ \ 
  \lambda &= 0, \frac{b \pm \sqrt{4a^2 + b^2}}{2}
  \end{aligned}
  である。
$$

$a \neq 0$ のときは、 $A$ は相異なる3つの固有値を持つから、対角化可能である。

$a=b=0$ のときは、 $A$ はゼロ行列であり、対角行列であるので、対角化可能である。

$a=0, b \ne 0$ のとき、固有値 $0$ の重複度は $2$ である。固有値 $0$ に属する固有ベクトルを求めるため、

$$
  \begin{aligned}
  \begin{pmatrix} 0 & b & 0 \\ 0 & 0 & 0 \\ 0 & 0 & b \end{pmatrix}
  \begin{pmatrix} x \\ y \\ z \end{pmatrix}
  =
  \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
  \end{aligned}
$$

とおくと、 $y=z=0$ を得るので、固有空間の次元は $1$ であることがわかる。
よって、この場合は $A$ は対角化可能でない。

以上より、 $A$ が対角化可能であるための必要十分条件は、「$a \ne 0$ または $a=b=0$」である。

### III.
#### 1.

$$
\int_0^\infty xe^{-\beta x}dxx = \frac{1}{\beta^2}
$$

$$
\alpha \times \frac{1}{\beta^2} = 1 \Rightarrow \alpha = \beta^2
$$

#### 2.

$$
E[X] = \int_{0}^\infty xP(x) = a\int_0^\infty x^2e^{-\beta x}dx = \beta^2 \times \frac{2}{\beta^3} = \frac{2}{\beta}
$$

#### 3.

$$
\text{Var}(X) = \frac{2}{\beta^2}
$$

### IV.
#### 1.
エラーが発生しない確率は

$$
  \begin{aligned}
  \frac{60 \cdot 59}{60^2} = \frac{59}{60}
  \end{aligned}
$$

であるから、エラーが発生する確率は

$$
  \begin{aligned}
  1 - \frac{59}{60} = \frac{1}{60}
  \end{aligned}
$$

である。

#### 2.
エラーが発生しない確率は

$$
  \begin{aligned}
  \frac{60 \cdot 59 \cdot 58}{60^3} = \frac{1711}{1800}
  \end{aligned}
$$

であるから、エラーが発生する確率は

$$
  \begin{aligned}
  1 - \frac{1711}{1800} = \frac{89}{1800}
  \end{aligned}
$$

である。

#### 3.
エラーが発生しない確率 $p$ は

$$
  \begin{aligned}
  p
  &= \frac{60 \cdot 59 \cdot 58 \cdot 57 \cdot 56 \cdot 55 \cdot 54 \cdot 53 \cdot 52 \cdot 51}{60^{10}}
  \end{aligned}
$$

であり、

$$
  \begin{aligned}
  \log_e p
  &= \sum_{k=51}^{60} \log_e k - 10 \log_e (60)
  \\
  &= - 0.79
  \\
  &\lt \log_e (0.5)
  \\
  \therefore \ \ 
  p &\lt 0.5
  \end{aligned}
$$

であるから、少なくとも $1$ 件以上のエラーが発生する確率は $50\%$ より大きいと言える。