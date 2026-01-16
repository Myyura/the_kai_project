---
sidebar_label: '2010年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Backtracking
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2010年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Assume we have $n$ different products $G_1, \dots, G_n$ ($n\ge2$) whose prices are $p_1, \dots, p_n$ respectively, and choose $m$ products $G_{i_1}, \dots, G_{i_m}$ ($2\le m\le n$) from them so that there are no two identical ones. For given two positive integers $q_{\min}, q_{\max}$ such that $q_{\min}<q_{\max}$ and $p_i<q_{\min}$ for each $i=1, \dots, n$, we want to make $q_{\min}<\sum_{j=1}^m p_{i_j}<q_{\max}$, that is, the sum of the prices is between $q_{\min}$ and $q_{\max}$, by choosing an appropriate combination of products. The following Algorithm 1 implements the backtracking algorithm that is one of the solutions to this problem. In the descriptions of Algorithm 1, $\epsilon$ represents an empty sequence. In the descriptions of the procedure "back($\langle G_{i_1}, \dots, G_{i_k}\rangle, S_0$)", the first argument is a sequence of products consisting of the elements of the product set expected to be the solution eventually and the second argument is a set of products that are candidates to be added to the first argument. $k$ is the length of the first argument of this "back" invocation. If $k=0$, the first argument is an empty sequence.

**Algorithm 1**: Invoke "back($\epsilon, \{G_1, \dots, G_n\}$)" where the procedure "back" is defined as follows.

**Procedure** back($\langle G_{i_1}, \dots, G_{i_k}\rangle, S_0$):
**Step 1** Let $S$ be a local variable representing a set of products. Initiate with $S=S_0$ and proceed to Step 2.
**Step 2** If $\sum_{j=1}^k p_{i_j}>q_{\min}$, output $\{G_{i_1}, \dots, G_{i_k}\}$ and terminate. Otherwise proceed to Step 3.
**Step 3** If $S$ is empty, output the information saying "no solutions" and terminate if $k=0$, and return to the invoking procedure if $k>0$. If $S$ is not empty proceed to Step 4.
**Step 4** Choose one element of $S$, remove it from $S$, and add this element $G_{i_{k+1}}$ to the end of the sequence $\langle G_{i_1}, \dots, G_{i_k}\rangle$. Create the set of $G' (\in S)$ whose price $p'$ satisfies '$p'+\sum_{j=1}^{k+1} p_{i_j}<q_{\max}$'. Denote this set by a variable $S'$ that is different from $S$. Invoke "back($\langle G_{i_1}, \dots, G_{i_k}, G_{i_{k+1}}\rangle, S'$)" recursively and go back to Step 3.

Then solve the following questions.

(1) Suppose we execute Algorithm 1 for the four products $G_1, G_2, G_3, G_4$ whose prices are $p_1=1, p_2=2, p_3=3, p_4=4$ respectively and $q_{\min}=8, q_{\max}=10$. The following sequence represents an example of the arguments of the "back" procedure invocations.
$$(\epsilon, \{G_1, G_2, G_3, G_4\})\rightarrow(\langle G_4\rangle, \{G_1, G_2, G_3\})\rightarrow\dots$$
Write an example of the arguments of the "back" procedure invocations succeeding to the above ones in the same format in which the execution of a "back" procedure goes back from Step 4 to Step 3 at least one time.

(2) There are some techniques to execute Algorithm 1 efficiently by decreasing the number of invocations of the "back" procedure. One of them is to choose the element $G_{i_{k+1}}$ of $S$ whose price is the highest in Step 4. However, in some cases, this technique does not make the number of invocations the smallest. Show an example of such cases by describing the values of $n, p_i (i=1, \dots, n), q_{\min}, q_{\max}$ and the arguments of the "back" procedures along the invocations sequence in the same way as (1).

(3) Assume that we invoke "back($\langle G_{i_1}, \dots, G_{i_k}\rangle, S_0$)" for a sequence of products $\langle G_{i_1}, \dots, G_{i_k}\rangle$ and a set of products $S_0$, the number of the elements of $S_0$ is $l$, and $t_l$ is the maximum number of invocations of the "back" procedure during the execution of "back($\langle G_{i_1}, \dots, G_{i_k}\rangle, S_0$)" where the invocations include the invocation of "back($\langle G_{i_1}, \dots, G_{i_k}\rangle, S_0$)" itself. Then explain the reason why $t_l=1+\sum_{i=0}^{l-1} t_i$ if $l\ge1$.

(4) Describe the maximum number of invocations of the "back" procedures during the execution of Algorithm 1 for $n$ products $G_1, \dots, G_n$ ($n\ge2$) where the invocations include the invocation of "back($\epsilon, \{G_1, \dots, G_n\}$)" at the beginning of the execution.