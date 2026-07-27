---
sidebar_label: "2017年8月実施 専門科目 第1問"
tags:
  - Tokyo-University
  - Probability-Statistics.Descriptive-Statistics-and-Sampling.Mean-Median-and-Quartiles
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Diagnostic-Test-Positive-Predictive-Value
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval-Width-vs-Sample-Size
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Chi-Square-Pivot-for-Normal-Variance
  - Probability-Statistics.Descriptive-Statistics-and-Sampling.Affine-Transformation-of-Sample-Mean
---
# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2017年8月実施 専門科目 第1問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原文的 Description 章节为空，未提供题干、数据、选项或作答要求，因此无法仅依据题面还原各小问的具体内容。

#### 考点

- **均值、中位数与四分位数**：标签表明题目涉及这些描述统计量，但原文未给出用于比较或计算的数据。
- **诊断试验的阳性预测值**：标签表明题目考查由患病率、灵敏度与假阳性率等量求阳性预测值，但具体条件未随题干提供。
- **置信区间宽度与样本量**：标签表明题目涉及样本量变化对置信区间宽度的影响，具体设定缺失。
- **正态总体方差的卡方枢轴量**：标签表明题目涉及利用卡方分布处理正态总体方差，但题干未给出完整要求。
- **仿射变换下的样本均值**：标签表明题目涉及观测值作线性平移或缩放后样本均值的变化，具体变换未在 Description 中给出。

## **Kai**
### (1-1)
オ. 平均値は中央値よりも小さい。

### (1-2)
ウ. 第1四分位数は等しい。

### (1-3)
ア. (a)

### (1-4)
ウ. (c)

### (1-5)
オ. 5/6

### (1-6)
ウ. 0.4

### (1-7)
イ. -5

### (1-8)
イ. 12/13

なぜなら、$\frac{\frac{3}{52}}{\frac{3}{48}} = \frac{48}{52} = \frac{12}{13}$

### (1-9)
イ. 25

### (1-10)
ア. (a)

### (1-11)
オ. AとB, BとC

### (1-12)
エ. 0.50

なぜなら、疾患を $D$, 疾患でないことを $\bar{D}$,

検査の陽性を $+$, 陰性を $-$ とすると、

$$
\begin{aligned}
P(D) = \frac{5}{100}
, \ \ 
P(+|D) = \frac{95}{100}
, \ \ 
P(+|\bar{D}) = \frac{5}{100}
\end{aligned}
$$

であるから、ベイズの定理より、

$$
\begin{aligned}
P(D|+)
= \frac{P(D \cap +)}{P(+)}
= \frac{P(+|D) P(D)}{P(+|D) P(D) + P(+|\bar{D}) P(\bar{D})}
= \frac{\frac{95}{100} \frac{5}{100}}
{\frac{95}{100} \frac{5}{100} + \frac{5}{100} \frac{95}{100}}
= \frac{1}{2}
\end{aligned}
$$

### (1-13)
イ. 2

### (1-14)
ア. $\lambda_1 + \lambda_2$

### (1-15)
ウ. 0.20

### (1-16)
ウ. 信頼区間幅がおよそ $1/\sqrt{2}$ 倍になる。

### (1-17)
エ. 自由度n-1のカイ2乗分布

### (1-18)
ア. (a)

### (1-19)
イ. 0.02

### (1-20)
エ. $\bar{x}+3$

なぜなら、 $m=1$ であるから、 $y=x+3$ よって $\bar{y}=\bar{x}+3$
