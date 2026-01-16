---
sidebar_label: '2009年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
  - Graphics
  - Projection-And-Reconstruction
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2009年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Answer the following questions.

(1) As Figure 1 shows, an orthogonal coordinate frame $\Sigma_C$ of a camera with the lens axis $CZ$ and the projection plane $S$ is placed at the point $C$. The plane $S$ is orthogonal to the lens axis $CZ$ and has the distance $f$ from $C$. The point $Q$ is projected to the point $P$ on the plane $S$ with the coordinates $\mathbf{P}_C=(P_X,P_Y,f)^t$ in $\Sigma_C$. The coordinates of three orientation vectors $CX,CY,CZ$ are described as $\mathbf{X}_\mathbf{W}=(X_X,X_Y,X_Z)^t$, $\mathbf{Y}_\mathbf{W}=(Y_X,Y_Y,Y_Z)^t$ and $\mathbf{Z}_\mathbf{W}=(Z_X,Z_Y,Z_Z)^t$, and the position vector of $C$ is $\mathbf{C}_\mathbf{W}=(C_X,C_Y,C_Z)^t$ in the coordinate frame $\Sigma_W$. The superscript $t$ indicates transpose.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200908_2_p1.png" width="600" alt=""/>
</figure>

Assume the distance from $C$ to $Q$ is $d$, show the vector $\mathbf{Q}_C$ from the point $C$ to the point $Q$ with $\mathbf{P}_C$ and $d$. When the vector $\mathbf{Q}_\mathbf{W}$ is the position vector of $Q$ and the rotation matrix of $\Sigma_C$ is $R_C$ in $\Sigma_W$, we have $\mathbf{Q}_\mathbf{W}=R_C\mathbf{Q}_C+\mathbf{C}_\mathbf{W}$. Show the elements of the rotation matrix $R_C$.

(2) When we observe the point $Q$ from the camera placed at a point $A$, the projection point is $\mathbf{P}_A=(a_X,a_Y,f)^t$ in the camera coordinate frame $\Sigma_A$. Then, we translate the camera with the distance $\ell$ along the axis $X$ to a point $B$ and rotate it around the axis $Y$ of the translated coordinate frame with the angle $\alpha$. The rotated camera coordinate frame is $\Sigma_B$. The projection point becomes $\mathbf{P}_B=(b_X,b_Y,f)^t$ in $\Sigma_B$. Show the method to get the distance $d_A$ from $A$ to $Q$ and the distance $d_B$ from $B$ to $Q$, when $\mathbf{P}_A=\mathbf{P}_B$ is obtained. Assume there is no error in the translation and rotation, and the $XZ$ planes of $\Sigma_A$ and $\Sigma_B$ are aligned in the same plane.

(3) Two cameras are placed at the points $M$ and $N$, respectively. Let the position vectors of $M$ and $N$ be $\mathbf{M}_\mathbf{W}$ and $\mathbf{N}_\mathbf{W}$ and the rotation matrices be $R_M$ and $R_N$. The projection points of $Q$ on these two cameras become $\mathbf{P}_M$ and $\mathbf{P}_N$. As the position vectors $\mathbf{Q}_\mathbf{M}$ and $\mathbf{Q}_\mathbf{N}$ of the point $Q$ are the same in the coordinate frame $\Sigma_W$. Denote the condition which the projection points $\mathbf{P}_M$ and $\mathbf{P}_N$ should satisfy.

(4) Assume the projection points are described in an array and the condition in (3) is not satisfied. Let the evaluation function be $J=|(R_M\mathbf{Q}_M+\mathbf{M}_\mathbf{W})-(R_N\mathbf{Q}_N+\mathbf{N}_\mathbf{W})|^2$, and consider minimizing $J$ to get $\mathbf{Q}_\mathbf{W}$. Let $d_M$ and $d_N$ be the distances from $M$ and $N$ to $Q$, respectively, when $J$ is minimized. Denote $d_M$ and $d_N$. Then explain the method to get $\mathbf{Q}_\mathbf{W}$ in $\Sigma_W$ with $d_M$, $d_N$.

(5) Explain the best arrangement to minimize errors when we measure a three dimensional position by two cameras such as (3).


