---
sidebar_label: 2021年8月実施 選択問題 離散数学
tags:
  - University-of-Electro-Communications
  - Discrete-Mathematics.Set-Theory.Cardinality
  - Discrete-Mathematics.Set-Theory.Composition-of-Injective-and-Surjective-Maps
  - Discrete-Mathematics.Mathematical-Logic.Predicate-Logic
  - Discrete-Mathematics.Mathematical-Logic.Mathematical-Induction
---

# 電気通信大学 情報理工学研究科 情報学専攻 2021年8月実施 選択問題 離散数学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 問1

全体集合を $U=\{1,2,\ldots,20\}$ とし、$A,B,C$ をそれぞれ $2,3,4$ の倍数の集合とする。次の集合の要素数を求めよ。

1. $(A\cup B)\cap(A^c\cup B)$
2. $B-(A^c\cup C^c)$
3. $A$ に属する素数の集合
4. $x\in A$, $y\in B$, $|x-y|=2$ を満たす $x$ の集合

### 問2

$P,Q,R$ の真理値を $(1,1,1),(1,1,0),\ldots,(0,0,0)$ の順に並べたとき、次の命題の真理値表を完成せよ。

$$
(P\land\neg Q)\lor(Q\land R),
\qquad
(P\Rightarrow Q)\Rightarrow(Q\Rightarrow\neg R).
$$

### 問3

$t:[0,\infty)\to[0,\infty)$ を

$$
t(x)=\frac{e^x+e^{-x}}2
$$

で定める。$t$ が単射かつ全射であるかを、指定された語句・式・記号を空欄に入れて判定せよ。

### 問4

すべての自然数 $n\ge1$ に対して

$$
\frac{(3n)!}{(n!)^3}>3^n
$$

が成り立つことを数学的帰納法で証明せよ。

### 問5

各学年が $5$ クラスからなる学校で、同じ $200$ 人が第1学年から第3学年まで在籍する。どの二人も3年間ずっと同じクラスにならないようにクラス分けできるか答えよ。

### 题目描述

本题依次考查有限集合运算、命题真值表、双曲余弦映射的单射与满射性、数学归纳法以及抽屉原理。

## **Kai**

### 問1

$$
(A\cup B)\cap(A^c\cup B)=B
$$

より、要素数は $6$ である。また、

$$
B-(A^c\cup C^c)=A\cap B\cap C=\{12\},
$$

$A$ に属する素数は $\{2\}$ である。最後の集合は

$$
\{4,8,10,14,16,20\}
$$

となる。したがって、

$$
\boxed{[1],[2],[3],[4]=6,1,1,6}.
$$

### 問2

上から順に、

$$
\boxed{[5],\ldots,[12]=1,0,1,1,1,0,0,0},
$$

$$
\boxed{[13],\ldots,[20]=0,1,1,1,0,1,1,1}.
$$

### 問3

$h(x)=(x+x^{-1})/2$ とおく。$x\ge1$ では $h$ は狭義単調増加であり、$e^x$ も $[0,\infty)$ 上で狭義単調増加である。よって $t=h\circ\exp$ は単射である。一方、

$$
t(x)\ge1
$$

であるから、値域は $[1,\infty)$ であり、終域 $[0,\infty)$ への全射ではない。空欄は

$$
\boxed{
\begin{aligned}
[21]&:\text{単射である}, &[22]&:<, &[23]&:>, &[24]&:\ne,\\
[25]&:f(g(x_1))<f(g(x_2)), &[26]&:e^x, &[27]&:1, &[28]&:0,\\
[29]&:\text{存在しない}, &[30]&:\text{全射でない}
\end{aligned}}
$$

である。

### 問4

$n=1$ のとき $6>3$ なので成立する。$n=k$ で成立すると仮定すると、

$$
(3k+1)(3k+2)-(k+1)^2=8k^2+7k+1>0.
$$

$$
\begin{aligned}
\frac{(3k+3)!}{((k+1)!)^3}
&=\frac{(3k)!}{(k!)^3}
\frac{(3k+1)(3k+2)(3k+3)}{(k+1)^3}\\
&=\frac{(3k)!}{(k!)^3}
\frac{3(3k+1)(3k+2)}{(k+1)^2}\\
&>3^k\cdot3=3^{k+1}.
\end{aligned}
$$

よって数学的帰納法により、すべての $n\ge1$ で成立する。

### 問5

一人の3年間の所属列は高々

$$
5^3=125
$$

通りである。$200>125$ なので、鳩の巣原理により同じ所属列をもつ二人が必ず存在する。したがって、

$$
\boxed{\text{そのようなクラス分けは不可能である}}.
$$
