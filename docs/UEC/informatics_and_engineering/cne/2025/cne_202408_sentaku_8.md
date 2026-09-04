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

命題 $\alpha,\beta$ について $\alpha\land\beta$, $\alpha\lor\beta$, $\alpha\to\beta$, $\alpha\leftrightarrow\beta$ の真理値表を作れ。さらに (i) $\alpha\to\beta$、(ii) $\neg(\alpha\land\beta)$、(iii) $\forall x\neg P(x)$ と同値な式を求めよ。次に、$A=\{1,2,3\}$ とし、$A^2$ 上の関係

$$
((a,b),(c,d))\in R_1\iff a+b=c+d,
$$

$$
((a,b),(c,d))\in R_2
\iff (a=c\land b=d)\lor(a<c\land b<d)
$$

について、$R_1$ の同値類と半順序 $R_2$ の Hasse 図を求めよ。

最後に、$|w|_1,|w|_0$ を語 $w\in\{0,1\}^*$ に含まれる $1,0$ の個数とし、

$$
\begin{aligned}
L_1&=\{w\mid |w|_1-|w|_0\text{ は偶数}\},&
L_2&=\{w\mid |w|_1\le2^{100}\},\\
L_3&=\{w\mid |w|_1\le|w|_0\},&
L_4&=L_1\cup L_2,\quad L_5=L_1\cap L_2,\\
L_6&=L_1\cup L_3,&
L_7&=L_1\cap L_3,\\
L_8&=L_2\cup L_3,&
L_9&=L_2\cap L_3
\end{aligned}
$$

が正則か否かを判定せよ。

### 题目描述

求命题逻辑与谓词逻辑的等价式；列出给定等价关系的所有等价类并绘制偏序的 Hasse 图；最后判断九个由字符计数、奇偶性及固定上界定义的语言是否为正则语言。

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
