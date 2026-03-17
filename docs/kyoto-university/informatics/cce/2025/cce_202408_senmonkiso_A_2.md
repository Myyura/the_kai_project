---
sidebar_label: "2024年8月実施 専門基礎A [A-2]"
tags:
  - Kyoto-University
  - Digital-Circuit
  - Logic-Design
  - Moore-Machine
---
# 京都大学 情報学研究科 通信情報システム専攻 2024年8月実施 専門基礎A \[A-2\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e), 祭音Myyura (assisted by ChatGPT 5.4 Thinking)

## **Description**
Answer all the following questions. Note that operators $\overline{\phantom{x}}$, $\cdot$, $+$, and $\oplus$ denote logical negation, logical and, logical or, and exclusive or, respectively.

### (1)

Answer the following questions on the logic function $f$ defined below.

$$
f =
\Bigl((\bar a + \bar c + \bar d)\cdot(a+b+c+d)\Bigr)
\oplus
\Bigl(\bar b\cdot \bar c\cdot \bar d + \bar a\cdot c\cdot d + b\cdot \bar c\cdot d + a\cdot \bar c\cdot \bar d\Bigr)
$$

(a) Give all minimum sum-of-products expressions of $f$.

(b) Derive a logic circuit that realizes $f$ with the minimum number of 3-input NAND gates only. Assume $a, b, c, d$ and their complements $\bar a, \bar b, \bar c, \bar d$ are available as inputs.

(c) Give all minimum product-of-sums expressions of $f$.

(d) Assume logic functions

$$
g=\bar c\cdot \bar d+\bar a\cdot \bar b\cdot \bar c+\bar a\cdot b\cdot c+\bar a\cdot \bar b\cdot \bar d,
\qquad
r=\bar a\cdot \bar d.
$$

Among all the logic functions $h$ that satisfy

$$
f=(g\oplus h)+r,
$$

derive a minimum sum-of-products expression of a logic function that has the minimum number of product terms with the minimum number of literals in its sum-of-products form. If there is no logic function $h$ that satisfies $f=(g\oplus h)+r$, state that $h$ does not exist.

### (2)

We design a Moore-type synchronous sequential circuit that has a 1-bit input $x$ and a 1-bit output $z$ using D flip-flop(s). Every time two or more 0s are given consecutively or two or more 1s are given consecutively, the output $z$ is inverted in the next clock cycle. The initial state is the state where 0 has been previously inputted to $x$ and the output $z$ is 0. Table 1 shows an operation example of this sequential circuit. The initial value of D flip-flop is 0. Answer the following questions.

#### Table 1

| clock cycle | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| input $x$ | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 1 |
| output $z$ | 0 | 1 | 0 | 1 | 1 | 1 | 0 | 0 | 1 | 0 |

(a) Derive a state transition diagram of this sequential circuit.

(b) Regarding the state transition diagram derived in Question (a), minimize the number of states and show the state transition table and the output table after state assignment. Explain how you verified that the number of states is minimal. Use the minimum number of D flip-flop(s) for state assignment and show the state assignment result.

(c) We implement a sequential circuit corresponding to the state transition table and the output table derived in Question (b). Derive the excitation function(s) of the D flip-flop(s) and the output function of $z$ in a minimal sum-of-products form. The logic variables of the input and the output of a D flip-flop are $d$ and $q$, respectively. If multiple flip-flops are used, distinguish them by subscripts.

## **Kai**
### (1)
#### (a)
By simplifying $f$ on a 4-variable Karnaugh map, the 1-cells can be grouped as follows:

- a group of 4 cells with $a=0$ and $d=0$, giving the implicant $\bar a \bar d$,
- a group of 4 cells with $c=1$ and $d=0$, giving the implicant $c \bar d$,
- a group of 2 cells with $b=0$, $c=0$, and $d=1$, giving the implicant $\bar b \bar c d$.

Therefore, the minimum sum-of-products expression of $f$ is

$$
f=\bar a \bar d + c \bar d + \bar b \bar c d.
$$

This minimum SOP expression is unique.

#### (b)
Using

$$
f=\bar a\bar d + c\bar d + \bar b\bar c d,
$$

a minimum 3-input-NAND realization is:

$$
\begin{aligned}
n_1=\operatorname{NAND}(\bar a,\bar d,\bar d),
\\
n_2=\operatorname{NAND}(c,\bar d,\bar d),
\\
n_3=\operatorname{NAND}(\bar b,\bar c,d),
\end{aligned}
$$

and

$$
f=\operatorname{NAND}(n_1,n_2,n_3).
$$

So the minimum number of 3-input NAND gates is **4**.

#### (c)
To obtain the minimum product-of-sums form, group the 0-cells of the Karnaugh map:

- a group of 4 zeros with $b=1$ and $d=1$, giving the maxterm $(\bar b + \bar d)$,
- a group of 4 zeros with $c=1$ and $d=1$, giving the maxterm $(\bar c + \bar d)$,
- a group of 2 zeros with $a=1$, $c=0$, and $d=0$, giving the maxterm $(\bar a + c + d)$.

Hence, the minimum product-of-sums expression of $f$ is

$$
f=(\bar b+\bar d)(\bar c+\bar d)(\bar a+c+d).
$$

This minimum POS expression is unique.

#### (d)
We are given

$$
g=\bar c\bar d+\bar a\bar b\bar c+\bar a b c+\bar a\bar b\bar d,
\qquad
r=\bar a\bar d,
$$

and we need a logic function $h$ such that

$$
f=(g\oplus h)+r.
$$

First, consider the cases where $r=0$.  
In those cases, $h$ is uniquely determined by

$$
h=f\oplus g.
$$

For the cases where $r=1$, since

$$
(g\oplus h)+r=1,
$$

the value of $h$ does not affect the equality as long as $f=1$.  
Thus, those cells can be treated as don't-care conditions in the Karnaugh map for $h$.

Using the determined values together with the don't-care cells, the minimum sum-of-products expression is

$$
h=\bar d + a\bar b\bar c + \bar a b c.
$$

This expression has the minimum number of product terms, and among them, the minimum number of literals.

### (2)
#### (a)

<div align="center">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202408_senmonkiso_A_2_p1.png"width="400">
</div>

#### (b)
The minimized Moore machine has the following four states:

- $S_{00}$: $(q_1q_0)=(00)$
- $S_{01}$: $(q_1q_0)=(01)$
- $S_{10}$: $(q_1q_0)=(10)$
- $S_{11}$: $(q_1q_0)=(11)$

The state transition table is:

| Current State ($q_1q_0$) | Next State for $x=0$ | Next State for $x=1$ | Output $z$ |
|---|---|---|---|
| $S_{00}$ (00) | $S_{01}$ (01) | $S_{10}$ (10) | 0 |
| $S_{01}$ (01) | $S_{00}$ (00) | $S_{11}$ (11) | 1 |
| $S_{10}$ (10) | $S_{00}$ (00) | $S_{11}$ (11) | 0 |
| $S_{11}$ (11) | $S_{01}$ (01) | $S_{10}$ (10) | 1 |

The number of states is minimal because no two states are equivalent:

- $S_{00}$ and $S_{10}$ have the same output, but with input $x=0$, they go to states with different outputs.
- $S_{01}$ and $S_{11}$ have the same output, but with input $x=0$, they go to states with different outputs.
- Any pair of states with different outputs are immediately distinguishable.

Therefore, all four states are necessary.

Since 4 states are required, the minimum number of D flip-flops is 2.

#### (c)
Two D flip-flops are required. Let their present-state outputs be $q_1, q_0$, and their inputs be $d_1, d_0$, respectively.

Using the state assignment
$$
S_{00}=00,\quad S_{01}=01,\quad S_{10}=10,\quad S_{11}=11,
$$
the excitation functions are

$$
d_1=x
$$

and

$$
d_0=\bar{x}\bar{q_1}\bar{q_0}+\bar{x}q_1q_0+x\bar{q_1}q_0+xq_1\bar{q_0}.
$$

The output function is

$$
z=q_0.
$$