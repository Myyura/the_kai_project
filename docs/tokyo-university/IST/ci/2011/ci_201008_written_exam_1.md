---
sidebar_label: 2010年8月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Backtracking
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2010年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

出典：[大学公式問題冊子の保存版](https://web.archive.org/web/20151118065628id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2010_8_ci_istmajor_ja.pdf)。
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

### 题目描述

有 $n$ 种互不相同的商品 $G_1,\ldots,G_n$（$n\ge2$），价格分别为 $p_1,\ldots,p_n$。从中选择互不重复的 $m$ 件商品 $G_{i_1},\ldots,G_{i_m}$（$2\le m\le n$）。给定正整数 $q_{\min}<q_{\max}$，且每个 $p_i<q_{\min}$，目标是找到组合使

$$
q_{\min}<\sum_{j=1}^{m}p_{i_j}<q_{\max}.
$$

算法 1 用回溯法求解。记 $\epsilon$ 为空序列；过程
$\operatorname{back}(\langle G_{i_1},\ldots,G_{i_k}\rangle,S_0)$
的第一个参数是当前候选解序列，第二个参数是还可加入的商品集合，$k$ 为当前序列长度，$k=0$ 时第一个参数为 $\epsilon$。

算法从 $\operatorname{back}(\epsilon,\{G_1,\ldots,G_n\})$ 开始。每次调用执行：

1. 令局部集合 $S=S_0$。
2. 若当前价格和 $\sum_{j=1}^{k}p_{i_j}>q_{\min}$，输出当前商品集合并结束。
3. 若 $S$ 为空：当 $k=0$ 时输出“无解”并结束；当 $k>0$ 时返回调用者。否则进入下一步。
4. 从 $S$ 中选择并删除一个元素 $G_{i_{k+1}}$，把它追加到当前序列；再从剩余的 $S$ 中取出所有满足

   $$
   p'+\sum_{j=1}^{k+1}p_{i_j}<q_{\max}
   $$

   的商品 $G'$，组成不同于 $S$ 的集合 $S'$。递归调用
   $\operatorname{back}(\langle G_{i_1},\ldots,G_{i_k},G_{i_{k+1}}\rangle,S')$，返回后回到第 3 步。

回答下列问题。

1. 对四件商品 $p_1=1,p_2=2,p_3=3,p_4=4$，取 $q_{\min}=8,q_{\max}=10$。已给调用序列开头

   $$
   (\epsilon,\{G_1,G_2,G_3,G_4\})\to
   (\langle G_4\rangle,\{G_1,G_2,G_3\})\to\cdots .
   $$

   按相同格式补出一种后续调用序列，且其中至少发生一次某次 `back` 从第 4 步递归返回第 3 步。
2. 第 4 步总选 $S$ 中价格最高的商品通常可减少调用次数，但不一定达到最少。给出一个反例：明确写出 $n$、所有 $p_i$、$q_{\min},q_{\max}$，并像第 1 问一样列出 `back` 的调用参数序列。
3. 若调用 $\operatorname{back}(\langle G_{i_1},\ldots,G_{i_k}\rangle,S_0)$ 时 $|S_0|=l$，定义 $t_l$ 为本次调用及其递归过程中 `back` 调用次数的最大值。说明当 $l\ge1$ 时为何

   $$
   t_l=1+\sum_{i=0}^{l-1}t_i.
   $$

4. 求算法 1 对 $n$ 件商品执行时 `back` 的最大调用次数，其中包括最初对空序列的调用。


## **Kai**

成功時の「停止」は探索全体の終了を意味する。一つの枝が失敗して戻るときは、親の列を元の長さに戻し、その親の局所集合 $S$ に残った候補を試す。

### (1)

例えば $G_4$ の次に $G_3$、その次に $G_1$ を選ぶ。呼出しの列は

$$
\begin{aligned}
&(\epsilon,\{G_1,G_2,G_3,G_4\})\\
\to{}&(\langle G_4\rangle,\{G_1,G_2,G_3\})\\
\to{}&(\langle G_4,G_3\rangle,\{G_1,G_2\})\\
\to{}&(\langle G_4,G_3,G_1\rangle,\varnothing)\\
\to{}&(\langle G_4,G_3,G_2\rangle,\varnothing).
\end{aligned}
$$

4番目の呼出しは合計8で $q_{\min}$ を超えず、追加候補もないので親へ戻る。このとき親がステップ4から3へ戻り、残った $G_2$ を選んで5番目の呼出しを行う。最後の合計は $4+3+2=9$ で $8<9<10$ を満たす。4番目で $G_2$ が候補から外れたのは、さらに加えると $4+3+1+2=10$ となり上限の厳密不等式を満たさないためである。上の最後の矢印には親への復帰を挟んでおり、5番目が4番目の子という意味ではない。

### (2)

$n=3$, $(p_1,p_2,p_3)=(6,5,4)$, $q_{\min}=8$, $q_{\max}=10$ とする。価格の高いものから選ぶと、

$$
\begin{aligned}
&(\epsilon,\{G_1,G_2,G_3\})\\
\to{}&(\langle G_1\rangle,\varnothing)\\
\to{}&(\langle G_2\rangle,\{G_3\})\\
\to{}&(\langle G_2,G_3\rangle,\varnothing)
\end{aligned}
$$

となり、4回の呼出しが必要である。$6+5=11$ と $6+4=10$ はどちらも上限未満ではないので、$G_1$ の枝では候補がなく失敗する。一方、最初から $G_2$ を選べば

$$
(\epsilon,\{G_1,G_2,G_3\})\to
(\langle G_2\rangle,\{G_3\})\to
(\langle G_2,G_3\rangle,\varnothing)
$$

の3回で成功する。各価格は $q_{\min}$ 未満であり、成功には少なくとも2商品と根を含む3回の呼出しが要るため、後者はこの例で最少である。

### (3)

$t_0=1$。$l$ 個の候補を持つ呼出しでは、自分自身を1回数える。親の局所集合から候補を一つずつ永久に取り除くので、各再帰呼出しへ渡せる候補数の上限は順に $l-1,l-2,\ldots,0$ となる。したがって総数は

$$t_l\le1+t_{l-1}+t_{l-2}+\cdots+t_0.$$

最大の場合には、価格上限による候補の除去も途中での成功停止も起こらず、各子が残った全候補を受け取る。この場合に等号を達成できるので、

$$\boxed{t_l=1+\sum_{i=0}^{l-1}t_i}.$$

これは特定の入力で常に等号になるという主張ではなく、入力と探索の全場合についての最大回数である。

### (4)

$l\ge2$ で前の式を引き算すると $t_l-t_{l-1}=t_{l-1}$、また $t_1=1+t_0=2$ だから、

$$\boxed{t_l=2^l,\qquad t_n=2^n}.$$

例えば相異なる $n$ 商品の価格を全て1、$q_{\min}=n$, $q_{\max}=n+1$ とすれば、どの部分集合も総額が $q_{\min}$ を超えず、追加候補は除去されない。全 $2^n$ 個の部分集合（空集合を含む）を探索して無解となり、この上界を実際に達成する。商品が相異なることは、価格も相異なることを意味しない。
