---
sidebar_label: "2019年8月実施 午前 数理B"
tags:
  - TITech
  - Probability-Statistics.Probability-Basics.Markov-and-Chebyshev-Inequalities
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Binomial-Distribution
---
# 東京工業大学 工学院 経営工学系 2019年8月実施 午前 数理B


## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

> **题面缺失边界：** 当前 Description 与全部本地 Git 历史版本均为空。Kai 的第 [1] 问和第 [2] 问第 (2) 小问也完全空白，因此这两部分的题意、条件和作答要求无法恢复；以下不作猜测。

1. **第 [1] 问：** 无可恢复内容。
2. **第 [2] 问：**

   1. 已知对任意非负随机变量 $X$ 和 $b>0$ 有 Markov 不等式

      $$
      P(X\geq b)\leq\frac{E(X)}b.
      $$

      1. 对随机变量 $Z$ 和 $c>0$，取

         $$
         X=(Z-E(Z))^2,\qquad b=c,
         $$

         证明

         $$
         P\!\left((Z-E(Z))^2\geq c\right)
         \leq\frac{V(Z)}c.
         $$

      2. 使用上一结果证明 Chebyshev 不等式：对 $a>0$，

         $$
         P(|X-E(X)|\geq a)
         \leq\frac{V(X)}{a^2}.
         $$

   2. **第 (2) 小问：** Kai 无内容，无法恢复。
   3. 设

      $$
      X\sim\operatorname{Bin}\left(n,\frac12\right).
      $$

      1. 求 $E(X)$ 与 $V(X)$。
      2. 利用前面的 Chebyshev 不等式证明

         $$
         P\left(X\geq\frac{3n}{4}\right)
         \leq\frac2n.
         $$

#### 考点

- Markov 与 Chebyshev 不等式：把中心化随机变量的平方代入 Markov 不等式，推导方差控制的尾概率上界。
- 二项分布的矩：对成功概率 $1/2$ 的二项变量计算期望、方差，并利用分布关于 $n/2$ 的对称性处理单侧尾概率。
- 缺失题面边界：Kai 完全空白的第 [1] 问及第 [2](2) 问无法依据允许材料确定，故不列虚构考点。

## **Kai**
### \[1\]

### \[2\]
#### (1)
##### (a)
$(Z-E(Z))^2$ は非負の値をとる確率変数であるから、
与えられた不等式において、
$X=(Z-E(Z))^2, b=c$ とおくと、

$$
\begin{aligned}
P \left( (Z-E(Z))^2 \geq c \right)
&\leq \frac{E \left( (Z-E(Z))^2 \right)}{c}
\\
&= \frac{V(Z)}{c}
\end{aligned}
$$

を得る。

#### (b)
(a) で示した不等式を使って、次のように示せる：

$$
\begin{aligned}
P \left( | X-E(X) | \geq a \right)
&=
P \left( ( X-E(X) )^2 \geq a^2 \right)
\\
&\leq \frac{V(X)}{a^2}
\end{aligned}
$$

#### (2)

#### (3)
##### (a)

$$
  \begin{aligned}
  E(X) &= \frac{n}{2}
  \\
  V(X) &= \frac{n}{4}
  \end{aligned}
$$

##### (b)

$$
  \begin{aligned}
  P \left( X \geq \frac{3n}{4} \right)
  &=
  P \left( X - \frac{n}{2} \geq \frac{n}{4} \right)
  \\
  &=
  \frac{1}{2} P \left( \left| X - \frac{n}{2} \right|
  \geq \frac{n}{4} \right)
  \\
  &\leq
  \frac{1}{2} \frac{\frac{n}{4}}{\left( \frac{n}{4} \right)^2} 
  \ \ \ \ \ \ \ \ 
  ( \because (1)(b) )
  \\
  &=
  \frac{2}{n}
  \end{aligned}
$$
