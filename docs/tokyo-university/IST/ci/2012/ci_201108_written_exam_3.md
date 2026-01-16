---
sidebar_label: '2011年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Control-Theory
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2011年8月実施 筆記試験 第3問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
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