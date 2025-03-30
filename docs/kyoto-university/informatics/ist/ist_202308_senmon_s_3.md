---
sidebar_label: "2023年8月実施 専門科目 S-3"
sidebar_position: 38
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2023年8月実施 専門科目 S-3

## **Author**
祭音Myyura

## **Description** 
Suppose that samples are given in a 2-dimensional feature space as shown in Table 1.
The samples are denoted by $x_i = (x_{i1}, x_{i2})^T$, $(i = 1, \ldots, n)$, where $T$ represents the transpose of a vector or a matrix. Answer the following questions.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist_202308_senmon_s_3_p1.png" width="280" height="150" alt=""/>
</figure>

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

## **Kai**
### (1)
Let $c_1$ and $c_2$ denote the center of classes $C_1$ and $C_2$, respectively. Then we have

$$
\begin{aligned}
\begin{cases}
\displaystyle
c_{1} = \left(\frac{-1+0-2}{3},\frac{4+8+6}{3}\right) =(-1,6)\\[0.7em]
\displaystyle
c_{2} = \left(\frac{1+4+4}{3},\frac{1+2+6}{3}\right) =(3,3)
\end{cases}
\end{aligned}
$$

Let the point $(x,y)$ be where the Euclidean distance from $c_1$ and $c_2$ are equal. Then we define a linear classifier as follows:

$$
(x+1)^{2}+(y-6)^{2} = (x-3)^{2}+(y-3)^{2}
$$

i.e.,

$$
8x-6y+19 = 0
$$

### (2)
Let $\bar{c}$ denote the mean of all the data

$$
\bar{c} = \left(1,\frac{9}{2}\right).
$$

Since a larger ratio of between-class variance to within-class variance is considered a better classification, we compare the ratio $r_1$ and $r_2$ of Q1 and Q2.

Let $c_i$ denote the center of class $C_i$. Then we have

$$
r_1 = \frac{\sum_{i=1,2}(c_{i} - \bar{c})^{T}(c_{i}-\bar{c})}{\sum_{i=1,2}\sum_{x \in C_{i}}(x-c_{i})^{T}(x-c_{i})} = \frac{12.5}{30} \approx 0.416
$$

Similarly,

$$
r_2 = \frac{173/18}{116/3} \approx 0.248
$$

Since $r_1 > r_2$, the classifier in Q1 is better than Q2.

### (3)
For $j=1,2$, let $\Sigma_j$ denote the covariance matrix of $C_j$. Then, the Mahalanobis distance for $x_i$ corresponds to $C_j$ is

$$
L_{j} = (x_{i}-c_{j})^{T}\Sigma_{j}^{-1}(x_{i}-c_{j})
$$

where

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

### (4)
Assume that each sample follows a multivariate normal distribution.
Based on the form of the probability density function of the multivariate normal distribution, it is better to classify the sample into the class with the smaller Mahalanobis distance calculated using the method in Q3.

Following the formula given in Q3, the Mahalanobis distances $L_1$ and $L_2$ for $x_7$ are

$$
\begin{aligned}
    L_1 \approx 9.33, \quad L_2 \approx 3.99
\end{aligned}
$$

Hence class $C_2$ is suitable for $x_7$.
