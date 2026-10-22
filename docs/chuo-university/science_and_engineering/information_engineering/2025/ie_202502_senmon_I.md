---
sidebar_label: "2025年2月実施 問題I（数学）"
tags:
  - Chuo-University
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Calculus.Integration-by-Parts
  - Mathematics.Calculus.Legendre-Polynomials
---

# 中央大学 理工学研究科 情報工学専攻 2025年2月実施 一般入試（春季）問題I

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

問題 I は必答。問題 II～V のうち、2 問を選んで解答すること。

**問題 I.（全員解答すること）**

**1.** 次の行列 $A$ に関して、問に答えよ。

$$
A=\begin{pmatrix}9&2&-4\\-4&3&4\\2&2&3\end{pmatrix}
$$

(1) $A$ の固有多項式（特性多項式ともいう）$\Phi(\lambda)$ を求めよ。

(2) $A$ の固有値（特性根ともいう）と、各固有値に対応する固有ベクトルをそれぞれ求めよ。

(3) $A$ を対角化した $\widetilde A$ を $P^{-1}AP=\widetilde A$ として求めたい。$P$ と $\widetilde A$ を答えよ。

(4) $P^{-1}$ を求めよ。

**2.** 次の問に答えよ。

(1) $f(x)$ と $g(x)$ を $n$ 回連続微分可能な実変数実数値関数とする。

$$
\begin{aligned}
&\int f(x)g^{(n)}(x)\,dx\\
&=f(x)g^{(n-1)}(x)-f'(x)g^{(n-2)}(x)\\
&\quad+f''(x)g^{(n-3)}(x)-\cdots\\
&\quad+(-1)^{n-1}f^{(n-1)}(x)g(x)\\
&\quad+(-1)^n\int f^{(n)}(x)g(x)\,dx
\end{aligned}
$$

を数学的帰納法で証明せよ。ここで、$f^{(k)}(x)$ は $f$ の $k$ 次導関数を表している。

(2) $F(x)$ を $2n$ 次多項式とする。$F(x)$ が $(n-1)$ 次以下の実係数の任意の多項式 $Q(x)$ に対して、

$$
\int_{-1}^{1}Q(x)F^{(n)}(x)\,dx=0
$$

を満たすとする。(1) を用いて $F(x)$ とその 1 次から $(n-1)$ 次までの導関数に関する条件を求めよ。また、それを基に $F(x)$ は $F(x)=C(x-1)^n(x+1)^n$（$C$ は任意の定数）のように表せることを示せ。

(3) (2) の $F(x)$ において、$C=\dfrac1{2^n\cdot n!}$ とし、$F(x)$ を $n$ 回微分した $n$ 次多項式を $P_n(x)$ とする。つまり、

$$
P_n(x)=\frac1{2^n\cdot n!}\frac{d^n}{dx^n}(x-1)^n(x+1)^n
$$

とする。この $P_n(x)$ はある多項式 $G(x)$ を用いて、

$$
\begin{aligned}
P_n(x)&=\frac1{2^n}(x+1)^n\\
&\quad+\frac1{2^n}(x-1)^n\\
&\quad+(x-1)(x+1)G(x)
\end{aligned}
$$

と表せることを示せ。$n$ 回連続微分可能な実変数実数値関数 $f(x)$ と $g(x)$ について

$$
\begin{aligned}
&(f(x)g(x))^{(n)}\\
&=\sum_{k=0}^{n}\binom nk f^{(n-k)}(x)g^{(k)}(x)
\end{aligned}
$$

が成り立つことを用いてよい。

(4) $P_n(1),P_n(-1)$ を求めよ。

#### 题目描述

问题 I 为必答题；从问题 II～V 中选择 2 题作答。

**问题 I（全员必答）**

**1.** 对下列矩阵 $A$ 回答问题。

$$
A=\begin{pmatrix}9&2&-4\\-4&3&4\\2&2&3\end{pmatrix}
$$

(1) 求 $A$ 的特征多项式 $\Phi(\lambda)$。

(2) 求 $A$ 的特征值及各特征值对应的特征向量。

(3) 用 $P^{-1}AP=\widetilde A$ 将 $A$ 对角化，给出 $P$ 和 $\widetilde A$。

(4) 求 $P^{-1}$。

**2.** 回答下列问题。

(1) 设实变量实值函数 $f(x),g(x)$ 均可连续求导 $n$ 次。用数学归纳法证明

$$
\begin{aligned}
&\int f(x)g^{(n)}(x)\,dx\\
&=f(x)g^{(n-1)}(x)-f'(x)g^{(n-2)}(x)\\
&\quad+f''(x)g^{(n-3)}(x)-\cdots\\
&\quad+(-1)^{n-1}f^{(n-1)}(x)g(x)\\
&\quad+(-1)^n\int f^{(n)}(x)g(x)\,dx.
\end{aligned}
$$

其中 $f^{(k)}(x)$ 表示 $f$ 的 $k$ 阶导数。

(2) 设 $F(x)$ 是 $2n$ 次多项式，且对任意次数不超过 $n-1$ 的实系数多项式 $Q(x)$，均有

$$
\int_{-1}^{1}Q(x)F^{(n)}(x)\,dx=0.
$$

利用 (1)，求 $F$ 及其 1 至 $n-1$ 阶导数应满足的条件，并据此证明 $F(x)$ 可以写成 $C(x-1)^n(x+1)^n$，其中 $C$ 是任意常数。

(3) 在 (2) 的 $F$ 中取 $C=1/(2^n n!)$，将 $F$ 求导 $n$ 次得到的 $n$ 次多项式记为 $P_n$，即

$$
P_n(x)=\frac1{2^n n!}\frac{d^n}{dx^n}(x-1)^n(x+1)^n.
$$

证明存在多项式 $G$，使

$$
\begin{aligned}
P_n(x)&=\frac1{2^n}(x+1)^n\\
&\quad+\frac1{2^n}(x-1)^n\\
&\quad+(x-1)(x+1)G(x).
\end{aligned}
$$

可以使用乘积求导公式：对于均可连续求导 $n$ 次的实变量实值函数 $f,g$，

$$
\begin{aligned}
&(f(x)g(x))^{(n)}\\
&=\sum_{k=0}^{n}\binom nk f^{(n-k)}(x)g^{(k)}(x).
\end{aligned}
$$

(4) 求 $P_n(1)$ 和 $P_n(-1)$。

## **Kai**

### 1(1) 特性多項式

$\Phi(\lambda)=\det(\lambda I-A)$ と定めると、

$$
\boxed{\begin{aligned}
\Phi(\lambda)&=\lambda^3-15\lambda^2+71\lambda-105\\
&=(\lambda-3)(\lambda-5)(\lambda-7)
\end{aligned}}.
$$

$\det(A-\lambda I)$ を採用する流儀では、この式全体の符号が反転する。

### 1(2) 固有値と固有ベクトル

固有値は $3,5,7$。各 $(A-\lambda I)v=0$ を解くと、対応する固有ベクトルはそれぞれ

$$
\begin{gathered}
\lambda=3:\quad c\begin{pmatrix}1\\-1\\1\end{pmatrix},\\
\lambda=5:\quad c\begin{pmatrix}1\\0\\1\end{pmatrix},\\
\lambda=7:\quad c\begin{pmatrix}-1\\1\\0\end{pmatrix},\\
(c\ne0).
\end{gathered}
$$

### 1(3) 対角化

上の固有ベクトルを列として並べて、

$$
\boxed{\begin{gathered}
P=\begin{pmatrix}1&1&-1\\-1&0&1\\1&1&0\end{pmatrix},\\
\widetilde A=\begin{pmatrix}3&0&0\\0&5&0\\0&0&7\end{pmatrix}
\end{gathered}}.
$$

異なる固有値に属する固有ベクトルは一次独立であり、$AP=P\widetilde A$ より $P^{-1}AP=\widetilde A$ となる。

### 1(4) 逆行列

$$
\boxed{P^{-1}=\begin{pmatrix}-1&-1&1\\1&1&0\\-1&0&1\end{pmatrix}}.
$$

実際に $P^{-1}P=I$ が成り立つ。

### 2(1) 反復部分積分

不定積分の等式は積分定数の差を除いて考える。$n=1$ は通常の部分積分

$$
\int fg'\,dx=fg-\int f'g\,dx
$$

である。$n$ のときの公式を仮定し、$f'$ と $g$ に適用すると、

$$
\begin{aligned}
&\int fg^{(n+1)}\,dx\\
&=fg^{(n)}-\int f'g^{(n)}\,dx\\
&=fg^{(n)}\\
&\quad-\sum_{j=0}^{n-1}(-1)^j f^{(j+1)}g^{(n-1-j)}\\
&\quad-(-1)^n\int f^{(n+1)}g\,dx\\
&=\sum_{j=0}^{n}(-1)^j f^{(j)}g^{(n-j)}\\
&\quad+(-1)^{n+1}\int f^{(n+1)}g\,dx.
\end{aligned}
$$

これは $n+1$ の公式である。従って全ての正整数 $n$ について成立する。

### 2(2) 積分条件から従うこと

$Q^{(n)}=0$ なので、(1) より与えられた条件は

$$
\boxed{\begin{gathered}
\sum_{j=0}^{n-1}(-1)^j
\bigl[Q^{(j)}(x)F^{(n-1-j)}(x)\bigr]_{-1}^{1}=0,\\
(\deg Q\leq n-1)
\end{gathered}}
$$

と同値である。例えば $Q=x^r$ $(r=0,\ldots,n-1)$ を代入すれば、端点値についての $n$ 本の線形条件が得られる。

ただし、**この条件だけから $F=C(x-1)^n(x+1)^n$ は導けない**。$n=1$、$F(x)=x^2+1$ なら、定数 $Q=q$ に対して $\int_{-1}^{1}qF'(x)\,dx=\int_{-1}^{1}2qx\,dx=0$ だが、$F$ は $C(x^2-1)$ の形ではない。

正確には、与えられた条件を満たす $F$ の一般形は

$$
\boxed{\begin{gathered}
F(x)=C(x-1)^n(x+1)^n+R(x),\\
\deg R\leq n-1
\end{gathered}}
$$

である（$2n$ 次なら $C\ne0$）。これを示すため、$H(x)=(x-1)^n(x+1)^n$ とおく。$H$ とその $n-1$ 次までの導関数は $\pm1$ で零なので、(1) より $H^{(n)}$ は全ての $Q$ に直交する。

$C$ を $F$ の最高次係数とし、$R=F-CH$ とおけば $\deg R\leq2n-1$、従って $\deg R^{(n)}\leq n-1$。直交条件に $Q=R^{(n)}$ を代入して

$$
\int_{-1}^{1}\bigl(R^{(n)}(x)\bigr)^2\,dx=0
$$

を得る。よって $R^{(n)}=0$、すなわち $\deg R\leq n-1$ である。

設問の結論を得るには、例えば $F^{(j)}(1)=F^{(j)}(-1)=0$ $(j=0,\ldots,n-1)$ という端点条件を追加すればよい。この場合、$\pm1$ はいずれも少なくとも $n$ 重根なので、次数から $F=C(x-1)^n(x+1)^n$ と確定する。以下では (3) が明示した $F$ を用いる。

### 2(3) $P_n$ の表示

ライプニッツの公式より、

$$
\begin{aligned}
&P_n(x)\\
&=\frac1{2^n n!}\sum_{k=0}^{n}\binom nk\\
&\qquad\times\frac{n!}{k!}(x-1)^k\frac{n!}{(n-k)!}(x+1)^{n-k}\\
&=\frac1{2^n}\sum_{k=0}^{n}\binom nk^{\!2}\\
&\qquad\times(x-1)^k(x+1)^{n-k}.
\end{aligned}
$$

$k=0,n$ の項はそれぞれ $2^{-n}(x+1)^n$、$2^{-n}(x-1)^n$。残りの各項は $(x-1)(x+1)$ を因子に持つ。従って求める表示が成立し、具体的には

$$
\begin{aligned}
G(x)&=\frac1{2^n}\sum_{k=1}^{n-1}\binom nk^{\!2}\\
&\qquad\times(x-1)^{k-1}(x+1)^{n-k-1}
\end{aligned}
$$

と取れる。$n=1$ では空和を $0$ とする。

### 2(4) 端点の値

(3) の表示に代入して、

$$
\boxed{P_n(1)=1,\qquad P_n(-1)=(-1)^n}.
$$

## **Reference**

- [中央大学公式問題（2025年度、冊子 p.83／PDF 第84頁；選答方法：冊子 p.82）](https://www.chuo-u.ac.jp/uploads/2025/09/admission_gschool_exam_science_10_01.pdf#page=84)
