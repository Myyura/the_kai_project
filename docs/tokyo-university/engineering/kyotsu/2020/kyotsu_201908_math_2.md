---
sidebar_label: '数学 第2問'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2020年度 数学 第2問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

[2020年度入試問題 Exam paper 数学](https://github.com/Myyura/the_kai_project_assets/blob/7d274740e9aacde6948ee5ca73a336a00fe76d04/kakomonn/tokyo_university/engineering/Description/%E6%95%B0%E5%AD%A62020.pdf)

### 题目描述

原 Description 仅提供 2020 年数学原卷链接，具体题干缺失。根据本地 Kai，只能确认这是一组含实参数 $\alpha$ 的三阶实对称矩阵问题；Kai 在第三问中明确写出的矩阵为
$$
A=\begin{pmatrix}
1&-2&-1\\
-2&1&1\\
-1&1&\alpha
\end{pmatrix}.
$$
本地解答可确认：

1. 第一问利用“特征值之和等于迹”确定参数，解答所得 $\alpha=5$；但原题给定的特征值和未保存在本地。
2. 第二问利用“特征值之积等于行列式”，并在解答中使用该乘积为 $-16$，所得 $\alpha=6$。
3. 第三问在矩阵范数为 $4$ 的条件下令 $4$ 为最大绝对值特征值，求得 $\alpha=2$，并核对此时特征值为 $-1,1,4$。
4. 第四问第一小问的解答给出特征值 $-1,2,5$ 及一组规范正交特征向量；第二小问确认向量 $\boldsymbol y$ 位于前两个特征向量张成的平面，并求 $\boldsymbol y^TA\boldsymbol y$ 的值域为 $[-1,2]$。原题对该矩阵情形及 $\boldsymbol y$ 的完整约束均缺失，第四问第三小问在 Kai 中也是空白，无法唯一恢复。

## **Kai**
### I.
固有値の和はトレースに等しいので、$\alpha = 5$

### II.
固有値の積は行列式に等しいので、

$$
\begin{aligned}
-16
&= (\alpha + 2 + 2) - (1 + 1 + 4 \alpha)
\\
&= - 3 \alpha + 2
\\
\therefore \ \ 
\alpha &= 6
\end{aligned}
$$

### III.
$||A||=4$ ということは、 $A$ の最大固有値が $4$ ということである。

$A$ が固有値 $4$ を持つという条件は、

$$
\begin{aligned}
0
&= \det \begin{pmatrix}
1-4 & -2 & -1 \\ -2 & 1-4 & 1 \\ -1 & 1 & \alpha-4
\end{pmatrix}
\\
&= 5 \alpha - 10
\\
\therefore \ \ 
\alpha &= 2
\end{aligned}
$$

である。

$\alpha=2$ のとき、 $A$ の固有値は $-1, 1, 4$ であるから、
これが求める条件であることがわかる。

### IV.
#### 1.
固有値は $-1, 2, 5$ であり、
それぞれに対応する規格化された固有ベクトルは、

$$
\begin{aligned}
\boldsymbol{v}_1
= \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}
, \ \ 
\boldsymbol{v}_2
= \frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}
, \ \ 
\boldsymbol{v}_3
= \frac{1}{\sqrt{6}} \begin{pmatrix} -1 \\ 1 \\ 2 \end{pmatrix}
\end{aligned}
$$

である。（ $-1$ 倍の不定性がある。）

#### 2.
与えられたベクトル $\boldsymbol{y}$ は
$\boldsymbol{v}_1, \boldsymbol{v}_2$ が張る平面上にあるので、
$\boldsymbol{y}^T A \boldsymbol{y}$ の値域は
$-1$ 以上 $2$ 以下の実数である。

#### 3.
