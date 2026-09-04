---
sidebar_label: 2023年8月実施 選択問題 離散数学
tags:
  - University-of-Electro-Communications
  - Discrete-Mathematics.Mathematical-Logic.Predicate-Logic
  - Discrete-Mathematics.Set-Theory.Image-and-Preimage
  - Discrete-Mathematics.Set-Theory.Cardinality
  - Discrete-Mathematics.Mathematical-Logic.Mathematical-Induction
---

# 電気通信大学 情報理工学研究科 情報学専攻 2023年8月実施 選択問題 離散数学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 問1

前提が偽のときの含意 $p\Rightarrow q$ について、二つの誤った真理値表を論理式で表し、空欄 1〜9 を選択肢から埋めよ。

| $p$ | $q$ | A さんの表 | B さんの表 |
|:---:|:---:|:---:|:---:|
| T | T | T | T |
| T | F | F | F |
| F | T | F | F |
| F | F | F | T |

A さんの表は $p\,[1]\,[2]$、B さんの表は $(p\,[3]\,[4])\land(\neg p\,[5]\,[6])$ と表される。これらは $p,q$ に関して [7] であり、[8] 命題がその [9] と同値になるという問題がある。選択肢は $0:\lor$、$1:\land$、$2:q$、$3:\neg q$、$4:$逆、$5:$裏、$6:$対偶、$7:$対称、$8:$任意の、$9:$ある、である。

### 問2

正の整数上の述語 $p(x)$ を「$x$ は偶数」とし、

$$
\exists x\,p(x)\land\exists x\,q(x)
\Rightarrow\exists x\,(p(x)\land q(x))
$$

の真偽を、$q(x)$ が奇数、素数、4 の倍数、$x<1$ を表す各場合に答えよ。さらに次の四式を、恒真・恒偽・いずれにもなる、のいずれかに分類せよ。

$$
\begin{aligned}
(2)\quad &\forall x\,(p(x)\lor q(x))\Rightarrow
(\forall x\,p(x)\lor\forall x\,q(x)),\\
(3)\quad &\exists x\forall y\,p(x,y)\Rightarrow\forall y\exists x\,p(x,y),\\
(4)\quad &\exists x\,\neg p(x)\Longleftrightarrow\forall x\,p(x),\\
(5)\quad &\neg\forall x\,(p(x)\Rightarrow q(x))
\Longleftrightarrow\exists x\,(p(x)\land\neg q(x)).
\end{aligned}
$$

### 問3

写像 $f:A\to B$ と $P\subseteq A$ に対する

$$
f(A-P)\mathrel{?}f(A)-f(P)
$$

の包含関係を選び、その証明の空欄を埋めよ。さらに $A=B=\mathbb R$、$P=[-1,1]$ とし、$f(x)=x^3-x^2,2^x,\sin x$ の各場合に等号が成り立つか答え、等号を保証する $f$ の性質を選べ。

### 問4

$|A|=m,|B|=n$ とする。$m,n$ の大小関係ごとに写像 $A\to B$ に可能な単射・全射の性質を選べ。また、写像、全射、単射の総数を求め、$S(u,v)$ を $u$ 元集合から $v$ 元集合への全射数とするとき

$$
n^m=\sum_{k=1}^n{n\choose k}S(m,k)\qquad(m\ge n\ge1)
$$

を証明せよ。

### 問5

Pascal の関係

$$
{n+1\choose k+1}={n\choose k+1}+{n\choose k}
$$

を示し、数学的帰納法により

$$
{n\choose k}\le\frac{n^k}{2^{k-1}}\qquad(0\le k\le n)
$$

を証明せよ。

### 题目描述

题目依次考查命题与量词逻辑、像集与差集的关系、有限集合间映射的计数，以及组合恒等式和组合数不等式的归纳证明；选择题空格需同时给出选项编号与内容。

## **Kai**

### 問1

A さんの表は $p\land q$、B さんの表は

$$
(p\lor\neg q)\land(\neg p\lor q)
$$

の真理値表である。したがって空欄は

| 空欄 | 選択肢 | 内容 |
|---:|---:|---|
| 1 | 1 | $\land$ |
| 2 | 2 | $q$ |
| 3 | 0 | $\lor$ |
| 4 | 3 | $\neg q$ |
| 5 | 0 | $\lor$ |
| 6 | 2 | $q$ |
| 7 | 7 | 対称 |
| 8 | 8 | 任意の |
| 9 | 4 | 逆 |

である。

### 問2

#### (1)

| 空欄 | 選択肢 | 真偽 |
|---:|---:|---|
| 10 | 0 | 偽 |
| 11 | 1 | 真 |
| 12 | 1 | 真 |
| 13 | 1 | 真 |

奇数の場合だけ、前件は真であるが偶数かつ奇数の正整数は存在しない。

#### (2)〜(5)

| 空欄 | 選択肢 | 判定 |
|---:|---:|---|
| 14 | 2 | 真にも偽にもなる |
| 15 | 1 | 常に真 |
| 16 | 0 | 常に偽 |
| 17 | 1 | 常に真 |

ここで 15 は
$\exists x\forall y\,p(x,y)\Rightarrow\forall y\exists x\,p(x,y)$、
17 は量化記号の否定と含意の定義から直ちに従う。

### 問3

#### (1)、(2)

$$
\boxed{f(A-P)\supseteq f(A)-f(P)}.
$$

したがって 18 は選択肢 $1$（$\supseteq$）である。証明の矢印は

| 空欄 | 選択肢 | 内容 |
|---:|---:|---|
| 19 | 2 | $\Rightarrow$ |
| 20 | 0 | $\Longleftrightarrow$ |
| 21 | 0 | $\Longleftrightarrow$ |

となる。実際、$b\in f(A)-f(P)$ なら、$b=f(a)$ となる $a\in A$ は $P$ に属さないので $b\in f(A-P)$ である。

#### (3)

| 空欄 | 選択肢 | 内容 |
|---:|---:|---|
| 22 | 0 | 成り立つ |
| 23 | 0 | 成り立つ |
| 24 | 1 | 成り立たない |
| 25 | 3 | 単射 |

$f(x)=x^3-x^2$ の場合、

$$
f([-1,1])=[-2,0],\qquad
f(\mathbb R-[-1,1])=(-\infty,-2)\cup(0,\infty)
$$

なので等号が成り立つ。$2^x$ は単射なので等号が成り立つ。$\sin x$ では左辺が $[-1,1]$ となるため等号は成り立たない。

### 問4

#### (1)

選択肢は $0$：全単射、$1$：全射でも単射でもない、$2$：全射だが単射でない、$3$：単射だが全射でない、である。

| 条件 | ありうる選択肢 |
|---|---|
| (a) $m=n$ | $\boxed{0,1}$ |
| (b) $m>n$ | $\boxed{1,2}$ |
| (c) $m\le n$ | $\boxed{0,1,3}$ |

#### (2)

写像の総数は

$$
\boxed{n^m}.
$$

全射の総数は

$$
\boxed{
S(m,n)=
\begin{cases}
\displaystyle\sum_{j=0}^n(-1)^j{n\choose j}(n-j)^m,&m\ge n,\\
0,&m<n.
\end{cases}}
$$

単射の総数は

$$
\boxed{
\begin{cases}
\dfrac{n!}{(n-m)!},&m\le n,\\
0,&m>n.
\end{cases}}
$$

#### (3)

写像 $A\to B$ を像の要素数 $k$ で分類する。像となる $k$ 元を選ぶ方法が ${n\choose k}$ 通り、その集合への全射が $S(m,k)$ 通りなので

$$
n^m=\sum_{k=1}^n{n\choose k}S(m,k).
$$

### 問5

#### (1)

$0\le k<n$ では

$$
\begin{aligned}
{n\choose k+1}+{n\choose k}
&=\frac{n!}{(k+1)!(n-k-1)!}
+\frac{n!}{k!(n-k)!}\\
&=\frac{(n+1)!}{(k+1)!(n-k)!}
={n+1\choose k+1}.
\end{aligned}
$$

$k=n$ では ${n\choose n+1}=0$ として、両辺とも $1$ である。

#### (2)

$n=1$ では $k=0,1$ の双方で成立する。$n=t$ で成立すると仮定する。

$k=0,1,t+1$ は直接成立する。$2\le k\le t$ では Pascal の関係と帰納法の仮定より

$$
\begin{aligned}
{t+1\choose k}
&={t\choose k}+{t\choose k-1}\\
&\le\frac{t^k}{2^{k-1}}+\frac{t^{k-1}}{2^{k-2}}\\
&=\frac{t^{k-1}(t+2)}{2^{k-1}}\\
&\le\frac{(t+1)^k}{2^{k-1}},
\end{aligned}
$$

ただし最後は $(t+1)^k\ge t^k+2t^{k-1}$ を用いた。よってすべての $n$ で成立する。
