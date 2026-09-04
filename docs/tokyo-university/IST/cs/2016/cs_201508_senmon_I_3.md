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

Genes, i.e., genetic information of an organism, are contained largely in the autosomal chromosomes in its cells. In a cell, a pair is formed by one autosomal chromosome derived from the father, and one derived from the mother. A cell in an organism has a constant number of such pairs of autosomal chromosomes. In a pair of autosomal chromosomes, the origin of each autosomal chromosome (that is, whether it is derived from the father or from the mother) does not cause any difference in the function of the genes.

When organisms procreate, one autosomal chromosome from the father's pair is randomly chosen (with equal probabilities) and is delivered to the child. The same occurs from the mother to the child; and the resulting two autosomal chromosomes form the pair of the child.

Let us now imagine a species, each member of which has a certain autosomal chromosome that includes a certain gene that is either of the type A or of the type a. These types are called alleles in genetics. Let us focus on this specific gene in what follows.

It follows that genotypes, i.e., possible patterns of the gene of each member of the species, are the following three: two A's; one A and one a; and two a's.

Answer the following questions.

(1) Give the probability with which the genotype of a child is AA, assuming that the genotypes of its parents are both Aa.

(2) Assume that the genotype of a child is aa and that of its father is Aa. Assume further that, on each of the two autosomal chromosomes of the mother, the alleles A and a appear independently from each other, with the probabilities $2/3$ and $1/3$, respectively. Give the genotype of the mother that is most likely.

Consider a random mating population that is large enough, in which the mating between a male and a female occurs randomly. Suppose that there is no overlap between different generations, no migration, or no mutation, in the population. Suppose also that an allele (A or a) appears independently from each other in a pair of autosomal chromosomes, in each generation (including the 0-th one). Let us express the frequencies of having alleles A and a after the birth of the $n$-th generation by $p_n$ and $q_n$, respectively. Note here that $p_n+q_n=1$. It follows that the frequencies of having the three genotypes—AA, Aa and aa—are $p_n^2$, $2p_nq_n$, and $q_n^2$, respectively.

Answer the following questions.

(3) Consider a situation in which having the allele a is disadvantageous in survival. For each of the three genotypes AA, Aa, and aa, let us define the probability of survival until an organism becomes adult and procreates (the probability is called fitness) by $1$, $1-s$, and $1-2s$, respectively.

Concerning the frequency $q_{n+1}$ of having the allele a after the birth of the $(n+1)$-th generation, express $q_n-q_{n+1}$ using $q_n$ and $s$.

(4) For each of the genotypes AA, Aa, and aa, let their fitness be $1$, $1$, and $0$, respectively.
Assume that the frequency of the allele a is $1/100$ when the 0-th generation is born. Give the minimum of $n$ such that the frequency of the allele a is no greater than $1/10000$ after the $n$-th generation is born.

### 题目描述

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
