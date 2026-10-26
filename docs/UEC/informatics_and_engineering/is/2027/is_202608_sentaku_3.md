---
sidebar_label: 2026年8月実施 選択問題 離散数学
tags:
  - University-of-Electro-Communications
  - Discrete-Mathematics.Mathematical-Logic.Predicate-Logic
  - Discrete-Mathematics.Set-Theory.Image-and-Preimage
  - Discrete-Mathematics.Set-Theory.Cardinality
  - Discrete-Mathematics.Set-Theory.Composition-of-Injective-and-Surjective-Maps
  - Discrete-Mathematics.Mathematical-Logic.Mathematical-Induction
---

# 電気通信大学 情報理工学研究科 情報学専攻 2026年8月実施 選択問題 離散数学

## **Author**

shank (co-authored with GPT 6.1 SOL)

## **Description**

**注意：** 離散数学の問1〜問2はマークシートに解答しなさい。解答にあたっては，$\boxed{1}$ 〜 $\boxed{20}$ に当てはまる最も適切なものを，選択肢から選びなさい。

### 問1

あるデータベースを参照し，次に定義される述語 $P(x,y),\ Q(x,y)$ を用いて情報を整理したい。

- $P(x,y)$ ＝ “企業 $x$ は企業 $y$ への発注実績を持つ”
- $Q(x,y)$ ＝ “企業 $x$ は商品 $y$ を扱っている”

なお，いずれの商品についても，1 つ以上の企業がその商品を扱っている（つまり，どの企業からも扱われていない商品はない）ものとする。

以下の問い (1)〜(5) について，それぞれを適切に表現する論理式となるよう，空欄を埋めるのに適切なものを選択肢から選べ。

#### (1)

どの企業も少なくとも 1 つの企業への発注実績を持つ。

$$
\boxed{1}\;\boxed{2}\;P(x,y)
$$

#### (2)

どの企業もすべての企業には発注実績を持たない。

$$
\boxed{3}\;\boxed{4}\;\neg P(x,y)
$$

#### (3)

ある企業について，どの企業もその企業に対して発注実績を持たない。

$$
\boxed{5}\;\neg\;\boxed{6}\;P(x,y)
$$

#### (4)

ある商品について，それを扱っている企業はすべて何らかの発注実績を持つ。

$$
\boxed{7}\;\boxed{8}\;
\left(Q(x,z)\;\boxed{9}\;\boxed{10}\;P(x,y)\right)
$$

#### (5)

これを扱っておけば必ず発注してもらえた，という商品はない。

$$
\boxed{11}\;\boxed{12}\;
\left(Q(y,z)\;\boxed{13}\;\boxed{14}\;\neg P(x,y)\right)
$$

選択肢：⓪ $\forall x$，① $\forall y$，② $\forall z$，③ $\exists x$，④ $\exists y$，⑤ $\exists z$，⑥ $\lor$，⑦ $\land$，⑧ $\Rightarrow$，⑨ $\Leftrightarrow$

述語：predicate，企業：company，発注実績：record of past orders，商品：commodity，論理式：logic expression

### 問2

以下の文章を読み，空欄を埋めるのに最適なものを選択肢から選べ。

集合 $A,\ B$ に対して，写像 $f:A\to B$ が定義されているとする。また，$P_1,\ P_2$ は $A$ の部分集合，$Q_1,\ Q_2$ は $B$ の部分集合とし，$f$ による $Q_1$ の逆像を $f^{-1}(Q_1)$ と表す。このとき，以下のことがいえる。

(a) $f(P_1\cap P_2)=f(P_1)\cap f(P_2)$ は，$\boxed{15}$。

(b) $f^{-1}(Q_1\cap Q_2)=f^{-1}(Q_1)\cap f^{-1}(Q_2)$ は，$\boxed{16}$。

(c) $f^{-1}(f(P_1))=P_1$ は，$\boxed{17}$。

(d) $f(f^{-1}(Q_1))=Q_1$ は，$\boxed{18}$。

以下は，(a)〜(d) のうち，「常には成り立たない」ものすべてに当てはまる反例である。ただし，「常には成り立たない」ものが一つもない場合は，以下の空欄に対してどの選択肢を選んでも正解とする。

$A=B=\{a,b,c\},\ P_1=\{a,b\},\ P_2=\{b,c\},\ Q_1=\{a,b\},\ Q_2=\{b,c\}$ に対して，以下のように $f$ を定義する。

| $x$ | $a$ | $b$ | $c$ |
|---|---|---|---|
| $f(x)$ | $\boxed{19}$ | $b$ | $\boxed{20}$ |

選択肢：⓪ 常に成り立つ，① 常には成り立たない，② $a$，③ $b$，④ $c$

### 問3

以下の問い (1)〜(4) に答えよ。

#### (1)

以下の文章を読み，空欄を埋めるのに最適な語句を選択肢から選べ。

集合 $X,\ Y,\ Z$ に対して写像 $f:X\to Y,\ g:Y\to Z$ が定義されている。

- 合成写像 $g\circ f$ が全射ならば，$f$ は $\boxed{1}$，$g$ は $\boxed{2}$。
- 合成写像 $g\circ f$ が単射ならば，$f$ は $\boxed{3}$，$g$ は $\boxed{4}$。

選択肢：全射，単射，全単射，全射とも単射ともいえない

#### (2)

$A$ を $n$ 個の要素からなる集合（ただし $n\geq 1$），$B$ を $A$ のべき集合（$A$ の部分集合全体の集合）とする。$B$ の要素数 $|B|$ を答えよ。

#### (3)

$A,\ B$ を (2) で定めた集合として，ある $a_0\in A$ を固定したとき，以下のような写像 $h:B\to B$ を考える。

$b\in B$ に対して，

$$
h(b)=
\begin{cases}
b-\{a_0\} & (a_0\in b\text{ のとき}) \\
b\cup\{a_0\} & (a_0\notin b\text{ のとき})
\end{cases}
$$

ただし，集合 $X,\ Y$ に対して，差集合を $X-Y$ と表す。このとき，$h$ が全単射であることを示せ。解答にあたって，(1) の結果を定理として用いてよい。

#### (4)

$B$ を (2) で定めた集合として，$B$ の要素のうち偶数個の要素からなるもの全体の集合を $E$，奇数個の要素からなるもの全体の集合を $O$ とする。ただし，空集合は偶数個の要素からなる集合と考える。このとき，$|E|=|O|$ を示せ。解答にあたって，(3) の結果を定理として用いてよい。

合成写像：composite map，全射：surjection，単射：injection，全単射：bijection，要素：element，べき集合：power set，差集合：set difference，偶数：even number，奇数：odd number，空集合：empty set

### 問4

以下の問い (1)，(2) に答えよ。

#### (1)

任意の正の整数 $n$ に対して，$X_n=\prod_{i=1}^{n}\frac{n+i}{i}$ と定める。この時，次の等式を示せ。

$$
\prod_{i=1}^{n}\frac{n+i}{2i}=\frac{X_n}{2^n}
$$

#### (2)

任意の正の整数 $n$ に対して，次の不等式を数学的帰納法を用いて示せ。

$$
\prod_{i=1}^{n}\frac{n+i}{2i}<2^n\leq\prod_{i=1}^{n}\frac{n+i}{i}
$$

正の整数：positive integer，等式：equality，不等式：inequality，数学的帰納法：mathematical induction

### 题目描述

**注意：** 离散数学的问1、问2须在答题卡上作答。从选项中选择最合适的内容，填入 $\boxed{1}$ 至 $\boxed{20}$。

#### 问1

现要查阅某数据库，并使用如下定义的谓词 $P(x,y),\ Q(x,y)$ 整理信息。

- $P(x,y)$：“企业 $x$ 曾向企业 $y$ 下过订单。”
- $Q(x,y)$：“企业 $x$ 经营商品 $y$。”

假设每一种商品都至少有一家企业经营，即不存在没有任何企业经营的商品。

对下面的 (1) 至 (5)，从选项中选择合适的内容填入空白，使逻辑公式准确表达相应语句。

**(1)**

每家企业都至少曾向一家企业下过订单。

$$
\boxed{1}\;\boxed{2}\;P(x,y)
$$

**(2)**

对于每家企业，都并非曾向所有企业下过订单。

$$
\boxed{3}\;\boxed{4}\;\neg P(x,y)
$$

**(3)**

存在一家企业，所有企业都未曾向这家企业下过订单。

$$
\boxed{5}\;\neg\;\boxed{6}\;P(x,y)
$$

**(4)**

存在一种商品，经营该商品的每家企业都曾下过某种订单。

$$
\boxed{7}\;\boxed{8}\;
\left(Q(x,z)\;\boxed{9}\;\boxed{10}\;P(x,y)\right)
$$

**(5)**

不存在一种只要经营它就一定能够获得订单的商品。

$$
\boxed{11}\;\boxed{12}\;
\left(Q(y,z)\;\boxed{13}\;\boxed{14}\;\neg P(x,y)\right)
$$

选项：⓪ $\forall x$，① $\forall y$，② $\forall z$，③ $\exists x$，④ $\exists y$，⑤ $\exists z$，⑥ $\lor$，⑦ $\land$，⑧ $\Rightarrow$，⑨ $\Leftrightarrow$

术语：谓词（predicate），企业（company），历史订单记录（record of past orders），商品（commodity），逻辑公式（logic expression）。

#### 问2

阅读下面的文字，从选项中选择最合适的内容填入空白。

设集合 $A,\ B$ 之间定义了映射 $f:A\to B$。$P_1,\ P_2$ 是 $A$ 的子集，$Q_1,\ Q_2$ 是 $B$ 的子集，$Q_1$ 在 $f$ 下的原像记为 $f^{-1}(Q_1)$。此时，有如下陈述。

(a) $f(P_1\cap P_2)=f(P_1)\cap f(P_2)$，$\boxed{15}$。

(b) $f^{-1}(Q_1\cap Q_2)=f^{-1}(Q_1)\cap f^{-1}(Q_2)$，$\boxed{16}$。

(c) $f^{-1}(f(P_1))=P_1$，$\boxed{17}$。

(d) $f(f^{-1}(Q_1))=Q_1$，$\boxed{18}$。

下面给出一个同时适用于 (a) 至 (d) 中所有“不总是成立”的陈述的反例。若没有任何“不总是成立”的陈述，则下面各空选择任意选项均视为正确。

对于 $A=B=\{a,b,c\},\ P_1=\{a,b\},\ P_2=\{b,c\},\ Q_1=\{a,b\},\ Q_2=\{b,c\}$，如下定义 $f$。

| $x$ | $a$ | $b$ | $c$ |
|---|---|---|---|
| $f(x)$ | $\boxed{19}$ | $b$ | $\boxed{20}$ |

选项：⓪ 总是成立，① 不总是成立，② $a$，③ $b$，④ $c$

#### 问3

回答下列 (1) 至 (4)。

**(1)**

阅读下面的文字，从选项中选择最合适的词语填入空白。

设集合 $X,\ Y,\ Z$ 之间定义了映射 $f:X\to Y,\ g:Y\to Z$。

- 若复合映射 $g\circ f$ 是满射，则 $f$ 为 $\boxed{1}$，$g$ 为 $\boxed{2}$。
- 若复合映射 $g\circ f$ 是单射，则 $f$ 为 $\boxed{3}$，$g$ 为 $\boxed{4}$。

选项：满射，单射，双射，无法断言是满射或单射

**(2)**

设 $A$ 是含有 $n$ 个元素的集合（$n\geq 1$），$B$ 是 $A$ 的幂集，即 $A$ 的所有子集构成的集合。求 $B$ 的元素个数 $|B|$。

**(3)**

设 $A,\ B$ 为 (2) 中定义的集合。固定某个 $a_0\in A$，考虑如下映射 $h:B\to B$。对于 $b\in B$，

$$
h(b)=
\begin{cases}
b-\{a_0\} & (a_0\in b\text{ 时}) \\
b\cup\{a_0\} & (a_0\notin b\text{ 时})
\end{cases}
$$

其中，对集合 $X,\ Y$，差集记为 $X-Y$。证明 $h$ 是双射。作答时可以将 (1) 的结论作为定理使用。

**(4)**

设 $B$ 为 (2) 中定义的集合。将 $B$ 中含有偶数个元素的所有集合构成的集合记为 $E$，含有奇数个元素的所有集合构成的集合记为 $O$。其中，将空集视为含有偶数个元素的集合。证明 $|E|=|O|$。作答时可以将 (3) 的结论作为定理使用。

术语：复合映射（composite map），满射（surjection），单射（injection），双射（bijection），元素（element），幂集（power set），差集（set difference），偶数（even number），奇数（odd number），空集（empty set）。

#### 问4

回答下列 (1)、(2)。

**(1)**

对于任意正整数 $n$，定义 $X_n=\prod_{i=1}^{n}\frac{n+i}{i}$。证明下列等式。

$$
\prod_{i=1}^{n}\frac{n+i}{2i}=\frac{X_n}{2^n}
$$

**(2)**

对于任意正整数 $n$，用数学归纳法证明下列不等式。

$$
\prod_{i=1}^{n}\frac{n+i}{2i}<2^n\leq\prod_{i=1}^{n}\frac{n+i}{i}
$$

术语：正整数（positive integer），等式（equality），不等式（inequality），数学归纳法（mathematical induction）。

## **Kai**

### 問1

各空欄に入る記号と選択肢番号は次のとおりである。

| 小問 | 空欄 | 記号（空欄順） | 選択肢番号（空欄順） |
|---|---|---|---|
| (1) | 1, 2 | $\forall x,\ \exists y$ | ⓪, ④ |
| (2) | 3, 4 | $\forall x,\ \exists y$ | ⓪, ④ |
| (3) | 5, 6 | $\exists y,\ \exists x$ | ④, ③ |
| (4) | 7, 8, 9, 10 | $\exists z,\ \forall x,\ \Rightarrow,\ \exists y$ | ⑤, ⓪, ⑧, ④ |
| (5) | 11, 12, 13, 14 | $\forall z,\ \exists y,\ \land,\ \forall x$ | ②, ④, ⑦, ⓪ |

#### (1)

企業 $x$ ごとに，発注先となる企業 $y$ が少なくとも一つ存在するので，

$$
\forall x\,\exists y\,P(x,y).
$$

#### (2)

「すべての企業には発注実績を持たない」は，各企業に対して発注したことのない企業が少なくとも一つあることを表す。

$$
\forall x\,\neg\forall y\,P(x,y)
\iff \forall x\,\exists y\,\neg P(x,y).
$$

#### (3)

発注を一度も受けていない企業 $y$ が存在するので，

$$
\exists y\,\neg\exists x\,P(x,y).
$$

#### (4)

商品 $z$ を扱う企業だけに条件を課すため，含意を用いる。

$$
\exists z\,\forall x\,
\left(Q(x,z)\Rightarrow\exists y\,P(x,y)\right).
$$

#### (5)

「扱う企業が必ず発注を受けた商品が存在する」を否定する。量化記号と含意の否定を順に変形すると，

$$
\begin{aligned}
&\neg\exists z\,\forall y\,
 \left(Q(y,z)\Rightarrow\exists x\,P(x,y)\right)\\
&\quad\iff\forall z\,\exists y\,
 \left(Q(y,z)\land\forall x\,\neg P(x,y)\right).
\end{aligned}
$$

したがって，どの商品についても，それを扱いながら発注を一度も受けていない企業が存在する。

### 問2

空欄の答えは次のとおりである。

| 空欄 | 答え | 選択肢番号 |
|---|---|---|
| 15 | 常には成り立たない | ① |
| 16 | 常に成り立つ | ⓪ |
| 17 | 常には成り立たない | ① |
| 18 | 常には成り立たない | ① |
| 19 | $c$ | ④ |
| 20 | $c$ | ④ |

(b) は，任意の $x\in A$ に対して

$$
\begin{aligned}
x\in f^{-1}(Q_1\cap Q_2)
&\iff f(x)\in Q_1\text{ かつ }f(x)\in Q_2\\
&\iff x\in f^{-1}(Q_1)\cap f^{-1}(Q_2)
\end{aligned}
$$

となるため常に成立する。

残りの三つには，共通の反例として $f(a)=f(c)=c,\ f(b)=b$ を用いる。

$$
\begin{aligned}
f(P_1\cap P_2)&=\{b\},&
f(P_1)\cap f(P_2)&=\{b,c\},\\
f^{-1}(f(P_1))&=\{a,b,c\},&P_1&=\{a,b\},\\
f(f^{-1}(Q_1))&=\{b\},&Q_1&=\{a,b\}.
\end{aligned}
$$

いずれも左右が一致しない。

### 問3

#### (1)

| 空欄 | 答え |
|---|---|
| 1 | 全射とも単射ともいえない |
| 2 | 全射 |
| 3 | 単射 |
| 4 | 全射とも単射ともいえない |

$g\circ f$ が全射ならば，任意の $z\in Z$ に対して $g(f(x))=z$ を満たす $x\in X$ が存在する。$y=f(x)$ とおけば $g(y)=z$ であるから，$g$ は全射である。

$g\circ f$ が単射で，$f(x_1)=f(x_2)$ ならば $g(f(x_1))=g(f(x_2))$ となり，$x_1=x_2$ を得る。したがって $f$ は単射である。

他方，合成が全射でも，$f$ が $Y$ 全体を覆う必要や単射である必要はない。また，合成が単射でも，$g$ の $f(X)$ の外側での振る舞いは制限されず，$g$ が全射である必要もない。

#### (2)

$A$ の各要素について部分集合に含めるか否かの二通りを独立に選べるから，

$$
|B|=2^n.
$$

#### (3)

$h$ は要素 $a_0$ の所属だけを反転させるので，任意の $b\in B$ について

$$
h(h(b))=b.
$$

よって $h\circ h=\operatorname{id}_B$ は全単射である。(1) より $h$ は単射かつ全射であり，全単射となる。すなわち，$h$ 自身が $h$ の逆写像である。

#### (4)

$h$ は要素数を一つ増減させるため，偶奇を反転させる。したがって，$h$ の制限 $h|_E:E\to O$ は，逆写像 $h|_O:O\to E$ を持つ全単射である。ゆえに

$$
|E|=|O|=2^{n-1}.
$$

### 問4

#### (1)

各因子の分母から $2$ をくくり出すと，

$$
\prod_{i=1}^{n}\frac{n+i}{2i}
=\frac{1}{2^n}\prod_{i=1}^{n}\frac{n+i}{i}
=\frac{X_n}{2^n}.
$$

#### (2)

(1) より，示すべき不等式は $2^n\leq X_n<4^n$ と同値である。ここで

$$
X_n=\frac{(2n)!}{(n!)^2},\qquad
\frac{X_{n+1}}{X_n}
=\frac{(2n+2)(2n+1)}{(n+1)^2}
=4-\frac{2}{n+1}.
$$

$n=1$ では $X_1=2$ なので $2\leq X_1<4$ が成立する。

$n\geq1$ において $2^n\leq X_n<4^n$ が成立すると仮定する。このとき

$$
2<4-\frac{2}{n+1}<4
$$

より，

$$
2^{n+1}\leq 2X_n<X_{n+1}<4X_n<4^{n+1}.
$$

したがって帰納法により，すべての正整数 $n$ について $2^n\leq X_n<4^n$ が成立する。$X_n<4^n$ を $2^n$ で割り，(1) を用いれば求める不等式を得る。
