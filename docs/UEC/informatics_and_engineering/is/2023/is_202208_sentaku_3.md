---
sidebar_label: 2022年8月実施 選択問題 離散数学
tags:
  - University-of-Electro-Communications
  - Discrete-Mathematics.Mathematical-Logic.Predicate-Logic
  - Discrete-Mathematics.Set-Theory.Cardinality
  - Discrete-Mathematics.Set-Theory.Image-and-Preimage
  - Discrete-Mathematics.Mathematical-Logic.Mathematical-Induction
---

# 電気通信大学 情報理工学研究科 情報学専攻 2022年8月実施 選択問題 離散数学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

1. 論理関数
   $$
   P(x,y,z)=\neg\{x\Rightarrow(y\land\neg z)\}
   $$
   の連言標準形、選言標準形、真理値表を求めよ。解答で用いる原卷の選択肢番号は $0:x$, $1:y$, $2:z$, $3:\neg x$, $4:\neg y$, $5:\neg z$, $6:\forall x$, $7:\exists x$, $8:\mathrm T$, $9:\mathrm F$ である（[公式 PDF 9 ページ](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_j_choice202208.pdf#page=9)）。
2. $C(x,y)$ の $x$ を行、$y$ を列（ともに $1,2,3,4$）とする次の格子について、下記の選択肢のうち真となる二命題をそれぞれ選べ。
   $$
   \text{図2}:\begin{pmatrix}0&0&1&0\\0&1&0&0\\0&0&0&1\\1&0&0&0\end{pmatrix},\quad
   \text{図3}:\begin{pmatrix}0&0&0&0\\1&1&1&1\\0&0&0&0\\0&0&0&0\end{pmatrix},\quad
   \text{図4}:\begin{pmatrix}1&0&0&1\\0&1&0&1\\0&1&0&1\\1&0&0&1\end{pmatrix}.
   $$
   選択肢は $0:\forall x\forall y\,C(x,y)=1$、$1:\forall x\exists y\,C(x,y)=1$、$2:\forall y\exists x\,C(x,y)=1$、$3:\exists x\forall y\,C(x,y)=1$、$4:\exists y\forall x\,C(x,y)=1$ である。
3. $|X\cap Y|=|X\cup Y|$ と $X=Y$ の関係について、証明の空欄を埋めよ。

   > [公式原卷 PDF 11 ページ](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_j_choice202208.pdf#page=11) に基づき、有限集合の場合の穴埋め手順を独立に要約する（逐語転載ではない）。

   $X=Y$ は基数の等式の $[21]$ 条件である。逆向きの $[22]$ 条件を示すため、$[23]\subseteq X\subseteq[24]$ と仮定から $|X|=[25]$ を得る。互いに素な分解 $X=[23]\cup[26]$ により $|X|=[27]+[28]$ なので、$[28]=0$ となる。従って $X\,[29]\,Y$、対称な議論で $X\,[30]\,Y$ を得る。

   この問の選択肢番号は、$0:$ 必要、$1:$ 十分、$2:X\cap Y$、$3:|X\cap Y|$、$4:X\cup Y$、$5:|X\cup Y|$、$6:X\setminus Y$、$7:|X\setminus Y|$、$8:\subseteq$、$9:\supseteq$ である。
4. 写像 $f:X\to X$ の像・逆像に関する包含関係を答え、
   $f^{-1}\circ f=f\circ f^{-1}$ が一般に成り立つか調べよ。
5. $L_0=2,L_1=1,L_{n+1}=L_n+L_{n-1}$ に対し、
   $$
   L_n^2=L_{n-1}L_{n+1}+5(-1)^n
   $$
   を数学的帰納法で証明せよ。

### 题目描述

考查命题逻辑与量词、有限集合的基数、像与逆像、反例构造，以及 Lucas 数列恒等式的数学归纳法证明。

## **Kai**

### 問1

含意を消去すると、

$$
\begin{aligned}
P(x,y,z)
&=\neg(\neg x\lor(y\land\neg z))\\
&=x\land(\neg y\lor z)\\
&=(x\land\neg y)\lor(x\land z).
\end{aligned}
$$

したがって、空欄 $1$ から $6$ の選択肢番号と内容は

$$
\boxed{(0:x,\ 4:\neg y,\ 2:z,\ 0:x,\ 4:\neg y,\ 2:z)}.
$$

真理値表は

| $x$ | $y$ | $z$ | $P(x,y,z)$ |
|:---:|:---:|:---:|:---:|
| T | T | T | T |
| T | T | F | F |
| T | F | T | T |
| T | F | F | T |
| F | T | T | F |
| F | T | F | F |
| F | F | T | F |
| F | F | F | F |

である。よって空欄 $7$ から $14$ の選択肢番号は

$$
\boxed{(8,9,8,8,9,9,9,9)}.
$$

### 問2

選択肢を

$$
\begin{array}{ll}
0:\forall x\forall y\,C(x,y)=1,&
1:\forall x\exists y\,C(x,y)=1,\\
2:\forall y\exists x\,C(x,y)=1,&
3:\exists x\forall y\,C(x,y)=1,\\
4:\exists y\forall x\,C(x,y)=1
\end{array}
$$

と書く。各図を行・列ごとに調べれば、

$$
\boxed{
\begin{array}{c|c}
\text{図2}&1,\ 2\\
\text{図3}&2,\ 3\\
\text{図4}&1,\ 4
\end{array}}
$$

となる。すなわち空欄 $15$ から $20$ は

$$
\boxed{(1,2,2,3,1,4)}
$$

である。

### 問3

この同値性は有限集合について成立する。無限集合では、例えば $X=\mathbb N$, $Y=\mathbb N\setminus\{1\}$ は $|X\cap Y|=|X\cup Y|=\aleph_0$ を満たすが $X\ne Y$ である。以下の証明では $X,Y$ の有限性を追加条件とする。$X=Y$ は基数の等式の十分条件であり、逆向きでは必要条件である。

$$
X\cap Y\subseteq X\subseteq X\cup Y.
$$

$|X\cap Y|=|X\cup Y|$ なら

$$
|X|=|X\cap Y|.
$$

さらに

$$
X=(X\cap Y)\mathbin{\dot\cup}(X\setminus Y)
$$

なので、

$$
|X|=|X\cap Y|+|X\setminus Y|
$$

より $X\setminus Y=\varnothing$、すなわち $X\subseteq Y$ である。対称に $X\supseteq Y$ も成り立つから $X=Y$ である。

したがって空欄 $21$ から $30$ の選択肢番号は

$$
\boxed{(1,0,2,4,3,6,3,7,8,9)}.
$$

### 問4

#### (1)

任意の $A\subseteq X$ に対し、

$$
\boxed{f^{-1}(f(A))\supseteq A},\qquad
\boxed{f(f^{-1}(A))\subseteq A}.
$$

したがって空欄は $\boxed{\supseteq,\ \subseteq}$ である。

#### (2)

二つの集合写像が等しいことを確認すべき関係式は

$$
\boxed{
\forall A\subseteq X,\quad
f^{-1}(f(A))=f(f^{-1}(A))}
$$

である。

#### (3)

これは一般には成り立たない。例えば

$$
X=\{0,1\},\qquad f(0)=f(1)=0,\qquad A=\{0\}
$$

とすると、

$$
f^{-1}(f(A))=X,\qquad
f(f^{-1}(A))=\{0\}.
$$

よって両者は等しくない。

### 問5

$n=1$ では

$$
L_1^2=1=L_0L_2-5=2\cdot3-5
$$

なので成立する。$n$ で成立すると仮定すると、

$$
\begin{aligned}
L_{n+1}^2-L_nL_{n+2}
&=L_{n+1}^2-L_n(L_{n+1}+L_n)\\
&=L_{n+1}L_{n-1}-L_n^2\\
&=-5(-1)^n\\
&=5(-1)^{n+1}.
\end{aligned}
$$

ゆえに $n+1$ でも成立し、数学的帰納法により

$$
\boxed{L_n^2=L_{n-1}L_{n+1}+5(-1)^n}
$$

がすべての正の整数 $n$ について成り立つ。
