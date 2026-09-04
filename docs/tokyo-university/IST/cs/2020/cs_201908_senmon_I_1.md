---
sidebar_label: 2019年8月実施 専門科目I 問題1
tags:
  - Tokyo-University
  - Computer-Science.Formal-Languages.Language-Shuffle
  - Computer-Science.Formal-Languages.Nondeterministic-Finite-Automaton
  - Computer-Science.Formal-Languages.Pumping-Lemma
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目I 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
Let $\Sigma$ be a finite alphabet (i.e., a finite set of letters), and $\epsilon$ be the empty sequence. We define the `shuffle` $w_1 \otimes w_2 \subseteq \Sigma^*$ of two words $w_1, w_2 \in \Sigma^*$ as follows.

- For every $w \in \Sigma^*$,

$$
\epsilon \otimes w = w \otimes \epsilon = \{w\}.
$$

- For every $a, b \in \Sigma$ and $w_1, w_2 \in \Sigma^*$,

$$
(aw_1) \otimes (bw_2) = \{aw \mid w \in w_1 \otimes (bw_2)\} \cup \{bw \mid w \in (aw_1) \otimes w_2\}.
$$

Furthermore, for two languages $L_1, L_2 \subseteq \Sigma^*$, their shuffle $L_1 \otimes L_2 \subseteq \Sigma^*$ is defined by:

$$
L_1 \otimes L_2 = \bigcup_{w_1 \in L_1, w_2 \in L_2} w_1 \otimes w_2.
$$

For example, we have:

$$
\{ab, ba\} \otimes \{\epsilon, c\} = (ab \otimes \epsilon) \cup (ab \otimes c) \cup (ba \otimes \epsilon) \cup (ba \otimes c) = \{ab, cab, acb, abc, ba, cba, bca, bac\}.
$$

Answer the following questions.

(1) Compute $\{a, bb\} \otimes \{ab, cc\}$.

(2) Suppose that deterministic finite automata $\mathcal{A}_1 = (Q_1, \Sigma, \delta_1, q_{1,0}, F_1)$ and $\mathcal{A}_2 = (Q_2, \Sigma, \delta_2, q_{2,0}, F_2)$ accept languages $L_1$ and $L_2$, respectively. Here, $Q_i, \delta_i, q_{i,0},$ and $F_i$ are respectively the set of states, the transition function, the initial state, and the set of final states of $\mathcal{A}_i \ (i \in \{1, 2\})$. You may assume that the transition functions $\delta_i \in Q_i \times \Sigma \rightarrow Q_i\ (i \in \{1, 2\})$ are total functions. Give a non-deterministic automaton that accepts $L_1 \otimes L_2$.

(3) Prove the correctness of your answer for question (2) above.

(4) Let $L_3 = \{a^nb^n \mid n \geq 0\}$ and $L_4 = \{c^md^m \mid m \geq 0\}$. Prove that $L_3 \otimes L_4$ is not a context-free language. Here, you may use the pumping lemma for context-free languages.

### 题目描述

设 $\Sigma$ 为有限字母表，$\varepsilon$ 为空串。对
$w_1,w_2\in\Sigma^*$，递归定义它们的洗牌（shuffle）
$w_1\otimes w_2\subseteq\Sigma^*$：
$$
\varepsilon\otimes w=w\otimes\varepsilon=\{w\},
$$
且对 $a,b\in\Sigma$、$w_1,w_2\in\Sigma^*$，
$$
(aw_1)\otimes(bw_2)
=\{aw\mid w\in w_1\otimes(bw_2)\}
\cup
\{bw\mid w\in(aw_1)\otimes w_2\}.
$$
对语言 $L_1,L_2\subseteq\Sigma^*$，定义
$$
L_1\otimes L_2
=\bigcup_{w_1\in L_1,\ w_2\in L_2}w_1\otimes w_2.
$$
例如
$$
\{ab,ba\}\otimes\{\varepsilon,c\}
=\{ab,cab,acb,abc,ba,cba,bca,bac\}.
$$
回答下列问题。

（1）计算 $\{a,bb\}\otimes\{ab,cc\}$。

（2）设 DFA
$\mathcal A_i=(Q_i,\Sigma,\delta_i,q_{i,0},F_i)$ 分别识别语言
$L_i\ (i=1,2)$，并假定两个转移函数均为全函数。构造一个识别
$L_1\otimes L_2$ 的 NFA。

（3）证明第（2）问构造的正确性。

（4）令
$L_3=\{a^nb^n\mid n\ge0\}$、
$L_4=\{c^md^m\mid m\ge0\}$。证明
$L_3\otimes L_4$ 不是上下文无关语言。可以使用上下文无关语言泵引理。

## **Kai**

### (1)

分别计算四组洗牌并去重，得

$$
\begin{aligned}
\{a,bb\}\otimes\{ab,cc\}=\{&aab,aba,acc,cac,cca,\\
&abbb,babb,bbab,bbcc,bcbc,bccb,cbbc,cbcb,ccbb\}.
\end{aligned}
$$

### (2)

取 NFA $\mathcal A=(Q_1\times Q_2,\Sigma,\Delta,(q_{1,0},q_{2,0}),F_1\times F_2)$，其中

$$
\Delta((q_1,q_2),a)
=\{(\delta_1(q_1,a),q_2),(q_1,\delta_2(q_2,a))\}.
$$

即每读一个字符，非确定地选择交给其中一台 DFA，另一台保持原状态。

### (3)

若 $w$ 被接受，将运行中交给第一、第二台 DFA 的字符分别按原序组成 $w_1,w_2$。最终两台都在接受状态，故 $w_1\in L_1,w_2\in L_2$，且 $w\in w_1\otimes w_2$。

反之，若 $w\in w_1\otimes w_2$，其中 $w_i\in L_i$，则按该交错方式选择转移，运行结束于 $F_1\times F_2$，故接受 $w$。

### (4)

若 $L=L_3\otimes L_4$ 是上下文无关语言，则与正则语言 $a^*c^*b^*d^*$ 的交

$$
K=L\cap a^*c^*b^*d^*=\{a^nc^mb^nd^m\mid n,m\ge0\}
$$

也是上下文无关语言。设其泵长度为 $p$，取 $w=a^pc^pb^pd^p$。任意满足 $w=uvxyz$、$|vxy|\le p$、$|vy|>0$ 的分解中，$vxy$ 至多涉及两个相邻字符块，因而不能同时涉及 $a,b$ 两块，也不能同时涉及 $c,d$ 两块。

令泵次数为 $0$。删除 $v,y$ 后至少一种字符减少，而与它要求等量的另一种字符没有减少。因此所得串不在 $K$，与泵引理矛盾。故 $L_3\otimes L_4$ 不是上下文无关语言。
