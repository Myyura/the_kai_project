---
sidebar_label: 2011年8月実施 筆記試験 第3問
tags:
  - Tokyo-University
  - Electrical-Electronic.Control-Theory.Robot-Arm-Kinematics
  - Electrical-Electronic.Control-Theory.Inverse-Kinematics
  - Electrical-Electronic.Control-Theory.Collision-Free-Trajectory-Planning
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2011年8月実施 筆記試験 第3問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
As shown in Figure 1, there is a robot arm which has rotational joints at three points $O$, $E$ and $W$, and a two-fingered hand at the end $H$ on an $X$-$Y$ two-dimensional plane. The position of the hand $H$ is $(h_x, h_y)$ and the orientation of the hand $H$ is $h_\theta$, the joint angles are $\theta_1, \theta_2$ and $\theta_3$, and the lengths of the links are $\mathrm{OE}=l_1, \mathrm{EW}=l_2$ and $\mathrm{WH}=l_3$. Answer the following questions:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201108_3_p1.png" width="500" alt=""/>
</figure>


(1) Write equations for the coordinates $(w_x, w_y)$ of the joint $W$ in terms of the joint angles $\theta_1$ and $\theta_2$.

(2) As shown in Figure 2, $\theta (-\pi<\theta\le\pi)$ is defined as the angle from the axis $X$ to the line $\mathrm{OP}$, where the point $P$ has the coordinates $(x, y)$. Describe the definition of the function $\mathrm{atan}(y, x)$ that calculates $\theta$ from $(x, y)$ (where $(x, y)\neq(0, 0)$) using $\tan^{-1}(a) (-\frac{\pi}{2}\le\tan^{-1}(a)\le\frac{\pi}{2})$.

(3) Describe the procedure which provides the joint angle $\theta_1 (-\pi<\theta_1\le\pi)$ and $\theta_2 (-\pi<\theta_2\le\pi)$ from the coordinates $(w_x, w_y)$ of the joint $W$ using $\mathrm{atan}(y, x)$. The procedure should take account of all the constraints on possible values of the joint angles $\theta_1$ and $\theta_2$.

(4) Write equations for the position $(h_x, h_y)$ and the orientation $h_\theta$ of the hand $H$ in terms of the joint angles $\theta_1, \theta_2$ and $\theta_3$.

(5) Describe the procedure which provides the joint angles $\theta_1 (-\pi<\theta_1\le\pi), \theta_2 (-\pi<\theta_2\le\pi)$ and $\theta_3 (-\pi<\theta_3\le\pi)$ from the position $(h_x, h_y)$ and the orientation $h_\theta (-\pi<h_\theta\le\pi)$ of the hand $H$.

(6) As shown in Figure 3, the hand is located at the point $P$ and two objects are located at $Q$ and $R$. Explain a method to generate the trajectory of the joint angles of the robot arm to grasp the object $Q$ without colliding with the object $R$.

### 题目描述

如图 1，在二维 $X$-$Y$ 平面内有一条机械臂，在 $O,E,W$ 三点设转动关节，末端 $H$ 装有双指手爪。手爪位置为 $(h_x,h_y)$，朝向为 $h_\theta$；关节角为 $\theta_1,\theta_2,\theta_3$；连杆长度为

$$
\overline{OE}=l_1,\qquad \overline{EW}=l_2,\qquad \overline{WH}=l_3.
$$

1. 用 $\theta_1,\theta_2$ 写出关节 $W$ 的坐标 $(w_x,w_y)$。
2. 如图 2，对点 $P(x,y)\ne(0,0)$，定义 $\theta$（$-\pi<\theta\le\pi$）为从 $X$ 轴到直线 $OP$ 的角。仅使用取值范围为

   $$
   -\frac\pi2\le\tan^{-1}(a)\le\frac\pi2
   $$

   的反正切函数，分情况定义由 $(x,y)$ 计算 $\theta$ 的函数 $\operatorname{atan}(y,x)$。
3. 使用 $\operatorname{atan}(y,x)$，说明如何由 $W$ 的坐标求 $\theta_1,\theta_2$，二者均须满足 $-\pi<\theta_i\le\pi$，并完整考虑关节角所有可能取值约束。
4. 用 $\theta_1,\theta_2,\theta_3$ 写出手爪 $H$ 的位置 $(h_x,h_y)$ 与朝向 $h_\theta$。
5. 说明如何由给定的 $(h_x,h_y)$ 和 $-\pi<h_\theta\le\pi$ 求三关节角 $\theta_1,\theta_2,\theta_3$，每个角均限制在 $(-\pi,\pi]$。
6. 如图 3，手爪起始位于 $P$，目标物体位于 $Q$，障碍物位于 $R$。说明如何生成机械臂的关节角轨迹，使其不与 $R$ 碰撞并最终抓取 $Q$。
