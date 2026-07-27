---
sidebar_label: '2007年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Computer-Science.Graphics.Hough-Transform-for-Line-Detection
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2007年8月実施 筆記試験 第3問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Consider a method to find equations of two straight boundary lines of the two-colored regions like Fig. 1. Suppose the points in Fig. 2 are derived through processing the image of Fig. 1 and answer the following questions.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200708_3_p1.png" width="300" alt=""/>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200708_3_p2.png" width="300" alt=""/>
</figure>

(1) The line $L_0$ that passes the point $(x_0, y_0)$ as in Fig. 3 is described as
$$y=a_0x+b_0.$$
The point $P_0(a_0, b_0)$ of the $a$-$b$ parameter coordinates (Fig. 4) shows the line $L_0$. Explain what the parameters of $a_0, b_0$ mean in the $x$-$y$ coordinates.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200708_3_p3.png" width="600" alt=""/>
</figure>

(2) Rotate the line $L_0$ in Fig. 3 at the point $(x_0, y_0)$. Illustrate the trajectory of the point $P_0$ in the $a$-$b$ coordinates.

(3) Consider the three points $(x_i, y_i), 1 \le i \le 3$ on a line as in Fig. 5. Let $L_i$ be a line that passes $(x_i, y_i), 1 \le i \le 3$. Rotate each line $L_i$ at $(x_i, y_i)$. Illustrate the corresponding trajectories of the point $P_i$ in the $a$-$b$ coordinates.

(4) Considering the methods described above, explain how to get the equations of the two straight boundary lines from the points of Fig. 2.

### 题目描述

考虑如何求出图 1 所示双色区域的两条直线边界方程。假设已通过图像处理得到图 2 中的一组点，回答下列问题；各图沿用原文图片。

1. 如图 3，经过 \((x_0,y_0)\) 的直线 \(L_0\) 写成
   \[
   y=a_0x+b_0.
   \]
   参数空间 \(a\)-\(b\) 中的点 \(P_0(a_0,b_0)\) 表示该直线。说明参数 \(a_0,b_0\) 在原 \(x\)-\(y\) 坐标系中的含义。
2. 让直线 \(L_0\) 绕固定点 \((x_0,y_0)\) 旋转，在 \(a\)-\(b\) 参数空间中画出对应点 \(P_0\) 的轨迹。
3. 如图 5，三点 \((x_i,y_i)\)（\(1\le i\le3\)）位于同一直线上。令 \(L_i\) 为经过 \((x_i,y_i)\) 的直线，并让每条 \(L_i\) 绕各自固定点旋转；在参数空间中画出相应点 \(P_i\) 的轨迹。
4. 根据上述方法，说明如何由图 2 的点求出两条直线边界的方程。

#### 考点

- **用于直线检测的霍夫变换**：把图像中的每个候选边缘点映射为参数空间中的轨迹，以多条轨迹的交点或累加器峰值确定共线点对应的直线参数。
