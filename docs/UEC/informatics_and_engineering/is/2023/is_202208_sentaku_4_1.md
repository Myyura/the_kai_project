---
sidebar_label: 2022年8月実施 選択問題 計算機工学 4-1
tags:
  - University-of-Electro-Communications
  - Computer-Science.Formal-Languages.Regular-Grammar-and-Regular-Language
  - Computer-Science.Formal-Languages.Context-Free-Grammar
  - Computer-Science.Formal-Languages.Deterministic-Finite-Automaton
---

# 電気通信大学 情報理工学研究科 情報学専攻 2022年8月実施 選択問題 計算機工学 4-1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

1. 言語 $\{a^mb^n\mid m,n\ge1\}$ と
   $\{a^mb^m\mid m\ge1\}$ の語を三つずつ挙げ、それぞれを生成する、プロダクションがちょうど 6 個の正則文法と、ちょうど 2 個の文脈自由文法を書け（[公式 PDF 14 ページ](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_j_choice202208.pdf#page=14) で個数と文法の種類を確認）。
2. $\{a,b\}$ 上で部分語 $bb$ を含まない語を受理する三状態 DFA の状態遷移図と状態遷移関数を示せ。
3. 次の右線形文法が生成する語を三つ挙げ、生成語に含まれる $a$ の個数が偶数であることを証明せよ。

$$
\begin{aligned}
S&\to aA\mid bB,\\
B&\to bB\mid aA\mid b,\\
A&\to aB\mid bA\mid a.
\end{aligned}
$$

### 题目描述

构造正则文法与上下文无关文法，设计识别“不含连续两个 $b$”的三状态确定有限自动机，并证明给定文法生成的串含偶数个 $a$。

## **Kai**

### 1.

#### (1)

語の例は

$$
\boxed{ab,\ aab,\ abb}.
$$

ちょうど六個のプロダクションからなる正則文法の一例は

$$
\boxed{
\begin{aligned}
S&\to aA,\\
A&\to aA\mid bB\mid b,\\
B&\to bB\mid b.
\end{aligned}}
$$

である。

#### (2)

語の例は

$$
\boxed{ab,\ aabb,\ aaabbb}.
$$

ちょうど二個のプロダクションからなる文脈自由文法は

$$
\boxed{S\to aSb\mid ab}
$$

である。

### 2.

$q_0$ を初期状態かつ直前が $b$ でない状態、$q_1$ を直前が $b$ の状態、$q_d$ を $bb$ を読んだ死状態とする。受理状態は $q_0,q_1$ である。

~~~mermaid
flowchart LR
  start["start"] --> q0(((q0)))
  q0 -->|a| q0
  q0 -->|b| q1(((q1)))
  q1 -->|a| q0
  q1 -->|b| qd((qd))
  qd -->|a,b| qd
~~~

状態遷移関数は

| $q$ | $\delta(q,a)$ | $\delta(q,b)$ | 受理 |
|:---:|:---:|:---:|:---:|
| $q_0$ | $q_0$ | $q_1$ | $\checkmark$ |
| $q_1$ | $q_0$ | $q_d$ | $\checkmark$ |
| $q_d$ | $q_d$ | $q_d$ |  |

である。

### 3.

#### (1)

例えば、

$$
\boxed{aa,\ bb,\ aba}
$$

が生成される。

#### (2)

導出途中の形を $wA$ または $wB$ とする。次の不変条件を考える。

$$
\begin{cases}
wA\text{ のとき、}w\text{ に含まれる }a\text{ は奇数個},\\
wB\text{ のとき、}w\text{ に含まれる }a\text{ は偶数個}.
\end{cases}
$$

$S\to aA,bB$ の直後に成立する。また、

$$
A\to aB,\ A\to bA,\ B\to aA,\ B\to bB
$$

のいずれでもこの不変条件は保たれる。最後に $A\to a$ なら奇数個に一個加わり、$B\to b$ なら偶奇は変わらない。したがって、いずれの場合も終端語に含まれる $a$ は偶数個である。
