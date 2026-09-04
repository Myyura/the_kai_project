---
sidebar_label: 2015年8月実施 専門科目I 問題3
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Basics.Bayes-Theorem
  - Discrete-Mathematics.Combinatorics.Recurrence-Relation
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2015年8月実施 専門科目I 問題3

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

某基因有等位基因 $A,a$，个体基因型为 $AA,Aa,aa$ 之一；子代从父母各自的两条常染色体中等概率继承一条。

（1）父母基因型均为 $Aa$ 时，求子代为 $AA$ 的概率。

（2）已知父亲为 $Aa$、子代为 $aa$。母亲两条染色体上的等位基因相互独立地以概率 $2/3,1/3$ 取 $A,a$。求母亲最可能的基因型。

以下考虑足够大的随机交配种群。无世代重叠、迁移与突变，且同一对常染色体上的两个等位基因独立出现。第 $n$ 代出生后 $A,a$ 的频率分别为 $p_n,q_n$，其中 $p_n+q_n=1$，故 $AA,Aa,aa$ 的频率为 $p_n^2,2p_nq_n,q_n^2$。

（3）若 $AA,Aa,aa$ 存活至成年的概率（适合度）分别为 $1,1-s,1-2s$，用 $q_n,s$ 表示 $q_n-q_{n+1}$。

（4）若三种基因型适合度分别为 $1,1,0$，且 $q_0=1/100$，求使 $q_n\le1/10000$ 的最小 $n$。

## **Kai**

### (1)

父母各自传递 $A$ 的概率均为 $1/2$，故

$$
\boxed{\Pr(AA)=\frac14}.
$$

### (2)

母亲的先验概率为

$$
\Pr(AA)=\frac49,\qquad \Pr(Aa)=\frac49,\qquad \Pr(aa)=\frac19.
$$

在父亲已知为 $Aa$ 时，观测到子代 $aa$ 的似然对母亲 $AA,Aa,aa$ 分别为 $0,1/4,1/2$。因而后验权重为

$$
0:\frac19:\frac1{18}=0:2:1.
$$

所以母亲最可能的基因型是 $\boxed{Aa}$（后验概率为 $2/3$）。

### (3)

选择后的平均适合度为

$$
\bar w=p_n^2+2p_nq_n(1-s)+q_n^2(1-2s)=1-2sq_n.
$$

成年个体产生的配子中，等位基因 $a$ 的频率为

$$
q_{n+1}
=\frac{p_nq_n(1-s)+q_n^2(1-2s)}{\bar w}
=\frac{q_n(1-s-sq_n)}{1-2sq_n}.
$$

因此

$$
\boxed{q_n-q_{n+1}=\frac{s q_n(1-q_n)}{1-2s q_n}}.
$$

### (4)

只有 $AA,Aa$ 能繁殖，故

$$
q_{n+1}=\frac{p_nq_n}{p_n^2+2p_nq_n}
=\frac{q_n}{1+q_n}.
$$

于是

$$
\frac1{q_{n+1}}=\frac1{q_n}+1,\qquad
q_n=\frac1{100+n}.
$$

$q_n\le1/10000$ 等价于 $100+n\ge10000$，故最小值为

$$
\boxed{n=9900}.
$$
