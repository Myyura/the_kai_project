---
sidebar_label: 2024年8月実施 選択問題 離散数学
tags:
  - University-of-Electro-Communications
  - Discrete-Mathematics.Mathematical-Logic.Predicate-Logic
  - Discrete-Mathematics.Set-Theory.Image-and-Preimage
  - Discrete-Mathematics.Set-Theory.Composition-of-Injective-and-Surjective-Maps
  - Discrete-Mathematics.Mathematical-Logic.Mathematical-Induction
---
# 電気通信大学 情報理工学研究科 情報学専攻 2024年8月実施 選択問題 離散数学

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 問1

次の推論を命題論理で調べ、空欄 1〜19 を選択肢から埋めよ。

1. $P$ を「プログラムが正しく動作する」、$Q$ を「エラーメッセージが出ない」
   とすると、推論は

   $$
   ((P\Rightarrow Q)\land Q)\Rightarrow P
   $$

   で表される。4 通りの真理値と、推論が正しいかを答えよ。
2. $P,Q,R,S$ をそれぞれ「ナカタさんが機械を組み立てた」「部品を加工した」
   「部品を購入した」「購入履歴がある」とすると、推論は

   $$
   ((P\Rightarrow(Q\lor R))\land(R\Rightarrow S)
   \land\neg S\land\neg Q)\Rightarrow\neg P
   $$

   で表される。同値変形で空欄を埋め、推論の正誤を答えよ。
3. $P,Q,R,S,T$ をそれぞれ「装置 A が使える」「装置 B が使える」
   「実験が成功する」「気温が 20 度以上」「ヤマダ教授が不在」とすると、

   $$
   (((P\lor Q)\Rightarrow R)\land(S\Rightarrow\neg P)
   \land(T\Rightarrow\neg Q)\land(S\land\neg T))\Rightarrow R
   $$

   を同値変形し、推論の正誤を答えよ。

### 問2

空でない集合 $A,B,C,D$ について答えよ。

1. $A\cup B\subseteq C\cup D$ のとき、任意の $x\in B$ が満たす関係を答えよ。
2. $A\cap B=\varnothing$、$C\subseteq A\subsetneq D$ のとき、任意の
   $x\in B$ が満たす二つの関係を答えよ。
3. (1)、(2) の条件がすべて成り立つとき、さらに得られる要素関係と集合の包含関係を答えよ。
4. $A\cup B\subseteq C\cup D$ に二つの条件を追加して $B-D=C$ を導け。

### 問3

$X=\{1,2,3,\ldots\}$ とする。空でない集合 $Y$ と全射 $f:X\to Y$ に対し、

$$
g(y)=\min\{x\in X\mid f(x)=y\}
$$

により $g:Y\to X$ を定める。

1. $Y=\{0,1,2\}$ のとき、$f,g$ の具体例を示せ。
2. $f\circ g$ が $Y$ 上の恒等写像であり、$g$ が単射であることを、空欄を埋めて示せ。
3. $X\ne Y$ かつ $g$ が全射となる具体例を示せ。

### 問4

$n\ge2$ とし、De Morgan の法則

$$
\left(\bigcup_{i=1}^nX_i\right)^c
=\bigcap_{i=1}^nX_i^c
$$

を数学的帰納法で証明せよ。まず $n=2$ を要素関係と二つの包含関係から示し、
次に $n=k$ から $n=k+1$ を導け。

### 穴埋め形式（独立要約）

[公式 PDF 9–12 ページ](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_2_j_choice202408.pdf#page=9) に基づく独立要約（逐語転載ではない）。

- 問1(2)：$(R\Rightarrow S)\land\neg S\equiv[6]\land[7]$、前件は $\neg([8]\lor[9]\lor[10]\lor[11])$、全体は $[8]\lor[9]\lor[10]\lor[11]\lor[12]$ と変形し、$[13]$ で推論の正誤を答える。候補番号は $0:P$, $1:\neg P$, $2:Q$, $3:\neg Q$, $4:R$, $5:\neg R$, $6:S$, $7:\neg S$, $8:$ 正しい推論、$9:$ 誤った推論。
- 問1(3)：式全体を $[14]\lor[15]\lor[16]\lor[17]\lor[18]$ に変形する。式の候補は上記 $0$–$7$ と $8:T$, $9:\neg T$。$[19]$ は $0:$ 正しい推論、$1:$ 誤った推論から選ぶ。
- 問2：各小問の答えが順に $[20]$、$[21],[22]$、$[23],[24]$、$[25],[26]$ に対応する。(4) では (1) の条件だけを前提とし、(2) の条件は追加しない。$[20]$–$[23]$ の候補は $0:x\in A$, $1:x\notin A$, $2:x\in C$, $3:x\notin C$, $4:x\in D$, $5:x\notin D$, $6:x\in C\cup D$, $7:x\notin C\cup D$, $8:x\in A\cap B$, $9:x\notin A\cup D$。$[24]$–$[26]$ の候補は $0:B\subseteq D$, $1:B\subseteq C$, $2:C\subseteq B$, $3:A\subseteq C\cap D$, $4:A\subseteq B\cap C$, $5:A\cap C=\varnothing$, $6:A\cap D=\varnothing$, $7:B\cap C\ne\varnothing$, $8:C\cap D=\varnothing$。
- 問3(2)：$S=[1]$ と定義し、$n\in S$ なら $f(n)=[2]$、従って $f(g(y))=[2]$ を示す。$y\ne y'$ の場合は $[3]$ を示すため、$T=[4]$ とおき、$S\cap T=[5]$ を用いる。

### 题目描述

第 1 题用真值表和等价变形判断三段推理是否有效；第 2 题填写集合元素关系和包含关系；
第 3 题研究满射每个纤维中的最小原像所定义的映射，证明其右逆与单射性质并构造例子；
第 4 题用数学归纳法证明有限多个集合的 De Morgan 定律。

## **Kai**

### 問1

#### (1)

真理値表は

| $P$ | $Q$ | $((P\Rightarrow Q)\land Q)\Rightarrow P$ |
|:---:|:---:|:---:|
| 1 | 1 | 1 |
| 1 | 0 | 1 |
| 0 | 1 | 0 |
| 0 | 0 | 1 |

である。反例 $(P,Q)=(0,1)$ があるので誤った推論である。

$$
\boxed{[1],[2],[3],[4],[5]=1,1,0,1,\text{誤った推論}}
$$

選択肢番号では

$$
\boxed{1,1,0,1,3}
$$

となる。

#### (2)

$$
(R\Rightarrow S)\land\neg S
\equiv\neg S\land\neg R
$$

であり、前件全体は

$$
\neg P\land\neg Q\land\neg R\land\neg S
\equiv\neg(P\lor Q\lor R\lor S)
$$

となる。したがって推論式全体は

$$
P\lor Q\lor R\lor S\lor\neg P
$$

となり恒真式である。

$$
\boxed{
\begin{array}{c|cccccccc}
\text{空欄}&6&7&8&9&10&11&12&13\\\hline
\text{内容}&\neg S&\neg R&P&Q&R&S&\neg P&\text{正しい推論}\\
\text{選択肢番号}&7&5&0&2&4&6&1&8
\end{array}}
$$

#### (3)

同値変形すると

$$
(((P\lor Q)\Rightarrow R)\land(S\Rightarrow\neg P)
\land(T\Rightarrow\neg Q)\land S\land\neg T)\Rightarrow R
\equiv P\lor Q\lor R\lor\neg S\lor T.
$$

これは恒真式ではない。例えば
$(P,Q,R,S,T)=(0,0,0,1,0)$ で偽となる。

$$
\boxed{
\begin{array}{c|rrrrrr}
\text{空欄}&14&15&16&17&18&19\\\hline
\text{内容}&P&Q&R&\neg S&T&\text{誤った推論}\\
\text{選択肢番号}&0&2&4&7&8&1
\end{array}}
$$

### 問2

#### (1)

$x\in B$ なら $x\in A\cup B\subseteq C\cup D$ なので、

$$
\boxed{[20]:x\in C\cup D\quad(\text{選択肢 }6)}.
$$

#### (2)

$A\cap B=\varnothing$ より $x\notin A$ である。また $C\subseteq A$ なので
$x\notin C$ である。よって

$$
\boxed{[21]:x\notin A\ (1),\qquad[22]:x\notin C\ (3)}.
$$

#### (3)

$x\in C\cup D$ かつ $x\notin C$ より $x\in D$ である。したがって

$$
\boxed{[23]:x\in D\ (4),\qquad[24]:B\subseteq D\ (0)}.
$$

#### (4)

$A\cup B\subseteq C\cup D$ から、$x\in B-D$ なら $x\in C$ なので
$B-D\subseteq C$ である。逆の包含を得るには

$$
C\subseteq B,\qquad C\cap D=\varnothing
$$

とすればよい。よって

$$
\boxed{[25]:C\subseteq B\ (2),\qquad[26]:C\cap D=\varnothing\ (8)}.
$$

### 問3

#### (1)

例えば

$$
f(x)=x\bmod3
$$

とすれば $f:X\to\{0,1,2\}$ は全射であり、

$$
\boxed{g(0)=3,\qquad g(1)=1,\qquad g(2)=2}
$$

となる。

#### (2)

$y\in Y$ に対して

$$
S=\{x\in X\mid f(x)=y\}
$$

とおく。全射性より $S\ne\varnothing$ であり、$m=\min S$ とすれば
$g(y)=m$ である。$m\in S$ だから

$$
f(g(y))=f(m)=y.
$$

よって $f\circ g=\operatorname{id}_Y$ である。

次に $y\ne y'$ とし、

$$
T=\{x\in X\mid f(x)=y'\}
$$

とおく。$f$ は写像なので $S\cap T=\varnothing$ である。
$g(y)\in S$, $g(y')\in T$ より $g(y)\ne g(y')$ となり、$g$ は単射である。

したがって空欄は

$$
\boxed{
\begin{aligned}
[1]&=\{x\in X\mid f(x)=y\},& [2]&=y,\\
[3]&=g(y)\ne g(y'),& [4]&=\{x\in X\mid f(x)=y'\},\\
[5]&=\varnothing
\end{aligned}}
$$

である。

#### (3)

$$
Y=\{2,4,6,\ldots\},\qquad f(n)=2n
$$

とすれば $X\ne Y$ であり、$f$ は全単射である。このとき

$$
\boxed{g(2n)=n}
$$

なので $g:Y\to X$ は全射である。

### 問4

#### (1)

任意の $x$ に対して

$$
\begin{aligned}
x\notin X_1\cup X_2
&\iff (x\notin X_1)\land(x\notin X_2)\\
&\iff x\in X_1^c\cap X_2^c.
\end{aligned}
$$

したがって、任意の $x\in(X_1\cup X_2)^c$ は $X_1^c\cap X_2^c$ に属し、
逆も成り立つ。よって

$$
\boxed{(X_1\cup X_2)^c=X_1^c\cap X_2^c}.
$$

#### (2)

$n=k$ で

$$
\left(\bigcup_{i=1}^kX_i\right)^c=\bigcap_{i=1}^kX_i^c
$$

が成立すると仮定する。$n=2$ の結果と帰納法の仮定より、

$$
\begin{aligned}
\left(\bigcup_{i=1}^{k+1}X_i\right)^c
&=\left(\left(\bigcup_{i=1}^kX_i\right)\cup X_{k+1}\right)^c\\
&=\left(\bigcup_{i=1}^kX_i\right)^c\cap X_{k+1}^c\\
&=\left(\bigcap_{i=1}^kX_i^c\right)\cap X_{k+1}^c
=\bigcap_{i=1}^{k+1}X_i^c.
\end{aligned}
$$

ゆえに数学的帰納法により、すべての $n\ge2$ で成立する。
