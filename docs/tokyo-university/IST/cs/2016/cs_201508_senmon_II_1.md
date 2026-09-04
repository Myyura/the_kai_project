---
sidebar_label: 2015年8月実施 専門科目II 問題1
tags:
  - Tokyo-University
  - Data-Science-Artificial-Intelligence.Machine-Learning.Nearest-Centroid-Classifier
  - Data-Science-Artificial-Intelligence.Machine-Learning.Perceptron
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2015年8月実施 専門科目II 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

Consider the pattern recognition problem of classifying a $d$-dimensional real vectorial pattern $x\in\mathbb R^d$ into one of the two classes $y=+1,-1$. For training a classifier, suppose that $n$ training samples

$$
\{(x_i,y_i)\mid x_i\in\mathbb R^d,\ y_i\in\{+1,-1\},\ i=1,\ldots,n\}
$$

are provided, where $(x_i,y_i)$ means that the pattern $x_i$ belongs to the class $y_i$.

Answer the following questions.

(1) Among the $n$ training samples, let $n_+$ and $n_-$ be the numbers of patterns in the classes $+1$ and $-1$, respectively. Find the mean vector $c_+$ of the $n_+$ patterns in the class $+1$, and the mean vector $c_-$ of the $n_-$ patterns in the class $-1$.

(2) Consider the classifier that assigns a sample $x$ to the class $+1$ if $\|x-c_+\|\lt\|x-c_-\|$, and to the class $-1$ if $\|x-c_+\|>\|x-c_-\|$. Here $\|\cdot\|$ denotes the Euclidean norm. Give an equation for the boundary between: the region to which the patterns classified into the class $+1$ belong; and the region to which the patterns classified into the class $-1$ belong.

For a parameter $w\in\mathbb R^d$, consider the linear classifier that assigns a sample $x$ to the class $+1$ if $w^\mathsf Tx>0$, and to the class $-1$ if $w^\mathsf Tx\lt0$. Here $(\cdot)^\mathsf T$ denotes the transpose. Let us call the value $y_iw^\mathsf Tx_i$ the margin for the $i$-th training sample $(x_i,y_i)$. Then the condition for this linear classifier to correctly classify the pattern $x_i$ into the class $y_i$ can be expressed, in terms of the margin, as $y_iw^\mathsf Tx_i>0$.

Answer the following questions.

(3) When the linear classifier shown above does not correctly classify the pattern $x_i$ into the class $y_i$, let us update the parameter $w$ by

$$
w_{\mathrm{new}}=w+y_ix_i.
$$

Prove that this parameter update does not decrease the margin for the $i$-th training sample $(x_i,y_i)$.

(5) When the linear classifier shown above does not correctly classify the pattern $x_i$ into the class $y_i$, let us update the parameter $w$ by

$$
w_{\mathrm{new}}
=\mathop{\arg\min}_{w'}
\left[\|w'-w\|^2+(1-y_iw'^\mathsf Tx_i)^2\right].
$$

Solve this optimization problem and obtain $w_{\mathrm{new}}$ explicitly.

### 题目描述

考虑把 $d$ 维实向量 $x\in\mathbb R^d$ 分为 $y=+1,-1$ 两类的模式识别问题。给定训练样本

$$
\{(x_i,y_i)\mid x_i\in\mathbb R^d, y_i\in\{+1,-1\}, i=1,\ldots,n\}.
$$

（1）设两类样本数为 $n_+,n_-$，求两类的均值向量 $c_+,c_-$。

（2）最近均值分类器在 $\|x-c_+\|\lt\|x-c_-\|$ 时判为 $+1$，反之判为 $-1$。求分类边界以及两侧区域。

线性分类器由 $w\in\mathbb R^d$ 给出：$w^\mathsf Tx>0$ 判为 $+1$，$w^\mathsf Tx\lt0$ 判为 $-1$。样本 $(x_i,y_i)$ 的间隔为 $y_iw^\mathsf Tx_i$。

（3）样本 $x_i$ 被误分类时，令 $w_{\rm new}=w+y_ix_i$。证明该更新不会减小该样本的间隔。

（4）样本 $x_i$ 被误分类时，求下列优化问题的显式解：

$$
w_{\rm new}=\mathop{\arg\min}_{w'}
\left[\|w'-w\|^2+(1-y_iw'^\mathsf Tx_i)^2\right].
$$

## **Kai**

### (1)

$$
\boxed{
c_+=\frac1{n_+}\sum_{i:y_i=+1}x_i,
\qquad
c_-=\frac1{n_-}\sum_{i:y_i=-1}x_i.}
$$

### (2)

两距离平方之差为

$$
\|x-c_-\|^2-\|x-c_+\|^2
=2(c_+-c_-)^\mathsf Tx+\|c_-\|^2-\|c_+\|^2.
$$

故边界超平面为

$$
\boxed{2(c_+-c_-)^\mathsf Tx=\|c_+\|^2-\|c_-\|^2.}
$$

左边大于右边的一侧判为 $+1$，小于的一侧判为 $-1$。

### (3)

更新后的间隔为

$$
y_iw_{\rm new}^\mathsf Tx_i
=y_iw^\mathsf Tx_i+y_i^2\|x_i\|^2
=y_iw^\mathsf Tx_i+\|x_i\|^2.
$$

因此间隔增加 $\|x_i\|^2\ge0$，不会减小。

### (4)

目标函数严格凸。令其梯度为零，得到

$$
w'-w=y_ix_i(1-y_iw'^\mathsf Tx_i).
$$

记 $m_i=y_iw^\mathsf Tx_i$、$r_i=\|x_i\|^2$。在上式左乘 $y_ix_i^\mathsf T$ 并整理，可得

$$
1-y_iw'^\mathsf Tx_i=\frac{1-m_i}{1+r_i}.
$$

所以唯一最优解为

$$
\boxed{
w_{\rm new}=w+
\frac{1-y_iw^\mathsf Tx_i}{1+\|x_i\|^2}\,y_ix_i.}
$$
