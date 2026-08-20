---
sidebar_label: 2023年8月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Data-Science-Artificial-Intelligence.Machine-Learning
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2023年8月実施 筆記試験 第1問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**
In the following, when a sample $X = (x_1, x_2, x_3, ..., x_N)$ consisting of $N$ observations is obtained for a stochastic process, we calculate the parameters of the original stochastic information source by using maximum likelihood estimation. Maximum likelihood estimation is a type of parameter estimation method and is described below.

> Let $f(x; \theta)$ be the density function of the distribution in accordance with the parameter $\theta$. The likelihood function $L(X|\theta)$ when obtaining a sample $X$ is given by $\prod_{n=1}^{N} f(x_n; \theta)$. Here, $\theta$ that maximizes $L(X|\theta)$ is called a maximum likelihood estimator.

Answer the following questions.

(1) As an example, consider the coin toss. Let $\theta$ be the probability of a coin coming up faces. We obtained the observation that when this coin is tossed $N$ times, faces come up $r$ times. Obtain the likelihood function in this case based on the above definition.

(2) Estimate the probability $\theta$ of a coin coming up faces by using maximum likelihood estimation. First, consider the logarithmic value of the likelihood function (hereafter referred to as the *log-likelihood function* ), and then find $\theta$ that maximizes the log-likelihood function by differentiation.

A normal distribution with parameters, the mean $\mu$ and the variance $\sigma^2$, is described as $\mathcal{N}(\mu, \sigma^2)$, and its probability density function is given by

$$
f(x; \mu, \sigma^2) = \frac{1}{\sqrt{2\pi}\sigma} e^{-(x-\mu)^2/(2\sigma^2)}.
$$

Consider the case of observing data generated from multiple normal distributions. This is called the *Gaussian Mixture Model (GMM)*. The data generation process of the GMM is described as follows.
1. Assume a distribution that selects the number $k \ (k = 1, ..., K)$ with probability $\pi_k$ (this is called a categorical distribution C). Also, assume $K$ normal distributions $\mathcal{N}_1(\mu_1, \sigma_1^2), ..., \mathcal{N}_K(\mu_K, \sigma_K^2)$, each of which corresponds to each number.
2. For each element $(n = 1, ..., N)$ of sample $X$;
    2-I: generate number $z_n$ in accordance with the categorical distribution C mentioned above,
    2-II: generate $x_n$ in accordance with the normal distribution $\mathcal{N}_{z_n}(\mu_{z_n}, \sigma_{z_n}^2)$ corresponding to the generated number $z_n$.
3. The generated sequence of $N$ observation values $(x_1, x_2, x_3, ..., x_N)$ is a sample. From this sample, we obtain the GMM parameters $\Theta = \{ \mu_k, \sigma_k, \pi_k \}_{k=1, ..., K}$ by maximum likelihood estimation.

First, consider the case of $K = 1$ (data generation from a single normal distribution). When we obtain a sample $X = (x_1, x_2, x_3, ..., x_N)$ consisting of $N$ observations generated from this normal distribution, we want to estimate the parameters (mean $\mu$ and variance $\sigma^2$) by maximum likelihood estimation. Answer the following questions.

(3) Find the log-likelihood function for this case.

(4) Find the value that maximizes the log-likelihood function with respect to the mean $\mu$ (i.e., find the maximum likelihood estimator of the mean $\mu$). Similarly, find the value that maximizes the log-likelihood function with respect to the variance $\sigma^2$ (i.e., find the maximum likelihood estimator of the variance $\sigma^2$).

Next, consider the case of $K \ge 2$. Answer the following questions.

(5) We would like to describe the log-likelihood function in this case as a function of the parameters $\Theta$ and $Z = (z_1, z_2, ..., z_N)$. First, describe the probability $p(Z|\Theta)$ that $Z$ is generated using $\pi_k$. Next, given $Z$, describe the generation probability $p(X|Z, \Theta)$ of $X$. Finally, describe the log-likelihood function using the probabilities $p(Z|\Theta)$ and $p(X|Z, \Theta)$ obtained above.

We want to maximize the log-likelihood function obtained in Question (5) above. However, since this log-likelihood function contains a sum operation $\Sigma$ in the logarithmic function, it is difficult to find $\Theta$ that makes the derivative zero. Therefore, the following "Algorithm A" is used to iteratively maximize (note that here we only focus on local maximization and do not seek global maximization). In Algorithm A, for the objective function $D(\Theta)$ to be maximized, using the auxiliary function $G(\Theta, \theta)$ and the auxiliary variable $\theta$ where $D(\Theta) = \max_{\theta} G(\Theta, \theta)$, the operations [step 1] $\theta \leftarrow \text{argmax}_{\theta'} G(\Theta, \theta')$ and [step 2] $\Theta \leftarrow \text{argmax}_{\Theta'} G(\Theta', \theta)$ are iteratively repeated to calculate the local optimum of $\Theta$. Answer the following questions.

(6) Prove that, when using above Algorithm A, $\Theta$ that is updated by repeating step 1 and step 2 always raises or stops the original objective function $D(\Theta)$.

(7) We use Jensen's inequality to obtain the auxiliary function of the log-likelihood function obtained in Question (5) above. Jensen's inequality for logarithmic functions can be written as $\log (\Sigma_i \lambda_i y_i) \ge \Sigma_i \lambda_i \log (y_i)$ (where $y_i$ is a positive variable, $\lambda_i$ is any weight that satisfies $\Sigma_i \lambda_i = 1$ and $\lambda_i \ge 0$). Prove this inequality.

(8) Using Jensen's inequality, design an auxiliary function for the log-likelihood function obtained in Question (5). Let $\lambda_i$ be the auxiliary variable here. You can derive the auxiliary function by first dividing the individual normal distributions in the sum operation $\Sigma$ by $\lambda_i$ and multiplying them by $\lambda_i$ in front of that.

(9) Execute Algorithm A for the auxiliary function obtained in Question (8) above. First, find $\lambda_i$ that maximizes the auxiliary function as [step 1]. Next, find the parameter $\Theta$ that maximizes the auxiliary function (where the auxiliary variables are fixed) as [step 2].

### 题目描述

从某随机过程得到 $N$ 个观测组成的样本 $X=(x_1,\ldots,x_N)$，用最大似然估计原随机源参数。若参数为 $\theta$ 的分布密度为 $f(x;\theta)$，样本似然为

$$
L(X\mid\theta)=\prod_{n=1}^Nf(x_n;\theta),
$$

使其最大的 $\theta$ 称最大似然估计量。

1. 以抛硬币为例，令正面概率为 $\theta$，抛 $N$ 次观察到 $r$ 次正面。按上述定义写出似然函数。
2. 先取似然的自然对数得到对数似然，再求导找最大值，用最大似然估计 $\theta$。

均值 $\mu$、方差 $\sigma^2$ 的正态分布记为 $\mathcal N(\mu,\sigma^2)$，密度

$$
f(x;\mu,\sigma^2)=\frac1{\sqrt{2\pi}\sigma}
e^{-(x-\mu)^2/(2\sigma^2)}.
$$

高斯混合模型（GMM）的生成过程为：先按类别分布 $C$ 以概率 $\pi_k$ 选 $k\in\{1,\ldots,K\}$，每个 $k$ 对应正态分布 $\mathcal N_k(\mu_k,\sigma_k^2)$；对每个样本位置 $n$，先生成类别 $z_n$，再由对应正态分布生成 $x_n$。由观测 $X$ 最大似然估计

$$
\Theta=\{\mu_k,\sigma_k,\pi_k\}_{k=1}^K.
$$

先取 $K=1$，即单一正态分布。

3. 写出样本 $X$ 的对数似然函数。
4. 分别对 $\mu$ 与 $\sigma^2$ 最大化对数似然，求二者的最大似然估计量。

再取 $K\ge2$。

5. 要把对数似然写成参数 $\Theta$ 与 $Z=(z_1,\ldots,z_N)$ 的函数。先用 $\pi_k$ 写 $p(Z\mid\Theta)$，再在给定 $Z$ 时写 $p(X\mid Z,\Theta)$，最后用这两个概率写对数似然。

由于目标对数内部含求和，直接令关于 $\Theta$ 的导数为零较困难，采用算法 A 求局部最大值。对要最大化的 $D(\Theta)$，取辅助函数 $G(\Theta,\theta)$ 和辅助变量 $\theta$，满足

$$
D(\Theta)=\max_\theta G(\Theta,\theta).
$$

反复执行：

$$
\text{步骤1： }\theta\leftarrow\arg\max_{\theta'}G(\Theta,\theta'),\qquad
\text{步骤2： }\Theta\leftarrow\arg\max_{\Theta'}G(\Theta',\theta).
$$

6. 证明算法 A 每轮更新后，原目标 $D(\Theta)$ 只会上升或保持不变。
7. 对数函数的 Jensen 不等式为

   $$
   \log\left(\sum_i\lambda_i y_i\right)
   \ge\sum_i\lambda_i\log y_i,
   $$

   其中 $y_i>0$、$\lambda_i\ge0$、$\sum_i\lambda_i=1$。证明该不等式。
8. 用 Jensen 不等式为第 5 问对数似然构造辅助函数，以 $\lambda_i$ 为辅助变量。可先把求和中的各正态密度除以 $\lambda_i$，再在前面乘回 $\lambda_i$。
9. 对第 8 问辅助函数执行算法 A：步骤 1 求使辅助函数最大的 $\lambda_i$；步骤 2 在辅助变量固定时求使辅助函数最大的 $\Theta$。

## **Kai**
本题考察爆算expectation maximization for Gaussian mixture model (EM for GMM) 的数学推导。注意点在于 (8) 分配的辅助变量是 $\lambda_{nk}$ 而不是 $\lambda_k$ 否则无法做。

本题涉及的EM for GMM可以在Berkeley CS 188里发现。

### (1)

$$
L(X|\theta)=\theta^r(1-\theta)^{N-r}.
$$

### (2)

$$
\ell(\theta)=r\log\theta+(N-r)\log(1-\theta),
\qquad
\ell'(\theta)=\frac r\theta-\frac{N-r}{1-\theta}.
$$

Thus, including the boundary cases $r=0,N$,

$$
\hat\theta_{\text{MLE}}=\frac rN.
$$



### (3)

$$
L(X|\Theta)=\prod_{n=1}^N f(x_n;\mu,\sigma^2)=\prod_{n=1}^N \frac1{\sigma\sqrt{2\pi}}e^{-(x_n-\mu)^2/(2\sigma^2)},
\\
\log L(X|\Theta)
=N\log\frac{1}{\sigma\sqrt{2\pi}}-\sum_{n=1}^N {(x_n-\mu)^2\over 2\sigma^2}.
$$

### (4)

$$
\begin{cases}
{\partial \log L(X|\Theta)\over \partial \mu}=0\implies \hat\mu_{\text{MLE}}=\frac1N\sum_{n}x_n\\
{\partial \log L(X|\Theta)\over \partial \sigma^2}=0\implies \hat{\sigma^2}_{\text{MLE}}=\frac1N\sum_n(x_n-\mu)^2=\frac1N\sum_n (x_n-\hat\mu_{\text{MLE}})^2.
\end{cases}
$$

Note we see $\sigma^2$ as a single variable here.
The variance formula is an attained MLE for $\sigma^2>0$ when the sample variance is positive. If all $x_n$ are equal, the likelihood is unbounded as $\sigma^2\downarrow0$ and no finite maximizer exists.

### (5)

$$
\begin{aligned}
p(Z|\Theta)=\prod_n \pi_{z_n};\\p(X|Z,\Theta)=\prod_n \frac1{\sigma_{z_n}\sqrt{2\pi}}e^{-(x_n-\mu_{z_n})^2/2\sigma_{z_n}^2}.\\
\log L(X|\Theta)=\log \sum_Zp(Z|\Theta)p(X|Z,\Theta).
\end{aligned}
$$

### (6)
At step 1, let the parameters before be $(\Theta_0,\theta_0)$. Then given $\theta_1\gets \arg\max_{\theta'}G(\Theta_0,\theta')$, 

$$
D(\Theta_0)=G(\Theta_0,\theta_1)\ge G(\Theta_0,\theta_0).
$$

At step 2, given $\Theta_1\gets \arg\max_{\Theta'}G(\Theta',\theta_1)$,

$$
G(\Theta_1,\theta_1)\ge D(\Theta_0)=G(\Theta_0,\theta_1)\ge G(\Theta_0,\theta_0).
$$

In the next iteration, by $\theta_2\gets \arg\max_{\theta'}G(\Theta_1,\theta')$,

$$
D(\Theta_1)=G(\Theta_1,\theta_2)\ge G(\Theta_1,\theta_1)\ge D(\Theta_0)=G(\Theta_0,\theta_1),
$$

so after every $\Theta$ update the objective $D$ raises or stays unchanged.

### (7)
Since the function $\log(\cdot)$ is concave, for $0<x_1<x_2<x_3$,

$$
{\log x_2-\log x_1\over x_2-x_1}\ge {\log x_3-\log x_1\over x_3-x_1}.
$$

Let $x_1=x$, $x_2=\lambda x+(1-\lambda)y$, $x_3=y$, $x<y$, $\lambda\in(0,1)$, then

$$
\begin{aligned}
&{\log(\lambda x+(1-\lambda)y)-\log x\over \lambda x+(1-\lambda)y-x}\ge {\log y-\log x\over y-x}
\\
&\implies{\log(\lambda x+(1-\lambda)y)-\log x\over (1-\lambda)(y-x)}\ge {\log y-\log x\over y-x}
\\
&\implies{\log(\lambda x+(1-\lambda)y)-\log x}\ge (1-\lambda)(\log y-\log x)
\\
&\implies \log (\lambda x+(1-\lambda)y)\ge \lambda\log x+(1-\lambda)\log y.
\end{aligned}
$$

Suppose for cases when there are $n-1$ variables $y_1,\dots,y_{n-1}$, Jensen's Inequality holds:

$$
\forall \lambda_1',\dots,\lambda_{n-1}':\sum_{i=1}^{n-1}\lambda_{i}'=1,
$$

let $x=\frac{\sum_{i=1}^{n-1}\lambda_i y_i}{\sum_{i=1}^{n-1}\lambda_i}$, $y=y_n$, where $\forall \lambda_1,\dots,\lambda_n:\sum_{i=1}^n\lambda_i=1$,

$$
\lambda:=\sum_{i=1}^{n-1}\lambda_i,\quad \log(\sum_{i=1}^n\lambda_iy_i)=\log(\lambda x+(1-\lambda)y)
\ge \lambda\log x+\lambda_n\log y_n
$$

where

$$
\begin{aligned}
\lambda\log x&=\left(\sum_{i=1}^{n-1}\lambda_i\right)\cdot\log(\frac{\sum_{i=1}^{n-1}\lambda_i y_i}{\sum_{i=1}^{n-1}\lambda_i}) \\
&\ge \left(\sum_{i=1}^{n-1}\lambda_i\right)\cdot{\sum_{i=1}^{n-1}\lambda_i\log y_i \over\sum_{i=1}^{n-1}\lambda_i} \\
&=\sum_{i=1}^{n-1}\lambda_i\log y_i
\end{aligned}
$$

by the supposition. So by induction,

$$
\log(\sum_{i=1}^n\lambda_iy_i)\ge\sum_{i=1}^{n-1}\lambda_i\log y_i+ \lambda_n\log y_n=\sum_{i=1}^{n}\lambda_i\log y_i.\quad\square
$$

Zero-weight terms may be omitted, so the same argument covers $\lambda_i=0$.

### (8)

The log likelihood is

$$
\sum_{n}\log(\sum_k\pi_k f(x_n;\mu_k,\sigma_k^2))
\ge \sum_n\sum_k\lambda_{nk}\log({\pi_k f(x_n;\mu_k,\sigma_k^2)\over \lambda_{nk}})
$$

$$
\quad\sum_{k=1}^K\lambda_{nk}=1
$$

by Jensen's Inequality. Here every $n$ has a group of $\lambda_{nk}$ that sums to 1.

Hence the auxiliary function is

$$
A(\Theta,\Lambda):=\sum_n\sum_k\lambda_{nk}\log({\pi_k f(x_n;\mu_k,\sigma_k^2)\over \lambda_{nk}}),\quad \sum_{k=1}^K\lambda_{nk}=1,\forall n,
$$

$$
\Lambda=\{\lambda_{nk}\}
$$

### (9)

[Step 1] Find the optimal $\lambda_{nk}$'s given $\Theta$ fixed.

$$
\begin{aligned}
A(\Theta,\Lambda)&=\sum_n \sum_k\lambda_{nk}\log p(x_n,k;\Theta)-\sum_n\sum_k\lambda_{nk}\log \lambda_{nk}
\\&\propto -\sum_n D(\Lambda_n||Q_n)
\end{aligned}
$$

which is the sum of negative KL divergences of

$$
\begin{aligned}
\Lambda_n&=(\lambda_{n1},\lambda_{n2},\dots,\lambda_{nK}),\\
Q_n &\propto(\pi_1 f(x_n;\mu_1,\sigma_1^2),\dots,\pi_K f(x_n;\mu_K,\sigma_K^2)).
\end{aligned}
$$

To maximize $A$ when we can only change the values of $\Lambda$,

$$
\Lambda_n\gets Q_n
$$

i.e.

$$
\hat\lambda_{nk}={\pi_k f(x_n;\mu_k,\sigma^2_k)\over \sum_{k'}\pi_{k'}f(x_n;\mu_{k'},\sigma_{k'}^2)}.
$$

[Step 2]

Since

$$
\begin{aligned}
A(\Theta,\Lambda)=\sum_n\sum_k\lambda_{nk}\log(\pi_k\cdot{1\over\sigma_{k}\sqrt{2\pi}}\cdot e^{-(x_n-\mu_k)^2/2\sigma_k^2})-\sum_n\sum_k\lambda_{nk}\log\lambda_{nk},
\end{aligned}
$$

we find the zero points of the partial derivatives:

$$
{\partial A\over\partial \mu_k}=0\implies\hat\mu_k={\sum_n\lambda_{nk}x_n\over \sum_n\lambda_{nk}},
$$

$$
\begin{aligned}
{\partial A\over \partial \sigma_k^2}=0&\implies 
{\partial\sum_{n}(-\lambda_{nk}\cdot\frac12\log \sigma_k^2-\lambda_{nk}{(x_n-\mu_k)^2\over 2\sigma_k^2})\over\partial \sigma_k^2}=0
\\
&\implies \sum_n{\lambda_{nk}\over \sigma_k^2}=\sum_n{\lambda_{nk}(x_n-\mu_k)^2\over \sigma_k^4}
\\
&\implies\hat\sigma_k^2={\sum_n\lambda_{nk}(x_n-\mu_k)^2\over \sum_n\lambda_{nk}}
\end{aligned}
$$

and for $\pi_k$ we should use **constrained optimization** where the problem becomes

$$
\max A(\pi_k,\dots)\quad\text{s.t.}\sum_{k'=1}^K\pi_{k'}=1.
$$

We use a Lagrange multiplier:

$$
L=A+\beta(\sum_{k'}\pi_{k'}-1),
$$

$$
\begin{aligned}
{\partial L\over\partial \pi_k}=0&\implies \sum_n{\lambda_{nk}\over \pi_k}+\beta=0
\\&\implies \beta\pi_k=-\sum_n\lambda_{nk}
\\&\implies \pi_k=-\frac1\beta\sum_n\lambda_{nk}
\end{aligned}
$$

since $\sum_k \pi_k=1$,

$$
-\frac1\beta\sum_n\sum_k\lambda_{nk}=1\implies -\frac N\beta=1,\beta=-N.
$$

Hence

$$
\hat\pi_k={\sum_n\lambda_{nk}\over N}.
$$
