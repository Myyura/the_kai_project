---
comments: false
title: 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目II 問題1
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目II 問題1

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Let $A$ be a propositional variable, and $L_i$ be a literal (i.e., a propositional variable or negation of a propositional variable). In this problem, a propositional formula of the following form is called a clause.

$$
L_1 \land \cdots \land L_n \supset A
$$

If $n = 1$, it is of the form $L_1 \supset A$, and if $n = 0$, it is of the form $A$. Hereinafter, $\Pi$ is a set of clauses, and $M$ is a set of propositional variables. If all clauses in $\Pi$ are true under the interpretation in which all propositional variables in $M$ are true and the other variables are false, then $M$ is called a model of $\Pi$. The inclusion relation between sets is naturally defined between models.

Answer the following questions.

(1) Let $\Pi_0 = \{P, P \supset Q, Q \land \neg R \supset S, P \land \neg S \land \neg T \supset T\}$. Enumerate all the subsets of $\{P, Q, R, S, T\}$ that are models of $\Pi_0$.

We write $\Pi_M$ for the set of clauses obtained from $\Pi$ by (i) removing all the clauses that contain negation of a propositional variable in $M$ in the left hand side of $\supset$, and then (ii) deleting all the negated literals (negation of propositional variables) from the remaining clauses.

(2) For $\Pi_0$ in question (1), if $M_0 = \{P, Q, S\}$, what is $\Pi_{0_{M_0}}$?

(3) Show that if a model $M'$ of $\Pi_M$ satisfies $M \subseteq M'$, then $M'$ is a model of $\Pi$.

(4) Show that if a model $M'$ of $\Pi$ satisfies $M' \subseteq M$, then $M'$ is a model of $\Pi_M$.

(5) For $\Pi_0$ and $M_0$ in question (2), obtain the minimum model of $\Pi_{0_{M_0}}$. Here, a model $M'$ of $\Pi_M$ is called a minimum model of $\Pi_M$ if $M' \subseteq M''$ holds for every model $M''$ of $\Pi_M$.

(6) Show that if the minimum model of $\Pi_M$ coincides with $M$, then $M$ is a minimal model of $\Pi$. Here, a model $M$ of $\Pi$ is called a minimal model of $\Pi$ if there does not exist a model $M''$ of $\Pi$ such that $M'' \subset M'$.

(7) Is a minimal model $M$ of $\Pi$ always a minimum model of $\Pi_M$? If so, prove the fact. Otherwise, give a counterexample.

---

设 $A$ 是一个命题变量，$L_i$ 是一个文字（即，命题变量或命题变量的否定）。在这个问题中，以下形式的命题公式称为子句。

$$
L_1 \land \cdots \land L_n \supset A
$$

如果 $n = 1$，则形式为 $L_1 \supset A$，如果 $n = 0$，则形式为 $A$。以下，$\Pi$ 是一组子句，$M$ 是一组命题变量。如果在解释中 $\Pi$ 中的所有子句在 $M$ 中所有命题变量为真且其他变量为假的情况下为真，则称 $M$ 为 $\Pi$ 的模型。模型之间的包含关系自然地定义在集合之间。

回答以下问题。

(1) 令 $\Pi_0 = \{P, P \supset Q, Q \land \neg R \supset S, P \land \neg S \land \neg T \supset T\}$。枚举 $\{P, Q, R, S, T\}$ 的所有子集，它们是 $\Pi_0$ 的模型。

我们写 $\Pi_M$ 来表示通过 (i) 删除所有在 $\supset$ 的左边包含 $M$ 中命题变量的否定的子句，并 (ii) 从剩余的子句中删除所有否定的文字（命题变量的否定）后从 $\Pi$ 得到的子句集合。

(2) 对于问题 (1) 中的 $\Pi_0$，如果 $M_0 = \{P, Q, S\}$，那么 $\Pi_{0_{M_0}}$ 是什么？

(3) 证明如果 $\Pi_M$ 的一个模型 $M'$ 满足 $M \subseteq M'$，那么 $M'$ 是 $\Pi$ 的一个模型。

(4) 证明如果 $\Pi$ 的一个模型 $M'$ 满足 $M' \subseteq M$，那么 $M'$ 是 $\Pi_M$ 的一个模型。

(5) 对于问题 (2) 中的 $\Pi_0$ 和 $M_0$，求出 $\Pi_{0_{M_0}}$ 的最小模型。这里，如果 $\Pi_M$ 的一个模型 $M'$ 满足对于 $\Pi_M$ 的每一个模型 $M''$，有 $M' \subseteq M''$，则称 $M'$ 为 $\Pi_M$ 的最小模型。

(6) 证明如果 $\Pi_M$ 的最小模型与 $M$ 重合，则 $M$ 是 $\Pi$ 的最小模型。这里，如果 $\Pi$ 的一个模型 $M$ 满足不存在 $\Pi$ 的一个模型 $M''$ 使得 $M'' \subset M$，则称 $M$ 为 $\Pi$ 的最小模型。

(7) 一个 $\Pi$ 的最小模型 $M$ 是否总是 $\Pi_M$ 的最小模型？如果是这样，证明这一事实。否则，给出一个反例。

## **Kai**
