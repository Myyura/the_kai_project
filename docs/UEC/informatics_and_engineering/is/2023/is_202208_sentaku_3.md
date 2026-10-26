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

**注意：** 離散数学の問1〜問3はマークシートに解答しなさい。解答にあたっては，$\boxed{1}$〜$\boxed{30}$ に当てはまる最も適切なものを，選択肢から選びなさい。

### 問1.

以下の論理関数 $P(x,y,z)$ について考える。次の空欄に当てはまる記号を，次ページの選択肢から選べ。なお，同じ番号の空欄には同じものが入るが，異なる番号の空欄に同じものが入ることもある。また，順不同の箇所はどの順序で解答しても正解とする。

$$
P(x,y,z)=\neg(x\Rightarrow(y\land\neg z))
$$

(1) 論理関数 $P(x,y,z)$ を連言標準形に書き換えると，

$$
\boxed{1}\land(\boxed{2}\lor\boxed{3})
$$

と表される。

(2) 論理関数 $P(x,y,z)$ を選言標準形に書き換えると，

$$
(\boxed{4}\land\boxed{5})\lor(\boxed{4}\land\boxed{6})
$$

と表される。

(3) 論理関数 $P(x,y,z)$ の真理値表を完成させよ。

| $x$ | $y$ | $z$ | $P(x,y,z)$ |
|:---:|:---:|:---:|:---:|
| T | T | T | $\boxed{7}$ |
| T | T | F | $\boxed{8}$ |
| T | F | T | $\boxed{9}$ |
| T | F | F | $\boxed{10}$ |
| F | T | T | $\boxed{11}$ |
| F | T | F | $\boxed{12}$ |
| F | F | T | $\boxed{13}$ |
| F | F | F | $\boxed{14}$ |

**選択肢：**

| 番号 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 選択肢 | $x$ | $y$ | $z$ | $\neg x$ | $\neg y$ | $\neg z$ | $\forall x$ | $\exists x$ | $\mathrm T$ | $\mathrm F$ |

### 問2.

$x$ および $y$ をそれぞれ0以上3以下の整数とする。図1の $4\times4$ のマスで表される格子において，$x$ 行目 $y$ 列目のマスを $C(x,y)$ と表す。たとえば図1では1行目3列目のマスの値が1であるため，$C(1,3)=1$ である。

![図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/is/2023/is_202208_sentaku_3_figure_1.png)

図2〜図4それぞれについて真となる命題を，2つずつ選択肢より選べ。異なる番号の空欄に同じものが入ることもある。また，順不同の箇所はどの順序で解答しても正解とする。

![図2・図3・図4](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/is/2023/is_202208_sentaku_3_figure_2.png)

図2について真となる命題は，$\boxed{15}$ および $\boxed{16}$ である。

図3について真となる命題は，$\boxed{17}$ および $\boxed{18}$ である。

図4について真となる命題は，$\boxed{19}$ および $\boxed{20}$ である。

**選択肢：**

| 番号 | 選択肢 |
|:---:|---|
| 0 | $\forall x\forall y(C(x,y)=1)$ |
| 1 | $\forall x\exists y(C(x,y)=1)$ |
| 2 | $\forall y\exists x(C(x,y)=1)$ |
| 3 | $\exists x\forall y(C(x,y)=1)$ |
| 4 | $\exists y\forall x(C(x,y)=1)$ |

### 問3.

集合 $X,Y$ に対して $|X\cap Y|=|X\cup Y|$ であることと $X=Y$ が同値であることを示したい。次の文章の空欄に当てはまるものを，以下の選択肢から選べ。

$X=Y\Rightarrow X\cap Y=X\cup Y$ は明らかなので，$X=Y$ であることは $|X\cap Y|=|X\cup Y|$ となるための $\boxed{21}$ 条件である。以下では，$X=Y$ が $\boxed{22}$ 条件であること示す。

和集合と積集合の定義から

$$
\boxed{23}\subseteq X\subseteq\boxed{24}\tag{①}
$$

が成り立つ。仮定から $|X\cap Y|=|X\cup Y|$ であることを用いると，

$$
|X|=\boxed{25}\tag{②}
$$

となる。ここで $X=\boxed{23}\cup\boxed{26}$ であり，$\boxed{23}$ と $\boxed{26}$ は排反であるから，$|X|=\boxed{27}+\boxed{28}$ となるので，式②から $\boxed{28}=0$ すなわち $\boxed{26}=\varnothing$ が従う。ゆえに，$X\ \boxed{29}\ Y$ が成り立つ。

式①を $Y$ に関する式に変えて同様の議論を行うと $X\ \boxed{30}\ Y$ が示せるので，$X=Y$ が導かれる。

（証明終わり）

**選択肢：**

| 番号 | 0 | 1 | 2 | 3 | 4 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 選択肢 | 必要 | 十分 | $X\cap Y$ | $\lvert X\cap Y\rvert$ | $X\cup Y$ |
| 番号 | 5 | 6 | 7 | 8 | 9 |
| 選択肢 | $\lvert X\cup Y\rvert$ | $X\backslash Y$ | $\lvert X\backslash Y\rvert$ | $\subseteq$ | $\supseteq$ |

### 問4.

以下の問いに答えよ。

(1) 集合 $X$ に対する任意の写像 $f:X\to X$ と，$X$ の任意の部分集合 $A$ に対して一般に次の (a), (b) が成り立つ。$\boxed{1}$，$\boxed{2}$ に当てはまる記号を以下の枠から選べ。

$$
\begin{aligned}
\text{(a)}\quad &f^{-1}\circ f(A)\ \boxed{1}\ A.\\
\text{(b)}\quad &f\circ f^{-1}(A)\ \boxed{2}\ A.
\end{aligned}
$$

**(1) の選択肢：** $=,\subset,\subseteq,\supset,\supseteq,\in,\ni$

(2) 一般に $f^{-1}\circ f=f\circ f^{-1}$ が成り立つかを調べたい。この式が成り立つことを証明するために確認する関係式を，次の枠内の式や記号を用いて書け。

**(2) の選択肢：**

$$
\begin{gathered}
\forall x\in X,\quad\exists x\in X,\quad
\forall a\in A,\quad\exists a\in A,\\
\forall A\subseteq X,\quad\exists A\subseteq X,\\
f^{-1}\circ f(x)=f\circ f^{-1}(x),\\
f^{-1}\circ f(a)=f\circ f^{-1}(a),\\
f^{-1}\circ f(X)=f\circ f^{-1}(X),\\
f^{-1}\circ f(A)=f\circ f^{-1}(A).
\end{gathered}
$$

(3) 小問 (2) で答えた関係式が成り立つ場合には証明を書き，成り立たない場合にはそのような $f$ の反例を示した上で，この関係式が成り立たないことを確認せよ。

### 問5.

$L_0=2$, $L_1=1$, $L_{n+1}=L_n+L_{n-1}\ (n\ge1)$ により定義される数列がある。$n$ が正の整数であるとき，以下の等式が成り立つことを数学的帰納法を用いて証明せよ。

$$
L_n^2=L_{n-1}L_{n+1}+5(-1)^n
$$

### 题目描述

**注意：** 离散数学第1至第3题请在答题卡上作答。请从选项中选择最适合填入 $\boxed{1}$ 至 $\boxed{30}$ 的内容。

**第1题。** 考虑下列逻辑函数 $P(x,y,z)$。请从下一页的选项中选择填入空格的符号。相同编号的空格填写相同内容，不同编号的空格也可以填写相同内容。注明顺序不限的地方，以任何顺序作答均视为正确。

$$
P(x,y,z)=\neg(x\Rightarrow(y\land\neg z))
$$

(1) 将逻辑函数 $P(x,y,z)$ 改写为合取范式，表示为

$$
\boxed{1}\land(\boxed{2}\lor\boxed{3}).
$$

(2) 将逻辑函数 $P(x,y,z)$ 改写为析取范式，表示为

$$
(\boxed{4}\land\boxed{5})\lor(\boxed{4}\land\boxed{6}).
$$

(3) 完成逻辑函数 $P(x,y,z)$ 的真值表。

| $x$ | $y$ | $z$ | $P(x,y,z)$ |
|:---:|:---:|:---:|:---:|
| T | T | T | $\boxed{7}$ |
| T | T | F | $\boxed{8}$ |
| T | F | T | $\boxed{9}$ |
| T | F | F | $\boxed{10}$ |
| F | T | T | $\boxed{11}$ |
| F | T | F | $\boxed{12}$ |
| F | F | T | $\boxed{13}$ |
| F | F | F | $\boxed{14}$ |

**选项：**

| 编号 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 选项 | $x$ | $y$ | $z$ | $\neg x$ | $\neg y$ | $\neg z$ | $\forall x$ | $\exists x$ | $\mathrm T$ | $\mathrm F$ |

**第2题。** $x,y$ 均为0至3的整数。在图1所示的 $4\times4$ 网格中，以 $C(x,y)$ 表示第 $x$ 行第 $y$ 列的格子。例如图1第1行第3列的格子值为1，因此 $C(1,3)=1$。

![图1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/is/2023/is_202208_sentaku_3_figure_1.png)

对于图2至图4，请分别从选项中选择两个为真的命题。不同编号的空格也可以填写相同内容。顺序不限的地方，以任何顺序作答均视为正确。

![图2、图3、图4](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/is/2023/is_202208_sentaku_3_figure_2.png)

对于图2，为真的命题是 $\boxed{15}$ 和 $\boxed{16}$。

对于图3，为真的命题是 $\boxed{17}$ 和 $\boxed{18}$。

对于图4，为真的命题是 $\boxed{19}$ 和 $\boxed{20}$。

**选项：**

| 编号 | 选项 |
|:---:|---|
| 0 | $\forall x\forall y(C(x,y)=1)$ |
| 1 | $\forall x\exists y(C(x,y)=1)$ |
| 2 | $\forall y\exists x(C(x,y)=1)$ |
| 3 | $\exists x\forall y(C(x,y)=1)$ |
| 4 | $\exists y\forall x(C(x,y)=1)$ |

**第3题。** 对集合 $X,Y$，希望证明 $|X\cap Y|=|X\cup Y|$ 与 $X=Y$ 等价。请从下列选项中选择适合填入下文空格的内容。

显然 $X=Y\Rightarrow X\cap Y=X\cup Y$，因此 $X=Y$ 是 $|X\cap Y|=|X\cup Y|$ 的 $\boxed{21}$ 条件。下面证明 $X=Y$ 是 $\boxed{22}$ 条件。

由并集与交集的定义，

$$
\boxed{23}\subseteq X\subseteq\boxed{24}\tag{①}
$$

成立。利用假设 $|X\cap Y|=|X\cup Y|$，得到

$$
|X|=\boxed{25}.\tag{②}
$$

这里 $X=\boxed{23}\cup\boxed{26}$，且 $\boxed{23}$ 与 $\boxed{26}$ 互不相交，因此 $|X|=\boxed{27}+\boxed{28}$。由式②得到 $\boxed{28}=0$，即 $\boxed{26}=\varnothing$。所以 $X\ \boxed{29}\ Y$ 成立。

将式①改为关于 $Y$ 的式子，作同样的论证，可证明 $X\ \boxed{30}\ Y$，从而得到 $X=Y$。

（证毕）

**选项：**

| 编号 | 0 | 1 | 2 | 3 | 4 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 选项 | 必要 | 充分 | $X\cap Y$ | $\lvert X\cap Y\rvert$ | $X\cup Y$ |
| 编号 | 5 | 6 | 7 | 8 | 9 |
| 选项 | $\lvert X\cup Y\rvert$ | $X\backslash Y$ | $\lvert X\backslash Y\rvert$ | $\subseteq$ | $\supseteq$ |

**第4题。** 回答下列问题。

(1) 对集合 $X$ 上任意映射 $f:X\to X$ 和 $X$ 的任意子集 $A$，一般有以下 (a)、(b)。请从下方选项中选择适合填入 $\boxed{1}$、$\boxed{2}$ 的符号。

$$
\begin{aligned}
\text{(a)}\quad &f^{-1}\circ f(A)\ \boxed{1}\ A.\\
\text{(b)}\quad &f\circ f^{-1}(A)\ \boxed{2}\ A.
\end{aligned}
$$

**(1) 的选项：** $=,\subset,\subseteq,\supset,\supseteq,\in,\ni$

(2) 希望考察一般情况下 $f^{-1}\circ f=f\circ f^{-1}$ 是否成立。为了证明这一等式，需要确认什么关系式？请使用下列式子或符号写出。

**(2) 的选项：**

$$
\begin{gathered}
\forall x\in X,\quad\exists x\in X,\quad
\forall a\in A,\quad\exists a\in A,\\
\forall A\subseteq X,\quad\exists A\subseteq X,\\
f^{-1}\circ f(x)=f\circ f^{-1}(x),\\
f^{-1}\circ f(a)=f\circ f^{-1}(a),\\
f^{-1}\circ f(X)=f\circ f^{-1}(X),\\
f^{-1}\circ f(A)=f\circ f^{-1}(A).
\end{gathered}
$$

(3) 如果第 (2) 问中的关系式成立，请给出证明；如果不成立，请给出这样的映射 $f$ 的反例，并确认该关系式确实不成立。

**第5题。** 数列由 $L_0=2$、$L_1=1$、$L_{n+1}=L_n+L_{n-1}\ (n\ge1)$ 定义。当 $n$ 为正整数时，请用数学归纳法证明

$$
L_n^2=L_{n-1}L_{n+1}+5(-1)^n.
$$

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

## **Reference**

- [公式原題（大学公開PDF）](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_j_choice202208.pdf#page=11)

- [公式原題（大学公開PDF）](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_j_choice202208.pdf#page=9)
