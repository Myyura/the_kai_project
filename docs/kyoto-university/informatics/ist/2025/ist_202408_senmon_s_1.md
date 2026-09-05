---
sidebar_label: 2024年8月実施 専門科目 S-1
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Binomial-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Simple-Linear-Regression
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Least-Squares-Method
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Prediction-Interval
---
# 京都大学 情報学研究科 知能情報学専攻 2024年8月実施 専門科目 S-1

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2024_ist.pdf)

### Q.1
Suppose the probability density function $f(x)$ of a random variable $X$ is as follows.

$$ 
f(x) = \begin{cases} 0 & (x < 0) \\ cx(3-x) & (0 \leq x < 3) \\ 0 & (3 \leq x) \end{cases} 
$$

$c$ is a positive constant ($c > 0$).

(1) Compute the value of the constant $c$.

(2) Compute the mean and variance of the random variable $X$.

### Q.2
Let $X$ and $Y$ be independent random variables following the binomial distributions $\mathrm{B}(m, p)$ and $\mathrm{B}(n, p)$, respectively. Derive the distribution of $Z = X + Y$.

### Q.3
Consider normal populations A and B with a common population variance. One sample of size 18 is selected from the normal population A, denoted as $(x_1, x_2, \dots, x_{18})$, and the other one of size 18 from the normal population B, denoted as $(y_1, y_2, \dots, y_{18})$. The statistics derived from the samples are as follows.

$$
 \bar{x} = \frac{1}{18} \sum_{i=1}^{18} x_i \qquad s_x^2 = \frac{1}{17} \sum_{i=1}^{18} (x_i - \bar{x})^2 \\
\bar{y} = \frac{1}{18} \sum_{i=1}^{18} y_i \qquad s_y^2 = \frac{1}{17} \sum_{i=1}^{18} (y_i - \bar{y})^2 \qquad s_{xy} = \frac{1}{17} \sum_{i=1}^{18} (x_i - \bar{x})(y_i - \bar{y}) 
$$

The values 2.110 and 2.032 may be used for the upper 2.5% point of the $t$-distribution with 17 and 34 degrees of freedom, respectively.

(1) Assuming that the samples are paired as $(x_i, y_i)$, $i = 1, 2, \dots, 18$ and randomly selected, compute the 95% confidence interval for the difference between the two population means using necessary statistics among those mentioned above.

(2) Assuming that the samples are unpaired and randomly selected from each population, compute the 95% confidence interval for the difference between the two population means using necessary statistics among those mentioned above.

### Q.4
Consider a linear regression model $Y_i = \alpha + \beta x_i + \epsilon_i \ (i = 1, 2, \dots, 16)$ where the variation in random variables $Y_i \ (i = 1, 2, \dots, 16)$ are explained by the corresponding constants $x_i \ (i = 1, 2, \dots, 16)$ with the regression coefficients of $\alpha$ and $\beta$. Assume that $\epsilon_i \ (i = 1, 2, \dots, 16)$ are independent and follow a normal distribution $\mathrm{N}(0, \sigma^2)$ with mean 0 and variance $\sigma^2$. Let $\hat{\alpha}$ and $\hat{\beta}$ be the least squares estimators of $\alpha$ and $\beta$, respectively.

(1) Compute the standard deviation of $\hat{\beta}$.

(2) Given a new constant $x_{17}$, show the 95% prediction interval of $Y_{17} = \alpha + \beta x_{17} + \epsilon_{17}$ using $\hat{\alpha}, \hat{\beta}, \sigma$, and $x_1, x_2, \dots, x_{17}$ where $\epsilon_{17}$ is independent of $\epsilon_i \ (i = 1, 2, \dots, 16)$ and follows a normal distribution $\mathrm{N}(0, \sigma^2)$. The value 2.145 for the upper 2.5% point of the $t$-distribution with 14 degrees of freedom may be used.

### 题目描述

1. 随机变量 $X$ 的概率密度函数为

   $$
   f(x)=
   \begin{cases}
   0 & (x<0),\\
   cx(3-x) & (0\leq x<3),\\
   0 & (x\geq 3),
   \end{cases}
   $$

   其中 $c>0$。（1）求常数 $c$；（2）求 $X$ 的均值与方差。

2. 设 $X$ 与 $Y$ 相互独立，且分别服从二项分布 $\mathrm{B}(m,p)$ 与 $\mathrm{B}(n,p)$。推导 $Z=X+Y$ 的概率分布。

3. 从方差相同的两个正态总体 A、B 中分别随机抽取容量为 18 的样本 $x_1,\ldots,x_{18}$ 与 $y_1,\ldots,y_{18}$。定义

   $$
   \bar{x}=\frac{1}{18}\sum_{i=1}^{18}x_i,\qquad
   s_x^2=\frac{1}{17}\sum_{i=1}^{18}(x_i-\bar{x})^2,
   $$

   $$
   \bar{y}=\frac{1}{18}\sum_{i=1}^{18}y_i,\qquad
   s_y^2=\frac{1}{17}\sum_{i=1}^{18}(y_i-\bar{y})^2,
   $$

   以及

   $$
   s_{xy}=\frac{1}{17}\sum_{i=1}^{18}(x_i-\bar{x})(y_i-\bar{y}).
   $$

   自由度为 17 和 34 的 $t$ 分布上侧 $2.5\%$ 分位点可分别取 2.110 和 2.032。（1）若两组样本按 $(x_i,y_i)$ 配对且为随机抽样，请使用上述必要统计量求两个总体均值之差的 $95\%$ 置信区间；（2）若两组样本不配对、分别从两个总体随机抽取，请求该均值差的 $95\%$ 置信区间。

4. 考虑线性回归模型

   $$
   Y_i=\alpha+\beta x_i+\epsilon_i\qquad(i=1,2,\ldots,16),
   $$

   其中 $x_i$ 为常数，$\epsilon_i$ 相互独立且服从 $\mathrm{N}(0,\sigma^2)$，$\hat{\alpha}$ 与 $\hat{\beta}$ 分别为 $\alpha$ 与 $\beta$ 的最小二乘估计量。（1）求 $\hat{\beta}$ 的标准差；（2）给定新的常数 $x_{17}$，设

   $$
   Y_{17}=\alpha+\beta x_{17}+\epsilon_{17},
   $$

   其中 $\epsilon_{17}$ 与前 16 个误差项独立且同样服从 $\mathrm{N}(0,\sigma^2)$。使用 $\hat{\alpha},\hat{\beta},\sigma$ 以及 $x_1,\ldots,x_{17}$ 写出 $Y_{17}$ 的 $95\%$ 预测区间。自由度为 14 的 $t$ 分布上侧 $2.5\%$ 分位点可取 2.145。

## **Kai**
### Q.1
#### (1)
Normalization gives

$$
1=c\int_0^3x(3-x)\,dx=\frac92c,
\qquad c=\frac29.
$$

#### (2)

$$
E[X]=\frac29\int_0^3x^2(3-x)\,dx=\frac32,
\qquad
E[X^2]=\frac29\int_0^3x^3(3-x)\,dx=\frac{27}{10}.
$$

Hence $\operatorname{Var}(X)=27/10-9/4=9/20$.

### Q.2
Independence gives the probability-generating function

$$
E[t^{X+Y}]=E[t^X]E[t^Y]
=(1-p+pt)^m(1-p+pt)^n=(1-p+pt)^{m+n}.
$$

Consequently $Z\sim\mathrm B(m+n,p)$, including $p=0,1$.

### Q.3
#### (1)
Let $d_i=x_i-y_i$. Then

$$
\bar d=\bar x-\bar y,\qquad s_d^2=s_x^2+s_y^2-2s_{xy}.
$$

For independent, normally distributed pair differences with positive variance, the Student pivot has $17$ degrees of freedom. The interval is

$$
\boxed{\bar x-\bar y\ \pm\ 2.110\sqrt{\frac{s_x^2+s_y^2-2s_{xy}}{18}}}.
$$

Joint normality of each pair suffices for normality of the differences. Normal marginal distributions alone do not imply this condition; without it the displayed Student interval is an approximation rather than an exact finite-sample interval.

#### (2)
For independent unpaired samples, the pooled estimator is

$$
s_p^2=\frac{17s_x^2+17s_y^2}{34}=\frac{s_x^2+s_y^2}{2}.
$$

The Student pivot has $34$ degrees of freedom, giving

$$
\boxed{\bar x-\bar y\ \pm\ 2.032\sqrt{\frac{s_x^2+s_y^2}{18}}}.
$$

### Q.4
Write $\bar x=\sum_{i=1}^{16}x_i/16$ and $S_{xx}=\sum_{i=1}^{16}(x_i-\bar x)^2>0$.

#### (1)
Since

$$
\hat\beta-\beta=\frac{\sum_i(x_i-\bar x)\epsilon_i}{S_{xx}},
$$

independence yields $\operatorname{Var}(\hat\beta)=\sigma^2/S_{xx}$, so its standard deviation is $\sigma/\sqrt{S_{xx}}$.

#### (2)
The fitted value is $\hat Y_{17}=\hat\alpha+\hat\beta x_{17}$. Using $\operatorname{Cov}(\bar\epsilon,\hat\beta)=0$ and independence of the new error,

$$
\operatorname{Var}(Y_{17}-\hat Y_{17})
=\sigma^2\left(1+\frac1{16}+\frac{(x_{17}-\bar x)^2}{S_{xx}}\right).
$$

With the population standard deviation $\sigma$ specified, the prediction interval is

$$
\boxed{\hat\alpha+\hat\beta x_{17}\ \pm\ 1.960\,\sigma
\sqrt{1+\frac1{16}+\frac{(x_{17}-\bar x)^2}{S_{xx}}}}.
$$

If $\sigma$ is instead estimated from residuals, set

$$
s^2=\frac1{14}\sum_{i=1}^{16}(Y_i-\hat\alpha-\hat\beta x_i)^2.
$$

The independent residual variance estimate gives the Student version

$$
\hat\alpha+\hat\beta x_{17}\ \pm\ 2.145\,s
\sqrt{1+\frac1{16}+\frac{(x_{17}-\bar x)^2}{S_{xx}}}.
$$
