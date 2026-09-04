---
sidebar_label: 2015年8月実施 専門科目I 問題2
tags:
  - Tokyo-University
  - Computer-Science.Formal-Languages.Deterministic-Finite-Automaton-Minimization
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2015年8月実施 専門科目I 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

设 $\mathcal A=(Q,\Sigma,\delta,q_0,F)$ 为 DFA。对 $Q$ 上的二元关系定义

$$
R_0=Q\times Q,\qquad R_{n+1}=\Phi(R_n),
$$

其中

$$
(q,q')\in\Phi(R)
\iff
\begin{cases}
q\in F\iff q'\in F,\\
(\delta(q,a),\delta(q',a))\in R & (\forall a\in\Sigma).
\end{cases}
$$

（1）对 $\Sigma=\{0,1\}$、$F=\{q_0,q_2\}$ 且转移如下的 DFA，求每个 $R_n$。

| 状态 | 输入 $0$ | 输入 $1$ |
|---|---|---|
| $q_0$ | $q_0$ | $q_1$ |
| $q_1$ | $q_1$ | $q_2$ |
| $q_2$ | $q_2$ | $q_1$ |

（2）利用 $\Phi$ 的单调性证明 $R_0\supseteq R_1\supseteq R_2\supseteq\cdots$。

（3）令 $R_\omega=\bigcap_{n\in\mathbb N}R_n$。判断该下降链是否必在有限步内稳定，并证明结论。

（4）将 $\delta$ 扩张为 $\delta^*:Q\times\Sigma^*\to Q$。证明：若 $(q,q')\in R_n$ 且 $n\ge1$，则对任意长度为 $n-1$ 的词 $w$，

$$
\delta^*(q,w)\in F\iff\delta^*(q',w)\in F.
$$

（5）令 $q\approx q'$ 表示从两状态出发接受相同语言。证明 $R_\omega\subseteq\approx$。

（6）证明反向包含关系 $\approx\subseteq R_\omega$。

## **Kai**

### (1)

$R_1$ 只区分“接受态”和“非接受态”，所以

$$
R_1=\{q_0,q_2\}^2\cup\{(q_1,q_1)\}.
$$

$q_0,q_2$ 在输入 $0$ 后仍分别到达 $q_0,q_2$，在输入 $1$ 后都到达 $q_1$，故二者在下一轮仍不被区分。因此

$$
\boxed{R_0=Q^2,\qquad R_n=\{q_0,q_2\}^2\cup\{(q_1,q_1)\}\quad(n\ge1).}
$$

### (2)

$R_1=\Phi(R_0)\subseteq R_0$。若 $R_n\subseteq R_{n-1}$，由 $\Phi$ 单调可得

$$
R_{n+1}=\Phi(R_n)\subseteq\Phi(R_{n-1})=R_n.
$$

归纳即得下降链。

### (3)

必在有限步内稳定。因为 $Q^2$ 只有 $|Q|^2$ 个有序对；若 $R_{n+1}\subsetneq R_n$，至少删除一个有序对。因此严格下降至多发生 $|Q|^2$ 次，随后存在 $N$ 使

$$
R_N=R_{N+1}=\cdots=R_\omega.
$$

### (4)

对 $n$ 归纳。$n=1$ 时 $w=\varepsilon$，结论正是 $R_1=\Phi(R_0)$ 对接受性的要求。

设命题对 $n$ 成立。若 $(q,q')\in R_{n+1}$，将任意 $|w|=n$ 的词写成 $w=av$。由定义

$$
(\delta(q,a),\delta(q',a))\in R_n.
$$

再对长度为 $n-1$ 的 $v$ 使用归纳假设，并利用
$\delta^*(q,av)=\delta^*(\delta(q,a),v)$，即得结论。

### (5)

若 $(q,q')\in R_\omega$，则它属于每个 $R_n$。对任意词 $w$，在（4）中取 $n=|w|+1$，便有

$$
\delta^*(q,w)\in F\iff\delta^*(q',w)\in F.
$$

故 $q\approx q'$，即 $R_\omega\subseteq\approx$。

### (6)

若 $q\approx q'$，取空词可知 $q,q'$ 的接受性相同；对任意 $a\in\Sigma$ 和 $w\in\Sigma^*$，

$$
\delta^*(\delta(q,a),w)=\delta^*(q,aw),
$$

故 $\delta(q,a)\approx\delta(q',a)$。因此 $\approx\subseteq\Phi(\approx)$。

又 $\approx\subseteq R_0$。若 $\approx\subseteq R_n$，利用单调性得到

$$
\approx\subseteq\Phi(\approx)\subseteq\Phi(R_n)=R_{n+1}.
$$

归纳知 $\approx\subseteq R_n$ 对所有 $n$ 成立，从而 $\approx\subseteq R_\omega$。
