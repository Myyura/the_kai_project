---
sidebar_label: "2013年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2013年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

ベクトル $\vec{a} = (a_1, a_2)$ 及びベクトル $\vec{b} = (b_1, b_2)$ の張る平行四辺形の面積は、以下の行列の行列式の絶対値で表されることを示せ。

$$
\begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix}
$$

### 题目描述

设向量 $\vec a=(a_1,a_2)$、$\vec b=(b_1,b_2)$。证明由这两个向量张成的平行四边形面积等于

$$
\left|
\begin{vmatrix}
a_1&b_1\\
a_2&b_2
\end{vmatrix}
\right|.
$$

## **Kai**

まず $\vec a$ または $\vec b$ が零ベクトルなら，平行四辺形の面積と行列式はともに $0$ なので結論は成り立つ。以下では両方とも零でないとする。

平行四辺形の面積は、 $|\vec{a}| |\vec{b}| \sin \theta$ で表される。ここで $\theta$ は $\vec{a}$ と $\vec{b}$ のなす角である。

$\vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos \theta$ であるから、 $\cos \theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| |\vec{b}|} = \frac{a_1b_1 + a_2b_2}{\sqrt{a_1^2 + a_2^2} \sqrt{b_1^2 + b_2^2}}$ 。

$\sin^2 \theta + \cos^2 \theta = 1$ より、

$\sin^2 \theta = 1 - \cos^2 \theta = 1 - \frac{(a_1b_1 + a_2b_2)^2}{(a_1^2 + a_2^2)(b_1^2 + b_2^2)} = \frac{(a_1^2 + a_2^2)(b_1^2 + b_2^2) - (a_1b_1 + a_2b_2)^2}{(a_1^2 + a_2^2)(b_1^2 + b_2^2)} = \frac{a_1^2b_2^2 + a_2^2b_1^2 - 2a_1b_1a_2b_2}{(a_1^2 + a_2^2)(b_1^2 + b_2^2)} = \frac{(a_1b_2 - a_2b_1)^2}{(a_1^2 + a_2^2)(b_1^2 + b_2^2)}$ 。

したがって、 $\sin \theta = \frac{|a_1b_2 - a_2b_1|}{\sqrt{(a_1^2 + a_2^2)(b_1^2 + b_2^2)}}$ 。

平行四辺形の面積は、 $|\vec{a}| |\vec{b}| \sin \theta = \sqrt{a_1^2 + a_2^2} \sqrt{b_1^2 + b_2^2} \frac{|a_1b_2 - a_2b_1|}{\sqrt{(a_1^2 + a_2^2)(b_1^2 + b_2^2)}} = |a_1b_2 - a_2b_1|$ 。

また、 $\begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix} = a_1b_2 - a_2b_1$ であるから、平行四辺形の面積は $\left| \begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix} \right|$ で表される。
