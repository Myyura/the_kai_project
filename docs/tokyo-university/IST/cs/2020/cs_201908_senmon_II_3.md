---
sidebar_label: 2019年8月実施 専門科目II 問題3
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Rotation-Matrix-and-Axis-Angle
  - Mathematics.Abstract-Algebra.Quaternion-Algebra
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目II 問題3

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 题目描述

物体由四个相邻处共面的同样大小的立方体组成，姿态视作从标准姿态绕原点旋转所得。为描述图形，取立方体边长为单位长度。图1的四个立方体中心为

$$
(0,0,0),\ (0,1,0),\ (0,2,0),\ (0,0,1),
$$

图2的中心为

$$
(0,0,0),\ (0,-1,0),\ (0,-2,0),\ (0,0,1).
$$

绘图时沿用图1、图2的视点并标出 $x,y,z$ 轴；角度使用弧度。

欧拉角 $(\theta_x,\theta_y,\theta_z)$ 表示依次绕固定 $x,y,z$ 轴旋转。沿轴从负向正看去，顺时针为正。

（1）画出欧拉角 $(\pi,\pi,0)$ 对应的姿态。

（2）求 $(0,0,0)$ 与 $(\pi,\pi,0)$ 的逐分量算术平均欧拉角，并画出对应姿态。

用 $3\times3$ 矩阵 $R$ 表示旋转，点 $v$ 变为 $Rv$。

（3）求图2对应的旋转矩阵。

（4）求图1、图2的旋转矩阵的逐元素算术平均。画出它作用于图1后得到的形状，并说明。

用单位四元数表示旋转：绕单位向量 $v=(v_x,v_y,v_z)$ 旋转 $\theta$ 对应

$$
q=(v_x\sin(\theta/2),v_y\sin(\theta/2),v_z\sin(\theta/2),\cos(\theta/2)).
$$

从向量起点朝其方向看，顺时针为正。

（5）求图2对应的两个四元数。

（6）求图1、图2对应四元数的球面线性平均，并画出相应姿态。给出两种答案。题中平均定义为

$$
\frac{\sin(\varphi/2)}{\sin\varphi}q_1+
\frac{\sin(\varphi/2)}{\sin\varphi}q_2,
\qquad \varphi=\cos^{-1}(q_1\cdot q_2),\quad0\le\varphi\le\pi;
$$

$\sin\varphi=0$ 时未定义。

## **Kai**

![固定视点下的原图与所求姿态](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/cs_201908_senmon_II_3_rotations.svg)

### (1)

按题设先后次序，

$$
R=R_y(\pi)R_x(\pi)=
\begin{pmatrix}-1&0&0\\0&-1&0\\0&0&1\end{pmatrix}.
$$

故姿态就是图2：三块沿负 $y$ 方向排列，原点上方另有一块。见上图上排中间对应标注 `(1)` 的面板。

### (2)

平均欧拉角为

$$
\boxed{(\pi/2,\pi/2,0).}
$$

对应矩阵为

$$
R_y(\pi/2)R_x(\pi/2)=
\begin{pmatrix}0&1&0\\0&0&-1\\-1&0&0\end{pmatrix}.
$$

所以四个中心为 $(0,0,0),(1,0,0),(2,0,0),(0,-1,0)$：三块沿正 $x$ 方向排列，原点处向负 $y$ 方向伸出一块。

### (3)

图2保持正 $z$ 轴不变，将正 $y$ 轴变成负 $y$ 轴，因此是绕 $z$ 轴旋转 $\pi$：

$$
\boxed{R_2=\begin{pmatrix}-1&0&0\\0&-1&0\\0&0&1\end{pmatrix}.}
$$

### (4)

$$
\boxed{\overline R=\frac{I+R_2}{2}=\begin{pmatrix}0&0&0\\0&0&0\\0&0&1\end{pmatrix}.}
$$

它将 $(x,y,z)$ 映为 $(0,0,z)$，因此物体被压到 $z$ 轴上。以立方体边长为 $1$，完整形状为线段

$$
\{(0,0,z)\mid-\tfrac12\le z\le\tfrac32\}.
$$

该矩阵秩为 $1$，不是旋转矩阵；它没有保持物体形状。

### (5)

取转轴 $(0,0,1)$、角度 $\pi$，以及其整体反号，得

$$
\boxed{q_2=(0,0,1,0),\qquad -q_2=(0,0,-1,0).}
$$

### (6)

固定图1的表示 $q_1=(0,0,0,1)$。对图2的两个表示均有 $\varphi=\pi/2$，故

$$
\boxed{\overline q_+=\frac1{\sqrt2}(0,0,1,1),\qquad
\overline q_-=\frac1{\sqrt2}(0,0,-1,1).}
$$

两者分别表示绕 $z$ 轴旋转 $+\pi/2$ 与 $-\pi/2$：

- $\overline q_+$：中心为 $(0,0,0),(-1,0,0),(-2,0,0),(0,0,1)$。
- $\overline q_-$：中心为 $(0,0,0),(1,0,0),(2,0,0),(0,0,1)$。

图中下排中、右两幅给出这两种姿态。整体同时取负不改变四元数表示的姿态。
