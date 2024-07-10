---
comments: false
title: 京都大学 情報学研究科 知能情報学専攻 2021年8月実施 専門科目 S-2
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2021年8月実施 専門科目 S-2

## **Author**
[Isidore](https://github.com/heacsing)

## **Description**
<figure style="text-align:center;">
  <img src="https://s2.loli.net/2024/07/04/B6yqQlURz3r578p.png" width="640"/>
</figure>


## **Kai**
### 設問1

#### (1)

According to the rule of Power analysis, we have the Statistical Power: 

$$
\begin{aligned}
    1-\beta &= 1 - Pr[\textrm{accept } H_0|H_0 \textrm{  is false}] \\
    &= 1-Pr[\frac{\bar{X}-\mu_0}{\sigma/\sqrt{n}} \leq Z_{\alpha}] \\
    &= 1-Pr[\frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \leq Z_{\alpha} - \frac{\mu-\mu_0}{\sigma/\sqrt{n}}] \\
    &= Pr[\frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \geq Z_{\alpha} - \frac{\mu-\mu_0}{\sigma/\sqrt{n}}]
\end{aligned}
$$

Insert the values and we immediately have
So $Z_{\alpha} - \frac{\mu-\mu_0}{\sigma/\sqrt{n}}$ is the asked $u$. Insert the value and we  have

$$
u = Z_{\alpha} - \frac{\mu-\mu_0}{\sigma/\sqrt{n}} = 1.645 - \frac{1.2}{4/\sqrt{16}} = 0.445
$$

#### (2)

By **(1)**, we have

$$
\begin{aligned}
    1-\beta &= Pr[\frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \geq Z_{\alpha} - \frac{\mu-\mu_0}{\sigma/\sqrt{n}}]
\end{aligned}
$$

To make sure the power larger than $95\%$, we have

$$
Z_{\alpha} - \frac{\mu-\mu_0}{\sigma/\sqrt{n}} \leq Z_{0.95} = -Z_{0.05} = -1.645
$$

Insert the values and we immediately have

$$
\sqrt{n} \geq \frac{Z_{\alpha} + Z_{0.05}}{\mu-\mu_0}\sigma \approx 10.967 \\
n \geq 10.967^2 = 120.27
$$

So, the minimum value of $n$ is $121$

### 設問2
#### (1)

$$
Pr = \textrm{C}^0_8(p)^0(1-p)^8+\textrm{C}^1_8(p)^1(1-p)^7 = \frac{9}{256}
$$

#### (2)

$$
Pr = \textrm{C}^0_{10000}(p)^0(1-p)^{10000}
$$

The approximation PMF is $Pr[X=r] = (\frac{5}{2})^r\frac{e^{-\frac{5}{2}}}{r!}$. So the answer is

$$
Pr[X=0] = e^{-\frac{5}{2}}
$$

#### (3)

Let the B's defective rate be denoted as $p_0$. We design a test where the null hypothesis $H_0$ is $p_0 = p$ and the alternative hypothesis $H_1$ is $p_0 \neq p$.

The statistic $Z = \frac{\bar{p} - p}{\sqrt{p(1-p)/n}}$ follow the standard normal distribution. By using the significance level $\alpha = 0.05$, the rejection region is 

$$
Z \geq Z_{\frac{\alpha}{2}} \textrm{   or   } Z \leq -Z_{\frac{\alpha}{2}}
$$

Insert the values and we immediately have

$$
Z = 2 > Z_{0.025} = 1.96
$$

So we reject $H_0$ and accept $H_1$ that the defect rate of B is not as the same as A

### 設問3
#### (1)

$$
\begin{align}
    &E[X^2] = Var[X] + E^2[X] = 10 \nonumber \\
    &E[Y^2] = Var[Y] + E^2[Y] = 17 \nonumber \\
    &Cov(X,Y) = E[XY] - E[X]E[Y] = 0.3 \nonumber
\end{align}
$$

#### (2)

$$
Cov(U, V) =E[(5X-3)(-3Y+2)] - E[5X-3]E[-3Y+2] = -4.5
$$

$$
\rho(U,V) = \frac{Cov(U,V)}{\sqrt{Var[U]Var[V]}} = -0.3
$$