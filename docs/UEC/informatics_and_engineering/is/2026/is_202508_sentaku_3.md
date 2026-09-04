---
sidebar_label: 2025年8月実施 選択問題 離散数学
tags:
  - University-of-Electro-Communications
  - Discrete-Mathematics.Mathematical-Logic.Predicate-Logic
  - Discrete-Mathematics.Set-Theory.Cardinality
  - Discrete-Mathematics.Set-Theory.Composition-of-Injective-and-Surjective-Maps
  - Discrete-Mathematics.Mathematical-Logic.Mathematical-Induction
---
# 電気通信大学 情報理工学研究科 情報学専攻 2025年8月実施 選択問題 離散数学

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 問1

命題変数 $P,Q,R$ の真偽値を選び、次の論理式を真にせよ。

1. $\neg P\land Q\land\neg R$
2. $\neg(\neg Q\lor R\lor\neg P)$
3. $(\neg\neg(Q\Rightarrow R)\land\neg(P\lor\neg R))\land Q$
4. $\neg((((\neg P\land R)\land Q)\Rightarrow\neg Q))$

選択肢の番号は $(T,T,T)$ から $(F,F,F)$ までを順に
$0,1,\ldots,7$ とする。

### 問2

$a,b,c$ を正の整数、$\operatorname{Prime}(a)$ を「$a$ は素数」、
$\operatorname{Odd}(a)$ を「$a$ は奇数」を表す述語とする。
量化記号と論理結合子を補い、次を述語論理式で表せ。

1. $\operatorname{Prime}(c)$。
2. 素数は無限に存在する。
3. 7 より大きい奇数は 3 個の素数の和で表せる。

### 問3

1. $|X|=n$ のとき、写像 $f:X\to X$ のうち、全射でも単射でもないものの数を求めよ。
2. $f:X\to Y$, $g:Y\to Z$ に対し、次が常に成り立つか答えよ。
   - $g\circ f$ が単射なら $f$ は単射である。
   - $g\circ f$ が単射なら $g$ は単射である。
   - $g\circ f$ が全射なら $f$ は全射である。
   - $g\circ f$ が全射なら $g$ は全射である。
3. 次の集合の要素数を求めよ。

   $$
   \{\varnothing\},\qquad
   \{1,\varnothing,\{a,b,\{c\}\}\},\qquad
   \{1,2,3\}^{\{a,b\}}.
   $$

4. 空でない相異なる集合 $A,B,C$ について

   $$
   A\cap B=A\cap C\ne\varnothing\Rightarrow B=C
   $$

   の反例を考える。$|A|+|B|+|C|$ の最小値と、そのときの
   $|A\cap B\cap C|$, $|A\cup B\cup C|$ を求めよ。

### 問4

$X=\{0,1,\ldots,8\}$、$Y=\{0,1,\ldots,79\}$ とし、
$f:X\to Y$ から

$$
\widetilde f(x_1,x_2)
=(f(x_1)+f(x_2))\bmod80,\qquad(x_1,x_2)\in X^2
$$

を定める。

1. $\widetilde f$ が単射である条件を $f$ を用いずに書け。
2. $\widetilde f:D\to Y$ と書いたとき $|D|$ を求めよ。
3. この形の単射 $\widetilde f$ は存在するか。

### 問5

$i$ ターン目には 0 個から $i$ 個まで石を取れ、最後の石を取った人が勝つ。
先手が奇数ターン、後手が偶数ターンを担当する。

1. 石が $X=1,4,9$ 個のとき、先手の必勝戦略を示せ。
2. $X=k^2$ のとき、先手が必ずちょうど $2k-1$ ターン目に勝つことを
   数学的帰納法で示せ。これにより $2025=45^2$ の場合を結論せよ。

### 题目描述

题目依次考查命题逻辑与谓词逻辑、映射和集合的基数、复合映射的单射与满射、
鸽巢原理，以及一个每回合可取石数递增的取石游戏。要求填写选择题结果，
判断映射性质，证明指定单射不存在，并用数学归纳法给出先手必胜策略。

## **Kai**

### 問1

各論理式を真にする真偽値と選択肢番号は

$$
\begin{array}{c|c|c}
& (P,Q,R)&\text{選択肢}\\\hline
(1)&(F,T,F)&5\\
(2)&(T,T,F)&1\\
(3)&(F,T,T)&4\\
(4)&(F,T,T)&4
\end{array}
$$

である。

### 問2

#### (1)

$$
\boxed{
\operatorname{Prime}(c)\iff
(c>1)\land\neg\exists a\exists b\,
((1<a<c)\land(1<b<c)\land(ab=c))
}.
$$

空欄の選択肢は $\boxed{2,6,6}$ である。

#### (2)

$$
\boxed{\forall a\exists b\,((b>a)\land\operatorname{Prime}(b))}.
$$

空欄の選択肢は $\boxed{4,6}$ である。

#### (3)

$$
\boxed{
\forall a\left(((a>7)\land\operatorname{Odd}(a))
\Rightarrow\exists b\exists c\exists d\,
\begin{aligned}[t]
(&\operatorname{Prime}(b)\land\operatorname{Prime}(c)\\
&\land\operatorname{Prime}(d)\land a=b+c+d)
\end{aligned}
\right)
}.
$$

空欄の選択肢は $\boxed{1,8}$ である。

### 問3

#### (1)

$X$ から $X$ への写像は $n^n$ 個である。
有限集合上では単射と全射はいずれも全単射であり、その個数は $n!$ である。
よって

$$
\boxed{n^n-n!}.
$$

#### (2)

順に

$$
\boxed{\text{常に成り立つ},\quad
\text{常には成り立たない},\quad
\text{常には成り立たない},\quad
\text{常に成り立つ}}
$$

である。選択肢番号では $\boxed{0,1,1,0}$ となる。

#### (3)

第 3 の集合は $\{a,b\}$ から $\{1,2,3\}$ への写像全体である。したがって

$$
\boxed{1,\quad3,\quad3^2=9}.
$$

#### (4)

例えば

$$
A=\{1\},\qquad B=\{1,2\},\qquad C=\{1,3\}
$$

とすれば反例になる。総要素数が 4 以下なら、等しい非空共通部分をもちつつ
三集合を相異ならせることはできない。よって

$$
\boxed{|A|+|B|+|C|=5,\quad
|A\cap B\cap C|=1,\quad|A\cup B\cup C|=3}.
$$

### 問4

#### (1)

$$
\boxed{
\forall p,q\in X^2,\quad p\ne q\Rightarrow\widetilde f(p)\ne\widetilde f(q)
}.
$$

#### (2)

$D=X^2$ なので

$$
\boxed{|D|=9^2=81}.
$$

#### (3)

$|D|=81>|Y|=80$ である。鳩の巣原理により

$$
\boxed{\text{単射は存在しない}}.
$$

### 問5

#### (1)

- $X=1$：第 1 ターンに 1 個取る。
- $X=4$：第 1 ターンに 1 個取る。後手が第 2 ターンに $r$ 個
  $(0\le r\le2)$ 取ったら、第 3 ターンに $3-r$ 個取る。
- $X=9$：第 1 ターンに 1 個取る。第 2 ターンの後手の取得数を $r$ とし、
  第 3 ターンに $3-r$ 個取る。第 4 ターンの後手の取得数を $s$ とし、
  第 5 ターンに $5-s$ 個取る。

いずれも先手が最後の石を取る。

#### (2)

$k=1$ では第 1 ターンに 1 個取ればよい。

命題を「石が十分にある限り、先手は第 $2k-1$ ターンまでに両者が取った石の合計を
ちょうど $k^2$ 個にできる」と強める。これが $k$ で成立すると仮定する。
第 $2k-1$ ターンまで同じ戦略を用いた後、第 $2k$ ターンに後手が
$r$ 個 $(0\le r\le2k)$ 取ったら、先手は第 $2k+1$ ターンに
$2k+1-r$ 個取る。これは許される範囲内であり、二つのターンで
$2k+1$ 個が取られる。したがって累計は

$$
k^2+(2k+1)=(k+1)^2
$$

個となる。よって命題は $k+1$ でも成立する。

各偶数ターンの直前には、そのターンの最大取得数より少なくとも 1 個多く石が残るため、後手が先に取り切ることはない。
よって数学的帰納法により、$X=k^2$ なら先手は必ず第 $2k-1$ ターンに勝つ。
$2025=45^2$ なので、

$$
\boxed{X=2025\text{ でも先手必勝}}
$$

である。
