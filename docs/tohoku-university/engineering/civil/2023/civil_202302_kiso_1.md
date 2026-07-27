---
sidebar_label: "2023年2月実施 基礎科目 [1] 微分積分"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Vector-Calculus.Polar-Coordinate-Differentials
---
# 東北大学 工学研究科 土木工学専攻 2023年2月実施 基礎科目 \[1\] 微分積分

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原文的题目描述缺失，现有解答只能还原前两题。

1. 对 $a>0,b>0$，计算
   $$\lim_{x\to0}\left(\frac{a^x+b^x}{2}\right)^{1/x}.$$
2. 在极坐标变换
   $$x=r\cos\theta,\qquad y=r\sin\theta$$
   下：
   1. 求微分 $dx,dy$；
   2. 化简微分形式 $x\,dy-y\,dx$。
3. 第 3 题题干与解答均缺失。
4. 第 4 题题干与解答均缺失。

#### 考点

- **指数型极限**：用 Taylor 展开或取对数处理 $1^\infty$ 型极限。
- **全微分**：对极坐标变换分别关于 $r,\theta$ 求微分。
- **微分形式与极坐标**：代入并消去交叉项，得到 $x\,dy-y\,dx=r^2d\theta$。

## **Kai**
### 1.

$$
\begin{aligned}
\lim_{x \to 0} \left( \frac{a^x + b^x}{2} \right)^{\frac{1}{x}}
&= \lim_{x \to 0} \left( 1 + \frac{\log (ab)}{2} x + O(x^2) \right)^{\frac{1}{x}}
\\
&= e^{\frac{1}{2} \log (ab)}
\\
&= \sqrt{ab}
\end{aligned}
$$

### 2.
#### (1)

$$
\begin{aligned}
\mathrm{d} x &= \mathrm{d} r \cos \theta - r \mathrm{d} \theta \sin \theta
\\
\mathrm{d} y &= \mathrm{d} r \sin \theta + r \mathrm{d} \theta \cos \theta
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
x \mathrm{d} y - y \mathrm{d} x &= r^2 \mathrm{d} \theta
\end{aligned}
$$

### 3.

### 4.
