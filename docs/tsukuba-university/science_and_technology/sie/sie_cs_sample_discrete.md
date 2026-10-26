---
sidebar_label: "情報理工学位プログラム 問題例 離散数学と論理"
tags:
  - Tsukuba-University
  - Discrete-Mathematics.Set-Theory.Equivalence-Relation
---

# 筑波大学 理工情報生命学術院 システム情報工学研究群 情報理工学位プログラム 問題例 離散数学と論理

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E6%83%85%E5%A0%B1%E7%94%9F%E5%91%BD%E5%AD%A6%E8%A1%93%E9%99%A2_%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%BE%A4_%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E4%BD%8D%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E5%95%8F%E9%A1%8C%E4%BE%8B_%E9%9B%A2%E6%95%A3%E6%95%B0%E5%AD%A6%E3%81%A8%E8%AB%96%E7%90%86.html) refined with GPT 6 Astra)

## **Description**

$\mathcal N_5=\{0,1,2,3,4\}$ とする。また，正の整数 $n$ に対して，関係

$$
E_n=\{\langle x,y\rangle\in\mathcal N_5\times\mathcal N_5\mid x\bmod n=y\bmod n\}
$$

とする。但し，$x\bmod n$ は $x$ を $n$ で割った余りである。このとき以下の設問に答えなさい。

**問1**

$$
\begin{aligned}
E_4=\{&\langle0,0\rangle,\langle1,1\rangle,\langle2,2\rangle,\\
&\langle3,3\rangle,\langle4,4\rangle,\boxed{\phantom{xxxxxxxx}}\}
\end{aligned}
$$

空欄に入る適切な要素の番号を選択肢から選びなさい。

選択肢：

① $\langle0,1\rangle,\langle1,0\rangle$　② $\langle1,3\rangle,\langle3,1\rangle$　③ $\langle2,4\rangle,\langle4,2\rangle$　④ $\langle0,4\rangle,\langle4,0\rangle$

**問2** 空欄に入る適切な語句の番号を選択肢から選びなさい。

関係 $R$ が同値関係である時 $R$ は反射的，【(a)】，推移的である。推移的であるとは，$\langle x,y\rangle$，【(b)】$\in R$ ならば【(c)】$\in R$ となることである。

選択肢：

① 対称的　② 反対称的　③ $\langle x,z\rangle$　④ $\langle y,x\rangle$　⑤ $\langle y,z\rangle$　⑥ $\langle z,x\rangle$

### 题目描述

设 $\mathcal N_5=\{0,1,2,3,4\}$。对于正整数 $n$，定义关系

$$
E_n=\{\langle x,y\rangle\in\mathcal N_5\times\mathcal N_5\mid x\bmod n=y\bmod n\},
$$

其中 $x\bmod n$ 为 $x$ 除以 $n$ 的余数。回答以下问题。

**问1**

$$
\begin{aligned}
E_4=\{&\langle0,0\rangle,\langle1,1\rangle,\langle2,2\rangle,\\
&\langle3,3\rangle,\langle4,4\rangle,\boxed{\phantom{xxxxxxxx}}\}.
\end{aligned}
$$

从选项中选择应填入空栏的元素组的编号。

选项：

① $\langle0,1\rangle,\langle1,0\rangle$　② $\langle1,3\rangle,\langle3,1\rangle$　③ $\langle2,4\rangle,\langle4,2\rangle$　④ $\langle0,4\rangle,\langle4,0\rangle$

**问2** 从选项中选择应填入空栏的词语或表达式的编号。

关系 $R$ 为等价关系时，$R$ 具有自反性、【(a)】和传递性。传递性是指：若 $\langle x,y\rangle$、【(b)】$\in R$，则【(c)】$\in R$。

选项：

① 对称性　② 反对称性　③ $\langle x,z\rangle$　④ $\langle y,x\rangle$　⑤ $\langle y,z\rangle$　⑥ $\langle z,x\rangle$

## **Kai**

### 問1

異なる要素で $4$ で割った余りが等しいのは $0$ と $4$ だけである。したがって、空欄は

$$
\boxed{\langle0,4\rangle,\ \langle4,0\rangle\quad\text{（④）}}.
$$

### 問2

同値関係の三条件は反射律・対称律・推移律である。推移律は $xRy$ かつ $yRz$ から $xRz$ が従うことであるから、

$$
\boxed{\begin{gathered}
(a)=\text{対称的（①）},\\
(b)=\langle y,z\rangle\text{（⑤）},\\
(c)=\langle x,z\rangle\text{（③）}
\end{gathered}}.
$$

## **Reference**

- [大学公式問題（PDF 3ページ）](https://www.cs.tsukuba.ac.jp/admission/problem.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E6%83%85%E5%A0%B1%E7%94%9F%E5%91%BD%E5%AD%A6%E8%A1%93%E9%99%A2_%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%BE%A4_%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E4%BD%8D%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E5%95%8F%E9%A1%8C%E4%BE%8B_%E9%9B%A2%E6%95%A3%E6%95%B0%E5%AD%A6%E3%81%A8%E8%AB%96%E7%90%86.html)
