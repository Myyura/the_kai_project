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

次の設問 [1]、[2] に答えよ。

### [1]

次の小問 (1) と (2) に答えよ。

(1) 整数の集合 $\mathbb Z$ 上の2つの要素 $a,b$ の二項関係 $aRb$ が同値関係となることの定義を述べよ。次に、整数の集合上の2つの要素 $a,b$ の二項関係 $a\equiv b$ を $a-b$ が5で割り切れると定義するとき、この二項関係が同値関係であることを定義に従い証明せよ。

(2) 3次元ユークリッド空間 $\mathbb R^3$ の部分集合 $A$ が開集合であることの定義を述べよ。次に、3次元ユークリッド空間の任意の二つの開集合 $A,B$ の共通部分 $A\cap B$ が開集合となることを定義に従い証明せよ。

### [2]

次の小問 (1) から (3) に答えよ。なお、以下で現れる確率変数に対し、その取り得る値は有限個と仮定する。

(1) $X$ は確率変数とし、$a$ は任意の正の実数とする。不等式

$$
P(|X-E(X)|\ge a)\le\frac{V(X)}{a^2}
$$

が成り立つことを、以下の手順で証明する。ここで、$P(|X-E(X)|\ge a)$ は $|X-E(X)|\ge a$ が成り立つ確率を表し、$E(X)$ は $X$ の期待値を表し、$V(X)$ は $X$ の分散を表す。以下の問い (a) と (b) に答えよ。

(a) 非負の値をとる確率変数 $Y$ および任意の正の実数 $b$ に対し、以下の不等式が成り立つことが知られている：

$$
P(Y\ge b)\le\frac{E(Y)}b.
$$

ここで、$P(Y\ge b)$ は $Y\ge b$ が成り立つ確率を表す。この不等式を使って、以下の不等式が成り立つことを証明せよ：

$$
P((Z-E(Z))^2\ge c)\le\frac{V(Z)}c.
$$

ここで、$Z$ は確率変数とし、$c$ は任意の正の実数とする。また、$P((Z-E(Z))^2\ge c)$ は $(Z-E(Z))^2\ge c$ が成り立つ確率を表す。

(b) 問い (a) で示した不等式を使って、以下の不等式を証明せよ：

$$
P(|X-E(X)|\ge a)\le\frac{V(X)}{a^2}.
$$

ここで、$X$ は確率変数とし、$a$ は任意の正の実数とする。

(2) 以下の問い (a) と (b) に答えよ。

(a) 確率変数 $X,Y$ が独立であることの定義を書け。

(b) 確率変数 $X,Y$ に対し、$X$ と $Y$ が独立ならば $V(X+Y)=V(X)+V(Y)$ が成り立つことを証明せよ。

(3) 表と裏が等確率で出るコインを考える。このコインを $n$ 回投げたときに表が出る回数が $3n/4$ 回以上になる確率が $2/n$ 以下になることを、小問 (1) と (2) の結果を使って証明する。以下の問い (a) と (b) に答えよ。

(a) このコインを $n$ 回投げたときに表が出る回数を $X$ とおく。$X$ の期待値 $E(X)$ と分散 $V(X)$ を計算せよ。

(b) $P(X\ge3n/4)\le2/n$ が成り立つことを証明せよ。

### 题目描述

回答 [1]、[2]。

#### [1]

回答 (1)、(2)。

(1) 给出整数集 $\mathbb Z$ 上两个元素 $a,b$ 的二元关系 $aRb$ 为等价关系的定义。再定义整数集上的二元关系 $a\equiv b$ 为 $a-b$ 能被5整除，按照定义证明该关系是等价关系。

(2) 给出三维欧几里得空间 $\mathbb R^3$ 的子集 $A$ 为开集的定义。再按照定义证明三维欧几里得空间中任意两个开集 $A,B$ 的交集 $A\cap B$ 是开集。

#### [2]

回答 (1)～(3)。以下出现的随机变量均假设只能取有限个值。

(1) 设 $X$ 为随机变量，$a$ 为任意正实数。按照下列步骤证明

$$
P(|X-E(X)|\ge a)\le\frac{V(X)}{a^2}.
$$

这里，$P(|X-E(X)|\ge a)$ 表示 $|X-E(X)|\ge a$ 成立的概率，$E(X)$、$V(X)$ 分别表示 $X$ 的期望和方差。回答 (a)、(b)。

(a) 已知非负随机变量 $Y$ 和任意正实数 $b$ 满足

$$
P(Y\ge b)\le\frac{E(Y)}b,
$$

其中 $P(Y\ge b)$ 表示 $Y\ge b$ 成立的概率。利用该不等式证明

$$
P((Z-E(Z))^2\ge c)\le\frac{V(Z)}c.
$$

这里 $Z$ 为随机变量，$c$ 为任意正实数，$P((Z-E(Z))^2\ge c)$ 表示 $(Z-E(Z))^2\ge c$ 成立的概率。

(b) 利用 (a) 证明的不等式证明

$$
P(|X-E(X)|\ge a)\le\frac{V(X)}{a^2},
$$

其中 $X$ 为随机变量，$a$ 为任意正实数。

(2) 回答 (a)、(b)。

(a) 写出随机变量 $X,Y$ 相互独立的定义。

(b) 证明：若随机变量 $X,Y$ 相互独立，则 $V(X+Y)=V(X)+V(Y)$。

(3) 考虑正反面出现概率相等的硬币。利用 (1)、(2) 的结果，证明投掷该硬币 $n$ 次时，正面次数不少于 $3n/4$ 的概率不超过 $2/n$。回答 (a)、(b)。

(a) 令 $X$ 为投掷该硬币 $n$ 次时出现正面的次数，计算 $E(X)$ 和 $V(X)$。

(b) 证明 $P(X\ge3n/4)\le2/n$。

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
$Y=(Z-E(Z))^2, b=c$ とおくと、

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

$$
P(X=x,Y=y)=P(X=x)P(Y=y)
$$

が成り立つことを独立という。これは任意の値の集合 $S,T$ に対して $P(X\in S,Y\in T)=P(X\in S)P(Y\in T)$ と同値である。

##### (b)

独立性と有限和より

$$
\begin{aligned}
E[XY]&=\sum_{x,y}xyP(X=x)P(Y=y)\\
&=E[X]E[Y].
\end{aligned}
$$

したがって $\operatorname{Cov}(X,Y)=0$ であり、

$$
\begin{gathered}
V(X+Y)=V(X)+V(Y)+2\operatorname{Cov}(X,Y)\\
=V(X)+V(Y).
\end{gathered}
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
  \begin{gathered}
  P \left( X \geq \frac{3n}{4} \right)
  =
  P \left( X - \frac{n}{2} \geq \frac{n}{4} \right)
  \\
  =
  \frac{1}{2} P \left( \left| X - \frac{n}{2} \right|
  \geq \frac{n}{4} \right)
  \qquad\left(\because X\sim\operatorname{Bin}(n,\tfrac12)\text{ の対称性}\right)
  \\
  \leq
  \frac{1}{2} \frac{\frac{n}{4}}{\left( \frac{n}{4} \right)^2} 
  \quad
  ( \because (1)(b) )
  \\
  =
  \frac{2}{n}
  \end{gathered}
$$

## **Reference**

- [公式問題PDF、4–5ページ](https://www.titech.ac.jp/admissions/pdf/82-iee-r1.pdf#page=4)
