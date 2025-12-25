---
sidebar_label: '2023年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2023年8月実施 筆記試験 第1問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
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