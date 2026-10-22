---
sidebar_label: "2025年8月実施 英語 問題I"
tags:
  - Chuo-University
  - Mathematics.Linear-Algebra.Rotation-Matrix
---

# 中央大学 理工学研究科 情報工学専攻 2025年8月実施 一般入試（夏季）英語 問題I

## **Author**

祭音Myyura (Based on [中央大学の公式解答例](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf) refined with GPT 6 Astra)

## **Description**

次の英文を読み、英文の内容に従って問いに答えよ。

Let's detail the derivation of the 2D vector $(x_1,y_1)$ obtained by rotating an initial 2D vector $(x_0,y_0)$ counter-clockwise around the origin by an angle of $\theta$ radians.

[Part 1]

First, any 2D vector $(x_0,y_0)$ can be expressed as the sum of a vector along the x-axis, $(x_0,0)$, and a vector along the y-axis, $(0,y_0)$, i.e., $(x_0,y_0)=(x_0,0)+(0,y_0)$. Leveraging this property, the rotated vector $(x_1,y_1)$ can be found by adding the vector obtained from rotating $(x_0,0)$ by an angle $\theta$ and the vector obtained from rotating $(0,y_0)$ by an angle $\theta$. Next, let's consider rotating the vector $(x_0,0)$, which lies on the x-axis, by an angle $\theta$. When a point at a distance of $x_0$ from the origin rotates by an angle $\theta$, its new x-coordinate becomes $x_0\cos\theta$ and its new y-coordinate becomes $x_0\sin\theta$. Therefore, the vector obtained by rotating $(x_0,0)$ by an angle $\theta$ is $(x_0\cos\theta,x_0\sin\theta)$.

Similarly, let's consider rotating the vector $(0,y_0)$, which lies on the y-axis, by an angle $\theta$. When a point at a distance of $y_0$ from the origin rotates by an angle $\theta$, its new x-coordinate becomes $-y_0\sin\theta$ and its new y-coordinate becomes $y_0\cos\theta$. This is because applying the standard rotation matrix to a vector with an x-component of 0 and a y-component of $y_0$ yields these results. Thus, the vector obtained by rotating $(0,y_0)$ by an angle $\theta$ is $(-y_0\sin\theta,y_0\cos\theta)$.

By summing the results from the previous steps, we can derive $(x_1,y_1)$:

$$
(x_1,y_1)=(x_0\cos\theta,x_0\sin\theta)+(-y_0\sin\theta,y_0\cos\theta).
$$

Summing the respective components, we get:

$$
x_1=x_0\cos\theta-y_0\sin\theta,\quad\text{and}\quad y_1=x_0\sin\theta+y_0\cos\theta.
$$

Therefore, the 2D vector $(x_1,y_1)$ obtained by rotating an initial 2D vector $(x_0,y_0)$ counter-clockwise around the origin by an angle of $\theta$ radians is given by:

$$
\begin{aligned}
(x_1,y_1)&=(x_0\cos\theta-y_0\sin\theta,\ x_0\sin\theta+y_0\cos\theta),\\
\text{or}\quad \begin{pmatrix}x_1\\y_1\end{pmatrix}
&=A\begin{pmatrix}x_0\\y_0\end{pmatrix},\quad\text{where}\quad
A=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}.
\end{aligned}
$$

[Part 2]

In a 2D plane, any point $(x,y)$ can be uniquely represented as a complex number $z=x+iy$, where $i$ is the imaginary unit ($i^2=-1$). Similarly, our initial vector $(x_0,y_0)$ can be written as the complex number $z_0=x_0+iy_0$. The rotated vector $(x_1,y_1)$ can be represented as $z_1=x_1+iy_1$.

The key to understanding rotation in the complex plane lies in Euler's formula, which states that for any real number $\theta$:

$$
e^{i\theta}=\cos\theta+i\sin\theta.
$$

This complex exponential, $e^{i\theta}$, acts as a rotation operator. When you multiply a complex number by $e^{i\theta}$, you effectively rotate that complex number (and thus the corresponding vector) counter-clockwise around the origin by an angle $\theta$.

To rotate the initial complex number $z_0=x_0+iy_0$ by an angle $\theta$, we simply multiply it by $e^{i\theta}$:

$$
z_1=z_0e^{i\theta}.
$$

Now, let's substitute the complex number representations and Euler's formula:

$$
z_1=(x_0+iy_0)(\cos\theta+i\sin\theta).
$$

Next, we expand this product:

$$
\begin{aligned}
z_1&=x_0\cos\theta+x_0(i\sin\theta)+iy_0\cos\theta+iy_0i\sin\theta\\
&=x_0\cos\theta+ix_0\sin\theta+iy_0\cos\theta+i^2y_0\sin\theta.
\end{aligned}
$$

Since $i^2=-1$, the equation becomes:

$$
z_1=x_0\cos\theta+ix_0\sin\theta+iy_0\cos\theta-y_0\sin\theta.
$$

Now, we group the real and imaginary parts:

$$
z_1=(x_0\cos\theta-y_0\sin\theta)+i(x_0\sin\theta+y_0\cos\theta).
$$

Recall that $z_1=x_1+iy_1$. By comparing the real and imaginary parts of the equation above, we can directly find $x_1$ and $y_1$:

$$
x_1=x_0\cos\theta-y_0\sin\theta,\quad\text{and}\quad y_1=x_0\sin\theta+y_0\cos\theta.
$$

These are precisely the same rotation formulas we derived earlier using vector decomposition in the Cartesian coordinate system. This demonstrates how representing 2D vectors as complex numbers and using multiplication by $e^{i\theta}$ provides an elegant and concise way to perform rotations.

1. Part 1 及び Part 2 の説明によく適合する図をそれぞれ1枚描け。図には説明で用いている軸名、座標、角度を必ず記すこと。
2. 説明に基づいて行列 $A$ の逆行列を導出する説明文を、日本語、英語の2通りで作成せよ。但し、説明文の内容は日本語、英語で同一にすること。

#### 题目描述

阅读以下英文，并根据文章内容回答问题。

下面详细推导：将初始二维向量 $(x_0,y_0)$ 绕原点逆时针旋转 $\theta$ 弧度后所得二维向量 $(x_1,y_1)$。

[Part 1]

首先，任意二维向量 $(x_0,y_0)$ 都可表示成沿 $x$ 轴的向量 $(x_0,0)$ 与沿 $y$ 轴的向量 $(0,y_0)$ 的和，即 $(x_0,y_0)=(x_0,0)+(0,y_0)$。利用这一性质，可分别将 $(x_0,0)$ 与 $(0,y_0)$ 旋转 $\theta$，再把所得向量相加，得到 $(x_1,y_1)$。先考虑把位于 $x$ 轴上的向量 $(x_0,0)$ 旋转 $\theta$。距原点 $x_0$ 的点旋转 $\theta$ 后，新的 $x$ 坐标为 $x_0\cos\theta$，新的 $y$ 坐标为 $x_0\sin\theta$。因此，旋转后的向量为 $(x_0\cos\theta,x_0\sin\theta)$。

同理，把位于 $y$ 轴上的向量 $(0,y_0)$ 旋转 $\theta$。距原点 $y_0$ 的点旋转后，新的 $x$ 坐标为 $-y_0\sin\theta$，新的 $y$ 坐标为 $y_0\cos\theta$。这是因为将标准旋转矩阵作用于 $x$ 分量为 $0$、$y$ 分量为 $y_0$ 的向量，就会得到上述结果。因此，旋转后的向量为 $(-y_0\sin\theta,y_0\cos\theta)$。

将前两步的结果相加，得到

$$
(x_1,y_1)=(x_0\cos\theta,x_0\sin\theta)+(-y_0\sin\theta,y_0\cos\theta).
$$

分别相加各分量，有

$$
x_1=x_0\cos\theta-y_0\sin\theta,\qquad y_1=x_0\sin\theta+y_0\cos\theta.
$$

所以，将 $(x_0,y_0)$ 绕原点逆时针旋转 $\theta$ 弧度所得向量为

$$
\begin{aligned}
(x_1,y_1)&=(x_0\cos\theta-y_0\sin\theta,\ x_0\sin\theta+y_0\cos\theta),\\
\text{或}\quad\begin{pmatrix}x_1\\y_1\end{pmatrix}
&=A\begin{pmatrix}x_0\\y_0\end{pmatrix},\qquad
A=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}.
\end{aligned}
$$

[Part 2]

二维平面上的任意点 $(x,y)$ 都能唯一表示为复数 $z=x+iy$，其中 $i$ 是虚数单位，$i^2=-1$。同理，初始向量可写成 $z_0=x_0+iy_0$，旋转后的向量可写成 $z_1=x_1+iy_1$。

理解复平面中旋转的关键是欧拉公式：对任意实数 $\theta$，有

$$
e^{i\theta}=\cos\theta+i\sin\theta.
$$

复指数 $e^{i\theta}$ 起旋转算子的作用。复数乘以 $e^{i\theta}$，就相当于把该复数及其对应向量绕原点逆时针旋转 $\theta$。因此，只需令

$$
z_1=z_0e^{i\theta}.
$$

代入复数表示及欧拉公式，有

$$
z_1=(x_0+iy_0)(\cos\theta+i\sin\theta).
$$

展开得

$$
\begin{aligned}
z_1&=x_0\cos\theta+x_0(i\sin\theta)+iy_0\cos\theta+iy_0i\sin\theta\\
&=x_0\cos\theta+ix_0\sin\theta+iy_0\cos\theta+i^2y_0\sin\theta.
\end{aligned}
$$

因为 $i^2=-1$，所以

$$
z_1=x_0\cos\theta+ix_0\sin\theta+iy_0\cos\theta-y_0\sin\theta.
$$

分别合并实部和虚部，得到

$$
z_1=(x_0\cos\theta-y_0\sin\theta)+i(x_0\sin\theta+y_0\cos\theta).
$$

利用 $z_1=x_1+iy_1$，比较实部和虚部可直接得到

$$
x_1=x_0\cos\theta-y_0\sin\theta,\qquad y_1=x_0\sin\theta+y_0\cos\theta.
$$

这与之前在笛卡尔坐标系中通过向量分解所得的旋转公式完全一致，表明用复数表示二维向量，再乘以 $e^{i\theta}$，可以简洁地实现旋转。

1. 分别为 Part 1 和 Part 2 各绘制一幅符合说明的图。必须标出文中使用的坐标轴名称、坐标和角度。
2. 根据文章，分别用日语和英语写出推导矩阵 $A$ 的逆矩阵的说明，两种语言的内容必须一致。

## **Kai**

### 1. 回転を表す図

**Part 1：直交座標での分解。** $P=(x_0\cos\theta,x_0\sin\theta)$、$Q=(-y_0\sin\theta,y_0\cos\theta)$ とおくと、回転後の位置ベクトルは $\overrightarrow{OP}+\overrightarrow{OQ}$ である。下図の破線の平行四辺形がこの加法を表す。図は $x_0,y_0>0$ の例である。

![直交座標におけるベクトルの分解と回転](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/chuo-university/science_and_engineering/information_engineering/2026/ie_202508_english_I_rotation_cartesian.svg)

**Part 2：複素平面での回転。** $z_0=x_0+iy_0$ に絶対値 $1$、偏角 $\theta$ の $e^{i\theta}$ を掛けると、長さを変えずに偏角だけが $\theta$ 増える。

![複素平面における回転](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/chuo-university/science_and_engineering/information_engineering/2026/ie_202508_english_I_rotation_complex.svg)

（作図：祭音Myyura）

### 2. 逆行列の導出

**日本語。** 行列 $A$ は原点の周りの反時計回りの角度 $\theta$ の回転を表す。その逆変換は角度 $-\theta$ の回転である。本文の回転行列で $\theta$ を $-\theta$ に置き換え、$\cos(-\theta)=\cos\theta$、$\sin(-\theta)=-\sin\theta$ を用いると、

$$
A^{-1}=\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}
$$

となる。実際、この行列と $A$ の積は $\cos^2\theta+\sin^2\theta=1$ により単位行列となるので、逆行列である。

**English.** Matrix $A$ represents a counter-clockwise rotation through angle $\theta$ about the origin. Its inverse transformation is a rotation through angle $-\theta$. Replacing $\theta$ with $-\theta$ in the rotation matrix in the passage and using $\cos(-\theta)=\cos\theta$ and $\sin(-\theta)=-\sin\theta$, we obtain

$$
A^{-1}=\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}.
$$

Indeed, multiplying this matrix by $A$ gives the identity matrix because $\cos^2\theta+\sin^2\theta=1$, confirming that it is the inverse.

## **Reference**

- [中央大学公式過去問題：2026年度 情報工学専攻、英語・夏季 問題I（冊子p.1／PDF第2頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-01.pdf#page=2)
- [中央大学公式「解答または解答例・出題の意図」（冊子pp.2–3／PDF第3–4頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf#page=3)
