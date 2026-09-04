---
sidebar_label: 2016年8月実施 専門科目II 問題2
tags:
  - Tokyo-University
  - Discrete-Mathematics.Set-Theory.Binary-Relations
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2016年8月実施 専門科目II 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
We say that a binary relation $\mathcal R\subseteq S\times S$ on a set $S$ satisfies the *diamond property* if the following condition holds:

$$
\forall x,y,z\in S.\ (x\mathcal Ry\land x\mathcal Rz\land y\ne z
\Rightarrow\exists w\in S.\ (y\mathcal Rw\land z\mathcal Rw)).
$$

A binary relation $\mathcal R$ on $S$ is said to satisfy *confluence* if the reflexive and transitive closure $\mathcal R^*$ of the binary relation $\mathcal R$ (i.e., $\mathcal R^*$ is the least relation such that (i) $\mathcal R\subseteq\mathcal R^*$, (ii) $\forall x\in S.\ (x\mathcal R^*x)$, (iii) $\forall x,y,z\in S.\ (x\mathcal R^*y\land y\mathcal R^*z\Rightarrow x\mathcal R^*z)$) satisfies the diamond property.

A binary relation $\mathcal R$ on $S$ is said to satisfy *weak confluence* if the following condition holds:

$$
\forall x,y,z\in S.\ (x\mathcal Ry\land x\mathcal Rz
\Rightarrow\exists w\in S.\ (y\mathcal R^*w\land z\mathcal R^*w)).
$$

For example, $\mathcal R_1=\{(a,b),(a,c),(b,d),(c,e),(d,e)\}$ satisfies confluence and weak confluence, but does not satisfy the diamond property. Answer the following questions.

(1) Give an example of a binary relation on the set $\{a,b,c,d\}$ that satisfies weak confluence but not confluence.

(2) Prove that, for every set $S$ and every binary relation $\mathcal R$ on $S$, if $\mathcal R$ satisfies the diamond property, then $\mathcal R$ also satisfies confluence.

(3) Prove that, for every set $S$ and every binary relation $\mathcal R$ on $S$, if $\mathcal R$ satisfies weak confluence and also if there is no infinite sequence $x_0\mathcal Rx_1\mathcal Rx_2\mathcal R\cdots$, then $\mathcal R$ satisfies confluence.

(4) Prove that, for every binary relation $\mathcal R$ on the set $\{a,b,c\}$, if $\mathcal R$ satisfies weak confluence, $\mathcal R$ also satisfies confluence.

### 题目描述

设 $R\subseteq S\times S$ 为二元关系，$R^*$ 为其自反传递闭包，即满足 $R\subseteq R^*$、对所有 $x\in S$ 有 $xR^*x$，且对所有 $x,y,z\in S$ 有 $xR^*y\land yR^*z\Rightarrow xR^*z$ 的最小关系。

- 若 $xRy,xRz,y\ne z$ 时总存在 $w$ 使 $yRw,zRw$，则称 $R$ 有**菱形性质**；
- 若 $R^*$ 有菱形性质，则称 $R$ 有**汇合性**；
- 若 $xRy,xRz$ 时总存在 $w$ 使 $yR^*w,zR^*w$，则称 $R$ 有**弱汇合性**。

例如，$R_1=\{(a,b),(a,c),(b,d),(c,e),(d,e)\}$ 满足汇合性和弱汇合性，但不满足菱形性质。

（1）在 $S=\{a,b,c,d\}$ 上给出一个弱汇合但不汇合的关系。

（2）证明有菱形性质的关系必汇合。

（3）证明：若 $R$ 弱汇合，且不存在无限链 $x_0Rx_1Rx_2R\cdots$，则 $R$ 汇合。

（4）证明：在 $S=\{a,b,c\}$ 上，弱汇合关系必汇合。

## **Kai**
### (1)
取

$$
R=\{(a,b),(a,c),(b,a),(b,d)\}.
$$

在 $a$ 处的分叉 $aRb,aRc$ 可在 $c$ 汇合，因为 $bRaRc$；在 $b$ 处的分叉 $bRa,bRd$ 可在 $d$ 汇合，因为 $aRbRd$。故 $R$ 弱汇合。

但 $aR^*c$ 且 $aR^*d$，而 $c,d$ 均无后继，不能共同到达同一点，所以 $R$ 不汇合。

### (2)
先证“单步对多步”引理：若 $xRy$ 且 $xR^*z$，则 $y,z$ 可经 $R^*$ 汇合。对 $xR^*z$ 的步数归纳。零步时取公共后继 $y$；正步时写成 $xRz_1R^*z$。若 $y=z_1$ 显然，否则由菱形性质存在 $u$ 使 $yRu,z_1Ru$，再对 $z_1Ru$ 与 $z_1R^*z$ 使用归纳假设即可。

现对 $xR^*y$ 的步数归纳。给定 $xR^*y,xR^*z$，零步情形显然；正步时写成 $xRx_1R^*y$。由上述引理，$x_1$ 与 $z$ 可汇合于某个 $u$。第一条路径 $x_1R^*y$ 的长度已减少，故可对 $x_1R^*y,x_1R^*u$ 使用归纳假设，使 $y,u$ 汇合。又因 $zR^*u$，所以 $y,z$ 也汇合。故 $R^*$ 有菱形性质，$R$ 汇合。

### (3)
不存在无限链，故“是 $x$ 的真后继”给出良基次序。对起点 $x$ 作良基归纳。设

$$
xRx_1R^*y,\qquad xRx_2R^*z.
$$

若 $x_1=x_2$，直接在真后继 $x_1$ 处使用归纳假设。否则由弱汇合性，有 $u$ 使
$x_1R^*u,x_2R^*u$。分别在 $x_1,x_2$ 处使用归纳假设，得到

$$
yR^*p,\ uR^*p,\qquad zR^*q,\ uR^*q.
$$

再在 $u$ 处使用归纳假设，使 $p,q$ 汇合，于是 $y,z$ 汇合。若某条路径为零步则结论直接成立。故 $R$ 汇合。这就是 Newman 引理。

### (4)
删去自环不改变 $R^*$，也不影响不同后继之间的弱汇合性。

若删去自环后无有向环，则不存在无限链，由（3）知 $R$ 汇合。若存在非平凡强连通分量，则因 $|S|=3$，该分量大小只能为 $2$ 或 $3$：

- 大小为 $3$ 时，所有元素互相可达，任意两条分支均可汇合；
- 大小为 $2$ 时，记该分量为 $C$，余下元素为 $d$。缩点图无环，所以 $C,d$ 之间至多有一个方向。若无边，各分支留在同一强连通分量内；若 $C\to d$，从 $C$ 出发的所有分支可在 $d$ 汇合；若 $d\to C$，从 $d$ 出发的所有分支可在 $C$ 中汇合。

各情形均有汇合性。
