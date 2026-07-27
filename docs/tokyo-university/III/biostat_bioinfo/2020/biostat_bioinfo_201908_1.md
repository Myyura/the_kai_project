---
sidebar_label: "2019年8月実施 専門科目 第1問"
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Family-Wise-Error-Rate
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval-Width-vs-Sample-Size
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Weibull-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Odds-Ratio-and-Confidence-Interval
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Receiver-Operating-Characteristic-Curve-Interpretation
---
# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2019年8月実施 専門科目 第1問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原文的 Description 章节为空，未提供题干、数据、分布参数、图形或各小问的作答要求，因此无法仅依据题面还原具体问题。

#### 考点

- **期望与方差**：标签表明题目涉及随机变量期望和方差的计算或性质，但具体随机变量缺失。
- **家族错误率**：标签表明题目涉及多重检验中至少出现一次第一类错误的概率，未给出检验数量或显著性水平等条件。
- **置信区间宽度与样本量**：标签表明题目考查样本量改变对置信区间精度的影响，具体区间设定缺失。
- **威布尔分布**：标签表明题目涉及威布尔分布的概率或参数性质，具体密度与任务未提供。
- **优势比及其置信区间**：标签表明题目涉及由列联表或模型估计优势比并构造置信区间，但相应数据缺失。
- **ROC 曲线解释**：标签表明题目要求解释 ROC 曲线所反映的诊断或分类性能，原文未提供曲线或选项。

## **Kai**
### (1-1)
イ. 61点

### (1-2)
オ. (b), (e)

### (1-3)
エ. 40

なぜなら、

$$
\begin{aligned}
E(Y)
&=
E(2X^2)
=
2 E(X^2)
=
2 \left( V(X) + E(X)^2 \right)
\\
&=
2 \cdot \left( 4^2 + 2^2 \right)
=
40
\end{aligned}
$$

### (1-4)
イ. 0.16

### (1-5)
ウ. $\rho$

### (1-6)
ア. 0.1

### (1-7)
エ. 62.5%

なぜなら、

$$
\begin{aligned}
1 - {}_4 C_2 \left( \frac{1}{2} \right)^4
= \frac{5}{8}
= 0.625
\end{aligned}
$$

### (1-8)
イ. 70

なぜなら、求める対象者数を $n$ とすると、

$$
\begin{aligned}
0.99^n &= 0.5
\\
n \ln 0.99 &= \ln 0.5
\\
n \cdot \left( 0.99 - 1 \right) &\approx - 0.69
\\
n &\approx 69
\end{aligned}
$$

### (1-9)
イ. 1/2倍

### (1-10)
イ. (b), (d)

### (1-11)
オ. 0.0975

なぜなら、$0.05 + 0.05 - 0.05^2 = 0.0975$

### (1-12)
エ. 0.85倍

なぜなら、$\frac{1.65}{1.96} \approx 0.8418$

### (1-13)
オ. (d)

### (1-14)
オ. 535人

なぜなら、$40 \cdot \frac{9}{10} + 4960 \cdot \frac{1}{10} = 532$

### (1-15)
オ. (b), (e)

### (1-16)
イ. 登録期間

### (1-17)
ウ. 40%

### (1-18)
ウ. $f(t) = \lambda \gamma (\lambda t)^{\gamma - 1} \exp[-(\lambda t)^{\gamma}]$

### (1-19)
エ. $\bigg[ \exp \bigg[\ln(\hat{\text{OR}}) - 1.96 \sqrt{(\frac{1}{A_1} + \frac{1}{B_1} + \frac{1}{A_0} + \frac{1}{B_0})} \bigg], \exp \bigg[\ln(\hat{\text{OR}}) + 1.96 \sqrt{(\frac{1}{A_1} + \frac{1}{B_1} + \frac{1}{A_0} + \frac{1}{B_0})} \bigg] \bigg]$

### (1-20)
ア. (a)

なぜなら、感度と特異度がともに1に近いところを通っているから。
