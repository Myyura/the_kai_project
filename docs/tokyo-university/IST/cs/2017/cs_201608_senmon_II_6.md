---
sidebar_label: 2016年8月実施 専門科目II 問題6
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
  - Mathematics.Linear-Algebra.Matrix-Rank
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2016年8月実施 専門科目II 問題6

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
On generation and activation of protein $Y$ we consider the following three models. In what follows we designate the name of protein and its concentration by the same symbol.

In the first model, protein $Y$ is produced at a constant speed $\beta$ and its degradation rate $\alpha$ is also constant (here $\alpha,\beta$ are nonnegative real values). That is, we describe the change of the concentration of protein $Y$ by

$$
\frac{dY}{dt}=\beta-\alpha Y.
$$

Answer the following questions.

(1) Find the steady-state concentration of protein $Y$.

(2) We set the concentration of protein $Y$ at time $t=0$ to 0. Under this setting, express the concentration of protein $Y$ as a function over time $t$ (here $t\ge0$).

In the second model we suppose that $m$ types of transcription factors control the concentration of protein $Y$. Let $X_1,\ldots,X_m$ be the concentrations of $m$ transcription factors. We then describe the change of the concentration of protein $Y$ by

$$
\frac{dY}{dt}=\prod_{j=1}^{m}X_j^{\gamma_j}-\alpha Y,
$$

where $\alpha,\gamma_1,\ldots,\gamma_m$ are unknown parameters.

Answer the following questions.

(3) Consider a steady state. Express the value of $\log Y$ in terms of $X_1,\ldots,X_m$ and $\alpha,\gamma_1,\ldots,\gamma_m$.

(4) Consider the following experiment: we measure the steady-state concentration of $Y$ for fixed values of $X_1,\ldots,X_m$. Using different values of $X_1,\ldots,X_m$, we repeat this experiment $n$ times. Let $(Y_i,X_{i,1},\ldots,X_{i,m})$ be the $i$-th experimental data (where $i=1,\ldots,n$). Give an experimental condition for this series of experiments to uniquely determine the parameters $\alpha,\gamma_1,\ldots,\gamma_m$.

As the third model we consider the following. Proteins $X_1$ and $X_2$ are activated by phosphorylation; and activated $X_1$ and $X_2$ phosphorylate protein $Y$. We describe this model by

$$
\frac{dY_p}{dt}=3X_{p,1}Y_0+2X_{p,2}Y_0-Y_p,
$$

where: $X_{p,1}$ and $X_{p,2}$ are the concentrations of phosphorylated $X_1$ and phosphorylated $X_2$, respectively; and $Y_0$ and $Y_p$ are the concentrations of non-phosphorylated $Y$ and phosphorylated $Y$, respectively. Here we assume that $X_{p,1}$ and $X_{p,2}$ are constant over time, and that $Y_0+Y_p=C$ ($C$ is a constant).

Answer the following question.

(5) Find a condition on $X_{p,1}$ and $X_{p,2}$ so that, in a steady state, $Y_p/C$ is greater than 0.5.

### 题目描述

考虑蛋白质 $Y$ 的生成与活化模型。以下用同一符号表示蛋白质名称及其浓度。

第一模型为

$$
\frac{dY}{dt}=\beta-\alpha Y,
$$

其中生成速率 $\beta$、降解率 $\alpha$ 为非负常数。

（1）求 $Y$ 的稳态浓度。

（2）设 $Y(0)=0$，求 $t\ge0$ 时的 $Y(t)$。

第二模型中，$m$ 种转录因子的浓度为 $X_1,\ldots,X_m$，并有

$$
\frac{dY}{dt}=\prod_{j=1}^{m}X_j^{\gamma_j}-\alpha Y,
$$

其中 $\alpha,\gamma_1,\ldots,\gamma_m$ 未知。

（3）在稳态下，用 $X_1,\ldots,X_m,\alpha,\gamma_1,\ldots,\gamma_m$ 表示 $\log Y$。

（4）每次实验固定 $X_1,\ldots,X_m$，测量 $Y$ 的稳态浓度；采用不同的 $X_1,\ldots,X_m$ 值重复 $n$ 次实验，第 $i$ 次观测为 $(Y_i,X_{i,1},\ldots,X_{i,m})$，其中 $i=1,\ldots,n$。给出能唯一确定所有参数的实验条件。

第三模型中，$X_1,X_2$ 经磷酸化而活化，活化后的 $X_1,X_2$ 使蛋白质 $Y$ 磷酸化：

$$
\frac{dY_p}{dt}=3X_{p,1}Y_0+2X_{p,2}Y_0-Y_p,
$$

其中 $X_{p,1},X_{p,2}$ 分别为磷酸化的 $X_1,X_2$ 的浓度，$Y_0,Y_p$ 分别为未磷酸化和已磷酸化的 $Y$ 的浓度。$X_{p,1},X_{p,2}$ 不随时间变化，且 $Y_0+Y_p=C$，其中 $C$ 为常量。

（5）求稳态下 $Y_p/C>0.5$ 时 $X_{p,1},X_{p,2}$ 应满足的条件。

## **Kai**
### (1)
令导数为 $0$。当 $\alpha>0$ 时，

$$
\boxed{Y_{\rm ss}=\frac\beta\alpha}.
$$

若 $\alpha=0,\beta>0$，则无有限稳态；若 $\alpha=\beta=0$，则任意非负常数浓度均为稳态。

### (2)
解一阶线性方程并代入 $Y(0)=0$，得

$$
\boxed{Y(t)=\frac\beta\alpha\left(1-e^{-\alpha t}\right)}\qquad(\alpha>0).
$$

若 $\alpha=0$，则 $Y(t)=\beta t$。

### (3)
稳态满足

$$
Y=\frac1\alpha\prod_{j=1}^{m}X_j^{\gamma_j}.
$$

在各 $X_j>0$、$\alpha>0$ 时取对数：

$$
\boxed{\log Y=-\log\alpha+\sum_{j=1}^{m}\gamma_j\log X_j}.
$$

### (4)
令

$$
\boldsymbol\theta=(-\log\alpha,\gamma_1,\ldots,\gamma_m)^{\mathsf T},
$$

则实验给出线性方程

$$
\log Y_i=(1,\log X_{i,1},\ldots,\log X_{i,m})\boldsymbol\theta.
$$

因此须有 $n\ge m+1$，所有浓度均为正，并且设计矩阵

$$
M=\begin{pmatrix}
1&\log X_{1,1}&\cdots&\log X_{1,m}\\
\vdots&\vdots&&\vdots\\
1&\log X_{n,1}&\cdots&\log X_{n,m}
\end{pmatrix}
$$

满足 $\operatorname{rank}M=m+1$。这正是唯一确定 $\boldsymbol\theta$，进而唯一确定 $\alpha,\gamma_1,\ldots,\gamma_m$ 的充要条件。

### (5)
设总浓度 $C>0$，使比例 $Y_p/C$ 有定义。令 $k=3X_{p,1}+2X_{p,2}$。稳态时

$$
0=k(C-Y_p)-Y_p,
$$

所以

$$
\frac{Y_p}{C}=\frac{k}{k+1}.
$$

于是

$$
\boxed{\frac{Y_p}{C}>\frac12\iff 3X_{p,1}+2X_{p,2}>1}.
$$
