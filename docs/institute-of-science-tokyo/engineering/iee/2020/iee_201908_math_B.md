---
sidebar_label: "2019年8月実施 午前 数理B"
tags:
  - institute-of-science-tokyo
  - Probability-Statistics.Probability-Basics.Markov-and-Chebyshev-Inequalities
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Binomial-Distribution
---
# 東京工業大学 工学院 経営工学系 2019年8月実施 午前 数理B


## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

### 題意の要約

[公式問題PDF、4–5ページ](https://www.titech.ac.jp/admissions/pdf/82-iee-r1.pdf#page=4)

[1]

1. 同値関係の定義を述べ、整数上で $a\equiv b\iff5\mid(a-b)$ と定めた関係が同値関係であることを定義から示す。
2. $\mathbb R^3$ の開集合を定義し、2つの開集合 $A,B$ の共通部分 $A\cap B$ が開集合であることを定義から示す。

[2] ここで用いる確率変数の値域は有限とする。

1. (a) 非負 $Y$ と $b>0$ に対する $P(Y\ge b)\le E[Y]/b$ を用い、任意の $Z$ と $c>0$ について $P((Z-EZ)^2\ge c)\le V(Z)/c$ を示す。(b) これから $a>0$ に対するチェビシェフ不等式 $P(|X-EX|\ge a)\le V(X)/a^2$ を導く。
2. (a) 確率変数 $X,Y$ の独立性を定義する。(b) 独立な場合に $V(X+Y)=V(X)+V(Y)$ を示す。
3. 公平なコインを独立に $n$ 回投げ、表の回数を $X$ とする。(a) $E(X),V(X)$ を求める。(b) 前問の結果から $P(X\ge3n/4)\le2/n$ を示す。

### 题目描述

#### [1]

1. 给出等价关系的定义，并从定义出发证明整数集上的关系 $a\equiv b\iff5\mid(a-b)$ 是等价关系。
2. 给出 $\mathbb R^3$ 中开集的定义，并从定义出发证明两个开集 $A,B$ 的交集 $A\cap B$ 是开集。

#### [2]

本问随机变量的取值集合均为有限集。

1. (a) 利用非负随机变量 $Y$ 的 Markov 不等式 $P(Y\ge b)\le E[Y]/b$（$b>0$），对任意随机变量 $Z$ 和 $c>0$ 证明
   $$
   P((Z-EZ)^2\ge c)\le V(Z)/c.
   $$
   (b) 由此推出 $a>0$ 时的 Chebyshev 不等式 $P(|X-EX|\ge a)\le V(X)/a^2$。
2. (a) 定义两个随机变量 $X,Y$ 的独立性。(b) 证明独立时 $V(X+Y)=V(X)+V(Y)$。
3. 独立抛掷一枚公平硬币 $n$ 次，令 $X$ 为正面次数。(a) 求 $E(X),V(X)$。(b) 利用上述不等式证明 $P(X\ge3n/4)\le2/n$。

## **Kai**
### \[1\]

#### (1)

同値関係は反射律 $aRa$、対称律 $aRb\Rightarrow bRa$、推移律 $aRb,\ bRc\Rightarrow aRc$ を満たす関係である。

$5\mid(a-a)$ なので反射律が成り立つ。$a-b=5k$ なら $b-a=5(-k)$ なので対称律が成り立つ。さらに $a-b=5k,\ b-c=5\ell$ なら $a-c=5(k+\ell)$ なので推移律が成り立つ。

#### (2)

$A\subset\mathbb R^3$ が開集合であるとは、各 $x\in A$ に対し $\varepsilon>0$ が存在して開球 $B(x,\varepsilon)\subset A$ となることである。

$x\in A\cap B$ を取る。開集合の定義より $B(x,r_A)\subset A$、$B(x,r_B)\subset B$ となる正数 $r_A,r_B$ が存在する。$r=\min(r_A,r_B)>0$ とすれば $B(x,r)\subset A\cap B$ である。ゆえに共通部分は開集合である。共通部分が空集合の場合も定義を満たす。

### \[2\]
#### (1)
##### (a)
$(Z-E(Z))^2$ は非負の値をとる確率変数であるから、
与えられた不等式において、
$X=(Z-E(Z))^2, b=c$ とおくと、

$$
\begin{aligned}
P \left( (Z-E(Z))^2 \geq c \right)
&\leq \frac{E \left( (Z-E(Z))^2 \right)}{c}
\\
&= \frac{V(Z)}{c}
\end{aligned}
$$

を得る。

#### (b)
(a) で示した不等式を使って、次のように示せる：

$$
\begin{aligned}
P \left( | X-E(X) | \geq a \right)
&=
P \left( ( X-E(X) )^2 \geq a^2 \right)
\\
&\leq \frac{V(X)}{a^2}
\end{aligned}
$$

#### (2)

##### (a)

有限値の確率変数では、全ての値 $x,y$ について

$$P(X=x,Y=y)=P(X=x)P(Y=y)$$

が成り立つことを独立という。これは任意の値の集合 $S,T$ に対して $P(X\in S,Y\in T)=P(X\in S)P(Y\in T)$ と同値である。

##### (b)

独立性と有限和より

$$
E[XY]=\sum_{x,y}xyP(X=x)P(Y=y)=E[X]E[Y].
$$

したがって $\operatorname{Cov}(X,Y)=0$ であり、

$$
V(X+Y)=V(X)+V(Y)+2\operatorname{Cov}(X,Y)=V(X)+V(Y).
$$

#### (3)
##### (a)

$$
  \begin{aligned}
  E(X) &= \frac{n}{2}
  \\
  V(X) &= \frac{n}{4}
  \end{aligned}
$$

##### (b)

$$
  \begin{aligned}
  P \left( X \geq \frac{3n}{4} \right)
  &=
  P \left( X - \frac{n}{2} \geq \frac{n}{4} \right)
  \\
  &=
  \frac{1}{2} P \left( \left| X - \frac{n}{2} \right|
  \geq \frac{n}{4} \right)
  \qquad\left(\because X\sim\operatorname{Bin}(n,\tfrac12)\text{ の対称性}\right)
  \\
  &\leq
  \frac{1}{2} \frac{\frac{n}{4}}{\left( \frac{n}{4} \right)^2} 
  \ \ \ \ \ \ \ \ 
  ( \because (1)(b) )
  \\
  &=
  \frac{2}{n}
  \end{aligned}
$$
