---
sidebar_label: "2024年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2024年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

独立でない三つの事象 $A,B,C$ について、以下の問いに答えよ。

(1) $\Pr\{A \cap B\} \geq 1 - (\Pr\{A^c\} + \Pr\{B^c\})$ が成り立つことを示せ。

(2) $A^c \cap B^c \neq \emptyset$ のとき、(1)の結果を利用して、

$$
\Pr\{A \cap B \cap C\} > 1 - (\Pr\{A^c\} + \Pr\{B^c\} + \Pr\{C^c\})
$$

が成り立つことを示せ。

### 题目描述

对三个不要求相互独立的事件 $A,B,C$，回答下列问题。

（1）证明

$$
\Pr\{A\cap B\}
\ge
1-\bigl(\Pr\{A^c\}+\Pr\{B^c\}\bigr).
$$

（2）原题给出的条件为 $A^c\cap B^c\ne\varnothing$，并要求利用（1）证明

$$
\Pr\{A\cap B\cap C\}
>
1-\bigl(\Pr\{A^c\}+\Pr\{B^c\}+\Pr\{C^c\}\bigr).
$$

需要明确的是，集合非空本身不能保证其概率为正；上述严格不等式可由更强的条件

$$
\Pr(A^c\cap B^c)>0
$$

推出。若只保留原题的非空条件，则一般只能保证对应的非严格不等式，不能完成严格不等式的证明。

## **Kai**

(1)
We know that

$$
\Pr\{A \cup B\} = \Pr\{A\} + \Pr\{B\} - \Pr\{A \cap B\}
$$

Since $\Pr\{A \cup B\} \leq 1$ , we have

$$
\Pr\{A\} + \Pr\{B\} - \Pr\{A \cap B\} \leq 1
$$

$$
\Pr\{A \cap B\} \geq \Pr\{A\} + \Pr\{B\} - 1
$$

Also, we have $\Pr\{A\} = 1 - \Pr\{A^c\}$ and $\Pr\{B\} = 1 - \Pr\{B^c\}$ , so

$$
\Pr\{A \cap B\} \geq (1 - \Pr\{A^c\}) + (1 - \Pr\{B^c\}) - 1
$$

$$
\Pr\{A \cap B\} \geq 1 - \Pr\{A^c\} - \Pr\{B^c\}
$$

(2)
Let $D = A \cap B$ .  Then we want to show that

$$
\Pr\{D \cap C\} > 1 - (\Pr\{A^c\} + \Pr\{B^c\} + \Pr\{C^c\})
$$

From (1), we have $\Pr\{D \cap C\} \geq 1 - (\Pr\{D^c\} + \Pr\{C^c\})$ . We want to prove that

$$
1 - (\Pr\{D^c\} + \Pr\{C^c\}) > 1 - (\Pr\{A^c\} + \Pr\{B^c\} + \Pr\{C^c\})
$$

$$
\Pr\{A^c\} + \Pr\{B^c\} > \Pr\{D^c\}
$$

Since $D = A \cap B$ , we have $D^c = A^c \cup B^c$ . Thus, we want to show that

$$
\Pr\{A^c\} + \Pr\{B^c\} > \Pr\{A^c \cup B^c\}
$$

We know that $\Pr\{A^c \cup B^c\} = \Pr\{A^c\} + \Pr\{B^c\} - \Pr\{A^c \cap B^c\}$ . More directly, applying (1) to $D=A\cap B$ and $C$ gives

$$
\begin{aligned}
\Pr(A\cap B\cap C)
&\ge 1-\Pr(D^c)-\Pr(C^c)\\
&=1-\Pr(A^c)-\Pr(B^c)-\Pr(C^c)
  +\Pr(A^c\cap B^c).
\end{aligned}
$$

したがって、求める狭義不等式は

$$
\Pr(A^c\cap B^c)>0
$$

というより強い条件の下では確かに成り立つ。しかし、集合が空でないことだけから、その確率が正であるとは限らない。例えば、$[0,1]$ 上の一様分布を考え、

$$
A=B=[0,1]\setminus\{0\},\qquad C=[0,1]
$$

とすると、$A^c\cap B^c=\{0\}\ne\varnothing$ だが、その確率は $0$ である。このとき両辺はともに $1$ となり、狭義不等式は成り立たない。

よって、原題の条件 $A^c\cap B^c\ne\varnothing$ のままでは一般に非狭義不等式しか保証できない。狭義不等式を結論するには、条件を $\Pr(A^c\cap B^c)>0$ に置き換える必要がある。
