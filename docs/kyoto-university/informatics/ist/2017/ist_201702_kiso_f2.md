---
sidebar_label: 2017年2月実施 情報学基礎 F-2
tags:
  - Kyoto-University
  - Electrical-Electronic.Digital-Logic.Boolean-Function-Minimization
  - Electrical-Electronic.Digital-Logic.Karnaugh-Map-Minimization
  - Electrical-Electronic.Digital-Logic.Mealy-Sequence-Detector-State-Minimization
  - Electrical-Electronic.Digital-Logic.D-Flip-Flop
---
# 京都大学 情報学研究科 知能情報学専攻 2017年2月実施 情報学基礎 F-2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### Q.1

For the four-variable logic function

$$
f(x_1,x_2,x_3,x_4)
=\bigl(x_1+(x_2x_3')'\bigr)x_4'
+(x_1x_3)'x_2x_4,
$$

where $x_i'$ denotes the logical negation of $x_i$:

1. Show a Karnaugh map of $f$.
2. Show all prime implicants of $f$.
3. Show all minimum sum-of-products expressions of $f$.

### Q.2

A Mealy-type sequential machine $M$ detects the patterns `0011` and `1011` in a binary input sequence. It produces `1` when the last symbol of either pattern arrives and `0` otherwise. For example, input `011011101101` produces output `000001000100`.

1. Give the state-transition table of $M$ using the minimum number of states.
2. Design a synchronous sequential circuit realizing $M$ with the minimum number of D flip-flops. Let $X$ be the input, $Q_i,Q_i'$ the two outputs of flip-flop $i$, and $D_i$ its excitation input. Give the state assignment, the excitation functions, and the output function $Z$ in minimum sum-of-products form. All flip-flop outputs are reset to `0` before the input sequence starts.

### 题目描述

1. 对逻辑函数

   $$
   f=(x_1+(x_2x_3')')x_4'+(x_1x_3)'x_2x_4
   $$

   作 Karnaugh 图，列出全部主蕴含项，并给出全部最小与项之和式。
2. 最小化可检测 `0011` 和 `1011` 的 Mealy 型时序机：
   1. 给出最少状态的状态转移表；
   2. 用最少的 D 触发器实现，明确写出状态编码，并将 $D_i$ 与输出 $Z$ 写成最小与项之和式。初始时所有触发器复位为 `0`。

## **Kai**

### Q.1

Expanding the definition gives

$$
f=\Sigma m(0,2,5,6,7,8,10,12,13,14).
$$

#### 1.1 Karnaugh map

Use Gray order $00,01,11,10$ on both axes.

| $x_1x_2\backslash x_3x_4$ | $00$ | $01$ | $11$ | $10$ |
|---:|:---:|:---:|:---:|:---:|
| $00$ | 1 | 0 | 0 | 1 |
| $01$ | 0 | 1 | 1 | 1 |
| $11$ | 1 | 1 | 0 | 1 |
| $10$ | 1 | 0 | 0 | 1 |

#### 1.2 Prime implicants

The maximal groups give exactly the following seven prime implicants:

$$
\boxed{
x_3x_4',\quad
x_2'x_4',\quad
x_2x_3'x_4,\quad
x_1'x_2x_4,\quad
x_1'x_2x_3,\quad
x_1x_4',\quad
x_1x_2x_3'
}.
$$

Their covered minterms are respectively

$$
\{2,6,10,14\},\ \{0,2,8,10\},\ \{5,13\},\
\{5,7\},\ \{6,7\},\ \{8,10,12,14\},\ \{12,13\}.
$$

#### 1.3 Minimum sum-of-products forms

Minterm $0$ forces $x_2'x_4'$. Covering the remaining essential choices yields exactly two minimum covers, each with four products and ten literals:

$$
\boxed{
f=x_2'x_4'+x_3x_4'+x_1'x_2x_4+x_1x_2x_3'
}
$$

or

$$
\boxed{
f=x_2'x_4'+x_1x_4'+x_2x_3'x_4+x_1'x_2x_3
}.
$$

### Q.2

The two target patterns are precisely the four-bit strings whose last three bits are `011`; the first bit may be either `0` or `1`. The initial state must nevertheless be distinguished so that the first three input bits cannot produce a detection.

Let the states be:

- $A$: no input has been read;
- $B$: at least one bit has been read, with no current suffix represented by $C$ or $D$;
- $C$: at least two bits have been read and the current suffix is `0`;
- $D$: at least three bits have been read and the current suffix is `01`.

#### 2.1 Minimum state table

Each entry is `next state / output`.

| Present state | $X=0$ | $X=1$ |
|:---:|:---:|:---:|
| $A$ | $B/0$ | $B/0$ |
| $B$ | $C/0$ | $B/0$ |
| $C$ | $C/0$ | $D/0$ |
| $D$ | $C/0$ | $B/1$ |

These four states are pairwise distinguishable: $D$ is separated immediately by input `1`; $C$ is separated from $A,B$ by continuation `11`; and $A$ is separated from $B$ by continuation `011`. Hence four states are necessary and sufficient.

#### 2.2 Circuit equations

Four states require two D flip-flops. Use the reset-compatible assignment

$$
A=00,\qquad B=01,\qquad C=10,\qquad D=11,
$$

where the bits are $(Q_1,Q_2)$. The encoded transition table is

| $Q_1Q_2$ | Meaning | $X=0$: $D_1D_2/Z$ | $X=1$: $D_1D_2/Z$ |
|:---:|:---:|:---:|:---:|
| $00$ | $A$ | $01/0$ | $01/0$ |
| $01$ | $B$ | $10/0$ | $01/0$ |
| $10$ | $C$ | $10/0$ | $11/0$ |
| $11$ | $D$ | $10/0$ | $01/1$ |

Karnaugh-map minimization gives

$$
\boxed{
\begin{aligned}
D_1&=Q_2X'+Q_1Q_2',\\
D_2&=X+Q_1'Q_2',\\
Z&=Q_1Q_2X.
\end{aligned}}
$$

Starting from $Q_1Q_2=00$, these equations reproduce the required output and allow overlaps between consecutive occurrences.
