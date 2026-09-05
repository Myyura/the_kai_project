---
sidebar_label: '2020年8月実施 数学2'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2020年8月実施 数学2

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

[公式原題](https://www.t.u-tokyo.ac.jp/hubfs/pdf/2021_M_2.pdf)

### I.
$$A=\begin{pmatrix}0&3&0\\-3&0&4\\0&-4&0\end{pmatrix}$$
について、(1) 全固有値、(2) $A^3+aA^2+bA+cI=O$ の係数、(3) $A^{2n+1}$（$n\ge0$ は整数）、(4) $\exp(tA)=pA^2+qA+rI$ の実数表示の係数を求める。$t\in\mathbb R$。

### II.
二状態 A、B の離散時間系で、AからBへの遷移確率を $\alpha$、BからAを $\beta$ とし、$0<\alpha<1$、$0<\beta<1$ とする。

1. $\boldsymbol P(n)=(P_A(n),P_B(n))^T$ に対し $\boldsymbol P(n+1)=M\boldsymbol P(n)$ の $M$ を求める。
2. $M$ の全固有値と対応する固有ベクトルを求める。
3. $n\to\infty$ の各状態の確率を求める。
4. $R_A(n)=P_A(n)-\lim_{k\to\infty}P_A(k)$ とおき、$R_A(n+1)$ を $R_A(n)$ で表す。

### III.
$m\ge3$ とし、$\boldsymbol a_1,\ldots,\boldsymbol a_m$ は一次独立とする。循環的な和 $\boldsymbol a_1+\boldsymbol a_2,\ldots,\boldsymbol a_m+\boldsymbol a_1$ が一次独立となる $m$ の条件を求める。

### 题目描述

1. 对

   $$
   A=\begin{pmatrix}0&3&0\\-3&0&4\\0&-4&0\end{pmatrix},
   $$

   求特征值；用凯莱—哈密顿定理确定满足 $A^3+aA^2+bA+cI=0$ 的系数；对整数 $n\ge0$ 求 $A^{2n+1}$；并把矩阵指数写成 $\exp(tA)=pA^2+qA+rI$ 的形式，求 $p,q,r$。
2. 对状态 $A,B$ 间以概率 $\alpha,\beta$ 转移的二状态过程，写出概率向量的转移矩阵

   $$
   M=\begin{pmatrix}1-\alpha&\beta\\ \alpha&1-\beta\end{pmatrix},
   $$

   求其特征值、特征向量和长期稳态概率；再令
   $R_A(n)=P_A(n)-P_A(\infty)$，推导 $R_A(n+1)$ 与 $R_A(n)$ 的关系。参数满足 $0<\alpha<1,0<\beta<1$。
3. 设 $m\ge3$，已知 $\boldsymbol a_1,\ldots,\boldsymbol a_m$ 线性无关，判断循环相邻和

   $$
   \boldsymbol a_1+\boldsymbol a_2,
   \boldsymbol a_2+\boldsymbol a_3,\ldots,\
   \boldsymbol a_m+\boldsymbol a_1
   $$

   是否线性无关，并按 $m$ 的奇偶性给出结论。

## **Kai**
### I.
#### 1.
$A$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0
&= \det \begin{pmatrix} - \lambda & 3 & 0 \\ -3 & -\lambda & 4 \\ 0 & -4 & -\lambda \end{pmatrix}
\\
&= - \lambda ( \lambda^2 + 25)
\\
\therefore \ \ 
\lambda &= 0, 5i, -5i
\end{aligned}
$$

を得る。

#### 2.
ケーリー-ハミルトンの定理より、$A^3 + 25A = 0$ が成り立つ。

つまり、 $a=0,b=25,c=0$ である。

#### 3.

$$
\begin{aligned}
A^3 &= -25A
, \\
A^5 &= -25 A^3 = (-25)^2 A
, \\
&\cdots
\end{aligned}
$$

から、

$$
\begin{aligned}
A^{2n+1} = (-25)^n A = (-1)^n 5^{2n} A
\end{aligned}
$$

がわかる。

#### 4.
上の 3. から、$A^{2n+2} = (-1)^n 5^{2n} A^2$もわかる。

そこで、

$$
\begin{aligned}
\exp (tA)
&= \sum_{k=0}^\infty \frac{t^k}{k!} A^k
\\
&= I + \sum_{n=0}^\infty \frac{t^{2n+1}}{(2n+1)!} A^{2n+1} + \sum_{n=0}^\infty \frac{t^{2n+2}}{(2n+2)!} A^{2n+2}
\\
&= I + A \sum_{n=0}^\infty \frac{(-1)^n 5^{2n} t^{2n+1}}{(2n+1)!} + A^2 \sum_{n=0}^\infty \frac{(-1)^n 5^{2n}t^{2n+2}}{(2n+2)!}
\\
&= I + A \frac{1}{5} \sum_{n=0}^\infty \frac{(-1)^n (5t)^{2n+1}}{(2n+1)!}
- A^2 \frac{1}{25} \sum_{n=1}^\infty \frac{(-1)^n (5t)^{2n}}{(2n)!}
\\
&= I + \frac{\sin (5t)}{5} A - \frac{\cos (5t) - 1}{25} A^2
\end{aligned}
$$

と計算できるので、

$$
\begin{aligned}
p = \frac{1 - \cos (5t)}{25}
, \ \ 
q = \frac{\sin (5t)}{5}
, \ \ 
r = 1
\end{aligned}
$$

がわかる。

### II.
#### 1.

$$
\begin{aligned}
P_A(n+1) &= P_A(n) (1-\alpha) + P_B(n) \beta
\\
P_B(n+1) &= P_A(n) \alpha + P_B(n) (1-\beta)
\end{aligned}
$$

なので、

$$
\begin{aligned}
M = \begin{pmatrix} 1-\alpha & \beta \\ \alpha & 1-\beta \end{pmatrix}
\end{aligned}
$$

である。

#### 2.
$M$ の固有値は $1, 1-\alpha-\beta$ であり、それぞれに対応する固有ベクトルは、例えば、

$$
\begin{aligned}
\begin{pmatrix} \beta \\ \alpha \end{pmatrix}
, \ \ 
\begin{pmatrix} 1 \\ -1 \end{pmatrix}
\end{aligned}
$$

である。

#### 3.
題意の $0<\alpha,\beta<1$ より $|1-\alpha-\beta|<1$ である。したがって固有値 $1$ 以外の成分は減衰して、A,Bである確率は一定値に収束する。それは $M$ の固有ベクトルであり、確率は負にならないことを考慮して、

$$
\begin{aligned}
\lim_{k \to \infty} P_A(k) = \frac{\beta}{\alpha+\beta}
, \ \ 
\lim_{k \to \infty} P_B(k) = \frac{\alpha}{\alpha+\beta}
\end{aligned}
$$

であることがわかる。

#### 4.

$$
\begin{aligned}
P_A(\infty) = \lim_{k \to \infty} P_A(k) = \frac{\beta}{\alpha+\beta}
\end{aligned}
$$

と書くことにする。

$$
\begin{aligned}
R_A(n+1)
&= P_A(n+1) - P_A(\infty)
\\
&= P_A(n) (1-\alpha) + P_B(n) \beta - P_A(\infty)
\\
&= P_A(n) (1-\alpha) + \left(1 - P_A(n) \right) \beta - P_A(\infty)
\\
&= (1-\alpha-\beta) P_A(n) + \beta - P_A(\infty)
\\
R_A(n) &= P_A(n) - P_A(\infty)
\end{aligned}
$$

であるから、 $P_A(n)$ を消去して、

$$
\begin{aligned}
R_A(n+1)
&= (1-\alpha-\beta) \left( R_A(n) + P_A(\infty) \right) + \beta - P_A(\infty)
\\
&= (1-\alpha-\beta) R_A(n)
\end{aligned}
$$

を得る。

### III.

$$
\begin{aligned}
c_1 (\boldsymbol{a}_1 + \boldsymbol{a}_2) +
c_2 (\boldsymbol{a}_2 + \boldsymbol{a}_3) + \cdots +
c_m (\boldsymbol{a}_m + \boldsymbol{a}_1)
= \boldsymbol{0}
\end{aligned}
$$

が成り立つとしたとき $c_1 = c_2 = \cdots = c_m = 0$
が導かれるかを検討する。

上の式を整理すると、

$$
\begin{aligned}
(c_1+c_m) \boldsymbol{a}_1 +
(c_1+c_2) \boldsymbol{a}_2 +
(c_2+c_3) \boldsymbol{a}_3 + \cdots +
(c_{m-1}+c_m) \boldsymbol{a}_m
= \boldsymbol{0}
\end{aligned}
$$

となり、
$\boldsymbol{a}_1, \boldsymbol{a}_2, \cdots, \boldsymbol{a}_m$
が1次独立であることから、

$$
\begin{aligned}
c_1+c_m = c_1+c_2 = c_2+c_3 = \cdots = c_{m-1}+c_m = 0
\end{aligned}
$$

よって、

$$
\begin{aligned}
c_2 &= c_4 = \cdots = -c_1
, \\
c_3 &= c_5 = \cdots =  c_1
, \\
c_m &= -c_1
\end{aligned}
$$

を得る。したがって、 $m$ が奇数のときは
$c_1 = c_2 = \cdots = c_m = 0$ が導かれるので

$$
\boldsymbol{a}_1 + \boldsymbol{a}_2,
\boldsymbol{a}_2 + \boldsymbol{a}_3, \cdots,
\boldsymbol{a}_m + \boldsymbol{a}_1
$$

は1次独立となる。
$m$ が偶数のときは $c_1=1$ として非零解が得られるので、1次従属である。
