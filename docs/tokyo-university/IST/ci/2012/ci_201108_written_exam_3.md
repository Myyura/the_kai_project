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

[Official examination, archived Japanese PDF](https://web.archive.org/web/20151118065550id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2011-8-exam.pdf).
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


## **Kai**

The three joint angles in Figure 1 are relative, counterclockwise angles. Assume $l_1,l_2,l_3>0$. Write $\operatorname{wrap}(\alpha)$ for the unique representative of $\alpha$ modulo $2\pi$ in $(-\pi,\pi]$; in particular $-\pi$ is represented by $\pi$.

### (1) Position of $W$

The absolute directions of the first and second links are $\theta_1$ and $\theta_1+\theta_2$, respectively. Therefore

$$
\boxed{w_x=l_1\cos\theta_1+l_2\cos(\theta_1+\theta_2),\qquad
w_y=l_1\sin\theta_1+l_2\sin(\theta_1+\theta_2).}
$$

### (2) Two-argument arctangent

For $(x,y)\ne(0,0)$, define

$$
\boxed{\operatorname{atan}(y,x)=
\begin{cases}
\tan^{-1}(y/x),&x>0,\\
\tan^{-1}(y/x)+\pi,&x<0,\ y\ge0,\\
\tan^{-1}(y/x)-\pi,&x<0,\ y<0,\\
\pi/2,&x=0,\ y>0,\\
-\pi/2,&x=0,\ y<0.
\end{cases}}
$$

In particular the negative $X$ axis has angle $\pi$, and no division by zero is used on the $Y$ axis. The function is undefined at the origin.

### (3) Inverse kinematics of the first two links

Let $r^2=w_x^2+w_y^2$. By taking the squared norm in (1),

$$
r^2=l_1^2+l_2^2+2l_1l_2\cos\theta_2.
$$

A solution exists exactly when

$$
|l_1-l_2|\le r\le l_1+l_2.
$$

For a reachable point with $r>0$, compute

$$
c=\frac{r^2-l_1^2-l_2^2}{2l_1l_2},\qquad
s=\pm\sqrt{1-c^2}.
$$

For each sign, set

$$
\boxed{\begin{aligned}
\theta_2&=\operatorname{atan}(s,c),\\
\theta_1&=\operatorname{wrap}\!\left[
\operatorname{atan}(w_y,w_x)-\operatorname{atan}(l_2s,l_1+l_2c)
\right].
\end{aligned}}
$$

These follow from $w_x+iw_y=e^{i\theta_1}(l_1+l_2e^{i\theta_2})$. Normally the two signs give the two elbow configurations. At $c=1$ or $c=-1$, the branches coincide modulo $2\pi$, so retain just one distinct solution; use $\theta_2=\pi$ when $c=-1$.

The excluded exceptional case $r=0$ is reachable only when $l_1=l_2$. Then $\theta_2=\pi$ and **every** $\theta_1\in(-\pi,\pi]$ is a solution. One must handle this separately instead of calling $\operatorname{atan}(0,0)$. Unreachable targets yield no solution. In floating-point implementation, clamp $c$ to $[-1,1]$ only for a small roundoff error after the reachability check, not for a genuinely unreachable target.

### (4) Hand pose

Let $\alpha=\theta_1+\theta_2+\theta_3$. The final link points along the hand's orientation, so

$$
\boxed{\begin{aligned}
h_x&=l_1\cos\theta_1+l_2\cos(\theta_1+\theta_2)+l_3\cos\alpha,\\
h_y&=l_1\sin\theta_1+l_2\sin(\theta_1+\theta_2)+l_3\sin\alpha,\\
h_\theta&=\operatorname{wrap}(\alpha).
\end{aligned}}
$$

### (5) Inverse kinematics of the full hand pose

First subtract the final link, whose absolute orientation is specified:

$$
w_x=h_x-l_3\cos h_\theta,\qquad
w_y=h_y-l_3\sin h_\theta.
$$

Apply all reachability, branch and degenerate-case rules from (3) to obtain $(\theta_1,\theta_2)$. For each resulting pair choose

$$
\boxed{\theta_3=\operatorname{wrap}(h_\theta-\theta_1-\theta_2).}
$$

With no further mechanical joint limits stated, this gives every solution in the required principal-angle intervals. When $l_1=l_2$ and $W=O$, there is a one-parameter family: arbitrary $\theta_1$, $\theta_2=\pi$, and $\theta_3$ as above. If the wrist point is unreachable, the requested pose is unreachable even when the hand position alone might be reachable with another orientation.

### (6) Collision-free joint trajectory

Work in configuration space $q=(\theta_1,\theta_2,\theta_3)$, with periodic angular coordinates. For each configuration compute all link segments and the two-finger geometry from forward kinematics. A configuration is forbidden if **any** link or part of the hand intersects $R$, or if self-collision or an actual joint limit occurs. Include a clearance margin for the arm's finite thickness and uncertainty. Checking only the hand position would allow an intermediate link to strike $R$.

Choose a grasp pose at $Q$ with an appropriate approach orientation and finger opening. Solve (5) to obtain all possible goal configurations; choose an accessible branch, not merely the one closest in end-effector position. Model contact with $Q$ separately: it is allowed at the intended grasp surfaces during the final approach, while unintended contact earlier in the motion remains forbidden.

Construct a collision-free configuration-space path from the given initial configuration at $P$ to one of these goals, for example using a discretized search, a probabilistic roadmap or an RRT. Test the entire interpolating segment for each proposed edge, with continuous collision checking or conservative subdivision; collision-free endpoints alone do not suffice. Then shorten or smooth the path only while preserving clearance, and time-parameterize it to satisfy velocity and acceleration limits. Use continuous, unwrapped angle values during motion so that crossing the $\pi/-\pi$ representation boundary does not introduce a spurious $2\pi$ jump. Follow the path, approach $Q$, and close the fingers. A failed finite-resolution or finite-sample search is not itself proof that no feasible path exists.
