---
sidebar_label: 2023年8月実施 専門科目 S-3
tags:
  - Kyoto-University
  - Data-Science-Artificial-Intelligence.Machine-Learning.Classification
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Fisher-Linear-Discriminant-Analysis
---
# 京都大学 情報学研究科 知能情報学専攻 2023年8月実施 専門科目 S-3

## **Author**
祭音Myyura, [itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2023_ist.pdf)
Suppose that samples are given in a 2-dimensional feature space as shown in Table 1.
The samples are denoted by $x_i = (x_{i1}, x_{i2})^T$, $(i = 1, \ldots, n)$, where $T$ represents the transpose of a vector or a matrix. Answer the following questions.

Table 1 — sample coordinates:

| Sample | $x_{i1}$ | $x_{i2}$ |
|---|---:|---:|
| $x_1$ | -1 | 4 |
| $x_2$ | 1 | 1 |
| $x_3$ | 0 | 8 |
| $x_4$ | 4 | 2 |
| $x_5$ | -2 | 6 |
| $x_6$ | 4 | 6 |
| $x_7$ (new sample) | 0 | 2 |


(1) Suppose that a classification of the samples in Table 1 (a) is given by  

$$
   \text{Class}(x_i) =  
   \begin{cases}  
   C_1 & (i = 1, 3, 5) \\  
   C_2 & (i = 2, 4, 6)  
   \end{cases}  
$$

where $C_1$ and $C_2$ represent two classes.
Find the linear classifier function that classifies a new sample $x_j$ into the class whose center is closer to the sample in Euclidean distance than the other class’s center.

(2) Suppose that another classification of the samples in Table 1 (a) is given by  

$$
   \text{Class}(x_i) =  
   \begin{cases}  
   C_3 & (i = 3, 5, 6) \\  
   C_4 & (i = 1, 2, 4)  
   \end{cases}  
$$

where $C_3$ and $C_4$ represent two classes.
Explain how we can compare the discriminability of the classifications given in (1) and (2) by using the within-class variance concerning the distribution of the samples within a class and the between-class variance concerning the distribution of the classes.

(3) For each class given in (1), give the formula for calculating Mahalanobis distance for $x_i$.

(4) Explain which class given in (1) is suitable for the sample in Table 1 (b). 
The assumption on the sample distribution required for the discussion must be clearly stated.

### 题目描述

题图表 1 给出二维样本
$x_i=(x_{i1},x_{i2})^\top$（$i=1,\ldots,n$）：

样本坐标见上方 Table 1。

1. 对表 1(a) 的分类
   $C_1=\{x_1,x_3,x_5\}$、
   $C_2=\{x_2,x_4,x_6\}$，求线性分类函数：把新样本分到 Euclidean 距离更近的类中心。
2. 另有分类
   $C_3=\{x_3,x_5,x_6\}$、
   $C_4=\{x_1,x_2,x_4\}$。说明如何用类内方差和类间方差比较第 1 问与该分类的可分性。
3. 对第 1 问的每一类，写出计算样本 $x_i$ 的 Mahalanobis 距离的公式。
4. 说明表 1(b) 的样本更适合第 1 问中的哪一类，并明确说明讨论所需的样本分布假设。

## **Kai**
### (1)
Let $c_1$ and $c_2$ denote the center of classes $C_1$ and $C_2$, respectively. Then we have

$$
\begin{aligned}
\begin{cases}
\displaystyle
c_{1} = \left(\frac{-1+0-2}{3},\frac{4+8+6}{3}\right) =(-1,6)\\
\displaystyle
c_{2} = \left(\frac{1+4+4}{3},\frac{1+2+6}{3}\right) =(3,3)
\end{cases}
\end{aligned}
$$

Let the point $(x,y)$ be where the Euclidean distance from $c_1$ and $c_2$ are equal. Then we define a linear classifier with the decision boundary as follows:

$$
(x+1)^{2}+(y-6)^{2} = (x-3)^{2}+(y-3)^{2}
$$

i.e.,

$$
8x-6y+19 = 0
$$

The classifier is

$$
f((x,y))=\begin{cases}
C_1,&8x-6y+19<0,\\C_2,&8x-6y+19>0.
\end{cases}
$$

On the boundary $8x-6y+19=0$, the two distances tie; either class may be selected by a fixed tie rule.

### (2)

Let $\bar{c}$ denote the mean of all the data

$$
\bar{c} = \left(1,\frac{9}{2}\right).
$$

Since a larger ratio of between-class variance (sum of squared class center-overall center distances) to within-class variance (sum of squared data-class center distances) is considered a better classification, we compare the ratio $r_1$ and $r_2$ of Q1 and Q2.

Let $c_i$ denote the center of class $C_i$. Then we have

$$
r_1 = \frac{\sum_{i=1,2}(c_{i} - \bar{c})^{T}(c_{i}-\bar{c})}{\sum_{i=1,2}\sum_{x \in C_{i}}(x-c_{i})^{T}(x-c_{i})} = \frac{12.5}{30} \approx 0.416
$$

Similarly,

$$
r_2 = \frac{173/18}{116/3} \approx 0.248
$$

Both classes have three samples, so weighting the numerator by class sizes multiplies both ratios by the same factor $3$. Since $r_1>r_2$, the grouping in Q1 has greater separability under this criterion.

### (3)
For $j=1,2$, let $\Sigma_j$ denote the covariance matrix of $C_j$. Then, the Mahalanobis distance for $x_i$ corresponding to $C_j$ is

$$
L_{j} = \sqrt{(x_{i}-c_{j})^{T}\Sigma_{j}^{-1}(x_{i}-c_{j})}
$$

Using the unbiased sample covariance (denominator $3-1=2$), we obtain

$$
\Sigma_{1} =
\begin{pmatrix}
1 & 1\\
1 & 4
\end{pmatrix},\quad
\Sigma_{2} =
\begin{pmatrix}
3 & 3\\
3 & 7
\end{pmatrix}
$$

and by the inversion

$$
\begin{pmatrix}
a&b\\c&d
\end{pmatrix}^{-1}=\frac1{ad-bc}
\begin{pmatrix}
d&-b\\-c&a
\end{pmatrix},
$$

$$
\Sigma_1^{-1}=\begin{pmatrix}\frac43&-\frac13\\-\frac13&\frac13\end{pmatrix},\qquad

\Sigma_2^{-1}=\begin{pmatrix}\frac7{12}&-\frac14\\-\frac14&\frac14\end{pmatrix}.
$$

### (4)

Assume equal class priors and class-conditional multivariate normal distributions $N(c_j,\Sigma_j)$. The negative log-likelihood, up to a common constant, is

$$
L_j^2+\log|\Sigma_j|.
$$

Following the formula given in Q3, the Mahalanobis distances $L_1$ and $L_2$ for $x_7$ are

$$
\begin{aligned}
    L_1 = \sqrt{28\over 3}>2= L_2.
\end{aligned}
$$

Moreover, $|\Sigma_1|=3$ and $|\Sigma_2|=12$, so

$$
L_1^2+\log|\Sigma_1|=\frac{28}{3}+\log3
>4+\log12=L_2^2+\log|\Sigma_2|.
$$

Hence class $C_2$ is suitable for $x_7$.
