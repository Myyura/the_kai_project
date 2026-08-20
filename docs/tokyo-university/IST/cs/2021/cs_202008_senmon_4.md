---
sidebar_label: "2020年8月実施 専門科目 問題4"
tags:
  - Tokyo-University
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Ordinary-Least-Squares-Normal-Equation-and-Singular-Design
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Expected-Ordinary-Least-Squares-Loss-and-Variance-Trace
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Ridge-Regularization-for-Singular-Design
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2020年8月実施 専門科目 問題4

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/), 祭音Myyura

## **Description**
Let $\mathbb{R}$ be the set of real numbers. Denote by $\mathbf{T}$ the transposition operator of a vector and a matrix. When $\mathbf{w} = (w_1, w_2, \ldots, w_d)^\mathbf{T} \in \mathbb{R}^d$ is a $d$-dimensional column vector, the norm $\|\mathbf{w}\|_2$ is defined by $\|\mathbf{w}\|_2 = \sqrt{w_1^2 + w_2^2 + \ldots + w_d^2}$. Define the inner product of two column vectors $\mathbf{x}_1, \mathbf{x}_2 \in \mathbb{R}^d$ as $\mathbf{x}_1^\mathbf{T} \mathbf{x}_2 \in \mathbb{R}$. For a $d \times d$ matrix $\mathbf{A} \in \mathbb{R}^{d \times d}$, define $\|\mathbf{w}\|_{\mathbf{A}} = \sqrt{\mathbf{w}^\mathbf{T} \mathbf{A} \mathbf{w}}$. Let $\mathbf{tr}(\mathbf{B})$ be the trace of the matrix $\mathbf{B}$.

Consider the problem of predicting a real-valued label $y \in \mathbb{R}$ from a $d$-dimensional real vector $\mathbf{x} \in \mathbb{R}^d$. For learning a predictor, suppose that $n$ training samples

$$
\{(\mathbf{x}_i, y_i) \mid \mathbf{x}_i \in \mathbb{R}^d, y_i \in \mathbb{R}, i = 1, 2, \ldots, n\}
$$

are given where $(\mathbf{x}_i, y_i)$ means that $y_i$ is the real-valued label of $\mathbf{x}_i$. In addition, by using a $d$-dimensional vector $\mathbf{w}^* \in \mathbb{R}^d$ and observational noise $\epsilon_i (i = 1, 2, \ldots, n)$ that is independent and identically distributed, assume the data generation process as

$$
y_i = \mathbf{w}^{*\mathbf{T}} \mathbf{x}_i + \epsilon_i \quad (i = 1, 2, \ldots, n),
$$

where the expectation $\mathbb{E}[\epsilon_i] = 0$ and variance $\mathbb{V}[\epsilon_i] = \sigma^2 > 0 \quad (i = 1, \ldots, n)$. Let us introduce the symbols

$$
\mathbf{X} = [\mathbf{x}_1, \ldots, \mathbf{x}_n]^\mathbf{T} \in \mathbb{R}^{n \times d}, \quad \mathbf{Y} = [y_1, \ldots, y_n]^\mathbf{T} \in \mathbb{R}^n, \quad \mathbf{\epsilon} = [\epsilon_1, \ldots, \epsilon_n]^\mathbf{T} \in \mathbb{R}^n.
$$

We also use the symbol $\mathbf{\Phi} = \frac{1}{n} \mathbf{X}^\mathbf{T} \mathbf{X} \in \mathbb{R}^{d \times d}$ where $\mathbf{\Phi}$ is assumed to be a regular matrix. The expectation over the observational noises is expressed by $\mathbb{E}_{\mathbf{\epsilon}}[\cdot]$.

We formulate the learning of a predictor $f(\mathbf{x}) = \hat{\mathbf{w}}^\mathbf{T} \mathbf{x}$ as the following optimization problem.

$$
\mathbf{\hat{w}} = \mathop{\arg\min}\limits_{\mathbf{w} \in \mathbb{R}^d} L(\mathbf{w})
$$

$$
L(\mathbf{w}) = \frac{1}{2n} \sum_{i=1}^{n} (y_i - \mathbf{w}^\mathbf{T} \mathbf{x}_i)^2 = \frac{1}{2n} \|\mathbf{Y} - \mathbf{Xw}\|_2^2.
$$

Answer the following questions. Describe not only an answer but also the derivation process.

(1) Express $\mathbf{\hat{w}}$ using $\mathbf{X}, \mathbf{Y}, \mathbf{\Phi}$, and $n$.

(2) Suppose we wish to express $\mathbb{E}_{\mathbf{\epsilon}}[L(\mathbf{w})]$ in the form of $\frac{1}{2} \|\mathbf{w} - \mathbf{w}^*\|_{\mathbf{A}}^2 + b$. Express the matrix $\mathbf{A} \in \mathbb{R}^{d \times d}$ and the positive real number $b > 0$ using $\mathbf{\Phi}$ and $\sigma^2$.

(3) Suppose we wish to express $\mathbb{E}_{\mathbf{\epsilon}}[L(\hat{\mathbf{w}})] - \mathbb{E}_{\mathbf{\epsilon}}[L(\mathbf{w^*})]$ in the form of $\frac{\sigma^2}{2n} \mathbf{tr}(\mathbf{B})$. Express the matrix $\mathbf{B} \in \mathbb{R}^{d \times d}$ using the matrix $\mathbf{X}$.

(4) Explain what problem arises when $\mathbf{\Phi}$ is not a regular matrix and suggest a way to remedy the problem.

### 题目描述

设训练样本为
$\{(\boldsymbol{x}_i,y_i)\}_{i=1}^n$，
$\boldsymbol{x}_i\in\mathbb R^d$、$y_i\in\mathbb R$，数据由

$$
y_i=\boldsymbol{w}^{*\mathsf T}\boldsymbol{x}_i+\varepsilon_i
$$

生成，其中噪声 $\varepsilon_i$ 独立同分布，均值为 $0$、方差为
$\sigma^2>0$。记

$$
X=[\boldsymbol{x}_1,\ldots,\boldsymbol{x}_n]^{\mathsf T},\quad
Y=[y_1,\ldots,y_n]^{\mathsf T},\quad
\boldsymbol{\varepsilon}=[\varepsilon_1,\ldots,\varepsilon_n]^{\mathsf T},
$$

并令 $\Phi=X^{\mathsf T}X/n$，先假定 $\Phi$ 可逆。采用线性预测器
$f(\boldsymbol{x})=\widehat{\boldsymbol{w}}^{\mathsf T}\boldsymbol{x}$，通过

$$
\widehat{\boldsymbol{w}}
=\mathop{\arg\min}_{\boldsymbol{w}\in\mathbb R^d}L(\boldsymbol{w}),
\qquad
L(\boldsymbol{w})
=\frac1{2n}\|Y-X\boldsymbol{w}\|_2^2
$$

学习。以 $\mathbb E_{\boldsymbol{\varepsilon}}$ 表示对观测噪声取期望，
$\|w\|_A=\sqrt{w^{\mathsf T}Aw}$，$\operatorname{tr}$ 表示迹。各问除答案外还须给出推导。

（1）用 $X,Y,\Phi,n$ 表示 $\widehat{\boldsymbol{w}}$。

（2）将期望损失写成

$$
\mathbb E_{\boldsymbol{\varepsilon}}[L(\boldsymbol{w})]
=\frac12\|\boldsymbol{w}-\boldsymbol{w}^*\|_A^2+b,
$$

用 $\Phi,\sigma^2$ 表示 $A\in\mathbb R^{d\times d}$ 和正数 $b$。

（3）将

$$
\mathbb E_{\boldsymbol{\varepsilon}}[L(\widehat{\boldsymbol{w}})]
-\mathbb E_{\boldsymbol{\varepsilon}}[L(\boldsymbol{w}^*)]
=\frac{\sigma^2}{2n}\operatorname{tr}(B)
$$

中的 $B\in\mathbb R^{d\times d}$ 用 $X$ 表示。

（4）说明当 $\Phi$ 不可逆时会出现什么问题，并提出一种补救方法。

## **Kai**
### (1)

To find the optimal weight vector $\mathbf{\hat{w}}$, we minimize the loss function $L(\mathbf{w})$ defined as:

$$
L(\mathbf{w}) = \frac{1}{2n} \sum_{i=1}^{n} (y_i - \mathbf{w}^\mathbf{T} \mathbf{x}_i)^2 = \frac{1}{2n} \|\mathbf{Y} - \mathbf{Xw}\|_2^2.
$$

To minimize $L(\mathbf{w})$, we take the derivative of $L(\mathbf{w})$ with respect to $\mathbf{w}$ and set it to zero:

$$
\nabla L(\mathbf{w}) = -\frac{1}{n} \mathbf{X}^\mathbf{T} (\mathbf{Y} - \mathbf{Xw}) = 0.
$$

Solving for $\mathbf{w}$ gives:

$$
\mathbf{X}^\mathbf{T} \mathbf{Y} = \mathbf{X}^\mathbf{T} \mathbf{X} \mathbf{w}.
$$

Thus, the optimal weight vector $\mathbf{\hat{w}}$ is:

$$
\mathbf{\hat{w}} = (\mathbf{X}^\mathbf{T} \mathbf{X})^{-1} \mathbf{X}^\mathbf{T} \mathbf{Y} = \mathbf{\Phi}^{-1} \left( \frac{1}{n} \mathbf{X}^\mathbf{T} \mathbf{Y} \right).
$$

### (2)

To express $\mathbb{E}_{\mathbf{\epsilon}}[L(\mathbf{w})]$, we first express $L(\mathbf{w})$:

$$
L(\mathbf{w}) = \frac{1}{2n} (\mathbf{Y} - \mathbf{Xw})^\mathbf{T} (\mathbf{Y} - \mathbf{Xw}).
$$

Using the data generation model $y_i = \mathbf{w}^{*\mathbf{T}} \mathbf{x}_i + \epsilon_i$, we can write $\mathbf{Y} = \mathbf{X} \mathbf{w}^* + \mathbf{\epsilon}$. Then:

$$
\mathbb{E}_{\mathbf{\epsilon}}[L(\mathbf{w})] = \frac{1}{2n} \mathbb{E}_{\mathbf{\epsilon}}\left[(\mathbf{X} \mathbf{w}^* + \mathbf{\epsilon} - \mathbf{X} \mathbf{w})^\mathbf{T} (\mathbf{X} \mathbf{w}^* + \mathbf{\epsilon} - \mathbf{X} \mathbf{w})\right].
$$

Expanding and using the properties of expectation:

$$
\mathbb{E}_{\mathbf{\epsilon}}[L(\mathbf{w})] = \frac{1}{2n} \left[(\mathbf{w} - \mathbf{w}^*)^\mathbf{T} \mathbf{X}^\mathbf{T} \mathbf{X} (\mathbf{w} - \mathbf{w}^*) + \mathbb{E}_{\mathbf{\epsilon}}[\mathbf{\epsilon}^\mathbf{T} \mathbf{\epsilon}]\right].
$$

Since $\mathbb{E}[\mathbf{\epsilon}] = 0$ and $\mathbb{E}[\mathbf{\epsilon}\mathbf{\epsilon}^\mathbf{T}] = \sigma^2 \mathbf{I}$, we have:

$$
\mathbb{E}_{\mathbf{\epsilon}}[L(\mathbf{w})] = \frac{1}{2} \|\mathbf{w} - \mathbf{w}^*\|_{\mathbf{\Phi}}^2 + \frac{\sigma^2}{2}.
$$

Here, the matrix $\mathbf{A}$ is $\mathbf{\Phi}$ and the scalar $b$ is $\frac{\sigma^2}{2}$.

### (3)

Let

$$
P=X(X^TX)^{-1}X^T.
$$

Then $X\hat w=PY$, so, using $Y=Xw^*+\epsilon$ and $PXw^*=Xw^*$,

$$
L(\hat w)=\frac1{2n}\|(I-P)\epsilon\|^2,\qquad
L(w^*)=\frac1{2n}\|\epsilon\|^2.
$$

Since $P$ is an orthogonal projection of rank $d$,

$$
\mathbb E[L(\hat w)]-\mathbb E[L(w^*)]
=\frac{\sigma^2}{2n}\{\operatorname{tr}(I-P)-n\}
=-\frac{\sigma^2d}{2n}.
$$

Thus one may take

$$
\boxed{B=-(X^TX)^{-1}X^TX=-I_d}.
$$

### (4)

When $\mathbf{\Phi}$ is not a regular matrix, it is singular and cannot be inverted. This usually happens when the features are linearly dependent, leading to multicollinearity. This makes the computation of $\mathbf{\hat{w}}$ unstable or impossible.

A common remedy is to add a regularization term to the loss function, which is known as **Ridge Regression**. The modified loss function becomes:

$$
L(\mathbf{w}) = \frac{1}{2n} \|\mathbf{Y} - \mathbf{Xw}\|_2^2 + \frac{\lambda}{2} \|\mathbf{w}\|_2^2,
$$

where $\lambda > 0$ is a regularization parameter. The solution then becomes:

$$
\mathbf{\hat{w}} = (\mathbf{\Phi} + \lambda \mathbf{I})^{-1} \left( \frac{1}{n} \mathbf{X}^\mathbf{T} \mathbf{Y} \right).
$$

## **Knowledge**

机器学习 线性回归 最小二乘法 岭回归

### 解题技巧和信息

在回归问题中，当自变量之间存在共线性问题时，使用岭回归可以增加模型的稳定性并避免参数过大。理解最小二乘法的优化问题如何转化为矩阵求解问题是非常重要的。此外，加入正则化项可以有效地解决过拟合问题。

### 重点词汇

- **trace** (迹) - 矩阵对角线元素之和
- **regular matrix** (正规矩阵) - 具有满秩的矩阵，即矩阵的行列式非零
- **regularization** (正则化) - 添加到损失函数的额外项，以约束模型复杂度并提高泛化能力

### 参考资料

1. **The Elements of Statistical Learning**, Trevor Hastie, Robert Tibshirani, and Jerome Friedman, Chap. 3
2. **Pattern Recognition and Machine Learning**, Christopher Bishop, Chap. 4
