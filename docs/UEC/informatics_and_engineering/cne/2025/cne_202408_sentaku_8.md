---
sidebar_label: 2024年8月実施 選択問題 離散数学とオートマトン
tags:
  - University-of-Electro-Communications
  - Discrete-Mathematics.Mathematical-Logic.Predicate-Logic
  - Discrete-Mathematics.Set-Theory.Binary-Relations
  - Discrete-Mathematics.Set-Theory.Partially-Ordered-Sets-and-Chains
  - Computer-Science.Formal-Languages.Regular-Language-Closure-Properties
  - Computer-Science.Formal-Languages.Pumping-Lemma
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2024年8月実施 選択問題 離散数学とオートマトン

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

**1.** $\alpha$ と $\beta$ は命題を表し、$P(x)$ は $x$ を変数とする述語論理式を表す。

（1）論理式 $\alpha\land\beta$、$\alpha\lor\beta$、$\alpha\to\beta$、$\alpha\leftrightarrow\beta$ の真理値表を書け。なお、真は 1、偽は 0 で表すこと。

（2）以下の（i）〜（iii）の論理式に対し、常に真偽が一致する論理式を直後の選択肢より一つ選び、（a）〜（d）の記号で答えよ。

（i）$\alpha\to\beta$

| （a） | （b） | （c） | （d） |
|---|---|---|---|
| $\beta\to\alpha$ | $\beta\to\neg\alpha$ | $\neg\beta\to\alpha$ | $\neg\beta\to\neg\alpha$ |

（ii）$\neg(\alpha\land\beta)$

| （a） | （b） | （c） | （d） |
|---|---|---|---|
| $\neg\alpha\land\neg\beta$ | $\neg\alpha\lor\neg\beta$ | $\neg(\neg\alpha\land\neg\beta)$ | $\neg(\neg\alpha\lor\neg\beta)$ |

（iii）$\forall x\neg P(x)$

| （a） | （b） | （c） | （d） |
|---|---|---|---|
| $\neg(\forall xP(x))$ | $\neg(\forall x\neg P(x))$ | $\neg(\exists xP(x))$ | $\neg(\exists x\neg P(x))$ |

**2.** 集合 $A=\{1,2,3\}$、$A^2=A\times A$ 上の関係 $R_1$ と $R_2$ について以下の問に答えよ。

（1）

$$
\begin{gathered}
R_1=\{((a,b),(c,d))\in A^2\times A^2\mid a+b\\
=c+d\}
\end{gathered}
$$

とすると、$R_1$ は同値関係である。$A^2$ の $R_1$ による同値類をすべて書け。各同値類の要素もすべて記述すること。

（2）

$$
\begin{aligned}
R_2=\{((a,b),(c,d))\in A^2\times A^2\mid{}&((a=c)\land(b=d))\\
&\lor((a<c)\land(b<d))\}
\end{aligned}
$$

とすると、$R_2$ は半順序である。半順序集合 $(A^2,R_2)$ のハッセ図を描け。

**3.** 以下の（1）〜（9）で示す各々の言語 $L_1\sim L_9$ に対し、正則（すなわちそれを受理する有限オートマトンが存在する）ならば ○、正則でないならば × で答えよ。なお、どれも入力記号集合は $\Sigma=\{0,1\}$ とし、任意の語 $w\in\Sigma^*$ に対し、$w$ の含む “1” の数と “0” の数を各々 $|w|_1$ と $|w|_0$ で表現する。

（1）$L_1=\{w\in\Sigma^*\mid (|w|_1-|w|_0)\text{ は偶数}\}$

（2）$L_2=\{w\in\Sigma^*\mid |w|_1\le2^{100}\}$

（3）$L_3=\{w\in\Sigma^*\mid |w|_1\le|w|_0\}$

（4）$L_4=L_1\cup L_2$

（5）$L_5=L_1\cap L_2$

（6）$L_6=L_1\cup L_3$

（7）$L_7=L_1\cap L_3$

（8）$L_8=L_2\cup L_3$

（9）$L_9=L_2\cap L_3$

命題：proposition、変数：variable、述語論理式：predicate logic expression、論理式：logic expression、真理値表：truth table、真：true、偽：false、集合：set、関係：relation、同値関係：equivalence relation、同値類：equivalence class、半順序：partial order、半順序集合：partially ordered set、ハッセ図：Hasse diagram、言語：language、正則：regular、受理：accept、有限オートマトン：finite automaton、入力記号集合：input alphabet set、語：word、偶数：even number。

#### 题目描述

**1.** $\alpha,\beta$ 表示命题，$P(x)$ 表示以 $x$ 为变量的谓词逻辑式。

（1）写出 $\alpha\land\beta$、$\alpha\lor\beta$、$\alpha\to\beta$、$\alpha\leftrightarrow\beta$ 的真值表，用 1 表示真、0 表示假。

（2）对下列（i）～（iii），从各自的（a）～（d）中选择一个与所给式子始终具有相同真值的逻辑式，回答字母。

（i）$\alpha\to\beta$：

（a）$\beta\to\alpha$；（b）$\beta\to\neg\alpha$；（c）$\neg\beta\to\alpha$；（d）$\neg\beta\to\neg\alpha$。

（ii）$\neg(\alpha\land\beta)$：

（a）$\neg\alpha\land\neg\beta$；（b）$\neg\alpha\lor\neg\beta$；（c）$\neg(\neg\alpha\land\neg\beta)$；（d）$\neg(\neg\alpha\lor\neg\beta)$。

（iii）$\forall x\neg P(x)$：

（a）$\neg(\forall xP(x))$；（b）$\neg(\forall x\neg P(x))$；（c）$\neg(\exists xP(x))$；（d）$\neg(\exists x\neg P(x))$。

**2.** 设 $A=\{1,2,3\}$、$A^2=A\times A$，回答关于 $A^2$ 上关系 $R_1,R_2$ 的问题。

（1）定义

$$
\begin{gathered}
R_1=\{((a,b),(c,d))\in A^2\times A^2\mid a+b\\
=c+d\},
\end{gathered}
$$

则 $R_1$ 是等价关系。写出 $A^2$ 关于 $R_1$ 的全部等价类，须列出每个等价类的全部元素。

（2）定义

$$
\begin{aligned}
R_2=\{((a,b),(c,d))\in A^2\times A^2\mid{}&((a=c)\land(b=d))\\
&\lor((a<c)\land(b<d))\},
\end{aligned}
$$

则 $R_2$ 是偏序。画出偏序集 $(A^2,R_2)$ 的 Hasse 图。

**3.** 判断以下（1）～（9）的语言 $L_1\sim L_9$ 是否为正则语言，即是否存在接受它的有限自动机。正则填 ○，非正则填 ×。所有语言的输入字母表均为 $\Sigma=\{0,1\}$。对任意单词 $w\in\Sigma^*$，其中 “1” 与 “0” 的数量分别记为 $|w|_1,|w|_0$。

（1）$L_1=\{w\in\Sigma^*\mid (|w|_1-|w|_0)\text{ 为偶数}\}$

（2）$L_2=\{w\in\Sigma^*\mid |w|_1\le2^{100}\}$

（3）$L_3=\{w\in\Sigma^*\mid |w|_1\le|w|_0\}$

（4）$L_4=L_1\cup L_2$

（5）$L_5=L_1\cap L_2$

（6）$L_6=L_1\cup L_3$

（7）$L_7=L_1\cap L_3$

（8）$L_8=L_2\cup L_3$

（9）$L_9=L_2\cap L_3$

## **Kai**

### 1.

#### (1)

| $\alpha$ | $\beta$ | $\alpha\land\beta$ | $\alpha\lor\beta$ | $\alpha\to\beta$ | $\alpha\leftrightarrow\beta$ |
|---:|---:|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 1 | 1 |

#### (2)

対偶、De Morgan の法則、量化否定より、

$$
\boxed{\text{(i) (d)},\qquad
\text{(ii) (b)},\qquad
\text{(iii) (c)}}.
$$

対応する同値式は順に $\neg\beta\to\neg\alpha$、$\neg\alpha\lor\neg\beta$、$\neg(\exists xP(x))$ である。

### 2.

#### (1)

$R_1$ の同値類は成分和ごとに分かれ、すべて書くと

$$
\boxed{
\begin{aligned}
&\{(1,1)\},\\
&\{(1,2),(2,1)\},\\
&\{(1,3),(2,2),(3,1)\},\\
&\{(2,3),(3,2)\},\\
&\{(3,3)\}
\end{aligned}
}.
$$

#### (2)

$R_2$ の被覆関係を下から上へ結ぶと、Hasse 図は次のようになる。

~~~mermaid
flowchart BT
  a11["(1,1)"] --> a22["(2,2)"]
  a11 --> a23["(2,3)"]
  a11 --> a32["(3,2)"]
  a12["(1,2)"] --> a23
  a12 --> a33["(3,3)"]
  a21["(2,1)"] --> a32
  a21 --> a33
  a22 --> a33
  a13["(1,3)"]
  a31["(3,1)"]
~~~

ここで $(1,3)$ と $(3,1)$ は孤立点である。

### 3.

$N=2^{100}$ とおく。判定結果は

$$
\boxed{
\begin{array}{c|ccccccccc}
 &L_1&L_2&L_3&L_4&L_5&L_6&L_7&L_8&L_9\\ \hline
\text{正則か}&\circ&\circ&\times&\circ&\circ&\times&\times&\times&\circ
\end{array}
}.
$$

- $L_1$：$|w|_1-|w|_0$ の偶奇は $|w|$ の偶奇に等しいので正則である。
- $L_2$：$1$ の個数が固定上限 $N$ 以下なので、有限状態で数えられ、正則である。
- $L_3$：$L_3\cap1^*0^*=\{1^m0^n\mid m\le n\}$ はポンピング補題に反するので、正則でない。
- $L_4,L_5$：正則言語 $L_1,L_2$ の和と共通部分なので正則である。
- $L_6$：正則と仮定すると、その補集合と $1^*0^*$ の共通部分

  $$
  \{1^m0^n\mid m>n,\ m-n\text{ は奇数}\}
  $$

  も正則となるが、$1^{p+1}0^p$ にポンピング補題を適用すると矛盾する。
- $L_7$：

  $$
  L_7\cap1^*0^*=\{1^m0^n\mid m\le n,\ m-n\text{ は偶数}\}
  $$

  に対し、$1^p0^p$ をポンプアップすると矛盾するので、正則でない。
- $L_8$：正則と仮定すると、その補集合と $1^*0^*$ の共通部分

  $$
  \{1^m0^n\mid m>N,\ m>n\}
  $$

  も正則となるが、$1^{N+p+1}0^{N+p}$ をポンプダウンすると矛盾する。
- $L_9$：

  $$
  L_9=
  \bigcup_{k=0}^{N}
  \{w\mid |w|_1=k\}\cap\{w\mid |w|_0\ge k\}
  $$

  は正則言語の有限和なので正則である。

## **Reference**

- [大学公表の原題](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_4_i_choice202408.pdf)
