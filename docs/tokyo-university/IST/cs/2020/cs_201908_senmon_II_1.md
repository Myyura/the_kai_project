---
sidebar_label: 2019年8月実施 専門科目II 問題1
tags:
  - Tokyo-University
  - Discrete-Mathematics.Mathematical-Logic
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目II 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

Let $A$ be a propositional variable, and $L_i$ be a literal (i.e., a propositional variable or negation of a propositional variable). In this problem, a propositional formula of the following form is called a clause.

$$
L_1\land\cdots\land L_n\supset A
$$

If $n=1$, it is of the form $L_1\supset A$, and if $n=0$, it is of the form $A$. Hereinafter, $\Pi$ is a set of clauses, and $M$ is a set of propositional variables. If all clauses in $\Pi$ are true under the interpretation in which all propositional variables in $M$ are true and the other variables are false, then $M$ is called a model of $\Pi$. The inclusion relation between sets is naturally defined between models.

Answer the following questions.

(1) Let $\Pi_0=\{P,P\supset Q,Q\land\neg R\supset S,P\land\neg S\land\neg T\supset T\}$. Enumerate all the subsets of $\{P,Q,R,S,T\}$ that are models of $\Pi_0$.

We write $\Pi_M$ for the set of clauses obtained from $\Pi$ by (i) removing all the clauses that contain negation of a propositional variable in $M$ in the left hand side of $\supset$, and then (ii) deleting all the negated literals (negation of propositional variables) from the remaining clauses.

(2) For $\Pi_0$ in question (1), if $M_0=\{P,Q,S\}$, what is $(\Pi_0)_{M_0}$?

(3) Show that if a model $M'$ of $\Pi_M$ satisfies $M\subseteq M'$, then $M'$ is a model of $\Pi$.

(4) Show that if a model $M'$ of $\Pi$ satisfies $M'\subseteq M$, then $M'$ is a model of $\Pi_M$.

(5) For $\Pi_0$ and $M_0$ in question (2), obtain the minimum model of $(\Pi_0)_{M_0}$. Here, a model $M'$ of $\Pi_M$ is called a minimum model of $\Pi_M$ if $M'\subseteq M''$ holds for every model $M''$ of $\Pi_M$.

(6) Show that if the minimum model of $\Pi_M$ coincides with $M$, then $M$ is a minimal model of $\Pi$. Here, a model $M'$ of $\Pi$ is called a minimal model of $\Pi$ if there does not exist any model $M''$ of $\Pi$ such that $M''\subsetneq M'$.

(7) Is a minimal model $M$ of $\Pi$ always a minimum model of $\Pi_M$? If so, prove the fact. Otherwise, give a counterexample.

### 题目描述

设 $A$ 为命题变量，$L_i$ 为文字（命题变量或其否定）。本题称

$$
L_1\land\cdots\land L_n\supset A
$$

为子句；$n=0$ 时即为 $A$。设 $\Pi$ 为子句集，$M$ 为命题变量集，将 $M$ 中的变量赋真，其余赋假。若所有子句均成立，则称 $M$ 为 $\Pi$ 的模型，模型之间使用通常的集合包含关系。

（1）令

$$
\Pi_0=\{P,\ P\supset Q,\ Q\land\neg R\supset S,\ P\land\neg S\land\neg T\supset T\}.
$$

枚举 $\{P,Q,R,S,T\}$ 的所有满足 $\Pi_0$ 的子集。

定义 $\Pi_M$：先删除 $\Pi$ 中前件含有 $\neg B$ 且 $B\in M$ 的全部子句，再从剩余子句中删去全部否定文字。

（2）对 $M_0=\{P,Q,S\}$，求 $(\Pi_0)_{M_0}$。

（3）证明：若 $M'$ 是 $\Pi_M$ 的模型且 $M\subseteq M'$，则 $M'$ 是 $\Pi$ 的模型。

（4）证明：若 $M'$ 是 $\Pi$ 的模型且 $M'\subseteq M$，则 $M'$ 是 $\Pi_M$ 的模型。

（5）求第（2）问所得子句集的最小模型。最小模型是包含于该子句集每个模型的模型。

（6）证明：若 $\Pi_M$ 的最小模型恰为 $M$，则 $M$ 是 $\Pi$ 的极小模型，即不存在 $\Pi$ 的模型 $M''\subsetneq M$。

（7）$\Pi$ 的极小模型 $M$ 是否必是 $\Pi_M$ 的最小模型？若是则证明，否则举反例。

## **Kai**

### (1)

$P,Q$ 必为真。若 $R$ 假，则 $S$ 必真；若 $S$ 假，则 $T$ 必真。因此所有模型为

$$
\boxed{\{P,Q,S\},\ \{P,Q,S,T\},\ \{P,Q,R,T\},\ \{P,Q,R,S\},\ \{P,Q,R,S,T\}.}
$$

### (2)

最后一条子句含 $\neg S$，被删除；第三条中的 $\neg R$ 被去掉。因此

$$
\boxed{(\Pi_0)_{M_0}=\{P,\ P\supset Q,\ Q\supset S\}.}
$$

### (3)

考察 $\Pi$ 的任一子句。若它被删除，则其前件含 $\neg B$，其中 $B\in M\subseteq M'$；故前件在 $M'$ 下为假，子句成立。

若它被保留，当原前件在 $M'$ 下为真时，其中全部正文字也为真。由于 $M'$ 满足删去否定文字后的子句，结论必真。因此原子句成立。

### (4)

任取 $\Pi_M$ 中的子句。原子句中的每个否定文字 $\neg B$ 都有 $B\notin M$，故 $B\notin M'$。若保留下来的正前件在 $M'$ 中为真，则原前件也为真，由 $M'$ 满足 $\Pi$ 可得结论为真。故 $M'$ 满足 $\Pi_M$。

### (5)

由事实 $P$ 依次推出 $Q,S$，且 $\{P,Q,S\}$ 满足全部子句，故最小模型为

$$
\boxed{\{P,Q,S\}.}
$$

### (6)

由（3）取 $M'=M$ 可知 $M$ 是 $\Pi$ 的模型。若存在 $\Pi$ 的模型 $M''\subsetneq M$，则由（4），$M''$ 也是 $\Pi_M$ 的模型。但 $M$ 是后者的最小模型，应有 $M\subseteq M''$，矛盾。故 $M$ 极小。

### (7)

不一定。取

$$
\Pi=\{\neg P\supset P\},\qquad M=\{P\}.
$$

$P$ 为假时子句不成立，所以 $M$ 是唯一的模型，当然极小。然而 $\Pi_M=\varnothing$，其最小模型为 $\varnothing\ne M$。
