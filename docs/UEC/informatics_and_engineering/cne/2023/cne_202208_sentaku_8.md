---
sidebar_label: 2022年8月実施 選択問題 離散数学とオートマトン
tags:
  - University-of-Electro-Communications
  - Computer-Science.Formal-Languages.Deterministic-Finite-Automaton
  - Computer-Science.Formal-Languages.Pumping-Lemma
  - Discrete-Mathematics.Combinatorics
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2022年8月実施 選択問題 離散数学とオートマトン

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$\Sigma=\{0,1\}$ 上で $w=xx$ と書ける文字列を square と呼び、長さが $n$ 以下の square 全体を $Sq^{\leq n}$ とする。$Sq^{\leq7}$ の列挙と一般の要素数を求め、$Sq^{\leq4}$ を受理する DFA を構成せよ。また、長さ制限のない square 言語が正規言語でないことを背理法で示せ。

### 题目描述

在二元字母表上把形如 $xx$ 的串称为 square。枚举长度不超过 7 的 square，求一般计数，构造识别长度不超过 4 的 DFA，并用状态重复（泵引理思想）证明无限制 square 语言非正则。

## **Kai**

### 1.

$$
\boxed{
\begin{aligned}
Sq^{\leq7}=\{&\lambda,00,11,0000,0101,1010,1111,\\
&000000,001001,010010,011011,\\
&100100,101101,110110,111111\}.
\end{aligned}}
$$

### 2.

$xx$ の長さが $n$ 以下であるためには $|x|\leq\lfloor n/2\rfloor$ である。写像 $x\mapsto xx$ は単射なので、

$$
\boxed{
|Sq^{\leq n}|
=\sum_{j=0}^{\lfloor n/2\rfloor}2^j
=2^{\lfloor n/2\rfloor+1}-1}.
$$

### 3.

次の DFA で受理できる。二重円が受理状態、$D$ が死状態である。

~~~mermaid
flowchart TD
  I["start"] --> qe@{ shape: dbl-circ, label: "qε" }
  qe -->|"0"| q0(("q0"))
  qe -->|"1"| q1(("q1"))
  q0 -->|"0"| q00@{ shape: dbl-circ, label: "q00" }
  q0 -->|"1"| q01(("q01"))
  q1 -->|"0"| q10(("q10"))
  q1 -->|"1"| q11@{ shape: dbl-circ, label: "q11" }
  q00 -->|"0"| e0(("r0"))
  q00 -->|"1"| D(("D"))
  q01 -->|"0"| e1(("r1"))
  q01 -->|"1"| D
  q10 -->|"0"| D
  q10 -->|"1"| e0
  q11 -->|"0"| D
  q11 -->|"1"| e1
  e0 -->|"0"| qF@{ shape: dbl-circ, label: "qF" }
  e0 -->|"1"| D
  e1 -->|"0"| D
  e1 -->|"1"| qF
  qF -->|"0,1"| D
  D -->|"0,1"| D
~~~

ここで $r_0,r_1$ は次にそれぞれ $0,1$ を読めば square が完成する状態である。受理される文字列は

$$
\{\lambda,00,11,0000,0101,1010,1111\}=Sq^{\leq4}
$$

に限られる。

### 4.

square 全体を受理する DFA $B$ が存在すると仮定し、その状態数を $N$ とする。$k>N$ を取り、$0^k10^k1$ を入力する。

#### (1)

最初の $1$ を読む前の状態

$$
\delta(s_0,0^i)\qquad(0\leq i\leq k)
$$

は $k+1>N$ 個ある。鳩の巣原理より、ある $0\leq i<j\leq k$ について

$$
\delta(s_0,0^i)=\delta(s_0,0^j)
$$

となる。したがって最初の $1$ より前に同じ状態へ少なくとも 2 回到達する。

#### (2)

$d=j-i>0$ とする。区間 $0^d$ は状態を変えないループなので、$B$ が

$$
w=0^k10^k1=(0^k1)^2
$$

を受理するならば、このループを 1 回増やした

$$
w'=0^{k+d}10^k1
$$

も受理する。

$d$ が奇数なら $|w'|$ は奇数なので square ではない。$d$ が偶数の場合、$w'$ が square なら、末尾の第 2 の $1$ に対応する第 1 の $1$ は文字列の中央になければならない。しかし実際の第 1 の $1$ の位置は $k+d+1$、中央は

$$
\frac{|w'|}{2}=k+\frac d2+1
$$

であり、一致すれば $d=0$ となって矛盾する。よって $w'$ は square ではないのに $B$ に受理される。したがって、

$$
\boxed{\text{square 全体を受理する有限オートマトンは存在しない}}.
$$
